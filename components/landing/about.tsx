"use client";
import { CompanyValue } from '@/components/ui/company-value'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <HeroSection />
      <ValuesSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  return (
    <motion.section 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
        About Us
      </h1>
    </motion.section>
  )
}

function ValuesSection() {
  const values = [
    { title: 'Innovation', description: 'Pushing boundaries and exploring new possibilities' },
    { title: 'Collaboration', description: 'Working together to achieve extraordinary results' },
    { title: 'Integrity', description: 'Upholding the highest standards of honesty and ethics' },
    { title: 'Impact', description: 'Making a positive difference in the world around us' },
  ]

  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Values
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <CompanyValue key={value.title} {...value} index={index} />
        ))}
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <motion.section 
      className="text-center bg-blue-500 text-white rounded-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
      <p className="text-xl mb-6">
        Join us to experiance the seemless Service.
      </p>
      <Button 
        size="lg" 
        variant="outline" 
        className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all duration-300 transform hover:scale-105"
        onClick={() => window.location.href = '/get-started'}
      >
        Get Started <ArrowRight className="ml-2" />
      </Button>
    </motion.section>
  )
}

