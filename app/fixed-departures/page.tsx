import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight, Filter, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FixedDeparturesPage() {
  const tours = [
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
      type: "domestic",
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
      type: "domestic",
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
      type: "domestic",
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
      type: "domestic",
    },
    {
      id: "europe-classic",
      title: "Europe Classic Tour",
      location: "Paris - Rome - London - Amsterdam",
      duration: "12 Days",
      groupSize: "2-20 People",
      price: "₹1,50,000",
      originalPrice: "₹1,80,000",
      image: "/images/europe-tour.png",
      category: "International",
      rating: 4.8,
      reviews: 142,
      highlights: ["Eiffel Tower", "Colosseum", "Big Ben", "Canal Cruise"],
      discount: "17% OFF",
      type: "international",
    },
    {
      id: "southeast-asia",
      title: "Southeast Asia Explorer",
      location: "Thailand - Singapore - Malaysia",
      duration: "9 Days",
      groupSize: "2-16 People",
      price: "₹85,000",
      originalPrice: "₹1,00,000",
      image: "/images/southeast-asia.png",
      category: "International",
      rating: 4.7,
      reviews: 98,
      highlights: ["Bangkok Temples", "Marina Bay", "Petronas Towers", "Island Hopping"],
      discount: "15% OFF",
      type: "international",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
              Fixed <span className="text-white">Departures</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 font-open-sans">
              Join our scheduled group tours with guaranteed departures. Perfect for solo travelers and those who prefer
              the company of fellow explorers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fixed-departures/domestic">
                <Badge className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-lg cursor-pointer">
                  Domestic Tours
                </Badge>
              </Link>
              <Link href="/fixed-departures/international">
                <Badge className="bg-white hover:bg-gray-100 text-black px-6 py-3 text-lg cursor-pointer">
                  International Tours
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search tours, destinations..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="domestic">Domestic</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">1-5 Days</SelectItem>
                  <SelectItem value="medium">6-10 Days</SelectItem>
                  <SelectItem value="long">11+ Days</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Under ₹30,000</SelectItem>
                  <SelectItem value="mid">₹30,000 - ₹80,000</SelectItem>
                  <SelectItem value="premium">₹80,000+</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((tour) => (
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

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold">{tour.price}</div>
                    <div className="text-xs line-through text-gray-300">{tour.originalPrice}</div>
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-sm">{tour.rating}</span>
                      <span className="text-xs text-gray-600">({tour.reviews})</span>
                    </div>
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

                  <Link href={`/contact`}>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">Need a Custom Itinerary?</h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Can't find the perfect fixed departure? Let us create a personalized journey just for you.
          </p>
          <Link href="/customized-holidays">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
              Explore Customized Holidays
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
