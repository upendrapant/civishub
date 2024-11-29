import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function HelpSupportContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for help..." className="pl-8" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {faqs.map((faq, index) => (
                <li key={index}>
                  <a href="#" className="text-primary hover:underline">{faq}</a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Need additional help? Our support team is here for you.</p>
            <Button>Start Live Chat</Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Phone support: 1-800-123-4567 <br />
              Available Mon-Fri, 9am-5pm
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const faqs = [
  "How do I update my personal information?",
  "What documents do I need for passport renewal?",
  "How can I check the status of my tax refund?",
  "Where can I find my vaccination records?",
  "How do I register to vote?",
  "What's the process for renewing my driver's license?",
]

