import Link from 'next/link'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundLines } from '@/components/ui/background-lines';

export function HeroSection() {
  const words = [
    {
      text: "One",
    },
    {
      text: "Dashboard",
    },
    {
      text: "for",
    },
    {
      text: "all",
    },
    {
      text: "Government Services.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <section id="home" className="w-full min-h-screen py-3 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Simplifying access to taxes, citizenship, and health records in one secure platform.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#features" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Get Started
            </Link>
            <Link href="#about" className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  </BackgroundLines>
  )
}


