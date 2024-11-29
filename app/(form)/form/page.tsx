'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingOverlay from '@/components/loading-overlay'
import { CivisHubLogo } from '@/components/ui/civishub-logo'
import Link from 'next/link'

export default function DigitalCitizenshipForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate form submission and data processing
    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
    <Card className="w-full max-w-2xl bg-white text-black">
      <CardHeader className="text-center">
      <div className='flex items-center justify-center'><CivisHubLogo className="h-32 w-32 text-blue-600" /></div>
        <CardTitle className="text-2xl font-bold">Digital Citizenship Platform</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentsName">Parent's Name</Label>
              <Input id="parentsName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input id="district" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sex">Sex</Label>
              <Select required>
                <SelectTrigger id="sex">
                  <SelectValue placeholder="Select sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idNumber">DOB ID Number</Label>
              <Input id="idNumber" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dovNo">DOV Number</Label>
              <Input id="dovNo" required />
            </div>
          </div>
          <Button type="submit" className="w-full">Submit</Button>
 <Link href="/">
  <div className="w-full flex items-center justify-center h-full pt-4">
    <Button className="w-full h-full">Back</Button>
  </div>
</Link> 

        </form>
      </CardContent>
      {isLoading && <LoadingOverlay />}
    </Card>
  </div>
  
  )
}

