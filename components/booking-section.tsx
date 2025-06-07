"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BookingSection() {
  const [selectedTour, setSelectedTour] = useState("")
  const [travelers, setTravelers] = useState("2")
  const [selectedDate, setSelectedDate] = useState("")

  const popularTours = [
    { id: "golden-triangle", name: "Golden Triangle Classic", price: "₹25,000", duration: "7 Days" },
    { id: "kerala", name: "Kerala Backwaters", price: "₹22,000", duration: "6 Days" },
    { id: "ladakh", name: "Ladakh Adventure", price: "₹35,000", duration: "8 Days" },
    { id: "rajasthan", name: "Royal Rajasthan", price: "₹30,000", duration: "10 Days" },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-4 py-1.5 text-sm mb-4">
            Quick Booking
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-['Poppins']">Plan Your Journey</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Start planning your perfect getaway with our easy booking system. Choose from our curated tours or create a
            custom experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-black to-gray-800 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold font-['Poppins'] flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-yellow-400" />
                  Plan Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="tour" className="text-base font-semibold text-gray-700">
                      Select Tour
                    </Label>
                    <Select value={selectedTour} onValueChange={setSelectedTour}>
                      <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors">
                        <SelectValue placeholder="Choose your destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularTours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>
                            <div className="flex justify-between items-center w-full">
                              <span>{tour.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {tour.duration}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="text-base font-semibold text-gray-700">
                      Number of Travelers
                    </Label>
                    <Select value={travelers} onValueChange={setTravelers}>
                      <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Person" : "People"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="departure" className="text-base font-semibold text-gray-700">
                      Departure Date
                    </Label>
                    <Input
                      type="date"
                      className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-base font-semibold text-gray-700">
                      Budget Range
                    </Label>
                    <Select>
                      <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">₹15,000 - ₹25,000</SelectItem>
                        <SelectItem value="mid">₹25,000 - ₹40,000</SelectItem>
                        <SelectItem value="luxury">₹40,000 - ₹60,000</SelectItem>
                        <SelectItem value="premium">₹60,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      placeholder="Enter your full name"
                      className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="h-10 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <Button className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Send Query
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
