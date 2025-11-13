"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Code,
  GraduationCap,
} from "lucide-react"

export default function BlogPage() {
  const categories = [
    { name: "All Posts", slug: "all", count: 24 },
    { name: "Learning Tips", slug: "tips", count: 8 },
    { name: "Study Guides", slug: "guides", count: 10 },
    { name: "Success Stories", slug: "stories", count: 6 },
  ]

  const featuredPost = {
    title: "How AI-Powered Tutoring Is Transforming Modern Education",
    excerpt: "Discover how personalized learning with AI tutors is transforming education and helping students achieve their academic goals faster.",
    category: "Success Stories",
    date: "Nov 8, 2025",
    readTime: "8 min read",
    author: "TutorBot Plus Team",
    image: "featured",
  }

  const blogPosts = [
    {
      title: "Getting Started with AI Tutoring: A Complete Guide",
      excerpt: "Learn how to create personalized learning paths using AI technology. From setting goals to tracking your progress.",
      category: "Study Guides",
      date: "Nov 5, 2025",
      readTime: "12 min read",
      author: "Sarah Chen",
      tag: "Beginner",
    },
    {
      title: "10 Effective Study Techniques with AI Support",
      excerpt: "Discover proven study methods enhanced by AI: from spaced repetition to interactive quizzes and adaptive learning.",
      category: "Learning Tips",
      date: "Nov 3, 2025",
      readTime: "6 min read",
      author: "Marcus Johnson",
      tag: "Popular",
    },
    {
      title: "Mastering Math with Personalized AI Tutoring",
      excerpt: "How adaptive learning algorithms tailor math instruction to your pace and style, leading to better understanding.",
      category: "Study Guides",
      date: "Nov 1, 2025",
      readTime: "10 min read",
      author: "Dr. Emily Rodriguez",
      tag: "Technical",
    },
    {
      title: "Comparing AI Tutoring Platforms: What Makes TutorBot Plus Stand Out",
      excerpt: "A comprehensive comparison of top AI tutoring platforms: features, effectiveness, pricing, and learning outcomes.",
      category: "Learning Tips",
      date: "Oct 28, 2025",
      readTime: "15 min read",
      author: "TutorBot Plus Team",
      tag: "Popular",
    },
    {
      title: "How Students Are Using AI to Improve Test Scores",
      excerpt: "Case study: How high school students improved their SAT scores by 200+ points using personalized AI tutoring.",
      category: "Success Stories",
      date: "Oct 25, 2025",
      readTime: "7 min read",
      author: "Alex Turner",
      tag: "Case Study",
    },
    {
      title: "Effective Time Management for Online Learning",
      excerpt: "Essential tips for balancing studies with AI tutoring: scheduling, goal setting, and staying motivated.",
      category: "Learning Tips",
      date: "Oct 22, 2025",
      readTime: "11 min read",
      author: "Study Success Team",
      tag: "Technical",
    },
    {
      title: "The Future of Personalized Education",
      excerpt: "How AI technology is revolutionizing education and making quality tutoring accessible to every student.",
      category: "Learning Tips",
      date: "Oct 19, 2025",
      readTime: "8 min read",
      author: "Sarah Chen",
      tag: "Trending",
    },
    {
      title: "Optimizing Your Learning Path: Pro Tips",
      excerpt: "Advanced strategies for maximizing retention: active recall, interleaved practice, and progress tracking.",
      category: "Study Guides",
      date: "Oct 16, 2025",
      readTime: "9 min read",
      author: "Marcus Johnson",
      tag: "Pro Tips",
    },
    {
      title: "AI Tutoring for Special Needs: An Educator's Perspective",
      excerpt: "How AI-powered personalized instruction is creating more inclusive and accessible learning experiences.",
      category: "Success Stories",
      date: "Oct 13, 2025",
      readTime: "6 min read",
      author: "Jennifer Liu",
      tag: "Education",
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
      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 border-2 border-black mb-8">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm font-bold tracking-wider">Blog</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Learning Insights & Success Stories
            </h1>
            <p className="text-xl text-gray-700">
              Study guides, learning tips, success stories, and everything you need to master your subjects
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-green-50 border-b-8 border-yellow-400">
        <Container maxWidth="xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 font-bold uppercase text-sm border-2 ${
                  index === 0
                    ? "bg-green-500 text-black border-yellow-400"
                    : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                } transition-all`}
              >
                {category.name}
                <span className="ml-2">({category.count})</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <Container maxWidth="xl">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Featured Post</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-black shadow-xl-yellow p-8">
            <div className="bg-green-500 border-2 border-black aspect-video flex items-center justify-center">
              <GraduationCap className="w-24 h-24 text-black" />
            </div>

            <div className="flex flex-col justify-center text-white">
              <div className="inline-flex items-center gap-2 text-green-500 text-xs font-bold mb-3">
                <span className="px-3 py-1 bg-green-500 text-black border-2 border-yellow-400">
                  {featuredPost.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4 leading-tight text-green-500">
                {featuredPost.title}
              </h3>

              <p className="text-white mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <Button
                size="lg"
                className="bg-green-500 text-black border-2 border-yellow-400 font-bold w-fit"
              >
                Read Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-700">
              Stay updated with the latest learning strategies and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const bgColors = ["bg-white", "bg-gradient-to-br from-blue-50 to-green-50", "bg-green-500"]
              const textColors = ["text-black", "text-green-500", "text-black"]
              const excerptColors = ["text-gray-700", "text-white", "text-gray-900"]
              const metaColors = ["text-gray-600", "text-gray-300", "text-gray-700"]
              const colorIndex = index % 3

              const tagIcons: { [key: string]: any } = {
                Popular: TrendingUp,
                Technical: Code,
                Beginner: Lightbulb,
              }

              const TagIcon = tagIcons[post.tag] || BookOpen

              return (
                <div
                  key={index}
                  className={`${bgColors[colorIndex]} border-2 border-black ${
                    colorIndex === 1 ? "shadow-xl-yellow" : "shadow-xl"
                  } overflow-hidden flex flex-col`}
                >
                  {/* Image Placeholder */}
                  <div
                    className={`h-48 ${
                      colorIndex === 1 ? "bg-green-500" : colorIndex === 2 ? "bg-gradient-to-br from-blue-50 to-green-50" : "bg-gray-200"
                    } border-b-4 border-black flex items-center justify-center`}
                  >
                    <BookOpen
                      className={`w-16 h-16 ${
                        colorIndex === 1 ? "text-black" : colorIndex === 2 ? "text-green-500" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-bold px-3 py-1 ${
                          colorIndex === 1
                            ? "bg-green-500 text-black"
                            : colorIndex === 2
                            ? "bg-gradient-to-br from-blue-50 to-green-50 text-green-500"
                            : "bg-gradient-to-br from-blue-50 to-green-50 text-green-500"
                        }`}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <TagIcon
                          className={`w-4 h-4 ${
                            colorIndex === 1 ? "text-green-500" : "text-black"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold ${metaColors[colorIndex]}`}
                        >
                          {post.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 leading-tight ${textColors[colorIndex]}`}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`mb-4 text-sm leading-relaxed flex-1 ${excerptColors[colorIndex]}`}>
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className={`flex items-center gap-4 text-xs ${metaColors[colorIndex]} mb-4`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More */}
                    <button
                      className={`w-full py-3 font-bold text-sm border-2 ${
                        colorIndex === 1
                          ? "bg-green-500 text-black border-yellow-400 hover:bg-yellow-300"
                          : colorIndex === 2
                          ? "bg-gradient-to-br from-blue-50 to-green-50 text-green-500 border-black hover:bg-gray-900"
                          : "bg-gradient-to-br from-blue-50 to-green-50 text-green-500 border-black hover:bg-gray-900"
                      } transition-all`}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              size="xl"
              variant="outline"
              className="gap-3 bg-white text-black border-2 border-black font-bold shadow-xl"
            >
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50 border-y-8 border-yellow-400">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
              Stay Updated
            </h2>
            <p className="text-xl text-white mb-8">
              Get the latest learning tips, study guides, and success stories delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-white font-medium text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
              />
              <Button
                size="lg"
                className="bg-green-500 text-black border-2 border-yellow-400 font-bold px-8 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="text-green-500 underline hover:no-underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
