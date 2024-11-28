"use client"

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { MobileMenu } from './mobile-menu'
import { CivisHubLogo } from '@/components/ui/civishub-logo'


const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  // { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentActiveSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentActiveSection = section.id
        }
      })

      setActiveSection(currentActiveSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-1/4">
        <CivisHubLogo className="h-32 w-32 text-blue-600" />
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href.slice(1) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="w-1/4 flex justify-end">
          <a
            href="/sign-in"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white shadow hover:bg-blue-600 h-9 px-4 py-2"
          >
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

