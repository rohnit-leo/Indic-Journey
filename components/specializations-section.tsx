import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Building, Heart, Camera, Mountain } from "lucide-react"

export function SpecializationsSection() {
  const specializations = [
    {
      icon: <Compass className="h-12 w-12 text-yellow-400" />,
      title: "Leisure",
      description: "Relaxing getaways and vacation packages designed for ultimate comfort and enjoyment.",
    },
    {
      icon: <Building className="h-12 w-12 text-yellow-400" />,
      title: "Heritage",
      description: "Explore India's rich cultural heritage through historical monuments and ancient sites.",
    },
    {
      icon: <Heart className="h-12 w-12 text-yellow-400" />,
      title: "Spiritual",
      description: "Sacred journeys to temples, ashrams, and spiritual destinations for inner peace.",
    },
    {
      icon: <Camera className="h-12 w-12 text-yellow-400" />,
      title: "Special Interest",
      description: "Photography tours, culinary experiences, and hobby-focused travel adventures.",
    },
    {
      icon: <Mountain className="h-12 w-12 text-yellow-400" />,
      title: "Offbeat",
      description: "Discover hidden gems and unexplored destinations off the beaten path.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-poppins">Our Specializations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            We craft unique travel experiences across five distinct verticals, each designed to fulfill different
            aspects of your wanderlust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-black rounded-full group-hover:bg-yellow-400 transition-colors">
                  {spec.icon}
                </div>
                <CardTitle className="text-xl font-bold text-black font-poppins">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-open-sans">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
