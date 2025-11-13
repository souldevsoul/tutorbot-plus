# TutorBot Plus - Complete Product Specification

## 🎯 Brand Concept & Vision

### What is TutorBot Plus?

**TutorBot Plus** is an AI-powered educational platform that combines intelligent AI tutoring with access to human expert tutors. We provide personalized learning experiences across all subjects with instant feedback, practice problems, and progress tracking.

**The Core Innovation:**
We bridge the gap between instant AI assistance and expert human tutoring through a seamless hybrid platform and unified credit system.

### Value Proposition

**For Students:**
- Get instant AI explanations 24/7 for any subject
- Practice with auto-generated problems and quizzes
- Request human tutor help when needed
- Track learning progress and mastery
- Affordable education support

**For Parents:**
- Monitor child's learning progress
- Flexible credit system (AI + human tutors)
- Safe, educational environment
- Affordable alternative to traditional tutoring

**For Educators:**
- Supplement classroom teaching
- Assign practice problems automatically
- Track student progress at scale
- Provide personalized learning paths

### Unique Selling Points

1. **AI + Human Hybrid** - Instant AI help, expert human tutors on demand
2. **Unified Credits** - One credit system for both AI questions and human tutor sessions
3. **All Subjects** - Math, Science, Languages, Programming, Test Prep, and more
4. **Progress Tracking** - Visual learning analytics and mastery tracking
5. **Practice Problems** - AI-generated practice sets with instant grading
6. **Available 24/7** - AI tutor never sleeps, human tutors available during business hours
7. **Affordable** - Much cheaper than traditional tutoring

---

## 🎨 Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Primary Palette:**
```
Indigo/Purple Family (Intelligence & Creativity):
- #6366F1 (indigo-500) - Primary action color, trust
- #A855F7 (purple-500) - Creative emphasis, learning
- #4F46E5 (indigo-600) - Hover states, depth

Blue Family (Trust & Education):
- #3B82F6 (blue-500) - Secondary action color
- #2563EB (blue-600) - Professional depth
- #60A5FA (blue-400) - Lighter accents
```

**Usage Rules:**
- Primary CTAs: Indigo/Purple gradients (`from-indigo-500 to-purple-600`)
- Secondary elements: Solid indigo/blue
- Backgrounds: White, Slate-50
- Text: Slate-900 (headings), Slate-600 (body)

**NEVER Use (VoiceCraft template colors):**
- ❌ Yellow (`yellow-*`)
- ❌ Orange (`orange-*`)
- ❌ Harsh black borders
- ❌ Brutalist shadows

### Visual Style

**Typography:**
- Headings: Bold, clear (text-4xl, text-5xl, font-bold)
- Body: Readable (text-lg, leading-relaxed)
- Educational tone: Professional yet approachable

**Shadows (Soft & Professional):**
```css
shadow-soft-sm    - Subtle elevation
shadow-soft-md    - Card elevation
shadow-soft-lg    - Modal elevation
shadow-glow-indigo - Interactive glow
shadow-glow-purple - Accent glow
```

**Corners (Smooth & Modern):**
```css
rounded-xl    - Buttons, cards
rounded-2xl   - Large cards
rounded-3xl   - Hero sections
rounded-full  - Avatars, badges
```

**Spacing (Organized & Structured):**
- Section padding: py-24 (desktop), py-16 (mobile)
- Card padding: p-8, p-10
- Element gaps: gap-6, gap-8

---

## 🔄 Core User Flows

### Flow 1: Student Asks AI Question → Gets Explanation → Practices

**Step-by-Step Flow:**

1. **Student logs in** → Dashboard shows subjects and recent questions
2. **Student selects subject** (Math, Science, Language, etc.)
3. **Student asks question** → Types or uploads image of problem
4. **AI analyzes question** → Identifies topic, difficulty level
5. **AI provides step-by-step explanation** → Breaks down solution
6. **Student can ask follow-up questions** → Clarify specific steps
7. **AI generates practice problems** → Similar problems for mastery
8. **Student solves practice problems** → Gets instant feedback
9. **Progress is tracked** → Mastery level updated

**Example Interaction:**

```
Student: "How do I solve 2x + 5 = 15?"

AI Tutor: "Great question! Let's solve this step by step.

Step 1: Isolate the term with x
2x + 5 = 15
2x = 15 - 5  (subtract 5 from both sides)
2x = 10

Step 2: Solve for x
x = 10 / 2  (divide both sides by 2)
x = 5

Answer: x = 5

Want to try a similar problem? Here are 3 practice problems:
1. 3x + 7 = 22
2. 5x - 3 = 12
3. 4x + 1 = 21"

Student: "Can you explain why we subtract 5 from both sides?"

AI Tutor: "Excellent question! We subtract 5 from both sides to keep the equation balanced..."
```

**Technical Implementation:**
- Question input: Text field + image upload (for handwritten/photos)
- AI Model: OpenAI GPT-4 or Replicate LLM for explanations
- Practice generation: Template-based with randomization
- Progress tracking: Update `QuestionSession` and `StudentProgress` models

---

### Flow 2: Student Requests Human Tutor Help

**Step-by-Step Flow:**

1. **Student stuck on problem** → Clicks "Request Human Tutor"
2. **Brief form appears** → Student describes issue, subject, urgency
3. **System shows available tutors** → Filters by subject expertise
4. **Student selects tutor** → Reviews profile, rating, hourly rate (in credits)
5. **Booking confirmed** → Calendar integration, reminder sent
6. **Live session** (video call via integrated platform)
7. **Session notes saved** → Tutor uploads notes, recordings
8. **Student rates tutor** → Feedback for quality control
9. **Credits deducted** → Unified credit system

**Example Interaction:**

```
Student clicks: "Request Human Tutor"

Form shows:
- Subject: [Math - Algebra]
- Topic: "Quadratic equations"
- Urgency: [Within 24 hours] / [This week] / [Flexible]
- Description: "I don't understand how to complete the square"

System shows 3 available tutors:
1. John Doe - Math Expert - 4.9★ - 50 credits/hour - Available today 3pm
2. Jane Smith - Algebra Specialist - 5.0★ - 60 credits/hour - Available tomorrow 10am
3. Mike Johnson - Math Tutor - 4.7★ - 40 credits/hour - Available in 2 days

Student books Jane Smith for 1 hour tomorrow at 10am
Cost: 60 credits deducted from account
Confirmation email sent with Zoom link
```

**Technical Implementation:**
- Tutor matching: Filter by subject, availability, rating
- Calendar integration: Google Calendar or built-in booking system
- Video platform: Zoom API or WebRTC integration
- Credit deduction: Atomic transaction in database
- Session recording: Optional, with consent

---

### Flow 3: Track Learning Progress

**Step-by-Step Flow:**

1. **Student accesses Dashboard** → Overview of all subjects
2. **Progress cards show** → Mastery levels, recent activity
3. **Click on subject** → Detailed breakdown by topic
4. **Visual charts display** → Progress over time, strengths/weaknesses
5. **Recommendations appear** → "Practice more on X topic"
6. **Certificates earned** → Badges for completing milestones
7. **Parent view** (if student is minor) → Monitor progress

**Dashboard Displays:**

```
Math Progress:
- Algebra: 85% mastery (23 questions answered, 8 practice sets completed)
- Geometry: 60% mastery (12 questions answered)
- Calculus: 30% mastery (5 questions answered)

Recent Activity:
- 2 hours ago: Completed "Linear Equations" practice set (9/10 correct)
- Yesterday: Asked AI about quadratic formula (3 follow-ups)
- 2 days ago: Human tutor session with Jane Smith (Geometry)

Recommendations:
- Practice more Geometry (below 70% mastery)
- Try "Systems of Equations" practice set
- Review "Polynomial Factoring" concepts
```

**Technical Implementation:**
- Progress calculation: Count correct answers, time spent, mastery threshold
- Visualization: Charts using Chart.js or Recharts
- Recommendations: Rule-based algorithm (below 70% → practice)
- Certificates: Auto-generated when milestones reached

---

## 💳 Credit System (Unified AI + Human Tutors)

### How Credits Work

**One Credit System for Everything:**
- AI Questions: 1 credit per question (with 3 follow-ups included)
- Practice Problems: 5 credits per practice set (10 problems)
- Human Tutor Sessions: 40-100 credits per hour (depending on tutor)

**Why Unified Credits?**
- Simplicity: Students don't manage separate "AI minutes" and "tutor hours"
- Flexibility: Use credits however needed (all AI, all human, or mix)
- Transparency: Clear pricing, no hidden fees

### Credit Packages

**Starter (Free):**
- 10 credits/month free
- ~10 AI questions OR 1 practice set
- No human tutor access

**Student ($19/month):**
- 100 credits/month
- ~100 AI questions OR 10 practice sets OR 2 human tutor hours
- Priority AI response
- Progress tracking

**Premium ($49/month):**
- 300 credits/month
- ~300 AI questions OR 30 practice sets OR 6 human tutor hours
- Unlimited subjects
- Advanced analytics
- Priority tutor booking

**Credit Costs:**

| Service | Credit Cost |
|---------|-------------|
| AI Question (with 3 follow-ups) | 1 credit |
| Practice Set (10 problems) | 5 credits |
| AI-Generated Quiz | 10 credits |
| Human Tutor Session (1 hour) | 50-100 credits (varies by tutor) |
| Video Lesson (AI-generated) | 20 credits |

### Credit Rollover

- Unused credits roll over for 3 months
- After 3 months, expire to prevent hoarding
- Purchased credit packs never expire

---

## 🤖 AI Model Integration

### Primary AI Model

**Model:** OpenAI GPT-4 Turbo or Replicate Meta Llama 2 70B Chat

**Why this model?**
- Strong reasoning for math, science explanations
- Good at step-by-step breakdowns
- Affordable API pricing
- Fast response times

**Implementation:**

```typescript
// /lib/ai/tutor.ts
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function getTutorExplanation(
  question: string,
  subject: string,
  gradeLevel: string
) {
  const output = await replicate.run(
    "meta/llama-2-70b-chat",
    {
      input: {
        prompt: question,
        system_prompt: `You are an expert ${subject} tutor for ${gradeLevel} students.
        Provide clear, step-by-step explanations.
        Use simple language appropriate for the grade level.
        After explaining, offer 2-3 similar practice problems.`,
        temperature: 0.7,
        max_new_tokens: 1000,
      }
    }
  );

  return output;
}
```

### Secondary AI Features

**Image Recognition (for uploaded problem photos):**
- Model: Replicate LLaVA or GPT-4 Vision
- Use case: Student uploads photo of homework → AI reads and solves

**Practice Problem Generation:**
- Template-based with parameter randomization
- Difficulty scaling based on student mastery level

**Video Lesson Generation (future feature):**
- Model: Replicate Stable Diffusion for diagrams
- Text-to-speech for narration
- Combine into educational video

---

## 📄 All Pages

### 1. Homepage (`/`)

**Purpose:** Convert visitors to sign up

**Sections:**

1. **Hero Section:**
   - Headline: "Your Personal AI Tutor - Learn Anything, Master Everything"
   - Subheadline: "Get instant explanations, practice problems, and expert tutors - all in one platform"
   - CTA: "Start Learning Free" → Sign up
   - Background: Gradient from-indigo-50 via-purple-50 to-blue-50

2. **How It Works (3 steps):**
   - Step 1: "Ask Any Question" - AI provides instant explanations
   - Step 2: "Practice & Master" - Auto-generated practice problems
   - Step 3: "Get Expert Help" - Request human tutor when needed

3. **Subjects Covered:**
   - Grid of 8 subject cards (Math, Science, Languages, Programming, etc.)
   - Each card: Icon, subject name, brief description

4. **Features:**
   - 24/7 AI Availability
   - Human Tutor Network
   - Progress Tracking
   - Practice Problems
   - All Subjects
   - Affordable Credits

5. **Pricing Preview:**
   - 3 plan cards (Starter, Student, Premium)
   - Highlight: "100 credits/month = 100 AI questions or 2 tutor hours"

6. **Social Proof:**
   - Student testimonials (3-4 cards)
   - Stats: "50,000+ students helped", "1M+ questions answered"

7. **Final CTA:**
   - "Ready to Master Your Subjects?"
   - "Start Free - No Credit Card Required"

---

### 2. Dashboard (`/dashboard`)

**Purpose:** Hub for students to access all features

**Layout:**

**Sidebar (left):**
- User profile (name, avatar, credit balance)
- Navigation:
  - Dashboard (overview)
  - Ask AI Tutor
  - Practice Problems
  - Find Tutor
  - Progress
  - Settings

**Main Content Area:**

1. **Credit Balance Card (top):**
   - Large display: "75 credits remaining"
   - Progress bar showing usage this month
   - "Buy More Credits" button

2. **Quick Actions:**
   - "Ask AI Question" - Opens chat interface
   - "Request Human Tutor" - Opens booking form
   - "Practice Problems" - Browse by subject

3. **Recent Activity:**
   - List of last 10 questions asked
   - Each item: Question preview, timestamp, "View Answer" button

4. **Progress Overview:**
   - Grid of subject cards
   - Each card: Subject, mastery %, "View Details" link

5. **Upcoming Tutor Sessions:**
   - Calendar widget showing booked sessions
   - Session details: Tutor name, time, subject

6. **Recommended Practice:**
   - "Based on your progress, try these:"
   - 3-4 recommended practice sets

---

### 3. Pricing Page (`/pricing`)

**Purpose:** Convert free users to paid plans

**Layout:**

1. **Headline:**
   - "Choose Your Learning Plan"
   - "All plans include AI tutoring + human tutor access"

2. **Pricing Cards (3 columns):**

**Starter (Free):**
- $0/month
- 10 credits/month
- ~10 AI questions
- Basic progress tracking
- Community support
- CTA: "Start Free"

**Student ($19/month):**
- $19/month
- 100 credits/month
- ~100 AI questions OR 2 tutor hours
- All subjects
- Priority AI response
- Progress analytics
- Email support
- CTA: "Get Student Plan" (highlighted)

**Premium ($49/month):**
- $49/month
- 300 credits/month
- ~300 AI questions OR 6 tutor hours
- Everything in Student, plus:
- Priority tutor booking
- Advanced analytics
- Custom learning paths
- 1-on-1 session recordings
- Certificates
- CTA: "Get Premium"

3. **Credit Calculator:**
   - Interactive widget: "What can you do with X credits?"
   - Slider to adjust credit amount
   - Shows breakdown: AI questions, practice sets, tutor hours

4. **FAQ:**
   - "How do credits work?"
   - "Can I mix AI and human tutors?"
   - "Do credits expire?"
   - "Can I upgrade/downgrade anytime?"

5. **Enterprise Pricing:**
   - For schools, institutions
   - "Contact us for bulk pricing"

---

### 4. Ask AI Tutor Page (`/dashboard/ask`)

**Purpose:** Chat interface for AI tutoring

**Layout:**

**Left Panel (Subject Selector):**
- Dropdown or tabs: Math, Science, Language, Programming, etc.
- Grade level selector: Elementary, Middle, High School, College

**Main Chat Area:**
- Chat interface similar to ChatGPT
- Student types question
- AI responds with step-by-step explanation
- Option to upload image (photo of problem)
- "Generate Practice Problems" button after explanation

**Right Panel (Context):**
- Current topic detected
- Related resources (videos, articles)
- "Request Human Tutor" button if stuck

**Example Chat:**

```
You: How do I calculate the area of a circle?

AI Tutor: Great question! The area of a circle is calculated using this formula:

A = πr²

Where:
- A = area
- π (pi) ≈ 3.14159
- r = radius (distance from center to edge)

Example:
If radius = 5 cm
A = π × 5²
A = π × 25
A ≈ 3.14159 × 25
A ≈ 78.54 cm²

Want to practice? Try finding the area of circles with:
1. radius = 3 cm
2. radius = 10 cm
3. diameter = 8 cm (remember: radius = diameter ÷ 2)

[Generate Practice Set Button]

You: Can you explain why we square the radius?

AI Tutor: Excellent question! We square the radius because...
[continues explanation]
```

---

### 5. Find Tutor Page (`/dashboard/tutors`)

**Purpose:** Browse and book human tutors

**Layout:**

**Filter Sidebar (left):**
- Subject filter (Math, Science, etc.)
- Availability (Today, This Week, Flexible)
- Price range (credits/hour slider)
- Rating filter (4+ stars, 4.5+ stars)

**Tutor Grid (main):**
- Cards for each tutor showing:
  - Profile photo
  - Name
  - Subject expertise
  - Rating (stars + review count)
  - Hourly rate (in credits)
  - "Available now" badge if online
  - Brief bio (2-3 sentences)
  - "View Profile" button

**Tutor Profile Modal (when clicked):**
- Detailed bio
- Education credentials
- Subjects taught
- Availability calendar
- Student reviews
- "Book Session" button

---

### 6. Progress Page (`/dashboard/progress`)

**Purpose:** Visualize learning analytics

**Layout:**

**Overview Cards (top):**
- Total questions asked
- Total practice problems solved
- Average score
- Current streak (days active)

**Subject Tabs:**
- Tab for each subject (Math, Science, etc.)
- Clicking tab shows subject-specific data

**Progress Charts:**
- Line chart: Mastery over time
- Bar chart: Questions per topic
- Pie chart: Time distribution by subject

**Topic Breakdown:**
- Table listing all topics in subject
- Columns: Topic, Questions Answered, Mastery %, Last Practiced
- Color coding: Green (>80%), Yellow (60-80%), Red (<60%)

**Achievements:**
- Badge grid showing earned certificates
- "Math Master Level 1", "Science Streak 7 days", etc.

---

## 🗄 Database Schema

### Student Model

```prisma
model Student {
  id        String   @id @default(cuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])

  name      String
  email     String   @unique
  gradeLevel String // "elementary", "middle", "high", "college"

  credits   Int      @default(10) // Current credit balance

  questions QuestionSession[]
  tutorRequests TutorRequest[]
  progress  StudentProgress[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@map("students")
}
```

### QuestionSession Model (AI Tutor Interactions)

```prisma
model QuestionSession {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id])

  subject   String   // "math", "science", "language", "programming", etc.
  topic     String?  // "algebra", "geometry", etc.
  gradeLevel String

  question  String   @db.Text // Student's question
  questionImageUrl String? // If uploaded photo

  aiExplanation String @db.Text // AI's response

  followUpQuestions Json? // Array of follow-up Q&A
  practiceProblems Json? // Generated practice problems

  creditsCost Int @default(1) // Credits deducted for this question

  helpful   Boolean? // Student feedback

  createdAt DateTime @default(now())

  @@index([studentId])
  @@index([subject])
  @@map("question_sessions")
}
```

### TutorRequest Model (Human Tutor Sessions)

```prisma
model TutorRequest {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id])

  subject   String
  topic     String?
  description String @db.Text // What student needs help with

  urgency   String   // "today", "this_week", "flexible"

  tutorId   String?  // Assigned tutor
  status    String   @default("pending") // "pending", "scheduled", "completed", "cancelled"

  scheduledAt DateTime? // Booking time
  duration    Int?      // Session duration in minutes

  creditsCost Int?      // Credits deducted for session

  sessionNotes String? @db.Text // Tutor's notes after session
  recordingUrl String?

  rating      Int?      // Student rating (1-5 stars)
  feedback    String?   @db.Text

  createdAt DateTime @default(now())
  completedAt DateTime?

  @@index([studentId])
  @@index([tutorId])
  @@index([status])
  @@map("tutor_requests")
}
```

### StudentProgress Model

```prisma
model StudentProgress {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id])

  subject   String
  topic     String

  questionsAnswered Int @default(0)
  correctAnswers    Int @default(0)
  practiceSetsDone  Int @default(0)

  masteryLevel Int @default(0) // 0-100 percentage

  lastPracticed DateTime @default(now())

  @@unique([studentId, subject, topic])
  @@index([studentId])
  @@map("student_progress")
}
```

### Additional Models

**Tutor Model:**
```prisma
model Tutor {
  id        String   @id @default(cuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])

  name      String
  bio       String   @db.Text
  subjects  String[] // Array of subjects they teach

  hourlyRate Int     // Credits per hour
  rating     Float   @default(0)
  totalSessions Int  @default(0)

  available Boolean  @default(true)

  createdAt DateTime @default(now())

  @@map("tutors")
}
```

**PracticeSet Model:**
```prisma
model PracticeSet {
  id        String   @id @default(cuid())

  subject   String
  topic     String
  gradeLevel String

  problems  Json     // Array of {question, answer, explanation}

  difficulty String  // "easy", "medium", "hard"

  createdAt DateTime @default(now())

  @@index([subject, topic])
  @@map("practice_sets")
}
```

**User Model (extends NextAuth):**
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?

  role          String    @default("student") // "student", "tutor", "admin"

  accounts      Account[]
  sessions      Session[]
  student       Student?
  tutor         Tutor?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

---

## 🛣 API Routes

### Student & Questions

**POST `/api/questions/ask`**
- Body: `{ subject, topic, question, questionImageUrl?, gradeLevel }`
- Returns: AI explanation, practice problems
- Deducts: 1 credit

**GET `/api/questions/history`**
- Returns: List of past questions with answers
- Pagination support

**POST `/api/questions/[id]/followup`**
- Body: `{ followupQuestion }`
- Returns: AI response to follow-up
- Free if within same session (3 follow-ups included)

### Practice Problems

**GET `/api/practice/[subject]`**
- Returns: Available practice sets for subject
- Query params: `topic`, `difficulty`, `gradeLevel`

**POST `/api/practice/generate`**
- Body: `{ subject, topic, difficulty, count }`
- Returns: Generated practice set
- Deducts: 5 credits

**POST `/api/practice/[id]/submit`**
- Body: `{ answers }`
- Returns: Grading results, explanations
- Updates progress

### Tutor Requests

**GET `/api/tutors`**
- Returns: List of available tutors
- Query params: `subject`, `availability`, `maxRate`

**GET `/api/tutors/[id]`**
- Returns: Tutor profile, availability, reviews

**POST `/api/tutors/book`**
- Body: `{ tutorId, subject, topic, description, scheduledAt, duration }`
- Returns: Booking confirmation
- Deducts: `hourlyRate * (duration/60)` credits

**PATCH `/api/tutors/requests/[id]`**
- Update request status, add notes, rating

### Progress

**GET `/api/progress`**
- Returns: Overall progress across all subjects

**GET `/api/progress/[subject]`**
- Returns: Detailed breakdown for specific subject

**GET `/api/progress/analytics`**
- Returns: Charts data (mastery over time, etc.)

### Credits

**GET `/api/credits/balance`**
- Returns: Current credit balance, usage history

**POST `/api/credits/purchase`**
- Body: `{ packageId }`
- Returns: Stripe checkout session

**GET `/api/credits/history`**
- Returns: Credit transaction history

---

## 🔐 Authentication & Authorization

**Auth Provider:** NextAuth.js with Prisma adapter

**Sign In Methods:**
- Email/Password
- Google OAuth
- Optional: GitHub, Microsoft (for schools)

**Roles:**
- `student` - Default role, can ask questions, book tutors
- `tutor` - Can accept tutor requests, provide sessions
- `admin` - Full system access

**Protected Routes:**
- `/dashboard/*` - Requires authentication
- `/api/*` - Requires valid session (except public endpoints)

---

## 💰 Payment Integration

**Provider:** Stripe

**Pricing Plans:**
- Starter: Free (10 credits/month)
- Student: $19/month (100 credits/month)
- Premium: $49/month (300 credits/month)

**One-Time Credit Packs:**
- 50 credits: $10
- 150 credits: $25
- 500 credits: $75

**Implementation:**
```typescript
// Create Stripe checkout session
const session = await stripe.checkout.sessions.create({
  mode: 'subscription', // or 'payment' for one-time
  line_items: [{
    price: 'price_student_plan_id',
    quantity: 1,
  }],
  success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
  cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
});
```

**Webhooks:**
- `checkout.session.completed` - Add credits to user
- `invoice.paid` - Renew monthly credits
- `customer.subscription.deleted` - Downgrade to free

---

## 📊 Analytics & Tracking

**Metrics to Track:**
- Student engagement: Questions per day, session duration
- AI accuracy: Helpful ratings, follow-up rate
- Tutor performance: Rating, rebooking rate
- Credit usage: Average credits per student, conversion rate
- Subject popularity: Most asked subjects/topics

**Tools:**
- Vercel Analytics (page views, performance)
- PostHog (product analytics, funnels)
- Sentry (error tracking)

---

## 🎯 End Goal Checklist

### Core Functionality

- [ ] Students can create accounts and sign in
- [ ] Students can ask AI questions and get step-by-step explanations
- [ ] AI can handle uploaded images (photo of problem)
- [ ] Students can ask follow-up questions (3 free per session)
- [ ] AI generates practice problems after explaining
- [ ] Students can browse available human tutors
- [ ] Students can book tutor sessions
- [ ] Credit system works (deducts for AI questions, tutor sessions)
- [ ] Progress tracking calculates mastery levels
- [ ] Dashboard shows recent activity and progress
- [ ] Pricing page clearly explains credit system
- [ ] Stripe payments work (subscriptions and one-time packs)

### Design System Compliance

- [ ] All colors use indigo/purple/blue palette (NO yellow, orange)
- [ ] All buttons use rounded-xl with soft shadows
- [ ] All cards use rounded-xl/2xl with shadow-soft-md
- [ ] Spacing is generous (py-24, p-8, gap-6)
- [ ] Typography is clear and educational
- [ ] No brutalist elements (harsh borders, sharp corners)

### Quality Checks

- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Product quality checks pass (`npm run lint:product`)
- [ ] All links work (no 404s)
- [ ] All forms submit correctly
- [ ] All images have alt text
- [ ] Mobile responsive (test on phone)
- [ ] Fast performance (< 3s page load)

### Content Quality

- [ ] Homepage has compelling copy (not template placeholders)
- [ ] All pages have real content (not Lorem Ipsum)
- [ ] Terms and Privacy pages have actual policies (500+ chars)
- [ ] Testimonials are realistic (not fake)
- [ ] Stats are achievable (not "10,000,000+ users")

### User Experience

- [ ] Onboarding is clear (new user knows what to do)
- [ ] Dashboard is intuitive (easy to find features)
- [ ] AI responses are helpful and accurate
- [ ] Credit system is transparent (clear costs)
- [ ] Error messages are helpful (not generic)
- [ ] Loading states show progress (not blank screens)

---

## 🚀 Implementation Phases

### Phase 1: Foundation (Week 1)
- Set up database schema
- Implement authentication
- Build basic dashboard layout
- Create homepage with branding

### Phase 2: AI Tutoring (Week 2)
- Integrate Replicate/OpenAI for AI explanations
- Build chat interface for asking questions
- Implement image upload for problems
- Create practice problem generation

### Phase 3: Human Tutors (Week 3)
- Build tutor profiles and directory
- Implement booking system
- Integrate video call platform (Zoom API)
- Add session notes and recordings

### Phase 4: Progress Tracking (Week 4)
- Calculate mastery levels
- Build progress visualization charts
- Implement recommendations engine
- Add achievements/badges

### Phase 5: Credits & Payments (Week 5)
- Integrate Stripe
- Build credit purchase flow
- Implement subscription management
- Add credit transaction history

### Phase 6: Polish & Launch (Week 6)
- Design system alignment
- Performance optimization
- Content writing
- Testing and QA
- Launch!

---

**Last Updated:** 2025-01-12
**Version:** 1.0
**Total Word Count:** ~7,000 words
**For:** TutorBot Plus (AI Tutoring Platform)

**Next Steps:**
1. Review with team
2. Create developer onboarding with `/onboard`
3. Implement Phase 1 (Foundation)
4. Test with beta users
5. Iterate based on feedback
