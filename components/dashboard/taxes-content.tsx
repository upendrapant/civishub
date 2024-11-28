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
import { AlertCircle, Download, FileText } from 'lucide-react'
import Link from "next/link"

export function TaxesContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Taxes</h1>
        <Button asChild>
          <Link href="/taxes/file">File Taxes</Link>
        </Button>
      </div>
      
      <Alert variant="warning">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Your next tax filing deadline is December 31, 2024. Make sure to file on time to avoid penalties.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Tax History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taxHistory.map((item) => (
                <TableRow key={item.year}>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.amountPaid}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
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
            <CardTitle>Estimated Taxes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$2,500</p>
            <p className="text-sm text-muted-foreground">Due by: September 15, 2024</p>
            <Button className="mt-4">Pay Estimated Taxes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tax Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><Link href="#" className="text-primary hover:underline">Tax Guides and Publications</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Frequently Asked Questions</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Tax Calculators</Link></li>
              <li><Link href="#" className="text-primary hover:underline">Contact a Tax Professional</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const taxHistory = [
  { year: 2023, amountPaid: "$5,000", status: "Paid" },
  { year: 2022, amountPaid: "$4,500", status: "Paid" },
  { year: 2021, amountPaid: "$4,200", status: "Paid" },
]

