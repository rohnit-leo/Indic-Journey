import { MainLayout } from "@/components/main-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, Globe, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InternationalCustomizedPage() {
  const features = [
    {
      icon: Plane,
      title: "Flight Arrangements",
      description: "Complete flight booking and itinerary management",
    },
    {
      icon: Globe,
      title: "Visa Assistance",
      description: "Complete visa support and documentation help",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage",
    },
    {
      icon: Users,
      title: "Local Experts",
      description: "Professional guides in every destination",
    },
  ]

  const destinations = [
    {
      name: "Europe",
      image: "/images/europe-tour.png",
      description: "Historic cities, cultural heritage, and scenic landscapes",
      startingPrice: "₹1,20,000",
    },
    {
      name: "Southeast Asia",
      image: "/images/southeast-asia.png",
      description: "Tropical beaches, ancient temples, and vibrant cultures",
      startingPrice: "₹80,000",
    },
    {
      name: "Dubai & UAE",
      image: "/images/dubai-tour.png",
      description: "Modern architecture, luxury shopping, and desert adventures",
      startingPrice: "₹60,000",
    },
    {
      name: "Nepal & Bhutan",
      image: "/images/nepal-bhutan.png",
      description: "Himalayan views, monasteries, and spiritual experiences",
      startingPrice: "₹70,000",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
              International <span className="text-white">Customized Tours</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 font-open-sans">
              Discover the world with tailor-made international travel packages designed just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-black text-white px-6 py-3 text-lg">
                <Plane className="mr-2 h-4 w-4" />
                Flights Included
              </Badge>
              <Badge className="bg-white text-black px-6 py-3 text-lg">Visa Assistance</Badge>
              <Badge className="bg-black text-white px-6 py-3 text-lg">Global Destinations</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">International Travel Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-600 font-open-sans">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Popular International Destinations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1 font-poppins">{destination.name}</h3>
                    <p className="text-sm">{destination.description}</p>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">
                    From {destination.startingPrice}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Let us create your perfect international adventure with complete visa and travel support.
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
