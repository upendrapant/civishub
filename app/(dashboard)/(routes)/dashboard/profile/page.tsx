import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <div className="justify-end">
             <UserButton afterSignOutUrl="/" />
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name">Full Name</label>
              <Input id="name" defaultValue="Hriday Sharma" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" defaultValue="hriday@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone">Phone</label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="address">Address</label>
              <Input id="address" defaultValue="123 Main St, Anytown, AN 12345" />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

