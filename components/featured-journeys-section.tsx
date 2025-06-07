"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Calendar, ArrowRight, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import { useWebsiteContent } from "@/lib/website-content-store"

export function FeaturedJourneysSection() {
  const { featuredJourneys } = useWebsiteContent()
  const tours = featuredJourneys.tours.filter((tour) => tour.enabled)

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-12">
          <Badge className="bg-gradient-to-r from-yellow-400 to-red-600 text-black px-4 py-1.5 text-sm mb-4 font-semibold">
            Featured Tours
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            {featuredJourneys.title.split(" ").map((word, index) =>
              word === "Journeys" ? (
                <span key={index} className="text-transparent bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              ),
            )}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-open-sans leading-relaxed">
            {featuredJourneys.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {tours.map((tour, index) => (
            <Card
              key={tour.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg?height=300&width=400"}
                  alt={tour.title}
                  className="w-full h-48 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Discount Badge */}
                {tour.discount && tour.discount !== "0% OFF" && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-xs">
                    {tour.discount}
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge className="absolute top-3 right-3 bg-yellow-400 text-black font-semibold text-xs">
                  {tour.category}
                </Badge>

                {/* Action Buttons */}
                <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                    <Heart className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>

                {/* Rating Overlay */}
                <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center text-xs">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-gray-300 ml-1">({tour.reviews})</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 font-poppins line-clamp-1">
                  {tour.title}
                </h3>

                <div className="flex items-center text-xs text-gray-600 mb-2">
                  <MapPin className="h-3 w-3 mr-1 text-red-500" />
                  <span className="font-open-sans">{tour.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-yellow-500" />
                    <span className="font-open-sans">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1 text-blue-500" />
                    <span className="font-open-sans">{tour.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600 font-poppins">{tour.price}</span>
                    {tour.originalPrice && tour.originalPrice !== tour.price && (
                      <span className="text-xs text-gray-500 line-through font-open-sans">{tour.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {tour.highlights.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tour.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Link href={`/tours/${tour.id}`}>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn text-xs py-1">
                    Book Now
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-600 hover:text-black hover:border-transparent transition-all duration-300 px-6 py-2 text-sm font-semibold"
          >
            View All Tours
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
