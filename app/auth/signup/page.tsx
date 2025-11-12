"use client"

import { Suspense, useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Lock,
  Mail,
  User,
  CheckCircle,
} from "lucide-react"

function SignUpForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('starter')

  // Get plan from URL params
  useEffect(() => {
    const plan = searchParams?.get('plan')
    if (plan === 'pro') {
      setSelectedPlan('pro')
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      // Register user
      const registerResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          plan: selectedPlan,
        }),
      })

      const registerData = await registerResponse.json()

      if (!registerResponse.ok) {
        setError(registerData.error || "Registration failed")
        setIsLoading(false)
        return
      }

      // Show success message
      setSuccess(true)

      // Auto sign in after registration
      setTimeout(async () => {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (result?.error) {
          setError("Account created but sign in failed. Please sign in manually.")
          setIsLoading(false)
          return
        }

        router.push("/dashboard")
        router.refresh()
      }, 2000)
    } catch (error) {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-green-500 border-2 border-black shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-black mb-4">
              Welcome to TutorBot Plus!
            </h2>
            <p className="text-lg mb-6">
              Your account has been created successfully. You received{" "}
              <strong>1000 credits ($10)</strong> as a welcome bonus!
            </p>
            <p className="text-sm">Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-black">
              TutorBot <span className="text-green-500">Plus</span>
            </h1>
          </Link>
          <p className="text-xl text-gray-700 mt-2 font-semibold">Join TutorBot Plus Today</p>
          <p className="text-gray-600 mt-1">Start your personalized learning journey with AI-powered tutoring</p>
        </div>

        {/* Selected Plan Badge */}
        {selectedPlan === 'pro' && (
          <div className="bg-green-500 border-2 border-black shadow-xl p-4 mb-6 text-center">
            <p className="font-bold text-sm mb-1">Selected Plan</p>
            <p className="text-2xl font-black">Pro - 14-Day Free Trial</p>
            <p className="text-xs mt-1">No credit card required · Cancel anytime</p>
          </div>
        )}

        {/* Sign Up Form */}
        <div className="bg-white border-2 border-black shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border-2 border-red-500 p-4">
                <p className="text-red-700 font-bold text-sm">
                  {error}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-sm">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="pl-12 border-2 border-black h-14 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-sm">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="support@tutorbot.plus"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 border-2 border-black h-14 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold text-sm">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pl-12 border-2 border-black h-14 text-lg"
                  disabled={isLoading}
                />
              </div>
              <p className="text-xs text-gray-500">
                Must be at least 6 characters
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="font-bold text-sm"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-12 border-2 border-black h-14 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Welcome Bonus Info */}
            <div className="bg-green-50 border-2 border-yellow-400 p-4">
              <p className="text-sm font-bold text-center">
                Get <span className="text-green-600">1000 Free Credits</span> ($10) when you sign up!
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-lg gap-3 bg-black text-green-500 hover:bg-gray-900 border-2 border-black font-bold shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-4 border-black"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-bold">
                Or
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-bold text-black hover:text-green-500 underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-black">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-black">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-gray-600 hover:text-black font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4 animate-pulse">
              <User className="w-10 h-10 text-green-500" />
            </div>
            <p className="text-gray-600 font-bold">Loading...</p>
          </div>
        </div>
      }
    >
      <SignUpForm />
    </Suspense>
  )
}
