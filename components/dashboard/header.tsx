"use client"

import { useState } from 'react'
import { Bell, Search, User, Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth, useUser } from '@clerk/nextjs'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname, useRouter } from "next/navigation"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link"
import { UserButton } from '@clerk/nextjs'







export function Header ({ user }: { user: any }){
  const pathname = usePathname()
  const router = useRouter()
  const pathSegments = pathname.split('/').filter(Boolean)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">CivisHub</h1>
        <Breadcrumb className="hidden md:inline-flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`
              return (
                <BreadcrumbItem key={href}>
                  <BreadcrumbSeparator />
                  {index === pathSegments.length - 1 ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-1 items-center justify-center px-6">
        <form onSubmit={handleSearch} className="relative w-full max-w-lg">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services, records, or help..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                {notifications.length}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium leading-none">Notifications</h4>
                <Link href="/notifications" className="text-sm text-blue-500 hover:underline">View all</Link>
              </div>
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-4 text-sm">
                  <Bell className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className="grid gap-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <ModeToggle />
        <UserButton afterSignOutUrl='/'/>
        
        {/* <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              
            </Button> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/setting">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
  )
}

const notifications = [
  {
    title: "Tax Return Processed",
    description: "Your 2023 tax return has been processed. View details.",
  },
  {
    title: "Health Appointment Reminder",
    description: "You have an upcoming appointment on June 15, 2024.",
  },
  {
    title: "Passport Renewal Update",
    description: "Your passport renewal application has been approved.",
  },
]

