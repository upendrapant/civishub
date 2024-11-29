import { DocumentManager } from "@/components/dashboard/document-manager"

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">My Documents</h1>
      <DocumentManager />
    </div>
  )
}

