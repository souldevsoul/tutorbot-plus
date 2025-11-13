"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  Sparkles,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Globe,
  Users,
  Code,
  BookOpen,
  Zap,
  ArrowRight,
  CheckCheck,
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage the most advanced AI models to push the boundaries of what's possible with personalized education. Always testing, always improving.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security",
      description: "Your data is yours. End-to-end encryption, GDPR compliance, and SOC 2 certification are standard, not optional.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Built by learners, for learners. Every feature is designed with real user needs in mind, from students to lifelong learners.",
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description: "Quality education should be accessible to everyone. That's why we offer a free tier and transparent pricing.",
    },
  ]

  const technology = [
    {
      icon: Sparkles,
      name: "GPT-4 Turbo",
      description: "The world's most advanced language model powering personalized learning experiences with deep subject knowledge.",
      stats: "Multi-Subject",
    },
    {
      icon: BookOpen,
      name: "Claude AI",
      description: "Cutting-edge AI tutoring technology providing clear, patient explanations with natural conversation flow.",
      stats: "50+ Languages",
    },
    {
      icon: Zap,
      name: "Adaptive Learning",
      description: "Advanced algorithms that adapt to your learning pace and style, optimizing retention and understanding.",
      stats: "Personalized",
    },
    {
      icon: Code,
      name: "Cloud Infrastructure",
      description: "Enterprise-grade infrastructure for running AI models at scale with guaranteed uptime and performance.",
      stats: "99.9% Uptime",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "TutorBot Plus Founded",
      description: "Started with a mission to democratize personalized education through AI technology.",
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched private beta with 100 students testing AI tutoring integration.",
    },
    {
      year: "2024",
      title: "Adaptive Learning Added",
      description: "Integrated adaptive learning technology, enabling personalized course creation.",
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Opened to the public with free tier, serving learners worldwide.",
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
      <section className="py-20 border-b-2 border-blue-200">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 border-2 border-blue-200 rounded-2xl mb-8 shadow-xl">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-bold tracking-wider text-blue-900">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Making AI Education Accessible to Everyone
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're building the future of personalized learning. Professional-quality education powered by the world's most trusted AI models.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Education has the power to transform lives, but for too long, personalized tutoring has been out of reach for most learners. Quality education should be accessible to everyone.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We built TutorBot Plus to change that. By leveraging the world's most advanced AI models, we're making expert-quality tutoring accessible to everyone—from students to lifelong learners.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our platform is powered by <span className="font-bold">GPT-4 Turbo</span> (multi-subject expertise), <span className="font-bold">Claude AI</span> (50+ languages), and <span className="font-bold">Adaptive Learning</span> (personalized paths). These aren't experimental models—they're proven at massive scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 p-8 border-2 border-blue-200 rounded-2xl shadow-xl">
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm font-bold text-blue-900">Lesson Topics</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm font-bold text-green-900">Subjects Available</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-indigo-600 mb-2">Active Learners</div>
                  <div className="text-sm font-bold text-indigo-900">Growing Daily</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-amber-600 mb-2">99.9%</div>
                  <div className="text-sm font-bold text-amber-900">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 border-y-2 border-green-200">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-white border-2 border-green-200 rounded-2xl shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Powered by the Best
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We use only the most proven and advanced AI models in education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technology.map((tech, index) => {
              const Icon = tech.icon
              const gradients = [
                "from-blue-50 to-indigo-50",
                "from-green-50 to-emerald-50",
                "from-purple-50 to-blue-50",
                "from-indigo-50 to-green-50"
              ]
              const iconColors = ["text-blue-600", "text-green-600", "text-purple-600", "text-indigo-600"]
              const badgeColors = ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-indigo-600"]

              return (
                <div
                  key={index}
                  className={`p-8 bg-gradient-to-br ${gradients[index]} border-2 border-blue-200 rounded-2xl shadow-xl`}
                >
                  <div className={`w-16 h-16 ${badgeColors[index]} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 text-white`} />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-2xl font-bold ${iconColors[index]}`}>
                      {tech.name}
                    </h3>
                    <span className={`text-sm font-bold text-white px-3 py-1 ${badgeColors[index]} rounded-lg`}>
                      {tech.stats}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-teal-900 to-emerald-900 border-y-2 border-blue-400">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From idea to platform serving learners worldwide
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 border-2 border-blue-300 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-white border-2 border-blue-200 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-900">
              Why Choose TutorBot Plus?
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white border-2 border-blue-200 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <CheckCheck className="w-8 h-8 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-900">
                      Proven Effectiveness
                    </h3>
                    <p className="text-gray-700">
                      Our AI tutors help students improve their understanding and grades through personalized, adaptive learning experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <CheckCheck className="w-8 h-8 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-900">
                      Transparent Pricing
                    </h3>
                    <p className="text-gray-700">
                      No hidden fees, no surprises. We show you exactly what you're paying for. Start free, scale as you grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-2 border-purple-200 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <CheckCheck className="w-8 h-8 flex-shrink-0 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-900">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-700">
                      End-to-end encryption, GDPR compliance, SOC 2 Type II certification. Your learning data is protected with enterprise-grade security standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <CheckCheck className="w-8 h-8 flex-shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-indigo-900">
                      Best-in-Class Support
                    </h3>
                    <p className="text-gray-700">
                      Real humans ready to help. From email support on free plans to dedicated account managers for premium users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <CheckCheck className="w-8 h-8 flex-shrink-0 text-amber-600" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-900">
                      Constantly Improving
                    </h3>
                    <p className="text-gray-700">
                      We're always adding new subjects, features, and capabilities. Beta access to cutting-edge features for Pro users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 border-y-2 border-blue-200">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Built by Learners, for Learners
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our team combines expertise in AI, education, and product design to build the best personalized learning platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-2 border-blue-200 rounded-2xl shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">AI Engineers</h3>
              <p className="text-gray-700">
                Deep expertise in machine learning, education technology, and model optimization.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Education Experts</h3>
              <p className="text-gray-700">
                Professional educators ensuring pedagogically sound learning experiences.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Product Team</h3>
              <p className="text-gray-700">
                Focused on building intuitive tools that students actually want to use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Join Learners Worldwide
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Start your personalized learning journey today. Free tier available—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white border-2 border-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href="/auth/signup">
                  <ArrowRight className="w-5 h-5" />
                  Get Started Free
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-600 border-2 border-purple-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
