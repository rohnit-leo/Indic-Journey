import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, Building, Camera, Book } from "lucide-react"
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
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heritage-walks.png" alt="Heritage Walks" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-white">
              Heritage <span className="text-yellow-400">Walks</span>
            </h1>
            <p className="text-xl text-white mb-8 font-open-sans">
              Step back in time and explore Pune's rich cultural heritage through our guided walking tours. Discover
              ancient temples, historic architecture, and fascinating stories of the past.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">Expert Guides</Badge>
              <Badge className="bg-red-600 text-white px-6 py-3 text-lg">Small Groups</Badge>
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">Cultural Stories</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Choose Our Heritage Walks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Experience Pune's heritage like never before with our expertly curated walking tours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-600 font-open-sans">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Walks Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Our Heritage Walks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Choose from our carefully designed heritage walks that showcase different aspects of Pune's rich cultural
              legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {walks.map((walk) => (
              <Card
                key={walk.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
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
                    } text-white`}
                  >
                    {walk.difficulty}
                  </Badge>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold">{walk.price}</div>
                    <div className="text-xs">per person</div>
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-2 rounded-lg backdrop-blur-sm">
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
