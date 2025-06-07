import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, Heart, Settings, Globe, MapPin, Clock, Calendar, Check, ArrowDown, Camera, Star, Sparkles, GaugeCircle, LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Separator from "@/components/ui/separator"

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
      {/* Enhanced Hero Section with Background Image and Animated Elements */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/customized-holidays.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block animate-fade-in-up">
              <Badge className="bg-white text-black px-4 py-1.5 text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4 mr-1 inline-block" /> 
                Tailored For You
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-poppins text-white drop-shadow-md animate-fade-in-up">
              Customized <span className="text-black">Holidays</span>
            </h1>
            
            <p className="text-xl text-white mb-8 font-open-sans max-w-2xl animate-fade-in-up animation-delay-200">
              Your journey, your way. We create personalized travel experiences that match your dreams, preferences, and
              budget. Every detail is crafted just for you.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-8 animate-fade-in-up animation-delay-300">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Check className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">Personalized Itineraries</span>
              </div>
              
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Check className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">Flexible Dates</span>
              </div>
              
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Check className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">Expert Planning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 h-auto text-lg rounded-lg group">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 h-auto text-lg rounded-lg transition-colors">
                View Testimonials
                <Star className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white w-full h-auto">
            <path d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,53.3C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>      {/* Enhanced Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-yellow-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-100 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4 font-poppins">The Indic Journey Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Experience travel like never before with our personalized approach to holiday planning.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins text-center group-hover:text-yellow-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 font-open-sans text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Testimonial Preview */}
          <div className="mt-20 bg-gradient-to-r from-yellow-50 to-red-50 rounded-2xl p-8 border border-yellow-100 relative">
            <div className="absolute -top-5 left-10">
              <Badge className="bg-gradient-to-r from-yellow-400 to-red-600 text-white px-4 py-1">
                <Star className="h-4 w-4 mr-1 inline-block" fill="currentColor" /> Traveler Love
              </Badge>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Happy Traveler" 
                  className="rounded-full object-cover border-4 border-white shadow-md"
                  fill
                />
              </div>
              
              <div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "Indic Journey created the perfect customized trip for our family. They understood exactly what we wanted and crafted an experience that exceeded our expectations. Every detail was taken care of!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Family trip to Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Enhanced Package Types with Tabs */}
      <section className="py-20 bg-gray-50 relative">
        {/* Decorative wavy lines */}
        <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-20 text-white fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 mb-4">Explore Options</Badge>
            <h2 className="text-4xl font-bold mb-4 font-poppins">Choose Your Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Whether you want to explore India or venture abroad, we create the perfect customized experience for you.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-gray-200 p-1 rounded-full">
                <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r from-yellow-400 to-red-600 data-[state=active]:text-white">
                  All Options
                </TabsTrigger>
                <TabsTrigger value="domestic" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r from-yellow-400 to-red-600 data-[state=active]:text-white">
                  Domestic
                </TabsTrigger>
                <TabsTrigger value="international" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r from-yellow-400 to-red-600 data-[state=active]:text-white">
                  International
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {packages.map((pkg) => (
                  <Card
                    key={pkg.type}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl"
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
                        <Badge className="bg-gradient-to-r from-yellow-400 to-red-600 text-white font-bold px-3 py-1">Starting {pkg.startingPrice}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 font-poppins flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-yellow-500" /> Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {pkg.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-gray-300 text-gray-600 justify-center hover:bg-gray-50 transition-colors"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Link href={pkg.link}>
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn rounded-xl h-12">
                          Customize Your Trip
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="domestic" className="mt-0">
              <Card
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/customized-domestic.png"
                      alt="Domestic Customized Tours"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Domestic Customized Tours</h3>
                    <p className="text-white/90 font-open-sans">Explore India your way with personalized domestic travel experiences</p>
                  </div>

                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-red-600 text-white font-bold px-3 py-1">Starting ₹15,000</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" /> Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Flexible Dates", "Custom Routes", "Local Experiences", "Budget Options"].map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-gray-300 text-gray-600 justify-center hover:bg-gray-50 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/customized-holidays/domestic">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn rounded-xl h-12">
                      Customize Your Trip
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="international" className="mt-0">
              <Card
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/customized-international.png"
                      alt="International Custom Tours"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-poppins">International Custom Tours</h3>
                    <p className="text-white/90 font-open-sans">Discover the world with tailor-made international travel packages</p>
                  </div>

                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-red-600 text-white font-bold px-3 py-1">Starting ₹75,000</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" /> Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Visa Assistance", "Flight Bookings", "Global Destinations", "Luxury Options"].map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-gray-300 text-gray-600 justify-center hover:bg-gray-50 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/customized-holidays/international">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn rounded-xl h-12">
                      Customize Your Trip
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -left-20 top-20 w-40 h-40 bg-yellow-100 rounded-full opacity-50"></div>
        <div className="absolute -right-20 bottom-20 w-40 h-40 bg-red-100 rounded-full opacity-50"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full opacity-30"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-100 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-4 font-poppins">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Creating your perfect customized holiday is simple and straightforward with our expert team.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mt-6"></div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 hidden md:block"></div>
            
            <div className="grid md:grid-cols-4 gap-10">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-20 group hover:scale-110 transition-transform shadow-lg animate-pulse-slow">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <h3 className="text-xl font-bold mb-3 font-poppins">Tell Us Your Dreams</h3>
                  <p className="text-gray-600 font-open-sans">
                    Share your travel preferences, interests, budget, and desired destinations with our experts.
                  </p>
                </div>
              </div>

              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 relative z-20 group hover:scale-110 transition-transform shadow-lg animate-pulse-slow animation-delay-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <h3 className="text-xl font-bold mb-3 font-poppins">Get Custom Proposal</h3>
                  <p className="text-gray-600 font-open-sans">
                    Receive a detailed, personalized itinerary crafted specifically for your travel style and preferences.
                  </p>
                </div>
              </div>

              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-20 group hover:scale-110 transition-transform shadow-lg animate-pulse-slow animation-delay-600">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <h3 className="text-xl font-bold mb-3 font-poppins">Refine & Perfect</h3>
                  <p className="text-gray-600 font-open-sans">
                    Work with our team to adjust and perfect every detail until your itinerary is exactly right.
                  </p>
                </div>
              </div>

              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-20 group hover:scale-110 transition-transform shadow-lg animate-pulse-slow animation-delay-900">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <h3 className="text-xl font-bold mb-3 font-poppins">Travel & Enjoy</h3>
                  <p className="text-gray-600 font-open-sans">
                    Embark on your perfectly planned journey with 24/7 support throughout your travels.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info Box */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <GaugeCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Ready to Start Planning?</h4>
                <p className="text-gray-700">
                  Our expert travel consultants typically respond within 24 hours with a draft itinerary based on your requirements. The entire planning process usually takes 3-7 days depending on the complexity of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rajasthan-palace.png"
            alt="Magnificent India"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-red-600/90 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-pulse-slow">
              Limited Time Offer
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-poppins drop-shadow-md">
              Your Dream Holiday Awaits
            </h2>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto font-open-sans">
              Book now and receive a complimentary hotel upgrade or cultural experience on select customized journeys. Let our travel experts create a personalized itinerary that exceeds your expectations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-10 inline-block">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-white/80 text-sm">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">10k+</div>
                  <div className="text-white/80 text-sm">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">250+</div>
                  <div className="text-white/80 text-sm">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-xl font-semibold group">
                  Start Planning Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/fixed-departures">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto rounded-xl font-semibold"
                >
                  View Fixed Departures
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
