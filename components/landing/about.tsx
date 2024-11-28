"use client"

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id ="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3"
        >
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Empowering Digital Citizens
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our platform revolutionizes how citizens interact with government services, making it easier, faster, and more secure than ever before.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 xl:col-span-2">
            <p className="text-muted-foreground md:text-xl">
              The Civis Hub is a cutting-edge solution designed to streamline your interaction with government services. We've reimagined the way you access, manage, and utilize essential services, from tax filing to health record management.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Our mission is to empower every citizen with the tools they need to navigate the complexities of modern governance effortlessly. We believe in transparency, efficiency, and security, and these principles are at the core of everything we do.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/sign-up"><Button size="lg">Learn More</Button></Link>
              {/* <Button size="lg" variant="outline">Contact Us</Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

