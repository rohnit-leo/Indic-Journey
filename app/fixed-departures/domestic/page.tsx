import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DomesticFixedDeparturesPage() {
  const domesticTours = [
    {
      id: "golden-triangle",
      title: "Golden Triangle Classic",
      location: "Delhi - Agra - Jaipur",
      duration: "7 Days",
      groupSize: "2-15 People",
      price: "₹25,000",
      originalPrice: "₹30,000",
      image: "/images/taj-mahal.png",
      category: "Heritage",
      rating: 4.8,
      reviews: 156,
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "Amber Fort"],
      discount: "17% OFF",
      nextDeparture: "15 Jan 2024",
    },
    {
      id: "kerala-backwaters",
      title: "Kerala Backwaters",
      location: "Kochi - Alleppey - Munnar",
      duration: "6 Days",
      groupSize: "2-12 People",
      price: "₹22,000",
      originalPrice: "₹26,000",
      image: "/images/kerala-backwaters.png",
      category: "Nature",
      rating: 4.9,
      reviews: 203,
      highlights: ["Houseboat Stay", "Tea Plantations", "Spice Gardens", "Ayurveda"],
      discount: "15% OFF",
      nextDeparture: "20 Jan 2024",
    },
    {
      id: "ladakh-adventure",
      title: "Ladakh Adventure",
      location: "Leh - Nubra - Pangong",
      duration: "8 Days",
      groupSize: "4-16 People",
      price: "₹35,000",
      originalPrice: "₹42,000",
      image: "/images/ladakh-mountains.png",
      category: "Adventure",
      rating: 4.7,
      reviews: 89,
      highlights: ["Khardung La", "Pangong Lake", "Monasteries", "Desert Safari"],
      discount: "17% OFF",
      nextDeparture: "25 Jan 2024",
    },
    {
      id: "rajasthan-royal",
      title: "Royal Rajasthan",
      location: "Jaipur - Jodhpur - Udaipur - Jaisalmer",
      duration: "10 Days",
      groupSize: "2-12 People",
      price: "₹40,000",
      originalPrice: "₹48,000",
      image: "/images/rajasthan-palace.png",
      category: "Heritage",
      rating: 4.9,
      reviews: 215,
      highlights: ["Palace Stays", "Desert Safari", "Cultural Shows", "Traditional Cuisine"],
      discount: "17% OFF",
      nextDeparture: "30 Jan 2024",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
              Domestic <span className="text-white">Fixed Departures</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 font-open-sans">
              Explore the incredible diversity of India with our guaranteed departure tours. From the majestic Himalayas
              to the serene backwaters of Kerala, discover India's hidden gems with fellow travelers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-black text-white px-6 py-3 text-lg">Heritage Tours</Badge>
              <Badge className="bg-white text-black px-6 py-3 text-lg">Adventure Tours</Badge>
              <Badge className="bg-black text-white px-6 py-3 text-lg">Nature Tours</Badge>
              <Badge className="bg-white text-black px-6 py-3 text-lg">Spiritual Tours</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Upcoming Domestic Departures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Join our scheduled group tours and make new friends while exploring India's most beautiful destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domesticTours.map((tour) => (
              <Card
                key={tour.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Discount Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold">
                    {tour.discount}
                  </Badge>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold">
                    {tour.category}
                  </Badge>

                  {/* Next Departure */}
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-xs font-bold">Next Departure</div>
                    <div className="text-sm">{tour.nextDeparture}</div>
                  </div>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold">{tour.price}</div>
                    <div className="text-xs line-through text-gray-300">{tour.originalPrice}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
                    {tour.title}
                  </h3>

                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                    <span className="font-open-sans">{tour.location}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-yellow-500" />
                      <span className="font-open-sans">{tour.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-yellow-500" />
                      <span className="font-open-sans">{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-sm">{tour.rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({tour.reviews} reviews)</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fixed Departures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Choose Fixed Departures?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Meet Fellow Travelers</h3>
              <p className="text-gray-600 font-open-sans">
                Join like-minded travelers and make new friends while exploring incredible destinations together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Guaranteed Departures</h3>
              <p className="text-gray-600 font-open-sans">
                Our tours are guaranteed to depart on scheduled dates, so you can plan your travel with confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Expert Guides</h3>
              <p className="text-gray-600 font-open-sans">
                Travel with experienced local guides who know the best spots and hidden gems of each destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Book your spot on one of our upcoming departures and start your incredible journey across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">Contact Us</Button>
            </Link>
            <Link href="/fixed-departures/international">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-lg"
              >
                View International Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
