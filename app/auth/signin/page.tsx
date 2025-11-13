"use client"

import { Suspense, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Lock, Mail } from "lucide-react"

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email or password")
        setIsLoading(false)
        return
      }

      router.push(callbackUrl)
      router.refresh()
    } catch (error) {
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-black">
              TutorBot <span className="text-green-500">Plus</span>
            </h1>
          </Link>
          <p className="text-xl text-gray-700 mt-2 font-semibold">Welcome Back to TutorBot Plus</p>
          <p className="text-gray-600 mt-1">Sign in to continue your learning journey</p>
        </div>

        {/* Sign In Form */}
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
                  className="pl-12 border-2 border-black h-14 text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-lg gap-3 bg-gradient-to-br from-blue-50 to-green-50 text-green-500 hover:bg-gray-900 border-2 border-black font-bold shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-black hover:text-green-500 underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-600 hover:text-black font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Lock className="w-10 h-10 text-green-500" />
            </div>
            <p className="text-gray-600 font-bold">Loading...</p>
          </div>
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  )
}
