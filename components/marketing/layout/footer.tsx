import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  CreditCard,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-t-2 border-blue-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              TutorBot Plus
            </h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              AI-powered tutoring platform making personalized education accessible to everyone.
            </p>

            {/* Payment Info */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-blue-200 mb-3">Secure Payment Processing</p>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <CreditCard className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">Stripe & PayPal</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/tutorbotplus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all border border-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/tutorbotplus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tutorbotplus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all border border-white/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-blue-100 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-blue-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-blue-100 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Legal & Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-blue-100 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-blue-100 hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/payment-policy" className="text-blue-100 hover:text-white transition-colors">
                  Payment Policy
                </Link>
              </li>
              <li>
                <Link href="/delivery-policy" className="text-blue-100 hover:text-white transition-colors">
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-blue-100 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-blue-200 mb-1">Email</div>
                  <a
                    href="mailto:support@tutorbot.plus"
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    support@tutorbot.plus
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-blue-200 mb-1">Phone</div>
                  <a
                    href="tel:+14155551234"
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    +1 (415) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-blue-200 mb-1">Address</div>
                  <address className="text-white not-italic">
                    TutorBot Plus, Inc.
                    <br />
                    123 Education Street, Suite 100
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Information Bar */}
      <div className="border-t border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Company Registration */}
            <div>
              <h5 className="text-sm font-bold mb-3">
                Company Information
              </h5>
              <div className="text-sm text-blue-100 space-y-1">
                <p>
                  <span className="font-semibold">Legal Name:</span> TutorBot Plus, Inc.
                </p>
                <p>
                  <span className="font-semibold">Registration Number:</span> 12-3456789
                </p>
                <p>
                  <span className="font-semibold">VAT Number:</span> US123456789
                </p>
                <p>
                  <span className="font-semibold">Registered Address:</span> 123 Education Street, Suite 100, San Francisco, CA 94105, United States
                </p>
              </div>
            </div>

            {/* Security & Compliance */}
            <div>
              <h5 className="text-sm font-bold mb-3">
                Security & Compliance
              </h5>
              <div className="text-sm text-blue-100 space-y-1">
                <p>• GDPR Compliant</p>
                <p>• SOC 2 Type II Certified</p>
                <p>• PCI DSS Level 1 Compliant</p>
                <p>• End-to-End Encryption (AES-256)</p>
                <p>• Secure Payment Processing</p>
              </div>
            </div>
          </div>

          {/* Copyright & Additional Info */}
          <div className="pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
              <p>
                © {currentYear} TutorBot Plus, Inc. All rights reserved.
              </p>
              <p className="text-center md:text-right">
                Card payments processed securely. We do not store your credit card information.
                <br />
                Prices shown in USD. Your bank may apply currency conversion fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
