import { UserButton } from "@clerk/nextjs"

import { DashboardContent } from "@/components/dashboard/dashboard-content"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardOverview />
      <DashboardContent />
    </div>
  )
}