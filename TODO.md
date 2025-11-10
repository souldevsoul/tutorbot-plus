# TODO.md - TutorBot Plus

AI-Powered Tutoring Platform - Complete task breakdown.

**Estimated Time:** 20-28 hours | **Total Tasks:** ~230

---

## PHASE 1: BRANDING (2h)
- [ ] Update package.json to "tutorbot-plus"
- [ ] Update colors: Blue (#3B82F6), Green (#10B981), Amber (#F59E0B)
- [ ] Update metadata: "Your Personal AI Tutor"
- [ ] Replace all "VoiceCraft" → "TutorBot Plus"

## PHASE 2: DATABASE (1-2h)
- [ ] Delete Voice models
- [ ] Add Course, Lesson, Quiz, QuizAttempt, UserProgress models
- [ ] Run `npx prisma generate && npx prisma db push`

## PHASE 3: API ROUTES (4h)
- [ ] `/api/courses/create` - Create personalized course
- [ ] `/api/courses/[id]` - Get course with lessons
- [ ] `/api/lessons/[id]/generate` - AI-generate lesson
- [ ] `/api/lessons/[id]/video` - Generate video lesson
- [ ] `/api/quizzes/[id]/attempt` - Submit/grade quiz
- [ ] `/api/progress/[courseId]` - Get progress stats
- [ ] `/api/tutor/ask` - AI tutor Q&A

## PHASE 4: COMPONENTS (4h)
- [ ] `course-creator.tsx` - Multi-step course creation wizard
- [ ] `lesson-viewer.tsx` - Interactive lesson display
- [ ] `quiz-interface.tsx` - Quiz with timer, scoring
- [ ] `progress-dashboard.tsx` - Charts, statistics
- [ ] `ai-tutor-chat.tsx` - Live AI chat interface
- [ ] `video-lesson-player.tsx` - Video with interactive elements

## PHASE 5: PAGES (3h)
- [ ] Homepage: "Your Personal AI Tutor - Learn Anything"
- [ ] Dashboard: Active courses, progress, upcoming lessons
- [ ] `/dashboard/courses` - Course library
- [ ] `/dashboard/lessons/[id]` - Lesson viewer
- [ ] Pricing: Free (1 course), Student ($19), Premium ($49)

## PHASE 6: IMAGES (2h)
- [ ] Logo: Graduation cap + AI circuit
- [ ] Hero: Students with holographic learning
- [ ] Subject icons (Math, Science, Language, Code, Test Prep)
- [ ] UI mockups (lesson viewer, quiz, progress)

## PHASE 7: TESTING (2h)
- [ ] Test course creation
- [ ] Test lesson generation
- [ ] Test quiz taking and grading
- [ ] Test progress tracking
- [ ] Responsive design check

## PHASE 8: DEPLOYMENT (2h)
- [ ] GitHub repo: `tutorbot-plus`
- [ ] Vercel deployment
- [ ] Environment variables
- [ ] Production testing

---

**Status:** Ready to start
