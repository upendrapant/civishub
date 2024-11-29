import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FileTaxesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">File Taxes</h1>
      <Card>
        <CardHeader>
          <CardTitle>Tax Filing Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="income">Total Income</Label>
              <Input id="income" type="number" placeholder="Enter your total income" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="deductions">Total Deductions</Label>
              <Input id="deductions" type="number" placeholder="Enter your total deductions" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="credits">Tax Credits</Label>
              <Input id="credits" type="number" placeholder="Enter your tax credits" />
            </div>
            <Button type="submit">Calculate and Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

