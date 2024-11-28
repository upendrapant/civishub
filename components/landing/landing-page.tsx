import { Navbar } from '@/components/ui/navbar'
import { HeroSection } from '@/components/landing/herosection'
import  {Features}  from '@/components/landing/features'
import  AboutUs  from '@/components/landing/about'
import { ContactSection } from '@/components/landing/contact'
import { Footer } from '@/components/landing/footer'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Features/>
        <AboutUs />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  )
}

