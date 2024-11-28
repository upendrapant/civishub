"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {Logo} from '@/components/ui/logo'
import { CivisHubLogo } from '@/components/ui/herologo'
import { BackgroundLines } from '../ui/background-lines'


export function Hero() {
  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80 relative"
    >
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Welcome to CivisHub
              </motion.div>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  backgroundImage: 'linear-gradient(45deg, #3b82f6, #10b981, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                }}
              >
                Your Gateway to Smart Governance
              </motion.h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Empowering citizens with seamless access to integrated virtual services. Manage your digital life effortlessly and securely.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8">
              {[
                { icon: Shield, text: "Secure & Private" },
                { icon: Users, text: "Citizen-Centric" },
                { icon: FileText, text: "Integrated Services" },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center space-x-2 p-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <CivisHubLogo className="h-42 w-42 text-blue-600" />
              </motion.div>
              </BackgroundLines>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
