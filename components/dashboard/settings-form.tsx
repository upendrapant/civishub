"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function SettingsForm() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the settings to your backend
    toast({
      title: "Settings updated",
      description: "Your notification preferences have been saved.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <Switch
                id="sms-notifications"
                checked={smsNotifications}
                onCheckedChange={setSmsNotifications}
              />
            </div>
            <Button type="submit">Save Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

