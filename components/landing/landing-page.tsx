import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/landing/herosection'
import  Features  from '@/components/landing/features'
import  {About}  from '@/components/landing/about'
import { Footer } from '@/components/landing/footer'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features/>
        <About />
      </main>
      <Footer />
    </div>
  )
}

