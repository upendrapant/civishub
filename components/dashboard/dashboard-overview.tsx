import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, Calendar, FileText, CreditCard } from 'lucide-react'
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-all hover:shadow-md hover:border-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Tax Deadline</CardTitle>
                <FileText className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">April 15, 2025</div>
                <Progress value={33} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">120 days remaining</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tax Deadline Details</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-auto">
              <div className="space-y-4">
                <p><strong>Due Date:</strong> April 15, 2025</p>
                <p><strong>Days Remaining:</strong> 120</p>
                <p><strong>Tax Year:</strong> 2024</p>
                <p><strong>Estimated Tax Due:</strong> $5,000</p>
                <p><strong>Last Year's Payment:</strong> $4,800</p>
                <h4 className="text-lg font-semibold">Preparation Checklist:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gather all W-2 and 1099 forms</li>
                  <li>Collect receipts for deductible expenses</li>
                  <li>Review last year's tax return</li>
                  <li>Schedule an appointment with a tax professional (if needed)</li>
                </ul>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-all hover:shadow-md hover:border-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Health Check-up</CardTitle>
                <Calendar className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">June 15, 2024</div>
                <p className="text-xs text-muted-foreground mt-2">Annual physical exam</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Health Check-up Details</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-auto">
              <div className="space-y-4">
                <p><strong>Due Date:</strong> June 15, 2024</p>
                <p><strong>Type:</strong> Annual physical exam</p>
                <p><strong>Doctor:</strong> Dr. Smith</p>
                <p><strong>Location:</strong> City Hospital</p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-all hover:shadow-md hover:border-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Passport Expiry</CardTitle>
                <CreditCard className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">August 30, 2026</div>
                <p className="text-xs text-muted-foreground mt-2">Renew 6 months before expiry</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Passport Expiry Details</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-auto">
              <div className="space-y-4">
                <p><strong>Expiry Date:</strong> August 30, 2026</p>
                <p><strong>Renewal Recommendation:</strong> February 28, 2026</p>
                <p><strong>Passport Number:</strong> 1234567890</p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-all hover:shadow-md hover:border-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alerts</CardTitle>
                <AlertCircle className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-2">Important notifications</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Alerts</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-auto">
              <div className="space-y-4">
                <p>You have 2 new notifications:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tax payment reminder</li>
                  <li>Health check-up appointment scheduled</li>
                </ul>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-500">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild className="bg-blue-500 hover:bg-blue-600"><Link href="/dashboard/taxes/file">File Taxes</Link></Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600"><Link href="/dashboard/health">Schedule Health Appointment</Link></Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600"><Link href="/dashboatrd/citizenship/">Renew Passport</Link></Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600"><Link href="/dashboard/notifications">View All Notifications</Link></Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-500">
          <CardHeader>
            <CardTitle>Important Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/documents/tax-return-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  2023 Tax Return
                </Link>
              </li>
              <li>
                <Link href="/documents/vaccination-record.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Vaccination Record
                </Link>
              </li>
              <li>
                <Link href="/documents/drivers-license.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Driver's License
                </Link>
              </li>
              <li>
                <Link href="/documents/voter-registration.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Voter Registration Card
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

