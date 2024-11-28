import { DollarSign, FileText, Building } from 'lucide-react'
import { HoverEffect } from "@/components/ui/card-hover-effect";
 
export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Features of the Digital Citizen Dashboard
        </h2>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={Feature} />
    </div>
      </div>
    </section>
  );
}
export const Feature = [
  {
    title: "Taxes",
    description:
      "File, track, and pay taxes seamlessly.",
      link: "https://stripe.com",
  },
  {
    title: "Health Records",
    description:
      "Access vaccination records and medical history.",
      link: "https://stripe.com",
  },
  {
    title: "Citizenship Services",
    description:
      "Request and manage essential documents.",
      link: "https://stripe.com",
  }, 
];