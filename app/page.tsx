"use client"

import * as React from "react"
import Image from "next/image"
import { Button, Heading, Text } from "@/components/ui"
import { Footer } from "@/components/marketing/layout/footer"
import { NewsletterPopup } from "@/components/marketing/NewsletterPopup"
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  PlayCircle,
  Check,
  X,
  Star,
  Lightbulb,
  MessageCircleQuestion,
  Brain,
  Calculator,
  FlaskConical,
  Code,
} from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentSubject, setCurrentSubject] = React.useState(0)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  // Subject examples
  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "from-blue-500 to-cyan-600", students: "50K+" },
    { name: "Science", icon: FlaskConical, color: "from-green-500 to-emerald-600", students: "35K+" },
    { name: "Programming", icon: Code, color: "from-purple-500 to-pink-600", students: "40K+" },
    { name: "Languages", icon: Globe, color: "from-amber-500 to-orange-600", students: "30K+" },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubject((prev) => (prev + 1) % subjects.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Features data
  const features = [
    {
      icon: Brain,
      title: "AI Personalized Learning",
      description: "Adaptive AI creates custom learning paths tailored to your pace, style, and goals. Real-time adjustments as you progress.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Interactive Lessons",
      description: "Engage with AI tutors in real-time. Ask questions, get instant explanations, work through problems step-by-step.",
    },
    {
      icon: Lightbulb,
      title: "Practice & Quizzes",
      description: "Test your knowledge with AI-generated quizzes. Instant feedback, detailed explanations, and progress tracking.",
    },
    {
      icon: GraduationCap,
      title: "Expert Content",
      description: "Curriculum designed by educators, powered by AI. Comprehensive coverage from basics to advanced concepts.",
    },
    {
      icon: Zap,
      title: "24/7 Availability",
      description: "Learn whenever you want, wherever you are. Your AI tutor is always ready to help, no scheduling needed.",
    },
    {
      icon: ShieldCheck,
      title: "Progress Tracking",
      description: "Detailed analytics show your strengths, weaknesses, and improvement over time. Celebrate your achievements.",
    },
  ]

  // Pricing data
  const pricingPlans = [
    {
      name: "Student",
      price: "$19",
      period: "/month",
      description: "Perfect for individual learners",
      features: [
        { text: "3 active courses", included: true },
        { text: "Unlimited lessons", included: true },
        { text: "Practice quizzes", included: true },
        { text: "Progress tracking", included: true },
        { text: "Video lessons", included: false },
        { text: "1-on-1 sessions", included: false },
        { text: "Certificates", included: false },
      ],
      ctaText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      description: "For serious learners and students",
      features: [
        { text: "Unlimited courses", included: true },
        { text: "Unlimited lessons", included: true },
        { text: "Advanced quizzes", included: true },
        { text: "Detailed analytics", included: true },
        { text: "HD video lessons", included: true },
        { text: "4 live 1-on-1 sessions/mo", included: true },
        { text: "Course certificates", included: true },
        { text: "Download materials", included: true },
      ],
      ctaText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For schools and organizations",
      features: [
        { text: "Unlimited users", included: true },
        { text: "Custom curriculum", included: true },
        { text: "White-label platform", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Dedicated support", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "Onboarding & training", included: true },
      ],
      ctaText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">TutorBot Plus</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#subjects" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Subjects</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="/about" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">About</a>
          </nav>
          <Button
            size="md"
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all font-semibold"
            onClick={() => window.location.href = '/dashboard'}
          >
            Start Learning
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-12">
            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Sparkles className="w-5 h-5 text-blue-600" />
              <Text variant="body-sm" className="font-semibold text-slate-700">AI-Powered Personal Tutoring</Text>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-slate-900">Your Personal</span>
                </span>
                <span className={`block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI Tutor</span>
                </span>
                <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-slate-900">Master Anything</span>
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Text variant="lead" className="text-slate-600 max-w-3xl mx-auto text-xl md:text-2xl">
                Learn Math, Science, Languages, Programming, and more with AI-powered personalized tutoring. Available 24/7, adapts to your pace.
              </Text>
            </div>

            <div className={`flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="xl"
                className="gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all font-semibold text-lg px-12 py-8 rounded-2xl"
                onClick={() => window.location.href = '/dashboard'}
              >
                <ArrowRight className="w-6 h-6" />
                Start Learning Free
              </Button>
              <Button
                size="xl"
                className="gap-3 bg-white text-slate-700 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all font-semibold text-lg px-12 py-8 rounded-2xl border border-slate-200"
                onClick={() => window.location.href = '/demo'}
              >
                <PlayCircle className="w-6 h-6" />
                Watch Demo
              </Button>
            </div>

            <div className={`flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-slate-600 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>500,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>5 Million+ Lessons Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="relative bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              What Do You Want to Learn?
            </h2>
            <p className="text-slate-600 text-lg">Comprehensive courses in every subject you need</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl bg-white border-2 border-slate-100 hover:border-blue-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{subject.name}</h3>
                    <p className="text-slate-600 text-sm">{subject.students} Active Learners</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <Text variant="body-sm" className="text-blue-700 font-semibold">Features</Text>
            </div>
            <Heading variant="h2" className="mb-4 text-4xl md:text-5xl text-slate-900">Everything You Need to Excel</Heading>
            <Text variant="body-lg" className="text-slate-600 max-w-3xl mx-auto">
              Comprehensive learning platform with AI-powered features designed for your success
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Flexible pricing for every learner, from students to organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 bg-white shadow-2xl scale-105'
                    : 'border-slate-200 bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 text-lg mb-2">{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                  onClick={() => window.location.href = plan.ctaText === 'Contact Sales' ? '/contact' : '/dashboard'}
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 500,000+ students learning with AI-powered tutoring. Start free today, no credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="xl"
              className="gap-3 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl font-bold text-lg px-12 py-8 rounded-2xl"
              onClick={() => window.location.href = '/dashboard'}
            >
              <GraduationCap className="w-6 h-6" />
              Start Learning Free
            </Button>
            <Button
              size="xl"
              className="gap-3 bg-blue-700/50 backdrop-blur text-white hover:bg-blue-700/70 border-2 border-white/30 font-semibold text-lg px-12 py-8 rounded-2xl"
              onClick={() => window.location.href = '/contact'}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <NewsletterPopup />
    </div>
  )
}
