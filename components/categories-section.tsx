"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CategoriesSection() {
  const categories = [
    {
      id: "fixed-departures",
      title: "Fixed Departures",
      description: "Join our scheduled group tours with guaranteed departures",
      image: "/images/fixed-departures.png",
      icon: Calendar,
      color: "from-blue-600 to-blue-800",
      subcategories: [
        {
          name: "Domestic",
          link: "/fixed-departures/domestic",
          description: "Explore incredible India",
          tours: "25+ Tours",
        },
        {
          name: "International",
          link: "/fixed-departures/international",
          description: "Discover the world",
          tours: "15+ Tours",
        },
      ],
    },
    {
      id: "customized-holidays",
      title: "Customized Holidays",
      description: "Tailor-made journeys designed just for you",
      image: "/images/customized-holidays.png",
      icon: Users,
      color: "from-green-600 to-green-800",
      subcategories: [
        {
          name: "Domestic",
          link: "/customized-holidays/domestic",
          description: "Personalized India tours",
          tours: "Unlimited Options",
        },
        {
          name: "International",
          link: "/customized-holidays/international",
          description: "Custom world tours",
          tours: "Global Destinations",
        },
      ],
    },
    {
      id: "heritage-walks",
      title: "Heritage Walks",
      description: "Discover the rich cultural heritage of Pune",
      image: "/images/heritage-walks.png",
      icon: Building,
      color: "from-yellow-600 to-orange-600",
      subcategories: [
        {
          name: "Old Pune Heritage Walk",
          link: "/heritage-walks/old-pune",
          description: "Historic Pune exploration",
          tours: "Daily Walks",
        },
        {
          name: "Temple Tour of Pune",
          link: "/heritage-walks/temple-tour",
          description: "Sacred temples journey",
          tours: "Spiritual Tours",
        },
        {
          name: "Museums of Pune",
          link: "/heritage-walks/museums",
          description: "Cultural museum visits",
          tours: "Educational Tours",
        },
        {
          name: "Bhuleshwar - Sangameshwar - Changwateshwar",
          link: "/heritage-walks/temple-circuit",
          description: "Sacred temple circuit",
          tours: "Pilgrimage Tours",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Explore Our <span className="text-yellow-500">Travel Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
            Choose from our diverse range of travel experiences, from fixed group departures to personalized journeys
            and cultural heritage walks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                </div>

                {/* Category Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Category Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{category.title}</h3>
                  <p className="text-white/90 font-open-sans">{category.description}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.subcategories.map((sub, idx) => (
                    <Link key={idx} href={sub.link}>
                      <div className="group/sub flex items-center justify-between p-4 bg-gray-50 hover:bg-yellow-50 rounded-lg transition-all duration-300 cursor-pointer border hover:border-yellow-300">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover/sub:text-yellow-600 transition-colors font-poppins">
                            {sub.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-open-sans">{sub.description}</p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {sub.tours}
                          </Badge>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/sub:text-yellow-600 group-hover/sub:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Link href={`/${category.id}`}>
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn">
                      View All {category.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2 font-poppins">50+</div>
            <div className="text-gray-600 font-open-sans">Tour Packages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2 font-poppins">1000+</div>
            <div className="text-gray-600 font-open-sans">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2 font-poppins">25+</div>
            <div className="text-gray-600 font-open-sans">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2 font-poppins">5+</div>
            <div className="text-gray-600 font-open-sans">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
