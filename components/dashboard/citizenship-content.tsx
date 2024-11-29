import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileText, UserCheck, CreditCard } from 'lucide-react'
import Link from "next/link"

export function CitizenshipContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Citizenship Services</h1>
        <Button asChild>
          <Link href="/citizenship/apply">Apply for Services</Link>
        </Button>
      </div>

      <Alert variant="info">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Passport Renewal in Progress</AlertTitle>
        <AlertDescription>
          Your passport renewal application is being processed. Estimated completion: July 15, 2024.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Passport Status</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Renewing</div>
            <Progress value={60} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">60% complete</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Voter Registration</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">Last updated: January 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Driver's License</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Expires in 6 months</div>
            <p className="text-xs text-muted-foreground">Renewal eligible: Yes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentApplications.map((application, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{application.type}</p>
                  <p className="text-sm text-muted-foreground">Applied: {application.date}</p>
                </div>
                <Badge variant={application.status === "Approved" ? "success" : application.status === "Pending" ? "warning" : "secondary"}>
                  {application.status}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Renewals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingRenewals.map((renewal, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{renewal.document}</span>
                  <Badge variant="outline">{renewal.dueDate}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Citizenship Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><Link href="#" className="text-primary hover:underline">Passport Application Guide</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Voter Information</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Driver's License Renewal Process</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Citizenship Test Preparation</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recentApplications = [
  { type: "Passport Renewal", date: "May 1, 2024", status: "Pending" },
  { type: "Address Change", date: "April 15, 2024", status: "Approved" },
  { type: "Voter Registration Update", date: "March 30, 2024", status: "Completed" },
]

const upcomingRenewals = [
  { document: "Driver's License", dueDate: "December 31, 2024" },
  { document: "Vehicle Registration", dueDate: "September 15, 2024" },
]

