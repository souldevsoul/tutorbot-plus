import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/get-current-user';
import { deductLessonGenerationCredits } from '@/lib/credits';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// POST /api/lessons/[id]/generate - Generate AI lesson content
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await requireAuth();
    const lessonId = params.id;

    // Parse request body (optional parameters)
    const body = await request.json().catch(() => ({}));
    const { generateQuiz = true, quizQuestions = 5 } = body;

    // Get lesson with course details
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        course: {
          select: {
            id: true,
            userId: true,
            title: true,
            subject: true,
            level: true,
            description: true,
          },
        },
      },
    });

    if (!lesson) {
      return NextResponse.json(
        {
          error: 'Lesson not found',
        },
        { status: 404 }
      );
    }

    // Check if user owns this course
    if (lesson.course.userId !== userId) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          details: 'You do not have access to this lesson',
        },
        { status: 403 }
      );
    }

    // Deduct credits for lesson generation (this will throw if insufficient credits)
    const creditResult = await deductLessonGenerationCredits(userId, {
      lessonId,
      courseId: lesson.courseId,
      subject: lesson.course.subject,
      level: lesson.course.level,
    });

    try {
      // Generate lesson content using OpenAI
      const lessonPrompt = `
You are an expert tutor creating educational content for a ${lesson.course.level} level ${lesson.course.subject} course.

Course: ${lesson.course.title}
${lesson.course.description ? `Course Description: ${lesson.course.description}` : ''}

Lesson Title: ${lesson.title}

Create comprehensive lesson content that includes:
1. Introduction and learning objectives
2. Main content with clear explanations
3. Examples and practical applications
4. Key takeaways and summary

Format the content in well-structured markdown with headings, bullet points, and code blocks where appropriate.
Make it engaging and suitable for a ${lesson.course.level} level student.
Aim for approximately 500-1000 words of content.
`.trim();

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert tutor who creates clear, engaging, and comprehensive educational content. Format your responses in markdown.',
          },
          {
            role: 'user',
            content: lessonPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      const generatedContent = completion.choices[0]?.message?.content || '';

      if (!generatedContent) {
        throw new Error('Failed to generate lesson content');
      }

      // Update lesson with generated content
      const updatedLesson = await prisma.lesson.update({
        where: { id: lessonId },
        data: {
          content: generatedContent,
        },
      });

      // Generate quiz if requested
      let quiz = null;
      if (generateQuiz) {
        const quizPrompt = `
Based on this lesson content, create ${quizQuestions} multiple-choice questions to test understanding.

Lesson: ${lesson.title}
Level: ${lesson.course.level}
Subject: ${lesson.course.subject}

Content:
${generatedContent.substring(0, 1500)}...

Return ONLY valid JSON in this exact format with no additional text:
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Why this is correct"
    }
  ]
}
`.trim();

        const quizCompletion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are an expert at creating educational quiz questions. Return only valid JSON with no additional text or formatting.',
            },
            {
              role: 'user',
              content: quizPrompt,
            },
          ],
          temperature: 0.5,
          max_tokens: 1500,
        });

        const quizContent = quizCompletion.choices[0]?.message?.content || '{}';

        try {
          const quizData = JSON.parse(quizContent);

          // Create or update quiz
          quiz = await prisma.quiz.upsert({
            where: { lessonId },
            create: {
              lessonId,
              questions: quizData.questions || quizData,
              passingScore: 70,
            },
            update: {
              questions: quizData.questions || quizData,
            },
          });
        } catch (parseError) {
          console.error('Failed to parse quiz JSON:', parseError);
          // Continue without quiz if parsing fails
        }
      }

      return NextResponse.json({
        success: true,
        lesson: updatedLesson,
        quiz: quiz || undefined,
        creditsUsed: 10,
        remainingCredits: creditResult.newBalance,
      });
    } catch (aiError: any) {
      console.error('AI generation error:', aiError);

      // Refund credits if AI generation failed
      await prisma.$transaction(async (tx) => {
        await tx.user.update({
          where: { id: userId },
          data: { credits: { increment: 10 } },
        });

        await tx.creditLedger.create({
          data: {
            userId,
            amount: 10,
            type: 'REFUND',
            description: 'Refund for failed lesson generation',
            metadata: {
              lessonId,
              error: aiError.message,
            },
          },
        });
      });

      return NextResponse.json(
        {
          error: 'Failed to generate lesson content',
          details: aiError.message || 'Unknown error',
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Generate lesson error:', error);

    // Handle insufficient credits error
    if (error.message && error.message.includes('Insufficient credits')) {
      return NextResponse.json(
        {
          error: 'Insufficient credits',
          details: error.message,
        },
        { status: 402 } // 402 Payment Required
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to generate lesson',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
