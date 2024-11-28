import { DollarSign, FileText, Building } from 'lucide-react'

const features = [
  {
    icon: <DollarSign className="text-green-500" size={48} />,
    title: "Taxes",
    description: "File, track, and pay taxes seamlessly."
  },
  {
    icon: <FileText className="text-red-500" size={48} />,
    title: "Health Records",
    description: "Access vaccination records and medical history."
  },
  {
    icon: <Building className="text-blue-500" size={48} />,
    title: "Citizenship Services",
    description: "Request and manage essential documents."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Features of the Digital Citizen Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}