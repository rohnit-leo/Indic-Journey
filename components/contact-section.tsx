import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const offices = [
    {
      title: "Head Office - Thane",
      address: "1A Murlidhar CHS, Behind Godbole Hospital, Brahman Society, Naupada, Thane (West), Thane 400602",
      phone: "+91-9320131910, +91-9320031910",
      email: "info@indicjourneys.com",
    },
    {
      title: "Branch - Dadar",
      address: "Pearl Centre, Sadguru Class, Senapati Bapat Marg, St Sebastian Colony, Dadar West, Mumbai",
      phone: "+91-9320231910",
      email: "info@indicjourneys.com",
    },
    {
      title: "Branch - Pune",
      address: "Plot 47, Amrita Bungalow, Tulshibagwale Colony, Sahakar Nagar 2, Pune – 411009",
      phone: "+91-9422870773",
      email: "info@indicjourneys.com",
    },
    {
      title: "Branch - Leh",
      address: "Siksa Complex, Fort Road, Leh – Ladakh – 194101",
      phone: "+91-9320031910",
      email: "info@indicjourneys.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-['Poppins']">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Ready to start your journey? Contact us today and let's plan your perfect travel experience together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black font-['Poppins']">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Interest</label>
                <Input placeholder="e.g., Kerala Backwaters, Golden Triangle" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Tell us about your travel plans and preferences..." rows={4} />
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4 font-['Poppins']">Our Offices</h3>
              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                <Clock className="h-5 w-5" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>Sunday: 10:00 AM - 5:00 PM</span>
              </div>
            </div>

            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-black mb-3 font-['Poppins']">{office.title}</h4>

                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{office.address}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span className="text-sm">{office.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* USA Office */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-black mb-3 font-['Poppins']">International Office - USA</h4>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">San Ramon, California, USA</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+1-925-320-1091</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">payal.ishatour@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
