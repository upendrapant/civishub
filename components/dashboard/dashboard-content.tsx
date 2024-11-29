import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Activity, CreditCard } from 'lucide-react'

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recent Activities</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-md hover:border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-500" />
              Last Tax Filing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">You filed your taxes for 2023 on April 10, 2024.</p>
            <Button variant="outline" asChild className="w-full hover:bg-blue-50 hover:text-blue-600">
              <Link href="/dashboard/taxes" className="flex items-center justify-center">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-500" />
              Recent Health Check-up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Your last check-up was on May 15, 2024.</p>
            <Button variant="outline" asChild className="w-full hover:bg-blue-50 hover:text-blue-600">
              <Link href="/dashboard/health" className="flex items-center justify-center">
                View Results <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
              Passport Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Your passport is valid until August 30, 2026.</p>
            <Button variant="outline" asChild className="w-full hover:bg-blue-50 hover:text-blue-600">
              <Link href="/dashboard/citizenship" className="flex items-center justify-center">
                Check Status <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="transition-all hover:shadow-md hover:border-blue-500">
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span className="text-sm">Property Tax Payment</span>
              <span className="text-sm font-medium text-blue-500">July 1, 2024</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm">Driver's License Renewal</span>
              <span className="text-sm font-medium text-blue-500">September 15, 2024</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm">Health Insurance Open Enrollment</span>
              <span className="text-sm font-medium text-blue-500">November 1, 2024</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

