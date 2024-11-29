"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, AlertTriangle, Info, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Notification = {
  id: string
  title: string
  description: string
  category: 'Tax' | 'Health' | 'Citizenship' | 'General'
  priority: 'High' | 'Medium' | 'Low'
  isRead: boolean
  date: string
}

export function NotificationsContent() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: "Tax Return Processed",
      description: "Your 2023 tax return has been processed. View details.",
      category: 'Tax',
      priority: 'Medium',
      isRead: false,
      date: '2024-04-15',
    },
    {
      id: '2',
      title: "Health Appointment Reminder",
      description: "You have an upcoming appointment on June 15, 2024.",
      category: 'Health',
      priority: 'High',
      isRead: false,
      date: '2024-06-10',
    },
    {
      id: '3',
      title: "Passport Renewal Update",
      description: "Your passport renewal application has been approved.",
      category: 'Citizenship',
      priority: 'Medium',
      isRead: true,
      date: '2024-05-20',
    },
    {
      id: '4',
      title: "New Message from Support",
      description: "You have a new message regarding your recent inquiry.",
      category: 'General',
      priority: 'Low',
      isRead: true,
      date: '2024-06-05',
    },
  ]);

  const [filter, setFilter] = useState('All')

  const clearNotifications = () => {
    setNotifications([]);
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => 
    filter === 'All' || notif.category === filter
  );

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'Medium':
        return <Info className="h-4 w-4 text-yellow-500" />;
      case 'Low':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <div className="flex space-x-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter notifications" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Tax">Tax</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="Citizenship">Citizenship</SelectItem>
              <SelectItem value="General">General</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={clearNotifications} variant="outline">Clear All</Button>
        </div>
      </div>
      <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredNotifications.length > 0 ? (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {getPriorityIcon(notification.priority)}
                    </div>
                    <div>
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant={notification.isRead ? "secondary" : "default"}>
                          {notification.isRead ? "Read" : "New"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{notification.date}</span>
                        <Badge variant="outline">{notification.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!notification.isRead && (
                      <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)} className="hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Mark as Read</span>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)} className="hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-300">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
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

