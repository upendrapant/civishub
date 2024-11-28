import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CalendarDays, FilePlus, Syringe, Activity, HeartPulse, ScaleIcon as Scales, Brain } from 'lucide-react'
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export function HealthRecordsContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Health Records</h1>
        <Button asChild>
          <Link href="/health/appointments">Book Appointment</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June 15, 2024</div>
            <p className="text-xs text-muted-foreground">Annual Check-up</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccinations</CardTitle>
            <Syringe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Up to date</div>
            <p className="text-xs text-muted-foreground">Last updated: March 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Tests</CardTitle>
            <FilePlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">In the last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85/100</div>
            <p className="text-xs text-muted-foreground">Based on recent check-ups</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vital Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <HeartPulse className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Blood Pressure
                  </p>
                  <p className="text-sm text-muted-foreground">
                    120/80 mmHg
                  </p>
                </div>
                <Badge>Normal</Badge>
              </div>
              <div className="flex items-center">
                <Scales className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Body Mass Index (BMI)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    22.5
                  </p>
                </div>
                <Badge>Healthy</Badge>
              </div>
              <div className="flex items-center">
                <Brain className="mr-2 h-4 w-4 text-muted-foreground" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Stress Level
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Moderate
                  </p>
                </div>
                <Progress value={60} className="w-[60px]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Screenings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingScreenings.map((screening, index) => (
                <div key={index} className="flex items-center">
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">
                      {screening.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Due: {screening.dueDate}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Schedule</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Medical History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalHistory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Completed" ? "success" : "warning"}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prescriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {prescriptions.map((prescription, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{prescription.name}</p>
                    <p className="text-sm text-muted-foreground">Dosage: {prescription.dosage}</p>
                  </div>
                  <Badge variant="outline">{prescription.refillDate}</Badge>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4">Refill Prescriptions</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><Link href="#" className="text-primary hover:underline">Find a Doctor</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Health Insurance Information</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Wellness Programs</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Medical Records Request</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Telemedicine Services</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Mental Health Resources</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const medicalHistory = [
  { date: "May 15, 2024", type: "Check-up", description: "Annual physical examination", status: "Completed" },
  { date: "April 3, 2024", type: "Vaccination", description: "Flu shot", status: "Completed" },
  { date: "March 10, 2024", type: "Lab Test", description: "Blood work", status: "Completed" },
  { date: "February 22, 2024", type: "Specialist", description: "Dermatology consultation", status: "Scheduled" },
]

const prescriptions = [
  { name: "Lisinopril", dosage: "10mg daily", refillDate: "July 1, 2024" },
  { name: "Metformin", dosage: "500mg twice daily", refillDate: "June 15, 2024" },
  { name: "Atorvastatin", dosage: "20mg daily", refillDate: "August 1, 2024" },
]

const upcomingScreenings = [
  { name: "Mammogram", dueDate: "September 1, 2024" },
  { name: "Colonoscopy", dueDate: "October 15, 2024" },
  { name: "Eye Exam", dueDate: "November 30, 2024" },
]

