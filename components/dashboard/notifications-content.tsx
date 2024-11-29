"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function NotificationsContent() {
  const [notifications, setNotifications] = useState([
    {
      title: "Tax Return Processed",
      description: "Your 2023 tax return has been processed. View details.",
      isRead: false,
    },
    {
      title: "Health Appointment Reminder",
      description: "You have an upcoming appointment on June 15, 2024.",
      isRead: false,
    },
    {
      title: "Passport Renewal Update",
      description: "Your passport renewal application has been approved.",
      isRead: true,
    },
    {
      title: "New Message from Support",
      description: "You have a new message regarding your recent inquiry.",
      isRead: true,
    },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <Button onClick={clearNotifications} variant="outline">Clear All</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <Badge variant={notification.isRead ? "secondary" : "default"}>
                    {notification.isRead ? "Read" : "New"}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No notifications</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

