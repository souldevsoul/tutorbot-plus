import { Suspense } from "react"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  Folder,
  Coins,
  ArrowRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Text, Heading } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardQuickActions } from "@/components/dashboard/dashboard-quick-actions"

type DashboardStats = {
  totalLessons: number
  totalCourses: number
  totalProjects: number
  creditsRemaining: number
}

type RecentLesson = {
  id: string
  filename: string
  voiceName: string | null
  createdAt: string
  status: string
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Fetch all counts in parallel
    const [lessonsRes, coursesRes, projectsRes] = await Promise.all([
      fetch(`${baseUrl}/api/lessons?limit=1`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/courses?limit=1`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/projects?limit=1`, { cache: 'no-store' }),
    ])

    const [lessonsData, coursesData, projectsData] = await Promise.all([
      lessonsRes.ok ? lessonsRes.json() : { pagination: { total: 0 } },
      coursesRes.ok ? coursesRes.json() : { pagination: { total: 0 } },
      projectsRes.ok ? projectsRes.json() : { pagination: { total: 0 } },
    ])

    return {
      totalLessons: lessonsData.pagination?.total || 0,
      totalCourses: coursesData.pagination?.total || 0,
      totalProjects: projectsData.pagination?.total || 0,
      creditsRemaining: 1250, // TODO: Get from user subscription
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalLessons: 0,
      totalCourses: 0,
      totalProjects: 0,
      creditsRemaining: 0,
    }
  }
}

async function getRecentLessons(): Promise<RecentLesson[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/lessons?limit=5&sortBy=createdAt&sortOrder=desc`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('Failed to fetch recent lessons:', response.statusText)
      return []
    }

    const data = await response.json()

    if (!data.success || !data.lessons) {
      console.error('Invalid API response:', data)
      return []
    }

    // Map API response to RecentLesson type
    return data.lessons.map((audio: any) => ({
      id: audio.id,
      filename: audio.filename,
      voiceName: audio.voice?.name || null,
      createdAt: new Date(audio.createdAt).toISOString(),
      status: audio.status,
    }))
  } catch (error) {
    console.error('Error fetching recent lessons:', error)
    return []
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()
  const recentLessons = await getRecentLessons()

  const statCards = [
    {
      title: "Total Lessons",
      value: stats.totalLessons,
      icon: GraduationCap,
      color: "bg-blue-400",
      link: "/dashboard/lessons",
    },
    {
      title: "Cloned Courses",
      value: stats.totalCourses,
      icon: BookOpen,
      color: "bg-purple-400",
      link: "/dashboard/courses",
    },
    {
      title: "Active Projects",
      value: stats.totalProjects,
      icon: Folder,
      color: "bg-teal-400",
      link: "/dashboard/projects",
    },
    {
      title: "Credits",
      value: stats.creditsRemaining,
      icon: Coins,
      color: "bg-green-500",
      link: "#",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <Heading variant="h1" className="uppercase">
          Dashboard
        </Heading>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Link key={stat.title} href={stat.link}>
                <Card
                  variant="outlined"
                  className="p-6 transition-all hover:shadow-[8px_8px_0_0_#000] cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Text variant="caption" className="text-xs font-bold uppercase text-slate-600">
                        {stat.title}
                      </Text>
                      <Heading as="h2" className="text-3xl font-bold uppercase mt-2">
                        {stat.value}
                      </Heading>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center border-2 border-black ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Recent Lessons */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card variant="outlined" className="col-span-4 p-6">
            <div className="flex items-center justify-between">
              <Heading variant="h3" className="uppercase">
                Recent Lessons
              </Heading>
              <Link href="/dashboard/lessons">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {recentLessons.map((audio) => (
                <div
                  key={audio.id}
                  className="flex items-center justify-between border-2 border-black p-4 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <Text variant="body" className="font-medium">
                        {audio.filename}
                      </Text>
                      <Text variant="caption" className="text-xs text-slate-600">
                        {audio.voiceName || "No voice"}
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={audio.status === "ready" ? "success" : "warning"}
                      className="text-xs"
                    >
                      {audio.status}
                    </Badge>
                    <Text variant="caption" className="text-xs text-slate-500">
                      {new Date(audio.createdAt).toLocaleTimeString()}
                    </Text>
                  </div>
                </div>
              ))}

              {recentLessons.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-black p-8">
                  <GraduationCap className="h-12 w-12 text-slate-400" />
                  <Text variant="body" className="mt-2 text-slate-600">
                    No recent lessons
                  </Text>
                </div>
              )}
            </div>
          </Card>

          {/* Credits Card */}
          <Card variant="outlined" className="col-span-3 p-6">
            <div className="flex items-center justify-between">
              <Heading variant="h3" className="uppercase">
                Credits
              </Heading>
              <Button variant="primary" size="sm">
                Buy More
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center border-2 border-black bg-green-500">
                  <div className="text-center">
                    <Heading as="h2" className="text-4xl font-bold">
                      {stats.creditsRemaining}
                    </Heading>
                    <Text variant="caption" className="text-xs uppercase">
                      Remaining
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t-2 border-black pt-4">
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    Course Generation
                  </Text>
                  <Text variant="body" className="font-medium">
                    10 credits
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    Course Cloning
                  </Text>
                  <Text variant="body" className="font-medium">
                    50 credits
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text variant="caption" className="text-slate-600">
                    AI Estimation
                  </Text>
                  <Text variant="body" className="font-medium">
                    5 credits
                  </Text>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <DashboardQuickActions />
      </Suspense>
    </div>
  )
}
