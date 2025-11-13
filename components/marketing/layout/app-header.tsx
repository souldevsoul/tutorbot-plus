"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap, User, LogOut, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type AppHeaderProps = {
  user?: {
    name: string
    email: string
    credits: number
  } | null
}

export function AppHeader({ user }: AppHeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">TutorBot Plus</span>
        </Link>

        {/* Empty space for balance - nav links removed as they're in dropdown */}
        <div className="flex-1" />

        {/* User Dropdown or Get Started */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="md"
                className="border-2 border-black font-bold uppercase hover:bg-green-50"
                type="button"
              >
                <User className="mr-2 h-4 w-4" />
                {user.name || "User"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 border-2 border-black">
              <DropdownMenuLabel className="font-bold uppercase">
                {user.name || "User"}
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-xs text-slate-600 font-normal">
                {user.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-black" />
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="cursor-pointer">
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/courses" className="cursor-pointer">
                  Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/lessons" className="cursor-pointer">
                  Lessons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/projects" className="cursor-pointer">
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-black" />
              <DropdownMenuItem disabled>
                <Coins className="mr-2 h-4 w-4" />
                <span className="font-bold">{user.credits.toLocaleString()} Credits</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-black" />
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            size="md"
            className="bg-green-500 text-black hover:bg-yellow-300 border-2 border-black font-bold uppercase"
            asChild
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
