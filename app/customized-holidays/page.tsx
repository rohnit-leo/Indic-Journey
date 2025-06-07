import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, Heart, Settings, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomizedHolidaysPage() {
  const features = [
    {
      icon: Heart,
      title: "Personalized Itineraries",
      description: "Every journey is crafted based on your preferences, interests, and travel style.",
    },
    {
      icon: Settings,
      title: "Flexible Planning",
      description: "Modify your itinerary anytime. We adapt to your changing needs and preferences.",
    },
    {
      icon: Globe,
      title: "Expert Local Knowledge",
      description: "Our destination experts ensure you experience the best each place has to offer.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Your personal travel consultant is available throughout your journey.",
    },
  ]

  const packages = [
    {
      type: "domestic",
      title: "Domestic Customized Tours",
      description: "Explore India your way with personalized domestic travel experiences",
      image: "/images/customized-domestic.png",
      features: ["Flexible Dates", "Custom Routes", "Local Experiences", "Budget Options"],
      startingPrice: "₹15,000",
      link: "/customized-holidays/domestic",
    },
    {
      type: "international",
      title: "International Custom Tours",
      description: "Discover the world with tailor-made international travel packages",
      image: "/images/customized-international.png",
      features: ["Visa Assistance", "Flight Bookings", "Global Destinations", "Luxury Options"],
      startingPrice: "₹75,000",
      link: "/customized-holidays/international",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
              Customized <span className="text-white">Holidays</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 font-open-sans">
              Your journey, your way. We create personalized travel experiences that match your dreams, preferences, and
              budget. Every detail is crafted just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-black text-white px-6 py-3 text-lg">Personalized Itineraries</Badge>
              <Badge className="bg-white text-black px-6 py-3 text-lg">Flexible Dates</Badge>
              <Badge className="bg-black text-white px-6 py-3 text-lg">Expert Planning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Choose Customized Holidays?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Experience travel like never before with our personalized approach to holiday planning.
            </p>
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

      {/* Package Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Choose Your Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Whether you want to explore India or venture abroad, we create the perfect customized experience for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.type}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{pkg.title}</h3>
                    <p className="text-white/90 font-open-sans">{pkg.description}</p>
                  </div>

                  <div className="absolute top-6 right-6">
                    <Badge className="bg-yellow-400 text-black font-bold">Starting {pkg.startingPrice}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-gray-300 text-gray-600 justify-center"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={pkg.link}>
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn">
                      Customize Your Trip
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Creating your perfect customized holiday is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Tell Us Your Dreams</h3>
              <p className="text-gray-600 font-open-sans">
                Share your travel preferences, interests, budget, and desired destinations with our experts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Get Custom Proposal</h3>
              <p className="text-gray-600 font-open-sans">
                Receive a detailed, personalized itinerary crafted specifically for your travel style and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Refine & Perfect</h3>
              <p className="text-gray-600 font-open-sans">
                Work with our team to adjust and perfect every detail until your itinerary is exactly right.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Travel & Enjoy</h3>
              <p className="text-gray-600 font-open-sans">
                Embark on your perfectly planned journey with 24/7 support throughout your travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">
            Ready to Plan Your Perfect Holiday?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Let our travel experts create a personalized journey that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
                Start Planning Now
              </Button>
            </Link>
            <Link href="/fixed-departures">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-lg"
              >
                View Fixed Departures
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
