import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/get-current-user';
import { prisma } from '@/lib/prisma';

// GET /api/courses - Get all courses for the current user
export async function GET(request: NextRequest) {
  try {
    const userId = await requireAuth();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get('subject');
    const level = searchParams.get('level');

    // Build where clause
    const where: any = { userId };
    if (subject) where.subject = subject;
    if (level) where.level = level;

    // Fetch courses with basic lesson count and progress
    const courses = await prisma.course.findMany({
      where,
      include: {
        _count: {
          select: {
            lessons: true,
          },
        },
        progress: {
          where: { userId },
          select: {
            lessonsCompleted: true,
            totalLessons: true,
            averageScore: true,
            lastAccessed: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      courses,
      count: courses.length,
    });
  } catch (error: any) {
    console.error('Get courses error:', error);
    return NextResponse.json(
      {
        error: 'Failed to get courses',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
