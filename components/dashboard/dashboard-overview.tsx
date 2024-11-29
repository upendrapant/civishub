import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, Calendar, FileText, CreditCard } from 'lucide-react'
import Link from "next/link"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Tax Deadline</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">April 15, 2025</div>
            <Progress value={33} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">120 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Check-up</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June 15, 2024</div>
            <p className="text-xs text-muted-foreground mt-2">Annual physical exam</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Passport Expiry</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">August 30, 2026</div>
            <p className="text-xs text-muted-foreground mt-2">Renew 6 months before expiry</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-2">Important notifications</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild><Link href="/dashboard/taxes">File Taxes</Link></Button>
            <Button asChild><Link href="/dasgboard/health">Schedule Health Appointment</Link></Button>
            <Button asChild><Link href="/dashboard/citizenship">Renew Passport</Link></Button>
            <Button asChild><Link href="/dashboard/notifications">View All Notifications</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Important Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><Link href="#" className="text-primary hover:underline">2023 Tax Return</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Vaccination Record</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Driver's License</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Voter Registration Card</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

