import { Navbar } from '@/components/ui/navbar'
import { LandingPage } from '@/components/landing-page'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPage />
    </div>
  )
}
