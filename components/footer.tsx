import Link from 'next/link'
// import { Logo } from '@/components/ui/logo'
import { CivisHubLogo } from '@/components/ui/civishub-logo'

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <CivisHubLogo className="h-32 w-32 text-black-600" />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link href="#home" className="hover:text-gray-300">Home</Link>
            <Link href="#features" className="hover:text-gray-300">Features</Link>
            <Link href="#about" className="hover:text-gray-300">About</Link>
            <Link href="#contact" className="hover:text-gray-300">Contact</Link>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          © 2024 CivisHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

