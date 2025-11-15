import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/get-current-user';
import { prisma } from '@/lib/prisma';

// GET /api/courses/[id] - Get course details with lessons
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await requireAuth();
    const courseId = params.id;

    // Fetch course with lessons and progress
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
          include: {
            quiz: {
              select: {
                id: true,
                passingScore: true,
              },
            },
          },
        },
        progress: {
          where: { userId },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        {
          error: 'Course not found',
        },
        { status: 404 }
      );
    }

    // Check if user owns this course or if it's public
    if (course.userId !== userId) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          details: 'You do not have access to this course',
        },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      course,
    });
  } catch (error: any) {
    console.error('Get course error:', error);
    return NextResponse.json(
      {
        error: 'Failed to get course',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// DELETE /api/courses/[id] - Delete a course
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await requireAuth();
    const courseId = params.id;

    // Check if course exists and user owns it
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return NextResponse.json(
        {
          error: 'Course not found',
        },
        { status: 404 }
      );
    }

    if (course.userId !== userId) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          details: 'You do not have permission to delete this course',
        },
        { status: 403 }
      );
    }

    // Delete course (cascade will delete lessons, quizzes, etc.)
    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json({
      success: true,
      message: 'Course deleted successfully',
    });
  } catch (error: any) {
    console.error('Delete course error:', error);
    return NextResponse.json(
      {
        error: 'Failed to delete course',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
