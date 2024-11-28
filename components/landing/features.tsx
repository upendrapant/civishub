"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: "Unified Access to Government Services",
    description: "Manage all personal government-related services from a single interface.",
    icon: "🏛️",
    details: [
      "Access services like taxes, health records, and document applications",
      "Seamless navigation through categories",
      "Save time by consolidating services",
      "Never miss critical updates or deadlines"
    ]
  },
  {
    title: "Smart Tax Management",
    description: "Simplify tax filing, payment tracking, and monitoring.",
    icon: "📊",
    details: [
      "Automated reminders for upcoming filing deadlines",
      "Step-by-step filing guidance",
      "Tax payment tracking with downloadable history",
      "Integrated secure payment options"
    ]
  },
  {
    title: "Comprehensive Health Records Management",
    description: "Organize and access all personal health data easily.",
    icon: "🏥",
    details: [
      "Maintain a chronological timeline of medical visits, prescriptions, and vaccinations",
      "Receive reminders for upcoming vaccinations or checkups",
      "Securely download or share health records"
    ]
  },
  {
    title: "Citizenship Services",
    description: "Manage essential identity documents and services efficiently.",
    icon: "🆔",
    details: [
      "Apply for new documents like passports, birth certificates, or voter IDs",
      "Track the status of applications in real-time",
      "Store and retrieve digital copies of important documents"
    ]
  },
  {
    title: "Personalized Notifications and Alerts",
    description: "Stay informed of important updates, tasks, and deadlines.",
    icon: "🔔",
    details: [
      "Smart categorization of alerts (Urgent, Upcoming, Informational)",
      "Notifications for tax deadlines, expiring documents, or health updates",
      "Custom reminders based on user preferences"
    ]
  },
  {
    title: "Advanced Security and Privacy",
    description: "Ensure your data remains private and secure.",
    icon: "🔒",
    details: [
      "Multi-factor authentication for added login security",
      "End-to-end encryption for all sensitive data",
      "Biometric authentication support for compatible devices"
    ]
  },
  {
    title: "Analytics and Insights",
    description: "Get actionable insights to help make informed decisions.",
    icon: "📈",
    details: [
      "Tax analytics: Visualize yearly payments and refunds",
      "Health analytics: Track vaccination timelines or medical history trends",
      "Document analytics: Monitor frequently accessed or expiring documents"
    ]
  },
  {
    title: "Multilingual and Accessible Design",
    description: "Cater to a diverse audience by ensuring inclusivity.",
    icon: "🌐",
    details: [
      "Support for multiple languages",
      "Accessibility features including screen reader compatibility",
      "High-contrast themes and keyboard navigation"
    ]
  },
  {
    title: "Help and Support Center",
    description: "Get comprehensive assistance to resolve issues quickly.",
    icon: "💬",
    details: [
      "Searchable FAQ section covering common user queries",
      "Live chat for real-time assistance",
      "Tutorials and walkthroughs for first-time users"
    ]
  },
  {
    title: "Modern and Scalable Technology",
    description: "Built with cutting-edge technology for seamless performance.",
    icon: "🚀",
    details: [
      "Cloud-based infrastructure for high availability",
      "Scalability to accommodate increasing user demands",
      "Integration-ready APIs for future expansion"
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Digital Citizens</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">{feature.icon}</span>
            {feature.title}
          </CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Hide Details' : 'Show Details'}
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2 text-sm"
            >
              {feature.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {detail}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

