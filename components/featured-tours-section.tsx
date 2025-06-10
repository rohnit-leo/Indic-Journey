import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedToursSection() {
  const featuredTours = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Spiritual Varanasi",
      location: "Varanasi - Sarnath",
      duration: "4 Days",
      groupSize: "2-20 People",
      price: "₹15,000",
      originalPrice: "₹18,000",
      image: "/images/varanasi-ganga.png",
      category: "Spiritual",
      rating: 4.6,
      reviews: 124,
      highlights: ["Ganga Aarti", "Temple Tours", "Boat Rides", "Meditation"],
      discount: "17% OFF",
    },
  ]

  return (
    <section id="tours" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-2 text-lg mb-6 font-semibold">
            Featured Tours
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Handpicked{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text">Journeys</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-open-sans leading-relaxed">
            Discover our carefully curated selection of extraordinary journeys across India's most captivating
            destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {featuredTours.map((tour, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-56 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Discount Badge */}
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold">
                  {tour.discount}
                </Badge>

                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold">{tour.category}</Badge>

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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 font-poppins">
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

                <Link href={`/tours/${tour.id || tour.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold group/btn">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            View All Tours
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
