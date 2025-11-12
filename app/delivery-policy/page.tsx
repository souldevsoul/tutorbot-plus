"use client"

import { Container } from "@/components/ui/container"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import { Truck, Clock, Globe, Check } from "lucide-react"

export default function DeliveryPolicyPage() {
  const lastUpdated = "November 8, 2025"

  return (
    <main className="min-h-screen bg-white">
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

      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 border-2 border-black mb-8">
              <Truck className="w-6 h-6 text-white" />
              <span className="text-sm font-bold tracking-wider text-white">Delivery Policy</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Delivery Policy
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              TutorBot Plus is a digital service platform. Understand how we deliver our services to you.
            </p>
            <p className="text-sm font-bold text-gray-900">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Digital Service */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 border-2 border-black flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">1. Nature of Service</h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Digital Service Delivery</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    TutorBot Plus is a 100% digital service platform. We do not ship physical goods. All services are delivered electronically via our web application and API.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    There are no shipping addresses, tracking numbers, or physical delivery logistics involved with our service.
                  </p>
                </div>

                <div className="p-6 bg-green-50 border-2 border-black">
                  <h3 className="text-lg font-bold mb-3">What Gets Delivered</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Instant access to TutorBot Plus web application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>AI learning generation and tutoring services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Interactive course and lesson capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Generated learning content files (downloadable resources)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>API access for programmatic usage (Pro and Enterprise plans)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Delivery Timing */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 border-2 border-black flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">2. Delivery Timeframes</h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Account Access</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-bold">Delivery Time:</span> Instant
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    After successful payment processing, your account is immediately upgraded to the selected plan tier. Access is granted within seconds of payment confirmation.
                  </p>
                </div>

                <div className="p-6 bg-green-50 border-2 border-black">
                  <h3 className="text-lg font-bold mb-3">Learning Content Generation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span><span className="font-bold">Standard lesson generation:</span> 5-30 seconds depending on content length</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span><span className="font-bold">Course creation:</span> 2-5 minutes for initial content generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span><span className="font-bold">Batch processing:</span> Varies based on queue length and content volume</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Confirmation & Receipts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Email confirmation:</span> Sent immediately upon successful payment and service activation. Receipts include transaction details, plan information, and next billing date.
                  </p>
                </div>
              </div>
            </div>

            {/* Geographic Availability */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 border-2 border-black flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">3. Geographic Availability</h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Global Service</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    TutorBot Plus services are available worldwide. You can access our platform from anywhere with an internet connection.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Requirements:</span> Internet connection, modern web browser (Chrome, Firefox, Safari, Edge), valid payment method.
                  </p>
                </div>

                <div className="p-6 bg-green-50 border-2 border-black">
                  <h3 className="text-lg font-bold mb-3">Regional Restrictions</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our services may not be available in regions where:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>International sanctions prohibit service delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Local laws restrict AI-generated content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Payment processing is unavailable</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Contact <a href="mailto:support@tutorbot.plus" className="font-bold underline hover:no-underline">support@tutorbot.plus</a> to verify service availability in your region.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Interruptions */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 border-2 border-black flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">4. Service Availability & Uptime</h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Uptime Commitment</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-bold">Target Uptime:</span> 99.9% monthly uptime
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to maintain continuous service availability. Scheduled maintenance is announced in advance via email and status page.
                  </p>
                </div>

                <div className="p-6 bg-green-50 border-2 border-black">
                  <h3 className="text-lg font-bold mb-3">Planned Maintenance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Scheduled during low-traffic periods (typically 2-4 AM PST)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>48-hour advance notice via email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black font-bold">•</span>
                      <span>Real-time status updates at status.learningcraft.ai</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white border-2 border-black shadow-xl">
                  <h3 className="text-lg font-bold mb-3">Unplanned Outages</h3>
                  <p className="leading-relaxed mb-3">
                    In rare cases of unplanned service interruption:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>Immediate notification via status page and email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>Transparent ETAs for service restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>Post-incident reports for major outages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>Potential service credits for extended downtime (see Refund Policy)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise Delivery */}
            <div>
              <div className="p-8 bg-green-500 border-2 border-black shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Enterprise Customers</h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  <span className="font-bold">Custom Delivery Options:</span> Enterprise customers may have custom service delivery terms including:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Dedicated API endpoints with guaranteed response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Priority queue processing for batch jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Custom SLA with uptime guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>White-label delivery options</span>
                  </li>
                </ul>
                <p className="text-gray-900 leading-relaxed mt-4">
                  Contact: <a href="mailto:support@tutorbot.plus" className="underline hover:no-underline font-bold">support@tutorbot.plus</a>
                </p>
              </div>
            </div>

            {/* Failed Delivery */}
            <div>
              <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white border-2 border-black shadow-xl">
                <h2 className="text-2xl font-bold mb-4">
                  If Service Delivery Fails
                </h2>
                <p className="leading-relaxed mb-4">
                  If you experience issues accessing our service after payment:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold">1.</span>
                    <span>Check your email for payment confirmation and account activation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">2.</span>
                    <span>Verify your internet connection and browser compatibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">3.</span>
                    <span>Clear browser cache and cookies, then try logging in again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">4.</span>
                    <span>Check status.learningcraft.ai for any ongoing service issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">5.</span>
                    <span>Contact support@tutorbot.plus immediately - we'll resolve within 24 hours</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="p-8 bg-white border-2 border-black shadow-xl text-center">
                <h2 className="text-2xl font-bold mb-4">Delivery Support</h2>
                <p className="text-gray-700 mb-6">
                  Questions about service delivery or experiencing access issues?
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    <a href="mailto:support@tutorbot.plus" className="underline hover:no-underline">
                      support@tutorbot.plus
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Phone:</span>{" "}
                    <a href="tel:+14155551234" className="underline hover:no-underline">
                      +1 (415) 555-1234
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Status Page:</span>{" "}
                    <a href="https://status.learningcraft.ai" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                      status.learningcraft.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
