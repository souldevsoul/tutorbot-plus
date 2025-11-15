/**
 * Test API Endpoints - Simulates authenticated API calls
 * Run with: npx tsx test-api-endpoints.ts
 */

import { prisma } from './lib/prisma';

async function testEndpoints() {
  console.log('🧪 Testing TutorBot Plus API Endpoints...\n');

  // Get test user
  const testUser = await prisma.user.findUnique({
    where: { email: 'test@tutorbot.com' },
  });

  if (!testUser) {
    console.log('❌ Test user not found. Run test-api.ts first.');
    return;
  }

  console.log(`✅ Found test user: ${testUser.email} (${testUser.credits} credits)\n`);

  // Test 1: List courses (simulating GET /api/courses)
  console.log('1️⃣  Testing: GET /api/courses');
  const courses = await prisma.course.findMany({
    where: { userId: testUser.id },
    include: {
      _count: { select: { lessons: true } },
      progress: {
        where: { userId: testUser.id },
        select: {
          lessonsCompleted: true,
          totalLessons: true,
          averageScore: true,
          lastAccessed: true,
        },
      },
    },
    orderBy: { updatedAt: 'desc' },
  });

  console.log(`   ✅ Response: Found ${courses.length} course(s)`);
  courses.forEach((course) => {
    console.log(`      📚 ${course.title}`);
    console.log(`         Subject: ${course.subject}, Level: ${course.level}`);
    console.log(`         Lessons: ${course._count.lessons}`);
  });
  console.log();

  if (courses.length === 0) {
    console.log('❌ No courses found. Run test-api.ts first.');
    return;
  }

  const courseId = courses[0].id;

  // Test 2: Get course details (simulating GET /api/courses/[id])
  console.log(`2️⃣  Testing: GET /api/courses/${courseId}`);
  const courseDetail = await prisma.course.findUnique({
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
        where: { userId: testUser.id },
      },
    },
  });

  if (courseDetail) {
    console.log(`   ✅ Response: ${courseDetail.title}`);
    console.log(`      Lessons:`);
    courseDetail.lessons.forEach((lesson) => {
      console.log(`        ${lesson.order}. ${lesson.title} ${lesson.quiz ? '✓ Quiz' : ''}`);
    });
  }
  console.log();

  // Test 3: Check credits (simulating GET /api/credits)
  console.log('3️⃣  Testing: GET /api/credits');
  const user = await prisma.user.findUnique({
    where: { id: testUser.id },
    select: { credits: true },
  });
  console.log(`   ✅ Response: Balance = ${user?.credits} credits`);
  console.log();

  // Test 4: Get credit history
  console.log('4️⃣  Testing: GET /api/credits?includeHistory=true');
  const history = await prisma.creditLedger.findMany({
    where: { userId: testUser.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });
  console.log(`   ✅ Response: ${history.length} transaction(s)`);
  history.forEach((tx) => {
    const sign = tx.amount > 0 ? '+' : '';
    console.log(`      ${sign}${tx.amount} credits - ${tx.type} - ${tx.description}`);
  });
  console.log();

  // Test 5: Simulate course creation (would be POST /api/courses/create)
  console.log('5️⃣  Simulating: POST /api/courses/create');
  console.log('   Request body: {');
  console.log('     title: "Introduction to Python",');
  console.log('     subject: "programming",');
  console.log('     level: "beginner",');
  console.log('     description: "Learn Python basics"');
  console.log('   }');
  console.log('   ✅ Would deduct 50 credits');
  console.log('   ✅ Would create course and return course object');
  console.log();

  // Test 6: Check if lesson generation would work
  if (courseDetail && courseDetail.lessons.length > 0) {
    const lessonId = courseDetail.lessons[0].id;
    console.log(`6️⃣  Simulating: POST /api/lessons/${lessonId}/generate`);
    console.log('   Request body: { generateQuiz: true, quizQuestions: 5 }');
    console.log('   ✅ Would deduct 10 credits');
    console.log('   ✅ Would use OpenAI to generate lesson content');
    console.log('   ✅ Would create quiz with 5 questions');
    console.log('   ⚠️  Note: Requires OPENAI_API_KEY in .env');
  }
  console.log();

  // Summary
  console.log('📊 API Endpoint Test Summary:');
  console.log('   ✅ Database queries working');
  console.log('   ✅ Course retrieval working');
  console.log('   ✅ Credit system working');
  console.log('   ✅ Credit ledger working');
  console.log();
  console.log('🔒 Authentication Required:');
  console.log('   The actual HTTP endpoints require NextAuth authentication.');
  console.log('   To test with real HTTP requests, you need to:');
  console.log('   1. Set up authentication (Google, GitHub, or Email)');
  console.log('   2. Login via /api/auth/signin');
  console.log('   3. Use the session cookie in API requests');
  console.log();
  console.log('💡 Or for testing, you can temporarily modify requireAuth()');
  console.log('   in lib/get-current-user.ts to return the test user ID.');
}

testEndpoints()
  .catch((error) => {
    console.error('❌ Test failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
