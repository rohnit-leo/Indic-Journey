import { MainLayout } from "@/components/main-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Star, Users, Check, Clock, Utensils, Home, BusFront, Mountain, Sunrise } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DoDhamTourPage() {
  const tour = {
    id: "do-dham-kedarnath-badrinath",
    title: "Do Dham (Kedarnath - Badrinath)",
    location: "Haridwar - Kedarnath - Badrinath",
    duration: "6 Days",
    groupSize: "4-18 People",
    price: "₹28,000",
    originalPrice: "₹34,000",
    image: "/images/kedarnath-temple.png",
    category: "Pilgrimage",
    rating: 4.9,
    reviews: 124,
    highlights: ["Kedarnath Temple", "Badrinath Temple", "Haridwar Ganga Aarti", "Valley of Flowers"],
    discount: "18% OFF",
    description: "Embark on a divine journey to two of the most revered Char Dhams - Kedarnath and Badrinath. This spiritual expedition takes you through the sacred Himalayan shrines, offering a perfect blend of devotion and natural beauty.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar",
        description: "Arrive in Haridwar and check into your hotel. In the evening, witness the mesmerizing Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
        accommodationType: "Hotel",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Haridwar to Guptkashi",
        description: "After breakfast, drive to Guptkashi (220 km, 8-9 hrs). En route, enjoy the scenic beauty of the Himalayas and visit Devprayag. Overnight stay in Guptkashi.",
        accommodationType: "Hotel",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Guptkashi to Kedarnath",
        description: "Early morning, drive to Sonprayag, then trek 16 km to Kedarnath or take a helicopter (optional, at additional cost). Visit the ancient Kedarnath Temple. Overnight stay in Kedarnath.",
        accommodationType: "Guest House",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 4,
        title: "Kedarnath to Joshimath",
        description: "Early morning temple darshan, then return to Sonprayag by trek or helicopter. Drive to Joshimath (200 km, 7-8 hrs). Overnight stay in Joshimath.",
        accommodationType: "Hotel",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 5,
        title: "Joshimath to Badrinath and back",
        description: "Drive to Badrinath (45 km, 2 hrs). Visit Badrinath Temple for darshan. Also visit Mana village - the last Indian village before Tibet. Return to Joshimath for overnight stay.",
        accommodationType: "Hotel",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 6,
        title: "Joshimath to Haridwar/Departure",
        description: "After breakfast, drive back to Haridwar (280 km, 9-10 hrs). Tour concludes upon arrival in Haridwar.",
        accommodationType: "None",
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "5 nights accommodation as per itinerary",
      "Meals as mentioned in the itinerary",
      "Transfers and sightseeing by AC vehicle",
      "Experienced driver and guide",
      "All applicable taxes",
      "Permits and entry fees"
    ],
    exclusions: [
      "Helicopter charges for Kedarnath (if opted)",
      "Personal expenses",
      "Any meals not mentioned in inclusions",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ],
    upcomingDepartures: [
      { date: "June 15, 2025", availability: "Limited seats", price: "₹28,000" },
      { date: "July 10, 2025", availability: "Available", price: "₹30,000" },
      { date: "August 5, 2025", availability: "Available", price: "₹30,000" },
      { date: "September 2, 2025", availability: "Available", price: "₹28,000" }
    ]
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={tour.image} 
            alt={tour.title} 
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-400 text-black px-3 py-1">
              {tour.category}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-white">
              {tour.title}
            </h1>
            <div className="flex items-center text-white mb-4">
              <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-xl font-open-sans">{tour.location}</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="font-open-sans">{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="font-open-sans">{tour.groupSize}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1 text-yellow-400 fill-current" />
                <span className="font-bold">{tour.rating}</span>
                <span className="ml-1 text-gray-300">({tour.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="text-3xl font-bold text-white mr-3">{tour.price}</div>
              <div className="text-xl line-through text-gray-400 mr-3">{tour.originalPrice}</div>
              <Badge className="bg-red-600 text-white font-bold">
                {tour.discount}
              </Badge>
            </div>
            
            <Button className="bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white px-8 py-6 text-xl font-semibold rounded-xl">
              Book This Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 font-poppins text-gray-900">Tour Overview</h2>
              <p className="text-lg text-gray-700 mb-8 font-open-sans leading-relaxed">
                {tour.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Highlights</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mr-3 mt-1 bg-yellow-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700 font-open-sans">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-poppins text-gray-900">Quick Info</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold">{tour.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Destinations</div>
                        <div className="font-semibold">{tour.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <Users className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Group Size</div>
                        <div className="font-semibold">{tour.groupSize}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <Utensils className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Meals</div>
                        <div className="font-semibold">Most meals included</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <Home className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Accommodation</div>
                        <div className="font-semibold">Hotels & Guest Houses</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <BusFront className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Transport</div>
                        <div className="font-semibold">AC Vehicle</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 font-poppins text-gray-900 text-center">
            Tour Itinerary
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {tour.itinerary.map((day, idx) => (
              <div key={idx} className="mb-8 relative">
                {idx !== tour.itinerary.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-yellow-300"></div>
                )}
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-600 flex items-center justify-center text-black font-bold text-lg flex-shrink-0 z-10">
                    {day.day}
                  </div>
                  
                  <div className="ml-6 bg-white p-6 rounded-xl shadow-md flex-grow">
                    <h3 className="text-xl font-bold mb-2 font-poppins text-gray-900">{day.title}</h3>
                    <p className="text-gray-700 mb-4 font-open-sans">{day.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <Home className="h-4 w-4 mr-2 text-yellow-600" />
                        <span className="text-sm text-gray-600">{day.accommodationType}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-yellow-600" />
                        <span className="text-sm text-gray-600">{day.meals.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-900">Inclusions</h2>
              <ul className="space-y-3">
                {tour.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-open-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-900">Exclusions</h2>
              <ul className="space-y-3">
                {tour.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-100 p-1 rounded-full text-red-600">×</div>
                    <span className="text-gray-700 font-open-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Departures */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 font-poppins text-gray-900 text-center">
            Upcoming Departures
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-3 font-semibold text-gray-900 bg-yellow-100 p-4">
                <div>Departure Date</div>
                <div>Availability</div>
                <div>Price</div>
              </div>
              
              {tour.upcomingDepartures.map((departure, idx) => (
                <div key={idx} className="grid grid-cols-3 p-4 border-b border-gray-100 hover:bg-yellow-50 transition-colors">
                  <div className="font-semibold text-gray-800">{departure.date}</div>
                  <div className={departure.availability === "Limited seats" ? "text-orange-600" : "text-green-600"}>
                    {departure.availability}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{departure.price}</span>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Book
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">Ready for a Spiritual Journey?</h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Book your Do Dham pilgrimage today and embark on an unforgettable spiritual journey to Kedarnath and Badrinath.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
            Book Now
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
