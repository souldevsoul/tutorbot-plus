"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  Sparkles,
  Check,
  X,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Zap,
  BookOpen,
  Globe,
} from "lucide-react"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring TutorBot Plus and trying interactive lessons",
      popular: false,
      features: [
        { text: "1 active course", included: true },
        { text: "5 lessons per month", included: true },
        { text: "Basic quizzes", included: true },
        { text: "Community support", included: true },
        { text: "Progress tracking", included: true },
        { text: "Email support", included: true },
        { text: "Video lessons", included: false },
        { text: "AI tutor chat", included: false },
        { text: "Certificates", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Start Free",
      ctaHref: "/signup",
    },
    {
      name: "Student",
      price: "$19",
      period: "per month",
      description: "For students who want unlimited learning and personalized tutoring",
      popular: true,
      features: [
        { text: "3 active courses", included: true },
        { text: "Unlimited lessons", included: true },
        { text: "Advanced quizzes with feedback", included: true },
        { text: "Video lessons", included: true },
        { text: "AI tutor chat", included: true },
        { text: "Progress analytics", included: true },
        { text: "Practice exercises", included: true },
        { text: "Download materials", included: true },
        { text: "Priority email support", included: true },
        { text: "Mobile app access", included: true },
      ],
      cta: "Start Free Trial",
      ctaHref: "/signup?plan=student",
    },
    {
      name: "Premium",
      price: "$49",
      period: "per month",
      description: "Complete learning experience with personalized paths and certificates",
      popular: false,
      features: [
        { text: "Unlimited courses", included: true },
        { text: "Personalized learning paths", included: true },
        { text: "Live 1-on-1 tutoring sessions", included: true },
        { text: "Completion certificates", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Custom study schedules", included: true },
        { text: "Exam preparation tools", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Offline mode", included: true },
        { text: "Team/family sharing", included: true },
      ],
      cta: "Contact Sales",
      ctaHref: "/contact",
    },
  ]

  const comparisonFeatures = [
    {
      category: "Learning Limits",
      features: [
        { name: "Active courses", starter: "1", pro: "3", enterprise: "Unlimited" },
        { name: "Lessons per month", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Quiz attempts", starter: "3/quiz", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "AI tutor questions", starter: "0", pro: "50/day", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Learning Features",
      features: [
        { name: "Interactive lessons", starter: true, pro: true, enterprise: true },
        { name: "Video lessons", starter: false, pro: true, enterprise: true },
        { name: "Practice quizzes", starter: true, pro: true, enterprise: true },
        { name: "AI tutor chat", starter: false, pro: true, enterprise: true },
        { name: "Live 1-on-1 sessions", starter: false, pro: false, enterprise: true },
        { name: "Personalized learning paths", starter: false, pro: false, enterprise: true },
      ],
    },
    {
      category: "Progress & Analytics",
      features: [
        { name: "Progress tracking", starter: true, pro: true, enterprise: true },
        { name: "Detailed analytics", starter: false, pro: true, enterprise: true },
        { name: "Completion certificates", starter: false, pro: false, enterprise: true },
        { name: "Performance reports", starter: false, pro: true, enterprise: true },
        { name: "Study recommendations", starter: false, pro: true, enterprise: true },
        { name: "Custom study schedules", starter: false, pro: false, enterprise: true },
        { name: "Download materials", starter: false, pro: true, enterprise: true },
        { name: "Offline mode", starter: false, pro: false, enterprise: true },
        { name: "Mobile app access", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "Support & Access",
      features: [
        { name: "Email support", starter: true, pro: true, enterprise: true },
        { name: "Priority support", starter: false, pro: true, enterprise: true },
        { name: "24/7 support", starter: false, pro: false, enterprise: true },
        { name: "Dedicated tutor", starter: false, pro: false, enterprise: true },
        { name: "GDPR compliance", starter: true, pro: true, enterprise: true },
        { name: "SOC 2 Type II", starter: true, pro: true, enterprise: true },
        { name: "SLA guarantee", starter: false, pro: false, enterprise: "99.9%" },
        { name: "Team/family sharing", starter: false, pro: false, enterprise: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "How does the lesson limit work?",
      answer: "On the Free plan, you can access 5 lessons per month. Once you reach the limit, you can upgrade to Student or Premium for unlimited lessons. Your progress is saved, so you can continue where you left off after upgrading.",
    },
    {
      question: "What happens if I exceed my course limit?",
      answer: "On the Free plan (1 course) and Student plan (3 courses), you'll need to complete or archive a course to start a new one. Premium plan offers unlimited active courses, so you can learn as many subjects as you want simultaneously.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! All paid plans can be canceled at any time. If you cancel, you'll retain access until the end of your current billing period, and you won't be charged again. Your progress and certificates are saved forever.",
    },
    {
      question: "What subjects can I learn?",
      answer: "TutorBot Plus covers Math, Science, Languages, Programming, Test Prep (SAT, GRE, GMAT), and more. Our AI tutor adapts to your level (beginner, intermediate, advanced) and learning style. New courses are added regularly.",
    },
    {
      question: "How does the AI tutor chat work?",
      answer: "Available on Student and Premium plans, the AI tutor provides real-time explanations, answers questions, and guides you through problems step-by-step. It's like having a personal tutor available 24/7. Premium users get unlimited questions.",
    },
    {
      question: "What are completion certificates?",
      answer: "Premium plan includes official completion certificates for finished courses. These certificates can be shared on LinkedIn, added to resumes, or used for professional development. They include your name, course title, and completion date.",
    },
    {
      question: "Is there a free trial for Student plan?",
      answer: "Yes! All new Student and Premium subscribers get a 14-day free trial. No credit card required to start. Cancel anytime during the trial and you won't be charged.",
    },
    {
      question: "Can I switch between plans?",
      answer: "Absolutely! You can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing period. Your progress and data are never lost when switching plans.",
    },
    {
      question: "Do you offer discounts for students or schools?",
      answer: "Yes! We offer 50% discounts for qualified students with valid .edu email addresses. Schools and educational institutions can contact us for custom pricing for group licenses. Email support@tutorbot.plus for details.",
    },
    {
      question: "How secure is my learning data?",
      answer: "All user data is encrypted end-to-end (AES-256). We're GDPR compliant and SOC 2 Type II certified. Your progress, quiz results, and personal information are never shared with third parties. You can export or delete your data at any time.",
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
      <section className="py-20 border-b-2 border-blue-100">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Pricing Plans</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-700">14-day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-700">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-700">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all hover:-translate-y-2 ${
                  tier.popular
                    ? "bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-xl shadow-blue-200 scale-105"
                    : "bg-white border-2 border-gray-200 shadow-lg hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-500 rounded-full shadow-md">
                    <span className="text-sm font-bold text-white">Most Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      tier.popular ? "text-white" : "text-blue-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`text-5xl font-bold ${
                        tier.popular ? "text-white" : "text-blue-900"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        tier.popular ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-sm ${tier.popular ? "text-blue-50" : "text-gray-600"}`}>
                    {tier.description}
                  </p>
                </div>

                <Button
                  size="lg"
                  className={`w-full mb-8 font-bold rounded-xl transition-all ${
                    tier.popular
                      ? "bg-white text-blue-900 hover:bg-blue-50 shadow-md"
                      : "bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg"
                  }`}
                  asChild
                >
                  <a href={tier.ctaHref}>
                    {tier.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-green-300" : "text-green-600"
                          }`}
                        />
                      ) : (
                        <X
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-blue-300" : "text-gray-400"
                          }`}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? tier.popular
                              ? "text-white"
                              : "text-gray-700"
                            : tier.popular
                            ? "text-blue-200 line-through"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          {comparisonFeatures.map((category, catIndex) => (
            <div key={catIndex} className="mb-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-4">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-blue-50">
                      <th className="text-left p-4 font-bold text-sm text-blue-900">Feature</th>
                      <th className="text-center p-4 font-bold text-sm border-l-2 border-gray-200 text-blue-900">
                        Free
                      </th>
                      <th className="text-center p-4 font-bold text-sm border-l-2 border-gray-200 text-blue-900 bg-blue-100">
                        Student
                      </th>
                      <th className="text-center p-4 font-bold text-sm border-l-2 border-gray-200 text-blue-900">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature, featIndex) => (
                      <tr key={featIndex} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-700">{feature.name}</td>
                        <td className="text-center p-4 border-l-2 border-gray-200">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-gray-700">{feature.starter}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-2 border-gray-200 bg-blue-50">
                          {typeof feature.pro === "boolean" ? (
                            feature.pro ? (
                              <Check className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-gray-700">{feature.pro}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-2 border-gray-200">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-gray-700">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Learning Paths */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                What You Can Learn
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive subjects tailored to your learning goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Core Subjects</h3>
                <div className="text-3xl font-bold mb-2 text-blue-900">Math & Science</div>
                <p className="text-sm text-gray-600 mb-4">All skill levels</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Algebra to Calculus</li>
                  <li>• Physics & Chemistry</li>
                  <li>• Interactive practice</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl shadow-xl shadow-blue-200">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Programming</h3>
                <div className="text-3xl font-bold mb-2">Code & Tech</div>
                <p className="text-sm text-blue-100 mb-4">Hands-on projects</p>
                <ul className="text-sm text-blue-50 space-y-1">
                  <li>• Python, JavaScript, Java</li>
                  <li>• Web development</li>
                  <li>• AI & Data Science</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Languages & Tests</h3>
                <div className="text-3xl font-bold mb-2 text-blue-900">Multilingual</div>
                <p className="text-sm text-gray-600 mb-4">50+ languages</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Spanish, French, Chinese</li>
                  <li>• SAT, GRE, GMAT prep</li>
                  <li>• Speaking practice</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Popular Learning Paths</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b-2 border-blue-200">
                  <span className="font-bold text-gray-700">High School Student</span>
                  <span className="text-2xl font-bold text-blue-900">Math + Science</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2 border-blue-200">
                  <span className="font-bold text-gray-700">College Student</span>
                  <span className="text-2xl font-bold text-blue-900">CS + Languages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Career Professional</span>
                  <span className="text-2xl font-bold text-blue-900">Tech + Test Prep</span>
                </div>
              </div>
              <p className="text-sm mt-6 font-medium text-gray-600">
                * All plans include access to our complete course library. Premium includes personalized paths.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-700 rounded-full mb-8">
              <HelpCircle className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-semibold text-white">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-blue-200">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-blue-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Start with our free plan. Upgrade anytime as you grow. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-xl font-bold rounded-xl shadow-lg"
                asChild
              >
                <a href="/auth/signup">
                  <ArrowRight className="w-5 h-5" />
                  Start Free Trial
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-blue-900 border-2 border-blue-300 hover:border-blue-600 font-bold rounded-xl shadow-lg"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-blue-900 text-white border-2 border-blue-900 hover:bg-blue-800 font-bold rounded-xl shadow-lg"
                asChild
              >
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
