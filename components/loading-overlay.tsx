import { Progress } from "@/components/ui/progress"

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Preparing Dashboard</h2>
        <Progress value={33} className="mb-4" />
        <p className="text-center text-gray-600">Fetching data...</p>
      </div>
    </div>
  )
}

