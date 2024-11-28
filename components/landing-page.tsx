import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CivisHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                 All Government Services in One Place
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Feature 1</h2>
                <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Feature 2</h2>
                <p className="text-gray-500 dark:text-gray-400">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Feature 3</h2>
                <p className="text-gray-500 dark:text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link href="#" className="hover:underline">Terms</Link>
              <Link href="#" className="hover:underline">Privacy</Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 CivisHub Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

