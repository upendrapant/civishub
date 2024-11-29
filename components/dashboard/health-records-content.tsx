"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { CalendarDays, FilePlus, Syringe, Activity, HeartPulse, ScaleIcon as Scales, Brain, Plus } from 'lucide-react'
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { format } from "date-fns"

export function HealthRecordsContent() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Health Records</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              Book Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Book an Appointment</DialogTitle>
              <DialogDescription>
                Fill in the details to schedule your appointment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Hriday Sharma" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="appointment-type" className="text-right">
                  Type
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Check-up</SelectItem>
                    <SelectItem value="specialist">Specialist Consultation</SelectItem>
                    <SelectItem value="followup">Follow-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="appointment-date" className="text-right">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`col-span-3 justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                    >
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                      <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Book Appointment</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">June 15, 2024</div>
            <p className="text-xs text-muted-foreground">Annual Check-up</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccinations</CardTitle>
            <Syringe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">Up to date</div>
            <p className="text-xs text-muted-foreground">Last updated: March 2024</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Tests</CardTitle>
            <FilePlus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">2</div>
            <p className="text-xs text-muted-foreground">In the last 30 days</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">85/100</div>
            <p className="text-xs text-muted-foreground">Based on recent check-ups</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Vital Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <HeartPulse className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Blood Pressure
                  </p>
                  <p className="text-sm text-muted-foreground">
                    120/80 mmHg
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">Normal</Badge>
              </div>
              <div className="flex items-center">
                <Scales className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Body Mass Index (BMI)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    22.5
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">Healthy</Badge>
              </div>
              <div className="flex items-center">
                <Brain className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    Stress Level
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Moderate
                  </p>
                </div>
                <Progress value={60} className="w-[60px]" indicatorClassName="bg-blue-600 dark:bg-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Upcoming Screenings</CardTitle>
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
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300">Schedule</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">Recent Medical History</CardTitle>
          <Drawer>
              <DrawerTrigger asChild>
                <div className="flex items justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                   Perform Analysis
                  </Button>
                </div>
              </DrawerTrigger>
              <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Performance Analysis</DrawerTitle>
            <DrawerDescription>View key performance metrics for your web application.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>All times are in seconds</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
              </CardContent>
            </Card>
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-medium">Key Insights:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Page load time is within acceptable range</li>
                <li>First Contentful Paint is good, indicating fast initial render</li>
                <li>Time to Interactive could be improved</li>
                <li>First Input Delay is excellent, showing good responsiveness</li>
                <li>Cumulative Layout Shift is low, indicating stable layout</li>
              </ul>
            </div>
          </div>
          <DrawerFooter>
            <Button>Generate Detailed Report</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
        </Drawer>
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
                <TableRow key={index} className="hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Completed" ? "success" : "warning"} className={item.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Prescriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {prescriptions.map((prescription, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{prescription.name}</p>
                    <p className="text-sm text-muted-foreground">Dosage: {prescription.dosage}</p>
                  </div>
                  <Badge variant="outline" className="text-blue-600 dark:text-blue-300">{prescription.refillDate}</Badge>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Refill Prescriptions</Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Health Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Health Insurance Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:tex-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Wellness Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:tex-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Medical Records Request
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:tex-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Telemedicine Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:tex-200 hover:underline flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Mental Health Resources
                </Link>
              </li>
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

