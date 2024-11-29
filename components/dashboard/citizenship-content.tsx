"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileText, UserCheck, CreditCard, Flag, Globe, Vote, Calendar } from 'lucide-react'
import Link from "next/link"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CitizenshipContent() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Citizenship Services</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              Apply for Services
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for Citizenship Services</DialogTitle>
              <DialogDescription>
                Select the service you'd like to apply for.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="service-type" className="text-right">
                  Service
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport Renewal</SelectItem>
                    <SelectItem value="citizenship">Citizenship Application</SelectItem>
                    <SelectItem value="voterReg">Voter Registration</SelectItem>
                    <SelectItem value="driverLicense">Driver's License Renewal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="full-name" className="text-right">
                  Full Name
                </Label>
                <Input id="full-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id-number" className="text-right">
                  ID Number
                </Label>
                <Input id="id-number" className="col-span-3" />
              </div>
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Submit Application</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Alert variant="info" className="bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Passport Renewal in Progress</AlertTitle>
        <AlertDescription>
          Your passport renewal application is being processed. Estimated completion: July 15, 2024.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Passport Status</CardTitle>
            <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">Renewing</div>
            <Progress value={60} className="mt-2" indicatorClassName="bg-blue-600 dark:bg-blue-400" />
            <p className="text-xs text-muted-foreground mt-2">60% complete</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Voter Registration</CardTitle>
            <UserCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">Active</div>
            <p className="text-xs text-muted-foreground">Last updated: January 2024</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Driver's License</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">Expires in 6 months</div>
            <p className="text-xs text-muted-foreground">Renewal eligible: Yes</p>
          </CardContent>
        </Card>
      </div>

      <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentApplications.map((application, index) => (
                <TableRow key={index} className="hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
                  <TableCell>{application.type}</TableCell>
                  <TableCell>{application.date}</TableCell>
                  <TableCell>
                    <Badge variant={application.status === "Approved" ? "success" : application.status === "Pending" ? "warning" : "secondary"}
                           className={application.status === "Approved" ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100" : 
                                      application.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100" :
                                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"}>
                      {application.status}
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
            <CardTitle className="text-blue-700 dark:text-blue-300">Upcoming Renewals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingRenewals.map((renewal, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                    {renewal.document}
                  </span>
                  <Badge variant="outline" className="text-blue-600 dark:text-blue-300">{renewal.dueDate}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Citizenship Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <Flag className="mr-2 h-4 w-4" />
                  Passport Application Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <Vote className="mr-2 h-4 w-4" />
                  Voter Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Driver's License Renewal Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 hover:underline flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Citizenship Test Preparation
                </Link>
              </li>
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

