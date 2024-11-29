"use client"

import { UserButton } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
          <p>Click on your avatar to manage your account settings.</p>
        </CardContent>
      </Card>
    </div>
  )
}

