import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Footer } from "@/components/dashboard/footer"
import { Chatbot } from "@/components/dashboard/chatbot"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Citizen Dashboard",
  description: "Manage your government services and information",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-y-auto bg-background p-6">
                {children}
              </main>
            </div>
            <Footer />
          </div>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  )
}

