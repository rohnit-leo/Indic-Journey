import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, Building, Camera, Book, MapPin, Calendar, History, Coffee, CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function HeritageWalksPage() {
  const walks = [
    {
      id: "old-pune",
      title: "Old Pune Heritage Walk",
      description: "Explore the historic heart of Pune with stories of Peshwa era and colonial architecture",
      image: "/images/old-pune-heritage.png",
      duration: "3 Hours",
      groupSize: "5-15 People",
      price: "₹500",
      rating: 4.8,
      reviews: 124,
      highlights: ["Shaniwar Wada", "Dagdusheth Temple", "Mahatma Phule Market", "Historic Streets"],
      difficulty: "Easy",
      link: "/heritage-walks/old-pune",
    },
    {
      id: "temple-tour",
      title: "Temple Tour of Pune",
      description: "Discover the spiritual heritage of Pune through its ancient and modern temples",
      image: "/images/pune-temples.png",
      duration: "4 Hours",
      groupSize: "5-20 People",
      price: "₹600",
      rating: 4.9,
      reviews: 89,
      highlights: ["Dagdusheth Ganpati", "Parvati Temple", "Chaturshringi Temple", "Kasba Ganpati"],
      difficulty: "Moderate",
      link: "/heritage-walks/temple-tour",
    },
    {
      id: "museums",
      title: "Museums of Pune",
      description: "Journey through Pune's cultural heritage via its fascinating museums and galleries",
      image: "/images/pune-museums.png",
      duration: "5 Hours",
      groupSize: "5-12 People",
      price: "₹800",
      rating: 4.7,
      reviews: 67,
      highlights: ["Raja Dinkar Kelkar Museum", "Tribal Museum", "Darshan Museum", "Pune Okayama Friendship Garden"],
      difficulty: "Easy",
      link: "/heritage-walks/museums",
    },
    {
      id: "temple-circuit",
      title: "Bhuleshwar - Sangameshwar - Changwateshwar",
      description: "Sacred temple circuit connecting three ancient Shiva temples near Pune",
      image: "/images/temple-circuit.png",
      duration: "Full Day",
      groupSize: "8-25 People",
      price: "₹1,200",
      rating: 4.9,
      reviews: 156,
      highlights: ["Bhuleshwar Temple", "Sangameshwar Temple", "Changwateshwar Temple", "Scenic Drive"],
      difficulty: "Moderate",
      link: "/heritage-walks/temple-circuit",
    },
  ]

  const features = [
    {
      icon: Building,
      title: "Historical Insights",
      description: "Learn about Pune's rich history from expert local guides",
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Capture stunning architecture and cultural moments",
    },
    {
      icon: Book,
      title: "Cultural Stories",
      description: "Discover fascinating stories and legends of each location",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate group sizes for personalized experiences",
    },
  ]

  return (
    <MainLayout>      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image src="/images/heritage-walks.png" alt="Heritage Walks" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-white">
              Heritage <span className="text-yellow-400 animate-pulse-slow">Walks</span>
            </h1>
            <p className="text-xl text-white mb-8 font-open-sans">
              Step back in time and explore Pune's rich cultural heritage through our guided walking tours. Discover
              ancient temples, historic architecture, and fascinating stories of the past.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">Expert Guides</Badge>
              <Badge className="bg-red-600 text-white px-6 py-3 text-lg">Small Groups</Badge>
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">Cultural Stories</Badge>
            </div>
            
            <div className="flex gap-4 animate-fade-in">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6 px-8">
                Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Book a Private Tour
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg className="relative block" style={{ width: 'calc(100% + 1.3px)', height: '70px' }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>      {/* Features Section */}
      <section className="py-20 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-yellow-400/20 to-red-600/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">EXCEPTIONAL EXPERIENCES</span>
            <h2 className="text-4xl font-bold mb-6 font-poppins">Why Choose Our Heritage Walks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Experience Pune's heritage like never before with our expertly curated walking tours designed to immerse you in history and culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-poppins">{feature.title}</h3>
                <p className="text-gray-600 font-open-sans">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Heritage Walks Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">CURATED EXPERIENCES</span>
            <h2 className="text-4xl font-bold mb-6 font-poppins">Explore Our Heritage Walks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Choose from our carefully designed heritage walks that showcase different aspects of Pune's rich cultural legacy.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-12">
              <TabsTrigger value="all" className="text-lg py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                All Walks
              </TabsTrigger>
              <TabsTrigger value="temples" className="text-lg py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Temple Tours
              </TabsTrigger>
              <TabsTrigger value="history" className="text-lg py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Historical Sites
              </TabsTrigger>
              <TabsTrigger value="cultural" className="text-lg py-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Cultural Tours
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {walks.map((walk) => (
                  <Card
                    key={walk.id}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-xl"
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={walk.image || "/placeholder.svg"}
                          alt={walk.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Difficulty Badge */}
                      <Badge
                        className={`absolute top-4 left-4 font-bold ${
                          walk.difficulty === "Easy"
                            ? "bg-green-600"
                            : walk.difficulty === "Moderate"
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        } text-white shadow-lg`}
                      >
                        {walk.difficulty}
                      </Badge>

                      {/* Price Overlay */}
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                        <div className="text-lg font-bold">{walk.price}</div>
                        <div className="text-xs">per person</div>
                      </div>

                      {/* Rating Overlay */}
                      <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-bold text-sm">{walk.rating}</span>
                          <span className="text-xs text-gray-600">({walk.reviews})</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
                        {walk.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 font-open-sans">{walk.description}</p>

                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                          <span className="font-open-sans">{walk.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-yellow-500" />
                          <span className="font-open-sans">{walk.groupSize}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {walk.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gray-300 text-gray-600">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Link href={walk.link}>
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-black hover:text-white font-semibold group/btn">
                          Book Walk
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="temples" className="pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {walks
                  .filter(walk => walk.id === "temple-tour" || walk.id === "temple-circuit")
                  .map((walk) => (
                    <Card
                      key={walk.id}
                      className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-xl"
                    >
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={walk.image || "/placeholder.svg"}
                            alt={walk.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>

                        {/* Difficulty Badge */}
                        <Badge
                          className={`absolute top-4 left-4 font-bold ${
                            walk.difficulty === "Easy"
                              ? "bg-green-600"
                              : walk.difficulty === "Moderate"
                                ? "bg-yellow-600"
                                : "bg-red-600"
                          } text-white shadow-lg`}
                        >
                          {walk.difficulty}
                        </Badge>

                        {/* Price Overlay */}
                        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="text-lg font-bold">{walk.price}</div>
                          <div className="text-xs">per person</div>
                        </div>

                        {/* Rating Overlay */}
                        <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-sm">{walk.rating}</span>
                            <span className="text-xs text-gray-600">({walk.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
                          {walk.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 font-open-sans">{walk.description}</p>

                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.groupSize}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {walk.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Link href={walk.link}>
                          <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-black hover:text-white font-semibold group/btn">
                            Book Walk
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {walks
                  .filter(walk => walk.id === "old-pune")
                  .map((walk) => (
                    <Card
                      key={walk.id}
                      className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-xl"
                    >
                      {/* Card content same as above, abbreviated for clarity */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={walk.image || "/placeholder.svg"}
                            alt={walk.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>

                        <Badge className="absolute top-4 left-4 font-bold bg-green-600 text-white shadow-lg">
                          {walk.difficulty}
                        </Badge>

                        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="text-lg font-bold">{walk.price}</div>
                          <div className="text-xs">per person</div>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-sm">{walk.rating}</span>
                            <span className="text-xs text-gray-600">({walk.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
                          {walk.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 font-open-sans">{walk.description}</p>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.groupSize}</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {walk.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Link href={walk.link}>
                          <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-black hover:text-white font-semibold group/btn">
                            Book Walk
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cultural" className="pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {walks
                  .filter(walk => walk.id === "museums")
                  .map((walk) => (
                    <Card
                      key={walk.id}
                      className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-xl"
                    >
                      {/* Card content same as above, abbreviated for clarity */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={walk.image || "/placeholder.svg"}
                            alt={walk.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>

                        <Badge className="absolute top-4 left-4 font-bold bg-green-600 text-white shadow-lg">
                          {walk.difficulty}
                        </Badge>

                        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="text-lg font-bold">{walk.price}</div>
                          <div className="text-xs">per person</div>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm shadow-lg">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-sm">{walk.rating}</span>
                            <span className="text-xs text-gray-600">({walk.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
                          {walk.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 font-open-sans">{walk.description}</p>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="font-open-sans">{walk.groupSize}</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {walk.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Link href={walk.link}>
                          <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-black hover:text-white font-semibold group/btn">
                            Book Walk
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">What to Expect</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Historical Sites</h3>
              <p className="text-gray-600 font-open-sans">
                Visit ancient temples, historic buildings, and architectural marvels that tell Pune's story.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Cultural Stories</h3>
              <p className="text-gray-600 font-open-sans">
                Learn fascinating stories, legends, and historical facts from our knowledgeable guides.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Photo Opportunities</h3>
              <p className="text-gray-600 font-open-sans">
                Capture beautiful moments and stunning architecture throughout your heritage walk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">
            Ready to Explore Pune's Heritage?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Join us on a journey through time and discover the rich cultural heritage of Pune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
                Book Your Walk
              </Button>
            </Link>
            <Link href="/customized-holidays">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-lg"
              >
                Custom Heritage Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
