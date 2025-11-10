# TutorBot Plus - VoiceCraft Adaptation Guide

## 📋 Overview
**From:** Voice cloning → **To:** AI tutoring & personalized learning
**Model:** Voice synthesis → OpenAI GPT-4 + Educational content generation

## 🎨 Brand

### Colors
```css
--primary: #3B82F6;    /* Blue 500 - Trust, education */
--secondary: #10B981;  /* Green 500 - Growth */
--accent: #F59E0B;     /* Amber 500 - Achievement */
```

### Typography
- Primary: Poppins (600-700)
- Secondary: Inter
- Display: Nunito (friendly, educational)

### Logo
Graduation cap + chat bubble, blue-green gradient

## 🔄 Key Changes

### Database
```prisma
model Subject {
  id String @id @default(cuid())
  name String @unique // Math, Science, English, History
  grade String // K-12, College, Professional
  icon String
  lessons Lesson[]
}

model Lesson {
  id String @id @default(cuid())
  subjectId String
  subject Subject @relation(fields: [subjectId], references: [id])
  title String
  difficulty String // beginner, intermediate, advanced
  content String @db.Text
  estimatedTime Int // minutes
  sessions TutoringSession[]
}

model TutoringSession {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])
  lessonId String?
  lesson Lesson? @relation(fields: [lessonId], references: [id])

  topic String
  messages Json[] // Chat history

  questionsAsked Int @default(0)
  questionsAnswered Int @default(0)
  correctAnswers Int @default(0)
  duration Int // seconds

  completed Boolean @default(false)
  rating Int?
  feedback String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Quiz {
  id String @id @default(cuid())
  lessonId String
  lesson Lesson @relation(fields: [lessonId], references: [id])
  questions Json[] // [{question, options, correct, explanation}]
  passingScore Int @default(70)
  attempts QuizAttempt[]
}

model QuizAttempt {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])
  quizId String
  quiz Quiz @relation(fields: [quizId], references: [id])

  answers Json[]
  score Int
  passed Boolean
  timeSpent Int // seconds

  createdAt DateTime @default(now())
}
```

### API Routes
```typescript
// app/api/tutoring/chat/route.ts
export async function POST(request: NextRequest) {
  const { sessionId, message, subject, difficulty } = await request.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are TutorBot Plus, an expert ${subject} tutor.
        Use the Socratic method. Ask guiding questions.
        Adapt to ${difficulty} difficulty level. Be encouraging and patient.`
      },
      ...chatHistory,
      { role: "user", content: message }
    ]
  })

  // Save to session
  await prisma.tutoringSession.update({
    where: { id: sessionId },
    data: {
      messages: {
        push: [
          { role: "user", content: message },
          { role: "assistant", content: completion.choices[0].message.content }
        ]
      },
      questionsAsked: { increment: 1 }
    }
  })

  return NextResponse.json({ response: completion.choices[0].message.content })
}

// app/api/lessons/generate/route.ts
export async function POST(request: NextRequest) {
  const { topic, grade, duration } = await request.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "system",
      content: `Generate a ${duration}-minute lesson plan for "${topic}"
      at ${grade} level. Include: learning objectives, key concepts,
      practice problems, and assessment questions.`
    }]
  })

  // Parse and save lesson
  const lessonContent = JSON.parse(completion.choices[0].message.content)

  const lesson = await prisma.lesson.create({
    data: {
      subjectId,
      title: topic,
      content: JSON.stringify(lessonContent),
      difficulty: grade,
      estimatedTime: duration
    }
  })

  return NextResponse.json({ lesson })
}

// app/api/quiz/generate/route.ts
export async function POST(request: NextRequest) {
  const { lessonId, numQuestions } = await request.json()

  const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } })

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "system",
      content: `Generate ${numQuestions} multiple-choice questions
      for this lesson. Return JSON array with: question, options (4 choices),
      correctIndex, explanation. ${lesson.content}`
    }]
  })

  const questions = JSON.parse(completion.choices[0].message.content)

  const quiz = await prisma.quiz.create({
    data: {
      lessonId,
      questions
    }
  })

  return NextResponse.json({ quiz })
}
```

### Homepage
```tsx
<section className="hero">
  <h1>Your Personal AI Tutor, Available 24/7</h1>
  <p>
    Master any subject with personalized lessons, practice problems,
    and instant feedback. From K-12 to college-level.
  </p>

  <div className="subject-selector">
    {['Math', 'Science', 'English', 'History', 'Languages', 'Test Prep'].map(subject => (
      <Button key={subject} variant="outline">
        <Icon name={subject} />
        {subject}
      </Button>
    ))}
  </div>

  <div className="demo-chat">
    <ChatInterface
      placeholder="Ask me anything: 'Explain photosynthesis' or 'Help me solve 2x + 5 = 13'"
    />
  </div>
</section>

<section className="stats">
  <Stat value="500K+" label="Students Tutored" />
  <Stat value="50+" label="Subjects Covered" />
  <Stat value="4.9/5" label="Average Rating" />
  <Stat value="24/7" label="Always Available" />
</section>
```

### Features
```tsx
const features = [
  {
    title: "Personalized Learning Paths",
    description: "AI adapts to your level and learning style",
    icon: PathIcon
  },
  {
    title: "Interactive Problem Solving",
    description: "Step-by-step guidance through Socratic method",
    icon: BrainIcon
  },
  {
    title: "50+ Subjects",
    description: "Math, Science, Languages, Test Prep, and more",
    icon: BookIcon
  },
  {
    title: "Progress Tracking",
    description: "Visual dashboards showing your improvement",
    icon: ChartIcon
  },
  {
    title: "Practice Quizzes",
    description: "Auto-generated quizzes to test knowledge",
    icon: ChecklistIcon
  },
  {
    title: "Parent Dashboard",
    description: "Monitor progress and identify weak areas",
    icon: ParentIcon
  }
]
```

### Pricing
```tsx
const tiers = [
  {
    name: "Student",
    price: "$0/mo",
    features: [
      "5 tutoring sessions/week",
      "Basic subjects (Math, Science, English)",
      "Practice problems",
      "Progress tracking"
    ]
  },
  {
    name: "Scholar",
    price: "$19/mo",
    features: [
      "Unlimited tutoring sessions",
      "All 50+ subjects",
      "Custom lesson plans",
      "Quiz generator",
      "Homework help",
      "Test prep (SAT, ACT, AP)",
      "Priority support"
    ]
  },
  {
    name: "Family",
    price: "$39/mo",
    features: [
      "Up to 5 student accounts",
      "All Scholar features",
      "Parent dashboard",
      "Weekly progress reports",
      "Dedicated education consultant",
      "College planning tools"
    ]
  }
]
```

### Dashboard
```tsx
// app/dashboard/sessions/page.tsx
export default function SessionsPage() {
  return (
    <div className="container py-8">
      <h1>Your Tutoring Sessions</h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Sessions" value={sessions.length} />
        <StatCard title="Questions Answered" value={totalQuestions} />
        <StatCard title="Avg Score" value={`${avgScore}%`} />
      </div>

      <div className="space-y-4">
        {sessions.map(session => (
          <SessionCard
            key={session.id}
            topic={session.topic}
            duration={session.duration}
            questionsAsked={session.questionsAsked}
            completed={session.completed}
            rating={session.rating}
            onResume={() => router.push(`/tutor/${session.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

// app/tutor/[id]/page.tsx - Main tutoring interface
export default function TutorPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <LessonOutline />
        <ResourceLinks />
        <ProgressTracker />
      </Sidebar>

      <main className="flex-1 flex flex-col">
        <ChatInterface sessionId={params.id} />
        <WhiteboardCanvas /> {/* For math/diagrams */}
        <QuickActions>
          <Button>Example Problem</Button>
          <Button>Hint</Button>
          <Button>Explain Step-by-Step</Button>
          <Button>Take Quiz</Button>
        </QuickActions>
      </main>
    </div>
  )
}
```

## Environment Variables
```env
OPENAI_API_KEY="sk-proj-..."
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_APP_URL="https://tutorbotplus.com"
```

## Quick Commands
```bash
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/VoiceCraft/TutorBot Plus/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/voice/lesson/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/audio/session/g' {} +
```

---

*Learn smarter, not harder!* 📚🤖
