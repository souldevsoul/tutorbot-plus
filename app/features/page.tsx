"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  Sparkles,
  Brain,
  Zap,
  Shield,
  Globe,
  BookOpen,
  Settings,
  GraduationCap,
  Clock,
  BarChart3,
  Code,
  Users,
  ArrowRight,
  CheckCheck,
  TrendingUp,
} from "lucide-react"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Powered by AI Models",
      subtitle: "Advanced Learning Technology",
      description: "Built on cutting-edge AI models including Llama-2 and GPT-4. Provides intelligent, context-aware tutoring that adapts to your learning style. Get instant explanations and personalized guidance.",
      features: [
        "Natural conversation with AI tutor",
        "Context-aware explanations",
        "Multiple learning styles supported",
        "Automatic difficulty adjustment",
        "Real-time feedback on answers",
        "Efficient and responsive"
      ]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Subject Coverage",
      subtitle: "All Academic Subjects",
      description: "Master any subject with our comprehensive curriculum. From elementary math to advanced programming, we cover everything. Expert-level explanations tailored to your current knowledge level.",
      features: [
        "Math, Science, Languages",
        "Programming & Computer Science",
        "Test Prep (SAT, ACT, GRE)",
        "Business & Economics",
        "Arts & Humanities",
        "Custom course creation"
      ]
    },
    {
      icon: Zap,
      title: "Instant Learning",
      subtitle: "Learn at Your Pace",
      description: "Get answers to your questions in seconds. No waiting for scheduled tutoring sessions. AI tutor is available 24/7 to help you learn whenever inspiration strikes.",
      features: [
        "24/7 availability",
        "Instant question answering",
        "No scheduling required",
        "Learn on your schedule",
        "Mobile and desktop access",
        "Offline mode for lessons"
      ]
    },
    {
      icon: Settings,
      title: "Personalized Learning Paths",
      subtitle: "Adaptive Curriculum",
      description: "AI creates personalized learning paths based on your goals, current knowledge, and learning pace. Track progress and adjust difficulty automatically as you improve.",
      features: [
        "Custom learning plans",
        "Skill assessment tests",
        "Adaptive difficulty levels",
        "Goal-based learning tracks",
        "Progress milestones",
        "Personalized recommendations"
      ]
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      subtitle: "Learn in Any Language",
      description: "Study in 50+ languages with native-level instruction. Learn foreign languages with immersive lessons. Cross-language explanations help you understand concepts better.",
      features: [
        "50+ interface languages",
        "17 languages for tutoring",
        "Native pronunciation guides",
        "Cross-language concept translation",
        "Cultural context included",
        "Automatic language detection"
      ]
    },
    {
      icon: GraduationCap,
      title: "Interactive Quizzes",
      subtitle: "Practice Makes Perfect",
      description: "Test your knowledge with interactive quizzes. Get instant feedback with detailed explanations. Adaptive questions that match your skill level and learning progress.",
      features: [
        "Multiple question types",
        "Instant answer feedback",
        "Detailed solution explanations",
        "Adaptive difficulty",
        "Progress-based quizzes",
        "Performance analytics"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      subtitle: "Your Data Protected",
      description: "Your learning data is encrypted and private. Full GDPR compliance, SOC 2 Type II certified. Enterprise-grade security for students and institutions.",
      features: [
        "End-to-end encryption",
        "GDPR compliant",
        "SOC 2 Type II certified",
        "Data privacy controls",
        "Zero data sharing",
        "Audit logs available"
      ]
    },
    {
      icon: BookOpen,
      title: "Course Library",
      subtitle: "Organized Learning",
      description: "Access thousands of pre-built courses. Create and organize your own custom courses. Save favorite lessons and build personalized curricula.",
      features: [
        "Unlimited course access",
        "Custom course creation",
        "Bookmark favorite lessons",
        "Course recommendations",
        "Learning collections",
        "Import/export courses"
      ]
    },
    {
      icon: Clock,
      title: "Smart Study Sessions",
      subtitle: "Optimized Learning Time",
      description: "AI-optimized study sessions based on your schedule and energy levels. Spaced repetition for better retention. Break reminders and focus timers included.",
      features: [
        "Spaced repetition system",
        "Study session scheduling",
        "Focus timer with breaks",
        "Energy-based recommendations",
        "Study streak tracking",
        "Session history & analytics"
      ]
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      subtitle: "Track Your Growth",
      description: "Comprehensive analytics showing your learning progress, strengths, and areas for improvement. Visual dashboards with detailed insights and recommendations.",
      features: [
        "Real-time progress tracking",
        "Subject mastery levels",
        "Learning history timeline",
        "Strength & weakness analysis",
        "Export reports (PDF, CSV)",
        "Goal achievement tracking"
      ]
    },
    {
      icon: Code,
      title: "Developer API",
      subtitle: "Integration Ready",
      description: "Complete REST API for institutions and developers. Integrate TutorBot into your LMS or application. Webhook support for real-time updates.",
      features: [
        "RESTful API",
        "Official SDKs available",
        "Webhook notifications",
        "LMS integration support",
        "API key management",
        "Comprehensive documentation"
      ]
    },
    {
      icon: Users,
      title: "Team & Classroom Mode",
      subtitle: "Learn Together",
      description: "Built for classrooms and study groups. Teachers can create courses, track student progress, and assign homework. Students can collaborate and share notes.",
      features: [
        "Unlimited students (Enterprise)",
        "Teacher dashboard & controls",
        "Shared course libraries",
        "Class progress tracking",
        "Assignment management",
        "SSO integration (Enterprise)"
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header
        logoText="TutorBot Plus"
        navLinks={[
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Demo", href: "/demo" },
        ]}
        ctaButton={{
          text: "Get Started",
          href: "/signup",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 border-b-4 border-blue-200">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg mb-8">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-bold tracking-wider">Features</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Everything You Need for Personalized Learning
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Powered by advanced AI models. Built for students, educators, and institutions who demand excellence in education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 border-b-4 border-blue-700">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm font-bold text-blue-200 tracking-wider">Active Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-sm font-bold text-blue-200 tracking-wider">Languages</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm font-bold text-blue-200 tracking-wider">Courses</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm font-bold text-blue-200 tracking-wider">User Rating</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Features Grid */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              const bgColors = ["bg-white", "bg-blue-50", "bg-green-50"]
              const textColors = ["text-gray-900", "text-gray-900", "text-gray-900"]
              const subtitleColors = ["text-blue-600", "text-blue-700", "text-green-700"]
              const iconBgColors = ["bg-blue-500", "bg-blue-600", "bg-green-500"]
              const borderColors = ["border-blue-200", "border-blue-300", "border-green-200"]
              const colorIndex = index % 3

              return (
                <div
                  key={index}
                  className={`p-8 ${bgColors[colorIndex]} border-2 ${borderColors[colorIndex]} rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className={`w-16 h-16 ${iconBgColors[colorIndex]} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${textColors[colorIndex]}`}>
                    {feature.title}
                  </h3>

                  <div className={`text-xs font-bold tracking-wider mb-4 ${subtitleColors[colorIndex]}`}>
                    {feature.subtitle}
                  </div>

                  <p className="mb-6 text-gray-700">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCheck className="w-5 h-5 flex-shrink-0 text-green-500" />
                        <span className="text-sm text-gray-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Learning Path CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-500 to-blue-600 border-y-4 border-blue-700">
        <Container maxWidth="xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-lg mb-8">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-bold tracking-wider text-blue-600">Multiple Learning Paths</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Choose Your Learning Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're a beginner or advanced learner, we have personalized paths for Math, Science, Languages, and more. Start where you are, progress at your pace.
            </p>
            <Button
              size="xl"
              className="gap-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg shadow-xl font-bold"
            >
              <ArrowRight className="w-5 h-5" />
              Explore Learning Paths
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 border-t-4 border-blue-500">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of students mastering new subjects with TutorBot Plus. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow-xl font-bold"
              >
                <ArrowRight className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-bold"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
