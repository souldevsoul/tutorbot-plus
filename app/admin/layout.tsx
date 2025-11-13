import Link from "next/link"
import {
  LayoutDashboard,
  FolderOpen,
  User,
  Users,
  DollarSign,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react"
import { Text, Heading } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: FolderOpen },
  { name: "Users", href: "/admin/users", icon: User },
  { name: "Specialists", href: "/admin/specialists", icon: Users },
  { name: "Financials", href: "/admin/financials", icon: DollarSign },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <Heading variant="h2" className="text-xl font-bold">
            TutorBot Plus
          </Heading>
        </div>

        <div className="border-b border-gray-200 bg-blue-50 p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
            <Text variant="caption" className="text-xs font-bold text-blue-900">
              Admin Portal
            </Text>
          </div>
          <Text variant="body" className="mt-1 text-sm font-bold text-blue-800">
            Platform Management
          </Text>
        </div>

        <nav className="space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 border border-transparent px-4 py-3 font-medium text-gray-700 transition-all hover:border-blue-200 hover:bg-blue-50 rounded-lg"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="w-full" type="button">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Switch to User
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
