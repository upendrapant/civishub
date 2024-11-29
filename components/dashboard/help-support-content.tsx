"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, MessageCircle, Send, ChevronDown, ChevronUp } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HelpSupportContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I assist you today?", isUser: false },
  ])
  const [userMessage, setUserMessage] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setChatMessages([...chatMessages, { text: userMessage, isUser: true }])
      setUserMessage('')
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "Thank you for your message. A support agent will get back to you soon.", isUser: false }])
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for help..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:text-blue-600 dark:hover:text-blue-300">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Need additional help? Our support team is here for you.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Open Support Ticket</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Open a Support Ticket</DialogTitle>
                    <DialogDescription>
                      Describe your issue and we'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="issue-type" className="text-right">
                        Issue Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="account">Account Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      {/* <Textarea id="description" className="col-span-3" /> */}
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Submit Ticket</Button>
                </DialogContent>
              </Dialog>
              <p className="mt-4 text-sm text-muted-foreground">
                Phone support: 1-800-123-4567 <br />
                Available Mon-Fri, 9am-5pm
              </p>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "How do I update my personal information?",
    answer: "You can update your personal information by navigating to the 'Profile' section in your account settings. There, you'll find options to edit your name, address, phone number, and other details."
  },
  {
    question: "What documents do I need for passport renewal?",
    answer: "For passport renewal, you typically need your current passport, a recent passport photo, and a completed renewal application form. Additional documents may be required depending on your specific situation."
  },
  {
    question: "How can I check the status of my tax refund?",
    answer: "You can check your tax refund status by visiting the 'Taxes' section of your dashboard. Look for the 'Refund Status' option, which will provide you with the most up-to-date information on your refund."
  },
  {
    question: "Where can I find my vaccination records?",
    answer: "Your vaccination records can be found in the 'Health Records' section of your account. Look for the 'Immunizations' or 'Vaccinations' subsection, which should contain a comprehensive list of your recorded vaccinations."
  },
  {
    question: "How do I register to vote?",
    answer: "To register to vote, go to the 'Citizenship Services' section and look for the 'Voter Registration' option. Follow the prompts to complete your registration. Make sure you meet the eligibility requirements for voting in your area."
  },
  {
    question: "What's the process for renewing my driver's license?",
    answer: "To renew your driver's license, navigate to the 'Citizenship Services' section and select 'Driver's License Renewal'. You'll need to provide current identification, pass a vision test, and pay the renewal fee. The exact process may vary depending on your location."
  },
]

