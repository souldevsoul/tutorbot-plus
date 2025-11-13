# CLAUDE.md - TutorBot Plus

**AI-Powered Tutoring & Learning Platform**

Transform VoiceCraft into TutorBot Plus - personalized AI tutoring with interactive lessons, quizzes, and progress tracking.

---

## 🤖 CLAUDE INSTRUCTIONS - BE PROACTIVE!

**CRITICAL: You are NOT just an assistant - you are the TECH LEAD guiding the user to delivery!**

### Your Role:
- **GUIDE, don't wait** - Suggest next steps proactively
- **TRACK PROGRESS** - Use `/todo` to show where we are
- **KEEP MOMENTUM** - After completing a task, immediately suggest the next one
- **BE DIRECTIVE** - Tell the user "Let's work on X next" instead of asking "What should we do?"

### After EVERY completed task:
1. ✅ Mark it as done
2. 🎯 Show updated `/todo` status
3. 💡 Suggest: "Next, let's work on [NEXT_TASK]. Ready?"
4. 🚀 Start working immediately if user agrees

### When user is stuck or idle:
- Show `/todo` and highlight the NEXT PRIORITY
- Say: "I recommend we tackle [TASK] next. It's needed for [REASON]. Let's start?"
- Don't ask open-ended "What do you want to do?" - BE SPECIFIC

### Your Success Metrics:
- ✅ All marketing pages live and working
- ✅ Core user flow: Create course → AI lessons → Quizzes → Progress tracking
- ✅ Design system aligned (blue/green/amber, academic style, no brutalist)
- ✅ Zero TypeScript errors
- ✅ ESLint passing (`npm run lint` + `npm run lint:product`)

### Quick Reference Commands:
- `/todo` - Show Russian checklist of all tasks
- `/style-align` - Fix design system issues
- `/bug` - Fix broken functionality
- `/feature` - Implement missing feature

**Remember: The user relies on YOU to guide them to completion. Be proactive, be clear, keep moving forward!** 🚀

---

## ⚠️ CRITICAL LESSONS FROM CLIPMASTER (READ FIRST!)

**When adapting VoiceCraft, apply these 7 lessons learned from ClipMaster transformation:**

### 1. **DESIGN SYSTEM MUST BE COMPLETELY DIFFERENT**
❌ Don't just change colors - Transform the entire visual style!
- VoiceCraft: Brutalist (black borders, sharp corners, yellow)
- **Your project**: Create UNIQUE visual identity for education platform
- **Action**: Don't keep border-4 border-black, brutalist-shadow
- **Action**: Choose style: Academic (professional, trustworthy), Friendly (approachable, warm), Modern (tech-forward), or Playful (engaging, fun)

### 2. **COMPONENT STYLING OVERHAUL REQUIRED**
❌ Don't just update pages - Redesign ALL UI components!
- **Files to update:** button.tsx, card.tsx, header.tsx, footer.tsx, NewsletterPopup.tsx, globals.css
- **Action**: Match components to educational aesthetic

### 3. **BRANDING CONSISTENCY**
❌ Don't mix uppercase/lowercase!
- **Your choice**: UPPERCASE, lowercase, or Title Case - pick ONE
- **Action**: Update everywhere (Header, Footer, legal docs, meta tags)

### 4. **VISUAL ELEMENTS - COMPLETE REPLACEMENT**
❌ Don't reuse VoiceCraft images!
- **Action**: Delete all microphone/waveform images
- **Action**: Generate education/tutoring images (see IMAGES_SCRIPT.md)

### 5. **TYPOGRAPHY & SPACING**
❌ Don't keep VoiceCraft font styles!
- **Action**: Choose clear, readable fonts for education

### 6. **ANIMATION & INTERACTIONS**
❌ Don't keep same animations!
- **Action**: Create smooth, professional animations

### 7. **LAYOUT PATTERNS**
❌ Don't copy VoiceCraft sections!
- **Action**: Redesign for learning journey
- **Action**: Add progress tracking, course showcases

---

## 🎯 PROJECT OVERVIEW

**Core Functionality:**
- Interactive AI tutoring sessions
- Personalized learning paths
- Subject coverage: Math, Science, Languages, Programming, Test Prep
- Real-time explanations and feedback
- Practice quizzes with instant grading
- Progress tracking and analytics
- Video lessons with AI-generated content

**Replicate Model:** `meta/llama-2-70b-chat`, `openai/whisper-large-v3` (for voice), `black-forest-labs/flux-pro` (visuals)

**Tech Stack:** Next.js 16.0.1 · Prisma + PostgreSQL · Vercel Blob · Replicate API · OpenAI API · Stripe

---

## 🎨 BRAND COLORS

```css
/* NEW (TutorBot Plus) */
--primary: #3B82F6;    /* Blue 500 - Trust, education */
--secondary: #10B981;  /* Green 500 - Growth, success */
--accent: #F59E0B;     /* Amber 500 - Energy, achievement */
```

**Update in:** `app/globals.css`, all Tailwind classes

---

## 🗄 DATABASE SCHEMA

### DELETE
```prisma
model Voice { }
model VoiceGeneration { }
model VoiceTemplate { }
model Audio { }
```

### ADD
```prisma
model Course {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])

  title String
  subject String  // "math", "science", "language", "programming", "test-prep"
  level String    // "beginner", "intermediate", "advanced"
  description String?

  lessons Lesson[]
  progress UserProgress[]
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([subject])
  @@map("courses")
}

model Lesson {
  id String @id @default(cuid())
  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

  title String
  content String @db.Text  // AI-generated lesson content
  videoUrl String?         // AI-generated video lesson
  duration Int?            // minutes

  quiz Quiz?
  completed Boolean @default(false)
  order Int

  createdAt DateTime @default(now())

  @@index([courseId])
  @@map("lessons")
}

model Quiz {
  id String @id @default(cuid())
  lessonId String @unique
  lesson Lesson @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  questions Json  // Array of questions with answers
  passingScore Int @default(70)

  attempts QuizAttempt[]
  createdAt DateTime @default(now())

  @@map("quizzes")
}

model QuizAttempt {
  id String @id @default(cuid())
  quizId String
  quiz Quiz @relation(fields: [quizId], references: [id], onDelete: Cascade)
  userId String

  answers Json
  score Int
  passed Boolean
  completedAt DateTime @default(now())

  @@index([quizId])
  @@index([userId])
  @@map("quiz_attempts")
}

model UserProgress {
  id String @id @default(cuid())
  userId String
  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

  lessonsCompleted Int @default(0)
  totalLessons Int
  averageScore Float?
  lastAccessed DateTime @default(now())

  @@unique([userId, courseId])
  @@index([userId])
  @@map("user_progress")
}
```

**Migration:** `npx prisma generate && npx prisma db push`

---

## 🛣 API ROUTES

**DELETE:** `/api/voices/*`, `/api/audios/*`

**CREATE:**
- `POST /api/courses/create` - Create personalized course
- `GET /api/courses/[id]` - Get course with lessons
- `POST /api/lessons/[id]/generate` - AI-generate lesson content
- `POST /api/lessons/[id]/video` - Generate video lesson
- `POST /api/quizzes/[id]/attempt` - Submit quiz answers, get score
- `GET /api/progress/[courseId]` - Get user progress
- `POST /api/tutor/ask` - Ask AI tutor a question, get explanation

**AI Integration:**
```typescript
const output = await replicate.run(
  "meta/llama-2-70b-chat",
  {
    input: {
      prompt: `Explain ${topic} for ${level} level student. Include examples and practice questions.`,
      system_prompt: "You are an expert tutor. Provide clear, patient explanations.",
    }
  }
)
```

---

## 📄 KEY PAGES

- **Homepage:** "Your Personal AI Tutor - Learn Anything, Master Everything"
- **Dashboard:** Active courses, progress stats, upcoming lessons
- **Pricing:**
  - Free (1 course, 5 lessons/mo, basic quizzes)
  - Student ($19/mo, 3 courses, unlimited lessons, video lessons, progress tracking)
  - Premium ($49/mo, unlimited courses, personalized learning paths, 1-on-1 sessions, certificates)

---

## 🧩 COMPONENTS TO CREATE

- `course-creator.tsx` - Create custom course wizard
- `lesson-viewer.tsx` - Interactive lesson display
- `quiz-interface.tsx` - Quiz taking interface with timer
- `progress-dashboard.tsx` - Visual progress tracking
- `ai-tutor-chat.tsx` - Live chat with AI tutor
- `video-lesson-player.tsx` - Video lessons with interactive elements

---

## 🖼 IMAGES & BRANDING

**Logo:** Graduation cap with AI circuit design
**Hero Image:** Students learning with floating holographic educational content
**Generate with:** `black-forest-labs/flux-pro` for visuals, `recraft-ai/recraft-v3-svg` for logo

---

## ✅ ADAPTATION CHECKLIST

1. **Branding** (2h): Colors, logo, text replacements
2. **Database** (1-2h): Update schema, migrate
3. **API Routes** (4h): Create course/lesson/quiz endpoints
4. **Components** (4h): Lesson viewer, quiz interface, tutor chat
5. **Pages** (3h): Homepage, dashboard, course pages
6. **Images** (2h): Generate logo, educational visuals
7. **Testing** (2h): Course creation, lessons, quizzes
8. **Deployment** (2h): GitHub repo, Vercel

---

## 📋 WORKFLOW - HOW TO GUIDE THE USER

### Starting the Session:
1. **Check current state:** Run `/todo` to see what's done
2. **Identify next priority:** Based on critical path (DB → API → Core Flow → Marketing → Polish)
3. **Propose next task:** "Let's work on [TASK] next. This is needed for [REASON]."
4. **Start immediately:** Don't wait for detailed instructions

### During Development:
1. **Show progress:** After completing any task, show updated `/todo`
2. **Validate quality:**
   - Run `npx tsc --noEmit` (TypeScript check)
   - Run `npm run lint` (Standard linting)
   - Run `npm run lint:product` (Design system + product quality)
3. **Fix all errors:** Don't move forward with errors
4. **Test functionality:** Create courses, generate lessons, take quizzes

### Completing Tasks:
1. ✅ Update task status in `/todo` reference
2. 🎯 Identify what's blocking or what's next
3. 💡 Suggest next task with clear reason
4. 🚀 Ask "Ready to start?" and begin

### Priority Order (Critical Path):
1. **Database** - Course, Lesson, Quiz, QuizAttempt, UserProgress models
2. **API Routes** - Course creation + AI lesson generation (Llama 2 or OpenAI)
3. **Core Components** - course-creator, lesson-viewer, quiz-interface
4. **Core Flow Page** - Create course → Lessons → Quizzes → Progress
5. **Marketing Pages** - Homepage, Pricing, About
6. **Polish** - AI tutor chat, video lessons, analytics, design alignment

### When Blocked:
- User doesn't know what to do → Show `/todo`, suggest next priority
- User asks vague question → Show `/todo`, ask which area they want to focus on
- Task is too big → Break it down into subtasks, start with first one

---

**Commands:** `/todo` (Russian checklist), `/style-align`, `/bug`, `/feature`

**Next:** See `TODO.md`, `LANDING_PAGE_CONTENT.md`, `IMAGES_SCRIPT.md` for detailed guidance.
