import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/get-current-user';
import { deductCourseCreationCredits } from '@/lib/credits';
import { prisma } from '@/lib/prisma';

// POST /api/courses/create - Create a new course
export async function POST(request: NextRequest) {
  try {
    const userId = await requireAuth();

    // Parse request body
    const body = await request.json();
    const { title, subject, level, description } = body;

    // Validate required fields
    if (!title || !subject || !level) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          details: 'title, subject, and level are required',
        },
        { status: 400 }
      );
    }

    // Validate subject
    const validSubjects = ['math', 'science', 'language', 'programming', 'test-prep'];
    if (!validSubjects.includes(subject)) {
      return NextResponse.json(
        {
          error: 'Invalid subject',
          details: `Subject must be one of: ${validSubjects.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Validate level
    const validLevels = ['beginner', 'intermediate', 'advanced'];
    if (!validLevels.includes(level)) {
      return NextResponse.json(
        {
          error: 'Invalid level',
          details: `Level must be one of: ${validLevels.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Deduct credits for course creation (this will throw if insufficient credits)
    const creditResult = await deductCourseCreationCredits(userId, title, {
      subject,
      level,
      description,
    });

    // Create the course
    const course = await prisma.course.create({
      data: {
        userId,
        title,
        subject,
        level,
        description: description || null,
      },
    });

    return NextResponse.json({
      success: true,
      course,
      creditsUsed: 50,
      remainingCredits: creditResult.newBalance,
    });
  } catch (error: any) {
    console.error('Create course error:', error);

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
        error: 'Failed to create course',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
