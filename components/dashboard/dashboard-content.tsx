import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Welcome, Hriday!</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Taxes"
          content="Next filing deadline: Dec 31"
          action="View Taxes"
          href="/taxes"
        />
        <SummaryCard
          title="Health Records"
          content="Vaccination: Up to date"
          action="View Health Records"
          href="/health"
        />
        <SummaryCard
          title="Citizenship Services"
          content="Passport renewal: In process"
          action="View Citizenship Services"
          href="/citizenship"
        />
        <SummaryCard
          title="Notifications"
          content="2 new messages"
          action="View All"
          href="/notifications"
        />
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <QuickActionCard
            title="File Taxes"
            description="Start your tax filing process for the current year."
            href="/taxes/file"
          />
          <QuickActionCard
            title="Book Health Appointment"
            description="Schedule a check-up or consultation with a healthcare provider."
            href="/health/appointments"
          />
          <QuickActionCard
            title="Renew Driver's License"
            description="Start the process to renew your driver's license online."
            href="/citizenship/drivers-license"
          />
        </div>
      </section>
    </div>
  )
}

function SummaryCard({
  title,
  content,
  action,
  href,
}: {
  title: string
  content: string
  action: string
  href: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{content}</p>
        <Button variant="link" className="p-0" asChild>
          <Link href={href}>{action} <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function QuickActionCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild>
          <Link href={href}>Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

