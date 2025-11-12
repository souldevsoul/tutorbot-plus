import { Container } from "@/components/ui/container"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import { ArrowLeft, BookOpen, Brain, Sparkles } from "lucide-react"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header
        logoText="TutorBot Plus"
        navLinks={[
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/#pricing" },
          { label: "Demo", href: "/demo" },
        ]}
        ctaButton={{
          text: "Get Started",
          href: "/signup",
        }}
      />

      {/* Demo Section */}
      <section className="py-20">
        <Container maxWidth="xl">
          {/* Back to Home Link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase text-gray-700 hover:text-green-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500 text-white border-2 border-blue-700 rounded-lg mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider">Live Demo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Try TutorBot Plus
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Experience AI-powered tutoring in action. Get instant explanations, practice problems, and personalized learning paths.
            </p>
          </div>

          {/* AI Tutor Demo */}
          <div className="p-8 border-2 border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI Tutor Demo</h3>
                <p className="text-sm text-gray-600">Ask a question and see instant AI-powered explanation</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-sm font-semibold text-gray-500 mb-2">Student Question:</p>
                <p className="text-gray-800">"Can you explain the Pythagorean theorem with an example?"</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-600 mb-2">AI Tutor Response:</p>
                <p className="text-gray-800 mb-3">
                  Of course! The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (longest side)
                  equals the sum of squares of the other two sides: a² + b² = c²
                </p>
                <p className="text-gray-800 font-semibold mb-2">Example:</p>
                <p className="text-gray-800">
                  If a triangle has sides of 3 and 4 units, the hypotenuse is: √(3² + 4²) = √(9 + 16) = √25 = 5 units
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="/auth/signup"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Learning Now
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 border border-blue-200 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Ask Your Question</h3>
              <p className="text-sm text-gray-700">
                Type any question about math, science, languages, or other subjects you're learning.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border border-green-200 bg-green-50 rounded-xl">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Get Instant Explanation</h3>
              <p className="text-sm text-gray-700">
                AI tutor provides clear, step-by-step explanations tailored to your learning level.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border border-amber-200 bg-amber-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Practice & Master</h3>
              <p className="text-sm text-gray-700">
                Try practice problems with instant feedback to reinforce your learning.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-12 p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">What You Can Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">All Subjects</h4>
                  <p className="text-sm text-blue-100">
                    Math, Science, Languages, Programming, and Test Prep
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Personalized Learning</h4>
                  <p className="text-sm text-blue-100">
                    AI adapts to your learning style and pace
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Interactive Quizzes</h4>
                  <p className="text-sm text-blue-100">
                    Practice with instant feedback and detailed explanations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Progress Tracking</h4>
                  <p className="text-sm text-blue-100">
                    See your improvement with detailed analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Sign up for a free account and start your personalized learning journey today
            </p>
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Create Free Account
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
