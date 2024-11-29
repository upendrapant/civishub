"use client"

import { useState, useEffect } from 'react'
import { Home, Calculator, Heart, FileText, HelpCircle, Bell, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Calculator, label: "Taxes", href: "/dashboard/taxes" },
  { icon: Heart, label: "Health Records", href: "/dashboard/health" },
  { icon: FileText, label: "Citizenship Services", href: "/dashboard/citizenship" },
  { icon: FolderOpen, label: "Documents", href: "/dashboard/documents" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: HelpCircle, label: "Help & Support", href: "/dashboard/help" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
          <AnimatePresence>
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Tooltip>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.nav>
    </TooltipProvider>
  )
}

