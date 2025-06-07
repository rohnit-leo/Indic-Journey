import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-black">
            Contact <span className="text-white">Us</span>
          </h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-open-sans">
            Ready to start your journey? Get in touch with our travel experts and let us create the perfect experience
            for you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-black to-gray-800 text-white">
                <CardTitle className="text-2xl font-bold font-poppins flex items-center">
                  <Send className="mr-3 h-6 w-6 text-yellow-400" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base font-semibold text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base font-semibold text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tourType" className="text-base font-semibold text-gray-700">
                      Tour Type
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors">
                        <SelectValue placeholder="Select tour type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic">Domestic Tours</SelectItem>
                        <SelectItem value="international">International Tours</SelectItem>
                        <SelectItem value="fixed">Fixed Departures</SelectItem>
                        <SelectItem value="customized">Customized Holidays</SelectItem>
                        <SelectItem value="heritage">Heritage Walks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="text-base font-semibold text-gray-700">
                      Number of Travelers
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors">
                        <SelectValue placeholder="Select travelers" />
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

                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-base font-semibold text-gray-700">
                    Preferred Destination
                  </Label>
                  <Input
                    id="destination"
                    placeholder="Where would you like to go?"
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel preferences, dates, budget, and any special requirements..."
                    className="min-h-32 border-2 border-gray-200 focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Send className="mr-3 h-5 w-5" />
                  Send Query
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-poppins">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-poppins">Phone</h3>
                      <p className="text-gray-600 font-open-sans">+91-9320131910</p>
                      <p className="text-gray-600 font-open-sans">+91-9320131911</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-poppins">Email</h3>
                      <p className="text-gray-600 font-open-sans">info@indicjourneys.com</p>
                      <p className="text-gray-600 font-open-sans">bookings@indicjourneys.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-poppins">Office</h3>
                      <p className="text-gray-600 font-open-sans">
                        123 Travel Street, Tourism District
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-poppins">Business Hours</h3>
                      <p className="text-gray-600 font-open-sans">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-yellow-400 to-red-500 text-black">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 text-black" />
                  <h3 className="text-2xl font-bold mb-4 font-poppins">Need Immediate Help?</h3>
                  <p className="mb-6 font-open-sans">
                    Our travel experts are available to assist you with any questions or urgent booking requirements.
                  </p>
                  <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3">
                    Call Now: +91-9320131910
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500 font-open-sans">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
