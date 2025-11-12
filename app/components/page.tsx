"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heading, Text } from "@/components/ui/typography"
import { Footer } from "@/components/marketing/layout/footer"
import {
  FeatureCard,
  PricingCard,
  TestimonialCard,
  BlogCard,
  StatCard
} from "@/components/marketing/cards"
import {
  Waveform,
  AudioPlayer,
  VoiceSelector,
  GenerationProgress,
  VoiceCloneUploader,
  type Voice,
  type GenerationStep,
  type UploadedFile
} from "@/components/voicecraft"
// Lucide icons only
import {
  Rocket,
  Zap,
  Sparkles as SparklesIcon,
  Save,
  Trash2,
  ExternalLink,
  ArrowRight as ArrowRightIcon,
  PlayCircle,
  Download,
  Star as StarIcon,
  Check,
  Settings as SettingsIcon,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Award,
  Brain,
  LayoutDashboard,
  BarChart3,
  Users as UsersIcon,
  Activity,
  Mic,
  Box,
  Code as CodeIcon,
  Package,
  Layers
} from "lucide-react"

export default function ComponentsPage() {
  const [selectedVoice, setSelectedVoice] = React.useState<string | undefined>()
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>([])
  const [voiceName, setVoiceName] = React.useState("")

  // Sample data
  const sampleVoices: Voice[] = [
    {
      id: "1",
      name: "Emma Watson",
      language: "en-US",
      gender: "female",
      description: "Professional, warm, and articulate tutor perfect for explanations",
      previewUrl: "/audio/sample1.mp3",
      isFavorite: true,
    },
    {
      id: "2",
      name: "James Morgan",
      language: "en-GB",
      gender: "male",
      description: "Deep, authoritative voice ideal for lectures",
      previewUrl: "/audio/sample2.mp3",
    },
    {
      id: "3",
      name: "My Custom Tutor",
      language: "en-US",
      gender: "neutral",
      description: "Your personalized tutor for learning sessions",
      isCloned: true,
      isFavorite: true,
    },
  ]

  const sampleGenerationSteps: GenerationStep[] = [
    { id: "1", label: "Content Analysis", status: "completed", progress: 100 },
    { id: "2", label: "Lesson Generation", status: "processing", progress: 65 },
    { id: "3", label: "Material Rendering", status: "queued", progress: 0 },
  ]

  const handleFilesUpload = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file, index) => ({
      id: `file-${Date.now()}-${index}`,
      file,
      url: URL.createObjectURL(file),
      status: "uploading" as const,
    }))
    setUploadedFiles(prev => [...prev, ...newFiles])

    setTimeout(() => {
      setUploadedFiles(prev =>
        prev.map(f =>
          newFiles.find(nf => nf.id === f.id)
            ? { ...f, status: "ready" as const, duration: 15 }
            : f
        )
      )
    }, 2000)
  }

  const handleFileRemove = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Modern Educational Style */}
      <div className="border-b-4 border-blue-200 bg-white sticky top-0 z-50">
        <Container maxWidth="xl">
          <div className="py-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <Heading variant="h1" className="text-gray-900">
                Component Library
              </Heading>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <Text variant="body-lg" className="text-gray-700 max-w-2xl font-semibold">
                A modern, clean design system for educational platforms
              </Text>
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="xl" className="py-16 space-y-28">
        {/* Core UI Components */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Box className="w-6 h-6 text-white" />
              </div>
              <Heading variant="h2" className="text-gray-900">Core Components</Heading>
            </div>
            <div className="h-1 w-24 bg-blue-500 rounded" />
          </div>

          {/* Buttons with Bold Design */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-green-500" />
              <Heading variant="h3" className="text-black uppercase">Interactive Buttons</Heading>
            </div>
            <div className="space-y-10">
              {/* Primary Actions - Black Background */}
              <div className="p-10 bg-black border-2 border-black shadow-xl">
                <Text variant="body-sm" className="text-green-500 mb-6 font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500" />
                  Primary Actions
                </Text>
                <div className="flex flex-wrap gap-6">
                  <Button variant="primary" className="gap-2 bg-green-500 text-black hover:bg-yellow-300 border-2 border-black font-bold uppercase">
                    <Rocket className="w-5 h-5" />
                    Launch
                  </Button>
                  <Button variant="primary" className="gap-2 bg-green-500 text-black hover:bg-yellow-300 border-2 border-black font-bold uppercase">
                    <Save className="w-5 h-5" />
                    Save
                  </Button>
                  <Button variant="primary" className="gap-2 bg-green-500 text-black hover:bg-yellow-300 border-2 border-black font-bold uppercase">
                    <PlayCircle className="w-6 h-6" />
                    Start
                  </Button>
                  <Button variant="primary" className="gap-2 bg-green-500 text-black hover:bg-yellow-300 border-2 border-black font-bold uppercase">
                    <Download className="w-5 h-5" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Secondary Actions - White Background */}
              <div className="p-10 bg-white border-2 border-black shadow-xl-yellow">
                <Text variant="body-sm" className="text-black mb-6 font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="w-4 h-4 bg-black" />
                  Secondary Actions
                </Text>
                <div className="flex flex-wrap gap-6">
                  <Button variant="secondary" className="gap-2 bg-white text-black hover:bg-gray-100 border-2 border-black font-bold uppercase">
                    <SettingsIcon className="w-5 h-5" />
                    Settings
                  </Button>
                  <Button variant="outline" className="gap-2 bg-white text-black border-2 border-black hover:bg-green-500 font-bold uppercase">
                    <ExternalLink className="w-5 h-5" />
                    View
                  </Button>
                  <Button variant="ghost" className="gap-2 text-black hover:bg-green-500 border-2 border-transparent hover:border-black font-bold uppercase">
                    <ArrowRightIcon className="w-5 h-5" />
                    More
                  </Button>
                  <Button variant="destructive" className="gap-2 bg-white text-black hover:bg-red-500 hover:text-white border-2 border-black font-bold uppercase">
                    <Trash2 className="w-5 h-5" />
                    Delete
                  </Button>
                </div>
              </div>

              {/* Size Variations */}
              <div className="p-10 bg-green-500 border-2 border-black">
                <Text variant="body-sm" className="text-black mb-6 font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="w-4 h-4 bg-black" />
                  Button Sizes
                </Text>
                <div className="flex flex-wrap items-center gap-6">
                  <Button size="sm" className="gap-2 bg-black text-green-500 border-2 border-black font-bold uppercase">
                    <StarIcon className="w-3.5 h-3.5" />
                    Small
                  </Button>
                  <Button size="md" className="gap-2 bg-black text-green-500 border-2 border-black font-bold uppercase">
                    <StarIcon className="w-4 h-4" />
                    Medium
                  </Button>
                  <Button size="lg" className="gap-2 bg-black text-green-500 border-2 border-black font-bold uppercase">
                    <StarIcon className="w-5 h-5" />
                    Large
                  </Button>
                  <Button size="xl" className="gap-2 bg-black text-green-500 border-2 border-black font-bold uppercase">
                    <StarIcon className="w-5 h-5" />
                    XL
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bold Cards */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-green-500" />
              <Heading variant="h3" className="text-black uppercase">Card Styles</Heading>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Minimal Card */}
              <Card variant="default" padding="lg" className="group bg-white border-2 border-black hover:shadow-xl-yellow transition-all duration-200">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Brain className="w-8 h-8 text-green-500 group-hover:text-black" />
                </div>
                <Heading variant="h4" className="mb-3 uppercase">White Card</Heading>
                <Text variant="body-sm" className="text-gray-700 mb-6 font-semibold">
                  Clean white background with bold black borders
                </Text>
                <Button variant="ghost" size="sm" className="gap-2 text-black hover:text-green-500 font-bold uppercase border-2 border-black">
                  Explore
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>

              {/* Black Card */}
              <Card variant="elevated" padding="lg" className="group bg-black border-2 border-black shadow-xl">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-black">
                  <Activity className="w-8 h-8 text-black" />
                </div>
                <Heading variant="h4" className="mb-3 text-green-500 uppercase">Black Card</Heading>
                <Text variant="body-sm" className="text-gray-300 mb-6 font-semibold">
                  Bold black background with dramatic yellow accents
                </Text>
                <Button variant="secondary" size="sm" className="gap-2 bg-green-500 text-black border-2 border-yellow-400 font-bold uppercase">
                  Discover
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Card>

              {/* Yellow Card */}
              <Card variant="gradient" padding="lg" className="group bg-green-500 border-2 border-black hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-black">
                  <SparklesIcon className="w-8 h-8 text-green-500" />
                </div>
                <Heading variant="h4" className="mb-3 text-black uppercase">Yellow Highlight</Heading>
                <Text variant="body-sm" className="text-gray-900 mb-6 font-semibold">
                  Eye-catching yellow for important call-to-actions
                </Text>
                <Button variant="primary" size="sm" className="gap-2 bg-black text-green-500 border-2 border-black font-bold uppercase">
                  View More
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>

          {/* Bold Inputs */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-green-500" />
              <Heading variant="h3" className="text-black uppercase">Input Fields</Heading>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div className="p-8 bg-white border-2 border-black">
                <label className="block text-sm font-bold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Default Input
                </label>
                <Input variant="default" placeholder="ENTER TEXT..." className="border-2 border-black font-semibold uppercase" />
              </div>
              <div className="p-8 bg-green-500 border-2 border-black shadow-xl">
                <label className="block text-sm font-bold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Success State
                </label>
                <Input variant="success" placeholder="VALID INPUT..." className="border-2 border-black font-semibold uppercase" />
              </div>
              <div className="p-8 bg-white border-2 border-black">
                <label className="block text-sm font-bold text-black mb-4 uppercase tracking-wide">
                  Error State
                </label>
                <Input variant="error" placeholder="CHECK THIS FIELD..." className="border-2 border-red-500 font-semibold uppercase" />
              </div>
              <div className="p-8 bg-black border-2 border-black">
                <label className="block text-sm font-bold text-green-500 mb-4 uppercase tracking-wide">
                  Large Input
                </label>
                <Input inputSize="lg" placeholder="LARGER TEXT..." className="border-2 border-yellow-400 bg-white font-semibold uppercase" />
              </div>
            </div>
          </div>

          {/* Typography Showcase */}
          <div className="p-12 bg-white border-2 border-black shadow-xl-yellow">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 bg-green-500" />
              <Heading variant="h3" className="text-black uppercase">Typography Scale</Heading>
            </div>
            <div className="space-y-8">
              <div className="pb-6 border-b-4 border-black">
                <Heading variant="h1" className="text-black uppercase">DISPLAY LARGE</Heading>
                <Text variant="caption" className="text-gray-600 mt-2 font-bold uppercase">Hero sections and major headlines</Text>
              </div>
              <div className="pb-6 border-b-4 border-gray-200">
                <Heading variant="h2" className="text-black uppercase">DISPLAY MEDIUM</Heading>
                <Text variant="caption" className="text-gray-600 mt-2 font-bold uppercase">Section titles</Text>
              </div>
              <div className="pb-6 border-b-4 border-gray-200">
                <Heading variant="h3" className="text-black uppercase">DISPLAY SMALL</Heading>
                <Text variant="caption" className="text-gray-600 mt-2 font-bold uppercase">Subsection titles</Text>
              </div>
              <div className="pb-6 border-b-4 border-gray-200">
                <Heading variant="h4" className="text-black uppercase">TITLE LARGE</Heading>
                <Text variant="caption" className="text-gray-600 mt-2 font-bold uppercase">Card headers</Text>
              </div>
              <div className="p-6 bg-green-500 border-2 border-black">
                <Heading variant="h2" className="text-black uppercase">
                  BOLD YELLOW HIGHLIGHT
                </Heading>
                <Text variant="body-sm" className="text-black mt-3 font-semibold uppercase">For maximum impact and attention</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Cards */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 flex items-center justify-center border-2 border-black">
                <BarChart3 className="w-6 h-6 text-black" />
              </div>
              <Heading variant="h2" className="text-black uppercase">Marketing Components</Heading>
            </div>
            <div className="h-1 w-24 bg-green-500" />
          </div>

          {/* Feature Cards */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Feature Showcase</Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Sparkles}
                iconColor="text-yellow-500"
                title="AI-POWERED"
                description="Generate personalized learning content using cutting-edge AI technology"
              />
              <FeatureCard
                icon={Zap}
                iconColor="text-black"
                title="LIGHTNING FAST"
                description="Generate learning materials in seconds, not minutes"
              />
              <FeatureCard
                icon={Shield}
                iconColor="text-yellow-500"
                title="SECURE"
                description="Your learning data is encrypted and never shared"
              />
            </div>
          </div>

          {/* Stat Cards */}
          <div>
            <Heading variant="h3" className="mb-8 text-black uppercase">Platform Statistics</Heading>
            <div className="grid md:grid-cols-4 gap-6">
              <StatCard
                value="2M+"
                label="LESSONS GENERATED"
                icon={TrendingUp}
                trend={{ value: "+45%", direction: "up" }}
              />
              <StatCard
                value="75K+"
                label="ACTIVE USERS"
                icon={Users}
              />
              <StatCard
                value="4.9"
                label="RATING"
                icon={Star}
              />
              <StatCard
                value="99.9%"
                label="UPTIME"
                icon={Award}
              />
            </div>
          </div>
        </section>

        {/* TutorBot Plus Components */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black shadow-xl-yellow">
                <Mic className="w-6 h-6 text-green-500" />
              </div>
              <Heading variant="h2" className="text-black uppercase">Tutoring Components</Heading>
            </div>
            <div className="h-1 w-24 bg-black" />
          </div>

          {/* Waveform */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Visual Waveform</Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="elevated" padding="lg" className="bg-white border-2 border-black">
                <Text variant="body-sm" className="text-black mb-4 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Small
                </Text>
                <Waveform size="sm" color="primary" />
              </Card>
              <Card variant="elevated" padding="lg" className="bg-green-500 border-2 border-black shadow-xl">
                <Text variant="body-sm" className="text-black mb-4 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Medium
                </Text>
                <Waveform size="md" color="secondary" />
              </Card>
              <Card variant="elevated" padding="lg" className="bg-black border-2 border-black">
                <Text variant="body-sm" className="text-green-500 mb-4 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Large
                </Text>
                <Waveform size="lg" color="success" />
              </Card>
            </div>
          </div>

          {/* Audio Player */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Media Player</Heading>
            <div className="max-w-2xl">
              <Card variant="elevated" padding="lg" className="bg-white border-2 border-black shadow-xl-yellow">
                <AudioPlayer
                  title="WELCOME MESSAGE"
                  subtitle="Generated with TutorBot Plus"
                  waveformColor="primary"
                />
              </Card>
            </div>
          </div>

          {/* Voice Selector */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Tutor Selection</Heading>
            <VoiceSelector
              voices={sampleVoices}
              selectedVoiceId={selectedVoice}
              onVoiceSelect={(voice) => setSelectedVoice(voice.id)}
              layout="grid"
            />
          </div>

          {/* Generation Progress - Temporarily disabled due to caching issue */}
          {/* <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Generation Progress</Heading>
            <div className="max-w-2xl space-y-4">
              <Card variant="elevated" padding="lg" className="bg-white border-2 border-black shadow-xl-yellow">
                <GenerationProgress
                  status="processing"
                  progress={65}
                  steps={sampleGenerationSteps}
                  message="Generating your voice..."
                  estimatedTime={30}
                />
              </Card>
              <Card variant="elevated" padding="lg" className="bg-black border-2 border-black shadow-xl">
                <GenerationProgress
                  status="completed"
                  progress={100}
                  message="Voice generation complete!"
                />
              </Card>
            </div>
          </div> */}

          {/* Content Uploader */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Content Uploader</Heading>
            <div className="max-w-2xl">
              <Card variant="elevated" padding="lg" className="bg-white border-2 border-black shadow-xl-yellow">
                <VoiceCloneUploader
                  onFilesUpload={(files) => setUploadedFiles(files.map((file, index) => ({
                    id: `file-${index}`,
                    file,
                    url: URL.createObjectURL(file),
                    status: "ready" as const
                  })))}
                  uploadedFiles={uploadedFiles}
                  voiceName={voiceName}
                  onVoiceNameChange={setVoiceName}
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Marketing Card Components */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 flex items-center justify-center border-2 border-black">
                <LayoutDashboard className="w-6 h-6 text-black" />
              </div>
              <Heading variant="h2" className="text-black uppercase">Marketing Cards</Heading>
            </div>
            <div className="h-1 w-24 bg-green-500" />
          </div>

          {/* Pricing Cards */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Pricing Cards</Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                name="STARTER"
                price={0}
                period="month"
                description="Perfect for trying out TutorBot Plus"
                features={[
                  { text: "10,000 characters/month", included: true },
                  { text: "5 tutor voices", included: true },
                  { text: "MP3 downloads", included: true },
                  { text: "Custom tutors", included: false },
                  { text: "Commercial use", included: false },
                ]}
                ctaText="GET STARTED FREE"
                ctaHref="/signup"
              />
              <PricingCard
                name="PRO"
                price={29}
                period="month"
                description="For professionals and creators"
                popular={true}
                variant="premium"
                features={[
                  { text: "100,000 characters/month", included: true },
                  { text: "50+ tutor voices", included: true },
                  { text: "WAV & MP3 downloads", included: true },
                  { text: "3 custom tutors", included: true },
                  { text: "Commercial use", included: true },
                ]}
                ctaText="START FREE TRIAL"
                ctaHref="/signup?plan=pro"
              />
              <PricingCard
                name="ENTERPRISE"
                price="Custom"
                description="For teams and organizations"
                features={[
                  { text: "Unlimited characters", included: true },
                  { text: "All tutor voices", included: true },
                  { text: "All media formats", included: true },
                  { text: "Unlimited custom tutors", included: true },
                  { text: "Full API access", included: true },
                ]}
                ctaText="CONTACT SALES"
                ctaHref="/contact"
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Testimonial Cards</Heading>
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="TutorBot Plus has completely transformed our educational content creation. We've cut production time by 80% while maintaining incredible quality."
                author="Sarah Johnson"
                role="CEO"
                company="EduTech Publishing"
                rating={5}
                image="SJ"
              />
              <TestimonialCard
                quote="The personalized tutoring feature is a game-changer. I can now create consistent learning content for all my courses in minutes instead of hours."
                author="Mike Chen"
                role="Course Creator"
                company="TechLearn Daily"
                rating={5}
                image="MC"
              />
            </div>
          </div>

          {/* Blog Cards */}
          <div>
            <Heading variant="h3" className="mb-8 text-black uppercase">Blog Cards</Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <BlogCard
                title="GETTING STARTED WITH AI TUTORING"
                excerpt="Learn how to create your first AI-powered lesson in just 5 minutes with our comprehensive guide."
                image="/images/waveform-visual-bw.jpg"
                date="2024-01-15"
                readTime="5 min read"
                category="TUTORIAL"
                href="/blog/getting-started"
              />
              <BlogCard
                title="PERSONALIZED LEARNING: THE COMPLETE GUIDE"
                excerpt="Everything you need to know about creating personalized lessons with AI, from basics to advanced techniques."
                image="/images/ai-assistant-bw.jpg"
                date="2024-01-10"
                readTime="8 min read"
                category="GUIDE"
                href="/blog/personalized-learning-guide"
              />
              <BlogCard
                title="10 CREATIVE USES FOR AI TUTORING"
                excerpt="Discover innovative ways educators are using AI tutoring technology to enhance their teaching."
                image="/images/headphones-bw.jpg"
                date="2024-01-05"
                readTime="6 min read"
                category="INSPIRATION"
                href="/blog/creative-uses"
              />
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 flex items-center justify-center border-2 border-black shadow-xl">
                <UsersIcon className="w-6 h-6 text-black" />
              </div>
              <Heading variant="h2" className="text-black uppercase">Design Tokens</Heading>
            </div>
            <div className="h-1 w-24 bg-green-500" />
          </div>

          {/* Bold Color Palette */}
          <div className="mb-20">
            <Heading variant="h3" className="mb-8 text-black uppercase">Bold Color System</Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-black border-2 border-black shadow-xl-yellow">
                <Text variant="body-sm" className="text-green-500 mb-6 font-bold uppercase tracking-wide">
                  Monochrome Base
                </Text>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-black border-2 border-yellow-400" />
                    <div>
                      <Text variant="body-sm" className="font-bold text-white uppercase">Black</Text>
                      <Text variant="body-sm" className="text-gray-400 font-mono">#000000</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-white border-2 border-yellow-400" />
                    <div>
                      <Text variant="body-sm" className="font-bold text-white uppercase">White</Text>
                      <Text variant="body-sm" className="text-gray-400 font-mono">#FFFFFF</Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-green-500 border-2 border-black shadow-xl">
                <Text variant="body-sm" className="text-black mb-6 font-bold uppercase tracking-wide">
                  Yellow Highlight
                </Text>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-green-500 border-2 border-black" />
                    <div>
                      <Text variant="body-sm" className="font-bold uppercase">Yellow 500</Text>
                      <Text variant="body-sm" className="text-gray-800 font-mono">#EAB308</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-green-500 border-2 border-black" />
                    <div>
                      <Text variant="body-sm" className="font-bold uppercase">Yellow 400</Text>
                      <Text variant="body-sm" className="text-gray-800 font-mono">#FACC15</Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white border-2 border-black">
                <Text variant="body-sm" className="text-black mb-6 font-bold uppercase tracking-wide">
                  Bold Shadows
                </Text>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-green-500 border-2 border-black shadow-xl" />
                  <Text variant="body-sm" className="font-bold uppercase">Brutalist Shadow</Text>
                  <div className="w-20 h-20 bg-black border-2 border-black shadow-xl-yellow" />
                  <Text variant="body-sm" className="font-bold uppercase">Yellow Shadow</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing System */}
          <div className="p-10 bg-white border-2 border-black shadow-xl-yellow">
            <Heading variant="h3" className="mb-8 text-black uppercase">Spacing System (8pt Grid)</Heading>
            <div className="space-y-4">
              {[1, 2, 3, 4, 6, 8, 12, 16, 20].map(multiplier => (
                <div key={multiplier} className="flex items-center gap-6">
                  <div className="w-32 text-sm text-black font-mono font-bold uppercase">
                    SPACE-{multiplier}
                  </div>
                  <div
                    className="h-12 bg-black border-2 border-black"
                    style={{ width: `${multiplier * 0.25}rem` }}
                  />
                  <div className="text-sm text-gray-600 font-mono font-bold">
                    {multiplier * 0.25}rem ({multiplier * 4}px)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      {/* Footer CTA - Bold Black & Yellow */}
      <div className="bg-black py-24 mt-28 border-t-8 border-yellow-400">
        <Container maxWidth="lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 border-2 border-black mb-8">
              <SparklesIcon className="w-6 h-6 text-black" />
              <Text variant="body-sm" className="text-black font-bold uppercase tracking-wider">Ready to Build?</Text>
            </div>
            <Heading variant="h1" className="mb-6 text-green-500 uppercase">START BUILDING NOW</Heading>
            <Text variant="body-lg" className="mb-12 text-gray-300 max-w-2xl mx-auto font-semibold uppercase">
              Use these bold components to create powerful learning experiences
            </Text>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button variant="primary" size="xl" className="gap-3 bg-green-500 text-black border-2 border-yellow-400 font-bold uppercase shadow-xl-yellow">
                <CodeIcon className="w-6 h-6" />
                View Documentation
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="gap-3 text-green-500 border-2 border-yellow-400 hover:bg-green-500 hover:text-black font-bold uppercase"
              >
                <Download className="w-6 h-6" />
                Download Kit
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
