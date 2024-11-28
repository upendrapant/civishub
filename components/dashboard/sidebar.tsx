import { Home, Calculator, Heart, FileText, HelpCircle, Bell, FolderOpen } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Calculator, label: "Taxes", href: "/taxes" },
  { icon: Heart, label: "Health Records", href: "/health" },
  { icon: FileText, label: "Citizenship Services", href: "/citizenship" },
  { icon: FolderOpen, label: "Documents", href: "/documents" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: HelpCircle, label: "Help & Support", href: "/help" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-card p-4">
      <div className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              pathname === item.href && "bg-accent text-accent-foreground"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

