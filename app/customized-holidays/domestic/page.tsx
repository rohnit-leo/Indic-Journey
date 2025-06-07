import { MainLayout } from "@/components/main-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Heart, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DomesticCustomizedPage() {
  const features = [
    {
      icon: Heart,
      title: "Personalized Itineraries",
      description: "Every journey is crafted based on your preferences and interests",
    },
    {
      icon: Settings,
      title: "Flexible Planning",
      description: "Modify your itinerary anytime to suit your changing needs",
    },
    {
      icon: MapPin,
      title: "Local Experiences",
      description: "Discover hidden gems and authentic local experiences",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Professional local guides with deep destination knowledge",
    },
  ]

  const destinations = [
    {
      name: "Rajasthan",
      image: "/images/rajasthan-palace.png",
      description: "Royal palaces, desert safaris, and cultural heritage",
      startingPrice: "₹20,000",
    },
    {
      name: "Kerala",
      image: "/images/kerala-backwaters.png",
      description: "Backwaters, hill stations, and Ayurvedic experiences",
      startingPrice: "₹18,000",
    },
    {
      name: "Himachal Pradesh",
      image: "/images/himachal-mountains.png",
      description: "Mountain adventures, hill stations, and scenic beauty",
      startingPrice: "₹22,000",
    },
    {
      name: "Goa",
      image: "/images/goa-beach.png",
      description: "Beaches, Portuguese heritage, and vibrant nightlife",
      startingPrice: "₹15,000",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
              Domestic <span className="text-white">Customized Tours</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 font-open-sans">
              Explore India your way with personalized domestic travel experiences crafted just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-black text-white px-6 py-3 text-lg">Flexible Dates</Badge>
              <Badge className="bg-white text-black px-6 py-3 text-lg">Custom Routes</Badge>
              <Badge className="bg-black text-white px-6 py-3 text-lg">Local Experiences</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Choose Domestic Customization?</h2>
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
            <h2 className="text-3xl font-bold mb-4 font-poppins">Popular Domestic Destinations</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">
            Ready to Plan Your Custom Domestic Tour?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Let our experts create a personalized domestic journey that matches your interests and budget.
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
