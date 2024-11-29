"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Download, FileText, Calculator, CalendarIcon, DollarSign, HelpCircle, ChevronUp, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function TaxesContent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const sortedTaxHistory = [...taxHistory].sort((a, b) => {
    if (sortColumn === 'year') {
      return sortDirection === 'asc' ? a.year - b.year : b.year - a.year
    }
    if (sortColumn === 'amountPaid') {
      return sortDirection === 'asc' 
        ? parseFloat(a.amountPaid.replace('$', '')) - parseFloat(b.amountPaid.replace('$', ''))
        : parseFloat(b.amountPaid.replace('$', '')) - parseFloat(a.amountPaid.replace('$', ''))
    }
    return 0
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Taxes</h1>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-colors">
          <Link href="/dashboard/taxes/file">File Taxes</Link>
        </Button>
      </div>
      
      <Alert className="border-blue-200 bg-blue-50">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800">Important Deadline</AlertTitle>
        <AlertDescription className="text-blue-700">
          Your next tax filing deadline is April 15, 2025. Make sure to file on time to avoid penalties.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Calculator className="mr-2 h-5 w-5" />
              Tax Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Estimated Tax Liability</span>
                  <span className="font-semibold">NPR 5,000</span>
                </div>
                <Progress value={60} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Taxes Paid to Date</span>
                  <span className="font-semibold">NPR 3,000</span>
                </div>
                <Progress value={36} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">Calculate Estimated Taxes</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Estimated Tax Calculator</DialogTitle>
                    <DialogDescription>
                      Use this calculator to estimate your taxes.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md hover:border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal hover:bg-blue-50 hover:text-blue-700 transition-colors">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between items-center">
                <span>Annual Tax Filing Deadline</span>
                <span className="font-semibold text-blue-700">April 15, 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Q2 Estimated Tax Payment</span>
                <span className="font-semibold text-blue-700">June 15, 2024</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Q3 Estimated Tax Payment</span>
                <span className="font-semibold text-blue-700">September 15, 2024</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="transition-all hover:shadow-md hover:border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-700">
            <FileText className="mr-2 h-5 w-5" />
            Tax History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer hover:text-blue-700 transition-colors" onClick={() => handleSort('year')}>
                  Year {sortColumn === 'year' && (sortDirection === 'asc' ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer hover:text-blue-700 transition-colors" onClick={() => handleSort('amountPaid')}>
                  Amount Paid {sortColumn === 'amountPaid' && (sortDirection === 'asc' ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTaxHistory.map((item) => (
                <TableRow key={item.year} className="hover:bg-blue-50 transition-colors">
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.amountPaid}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors">
                        <FileText className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="transition-all hover:shadow-md hover:border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <DollarSign className="mr-2 h-5 w-5" />
              Tax Deductions and Credits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Standard Deduction</span>
                <span className="font-semibold text-blue-700">NPR 12,950</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Child Tax Credit</span>
                <span className="font-semibold text-blue-700">NPR 2,000 per child</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Earned Income Tax Credit</span>
                <span className="font-semibold text-blue-700">Up to NPR 6,935</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors">Explore More Deductions</Button>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md hover:border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <HelpCircle className="mr-2 h-5 w-5" />
              Tax Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="https://bakertilly.com.np/storage/download/1718620336_Tax_Fact_2024-25.pdf" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center transition-colors">
                  <FileText className="mr-2 h-4 w-4" />
                  Tax Guides and Publications
                </Link>
              </li>
              <li>
                <Link href="/dashboard/help" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center transition-colors">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="https://salarytaxnepal.com/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center transition-colors">
                  <Calculator className="mr-2 h-4 w-4" />
                  Tax Calculators
                </Link>
              </li>
              <li>
                <Link href="https://www.ecovis.com/nepal/services/tax-advisory/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center transition-colors">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Contact a Tax Professional
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const taxHistory = [
  { year: 2023, amountPaid: "NPR 5,000", status: "Paid" },
  { year: 2022, amountPaid: "NPR 4,500", status: "Paid" },
  { year: 2021, amountPaid: "NPR 4,200", status: "Paid" },
  { year: 2020, amountPaid: "NPR 3,800", status: "Paid" },
  { year: 2019, amountPaid: "NPR 3,500", status: "Paid" },
]

