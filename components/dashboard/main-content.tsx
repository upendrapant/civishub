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

export function MainContent() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-card p-6">
        <h2 className="mb-4 text-2xl font-bold">Welcome, Hriday!</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Taxes"
            content="Next filing deadline: Dec 31"
            action="View Details"
          />
          <SummaryCard
            title="Health Records"
            content="Vaccination: Up to date"
            action="View Details"
          />
          <SummaryCard
            title="Citizenship Services"
            content="Passport renewal: In process"
            action="View Details"
          />
          <SummaryCard
            title="Notifications"
            content="2 new messages"
            action="View All"
          />
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Manage Your Taxes</h3>
        <div className="space-y-4">
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023</TableCell>
                    <TableCell>$5,000</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022</TableCell>
                    <TableCell>$4,500</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2021</TableCell>
                    <TableCell>$4,200</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Button>File Taxes Now</Button>
            <Button variant="outline">Check Refund Status</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function SummaryCard({
  title,
  content,
  action,
}: {
  title: string
  content: string
  action: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <Button variant="link" className="mt-2 p-0">
          {action}
        </Button>
      </CardContent>
    </Card>
  )
}

