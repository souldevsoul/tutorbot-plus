"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft } from "lucide-react"

const errorMessages: Record<string, string> = {
  Configuration: "There is a problem with the server configuration. Please try again later.",
  AccessDenied: "You do not have permission to access this learning resource.",
  Verification: "The verification link has expired or has already been used.",
  OAuthSignin: "Error in constructing an authorization URL.",
  OAuthCallback: "Error in handling the response from the authentication provider.",
  OAuthCreateAccount: "Could not create your account. Please try a different sign-in method.",
  EmailCreateAccount: "Could not create your account. This email may already be registered.",
  Callback: "Error in the authentication process.",
  OAuthAccountNotLinked:
    "This email is already associated with another account. Please sign in using your original method.",
  EmailSignin: "The verification email could not be sent. Please try again.",
  CredentialsSignin: "Sign in failed. Please check your email and password are correct.",
  SessionRequired: "Please sign in to access your learning dashboard.",
  Default: "An error occurred during authentication. Please try again.",
}

function ErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const errorMessage = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default

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
        </div>

        {/* Error Card */}
        <div className="bg-white border-2 border-red-500 shadow-xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-2xl font-black mb-4">
              Authentication Error
            </h2>

            <p className="text-gray-700 mb-8">{errorMessage}</p>

            <div className="space-y-4">
              <Button
                className="w-full h-12 gap-3 bg-gradient-to-br from-blue-50 to-green-50 text-green-500 hover:bg-gray-900 border-2 border-black font-bold"
                onClick={() => (window.location.href = "/auth/signin")}
              >
                <ArrowLeft className="w-5 h-5" />
                Try Again
              </Button>

              <Link href="/">
                <Button
                  variant="secondary"
                  className="w-full h-12 gap-3 bg-white text-black hover:bg-gray-100 border-2 border-black font-bold"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Support Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-bold text-black hover:text-green-500 underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-green-500 animate-pulse" />
            </div>
            <p className="text-gray-600 font-bold">Loading...</p>
          </div>
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  )
}
