"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  Mail,
  HeadphonesIcon,
  HelpCircle,
  Rocket,
  Users,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: HeadphonesIcon,
      title: "General Support",
      description: "Questions about your account, courses, or how to use TutorBot Plus",
      email: "support@tutorbot.plus",
      responseTime: "24 hours",
      color: "white",
    },
    {
      icon: Rocket,
      title: "Schools & Institutions",
      description: "Interested in Premium plan for schools, custom pricing, or volume licenses",
      email: "support@tutorbot.plus",
      responseTime: "4 hours",
      color: "gradient",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Content partnerships, affiliate programs, or collaboration opportunities",
      email: "support@tutorbot.plus",
      responseTime: "48 hours",
      color: "blue",
    },
  ]

  const supportTopics = [
    {
      title: "Account & Billing",
      items: [
        "Plan upgrades and downgrades",
        "Payment and invoice questions",
        "Account cancellation",
        "Refund requests",
      ],
    },
    {
      title: "Learning Support",
      items: [
        "Course access issues",
        "Lesson playback problems",
        "Quiz submission errors",
        "Progress tracking questions",
      ],
    },
    {
      title: "Course Content",
      items: [
        "Subject availability",
        "Lesson difficulty levels",
        "Certificate requirements",
        "Custom learning paths",
      ],
    },
    {
      title: "Schools & Institutions",
      items: [
        "Group licenses",
        "LMS integration",
        "Student management",
        "Volume pricing",
      ],
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
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions? Need support? Want to discuss school licenses? Our team is ready to assist you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const isGradient = method.color === "gradient"
              const isBlue = method.color === "blue"

              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all hover:-translate-y-2 ${
                    isGradient
                      ? "bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-xl shadow-blue-200"
                      : isBlue
                      ? "bg-blue-900 text-white shadow-xl"
                      : "bg-white border-2 border-gray-200 shadow-lg hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      isGradient || isBlue
                        ? "bg-white/20 backdrop-blur-sm"
                        : "bg-gradient-to-br from-blue-600 to-green-600"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        isGradient || isBlue ? "text-white" : "text-white"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isGradient || isBlue ? "text-white" : "text-blue-900"
                    }`}
                  >
                    {method.title}
                  </h3>

                  <p
                    className={`mb-6 ${
                      isGradient || isBlue ? "text-blue-50" : "text-gray-600"
                    }`}
                  >
                    {method.description}
                  </p>

                  <div className="mb-6">
                    <a
                      href={`mailto:${method.email}`}
                      className={`text-lg font-bold underline ${
                        isGradient || isBlue ? "text-white" : "text-blue-900"
                      } hover:no-underline`}
                    >
                      {method.email}
                    </a>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-semibold ${
                      isGradient || isBlue ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                    Response within {method.responseTime}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                {/* School/Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold mb-2 text-gray-700">
                    School/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                    placeholder="Springfield High School"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2 text-gray-700">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium bg-white"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Learning Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="schools">Schools & Institutions</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Course Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-xl font-bold rounded-xl"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours on business days
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Topics */}
      <section className="py-24 bg-white">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Common Support Topics
            </h2>
            <p className="text-xl text-gray-600">
              Reach out about any of these topics—we're here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportTopics.map((topic, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 shadow-lg ${
                  index % 2 === 0
                    ? "bg-white border-gray-200 hover:border-blue-300"
                    : "bg-gradient-to-br from-blue-600 to-green-600 text-white border-transparent shadow-xl shadow-blue-200"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    index % 2 === 0 ? "text-blue-900" : "text-white"
                  }`}
                >
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          index % 2 === 0 ? "text-green-600" : "text-green-300"
                        }`}
                      />
                      <span className={index % 2 === 0 ? "text-gray-700" : "text-white"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Looking for Something Else?
            </h2>
            <p className="text-xl text-gray-600">
              Quick links to help you find what you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/pricing"
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg text-center hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-bold mb-2 text-blue-900">Pricing FAQ</h3>
              <p className="text-sm text-gray-600">
                Common questions about plans and billing
              </p>
            </a>

            <a
              href="/demo"
              className="p-6 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl shadow-xl shadow-blue-200 text-center hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <Rocket className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Try Demo</h3>
              <p className="text-sm text-blue-50">
                Experience interactive lessons before signing up
              </p>
            </a>

            <a
              href="/features"
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg text-center hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-bold mb-2 text-blue-900">Feature Guide</h3>
              <p className="text-sm text-gray-600">
                Learn about all TutorBot Plus capabilities
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* Schools Support */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Schools & Institutions Support
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Premium subscribers and school licenses have access to priority support via dedicated channels.
            </p>
            <div className="p-8 bg-white rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Premium Customers</h3>
              <p className="text-gray-700 mb-6">
                If you have an active Premium plan or school license, use your dedicated support channels for immediate assistance with learning management and technical issues.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-xl font-bold rounded-xl"
                asChild
              >
                <a href="mailto:support@tutorbot.plus">
                  Contact Premium Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
