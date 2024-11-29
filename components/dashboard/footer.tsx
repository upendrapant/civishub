"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from 'lucide-react'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="border-t bg-background py-2 text-xs text-muted-foreground">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/help" className="hover:text-foreground">
            Help
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <span>Theme:</span>
          {theme === 'light' && <Sun className="h-3 w-3" />}
          {theme === 'dark' && <Moon className="h-3 w-3" />}
          {theme === 'system' && <Laptop className="h-3 w-3" />}
          <span className="capitalize">{theme}</span>
        </div>
      </div>
    </footer>
  )
}

