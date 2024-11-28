import { Navbar } from '@/components/ui/navbar'
import { HeroSection } from '@/components/herosection'
import  Features  from '@/components/features'
import { AboutSection } from '@/components/about'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Features/>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

