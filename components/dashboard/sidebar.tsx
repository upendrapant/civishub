"use client"

import { useState } from 'react'
import { Home, Calculator, Heart, FileText, HelpCircle, Bell, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Calculator, label: "Taxes", href: "/taxes" },
  { icon: Heart, label: "Health Records", href: "/health" },
  { icon: FileText, label: "Citizenship Services", href: "/citizenship" },
  { icon: FolderOpen, label: "Documents", href: "/documents" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: HelpCircle, label: "Help & Support", href: "/help" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <TooltipProvider>
      <motion.nav
        className={cn(
          "bg-card p-4 transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64"
        )}
        animate={{ width: isCollapsed ? 64 : 256 }}
      >
        <div className="space-y-4">
          <Button
            variant="ghost"
            className="w-full justify-end p-0"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-accent text-accent-foreground",
                    isCollapsed && "justify-center"
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">
                  {item.label}
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </motion.nav>
    </TooltipProvider>
  )
}

