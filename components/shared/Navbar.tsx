"use client"

import * as React from "react"
import { GraduationCap, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Demo", href: "/demo" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">TutorBot Plus</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => window.location.href = '/dashboard'} className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 font-semibold px-6 py-2 rounded-lg shadow-md transition-all">
              Get Started
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 font-semibold px-6 py-3 rounded-lg shadow-md transition-all w-full" onClick={() => { window.location.href = '/dashboard'; setMobileMenuOpen(false); }}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
