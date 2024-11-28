import Link from 'next/link'
import { Logo } from './logo'
import { CivisHubLogo } from '@/components/ui/civishub-logo'

import { ArrowRight } from 'lucide-react'
import { MobileMenu } from './mobile-menu'

const links = [
  { href: "/", label: "Home" },
  { href: "/Features", label: "Features" },
  { href: "/About", label: "About" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-1/4">
        <CivisHubLogo className="h-32 w-32 text-blue-600" />
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="w-1/4 flex justify-end">
        <Link
           href="/login"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white shadow hover:bg-blue-600 h-9 px-4 py-2"
            >
            Login
             <ArrowRight className="ml-2 h-4 w-4" />
           </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

