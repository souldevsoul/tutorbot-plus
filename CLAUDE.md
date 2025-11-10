# CLAUDE.md - TutorBot Plus

**AI-Powered Tutoring & Learning Platform**

Transform VoiceCraft into TutorBot Plus - personalized AI tutoring with interactive lessons, quizzes, and progress tracking.

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

**Total:** 20-28 hours

---

**Next:** See `TODO.md`, `LANDING_PAGE_CONTENT.md`, `IMAGES_SCRIPT.md` for detailed guidance.
