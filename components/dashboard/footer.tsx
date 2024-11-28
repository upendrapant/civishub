import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
      <div className="mb-2">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link href="/help" className="hover:underline">
          Help & Support
        </Link>
      </div>
      <div>© 2024 Digital Citizen Dashboard. All rights reserved.</div>
    </footer>
  )
}

