"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, GraduationCap } from "lucide-react"

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  logoText?: string
  navLinks?: NavLink[]
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  transparent?: boolean
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    logo,
    logoText = "TutorBot Plus",
    navLinks = [],
    ctaButton,
    transparent = false,
    className,
    ...props
  }, ref) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const headerBg = transparent && !scrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-sm border-b-2 border-blue-200 shadow-sm"

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          headerBg,
          className
        )}
        {...props}
      >
        <Container maxWidth="xl">
          <nav className="flex items-center justify-between h-20">
            {/* Brand */}
            <a href="/" className="flex items-center gap-3">
              {logo || (
                <>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-blue-900">{logoText}</span>
                </>
              )}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide hover:text-blue-600 transition-colors text-gray-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {ctaButton && (
                <button
                  onClick={ctaButton.onClick}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg border-2 border-blue-600 rounded-xl font-bold px-6 py-2 transition-all shadow-md"
                >
                  {ctaButton.href ? (
                    <a href={ctaButton.href}>{ctaButton.text}</a>
                  ) : (
                    ctaButton.text
                  )}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t-2 border-blue-200 py-4 bg-white rounded-b-2xl shadow-lg">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm font-semibold tracking-wide hover:text-blue-600 transition-colors py-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {ctaButton && (
                  <button
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg border-2 border-blue-600 rounded-xl font-bold px-6 py-3 transition-all w-full"
                    onClick={() => {
                      ctaButton.onClick?.()
                      setMobileMenuOpen(false)
                    }}
                  >
                    {ctaButton.href ? (
                      <a href={ctaButton.href}>{ctaButton.text}</a>
                    ) : (
                      ctaButton.text
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </Container>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }
