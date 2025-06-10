import { redirect } from "next/navigation"

export default function InternationalToursPage() {
  redirect("/fixed-departures")
}
  const internationalTours = [
    {
      id: "europe-classic",
      title: "Europe Classic Tour",
      location: "Paris - Rome - London - Amsterdam",
      duration: "12 Days",
      groupSize: "2-20 People",
      price: "₹1,50,000",
      originalPrice: "₹1,80,000",
      image: "/images/europe-tour.png",
      category: "International",
      rating: 4.8,
      reviews: 142,
      highlights: ["Eiffel Tower", "Colosseum", "Big Ben", "Canal Cruise"],
      discount: "17% OFF",
      nextDeparture: "10 Feb 2024",
      includes: ["Flights", "Hotels", "Meals", "Visa Assistance"],
    },
    {
      id: "southeast-asia",
      title: "Southeast Asia Explorer",
      location: "Thailand - Singapore - Malaysia",
      duration: "9 Days",
      groupSize: "2-16 People",
      price: "₹85,000",
      originalPrice: "₹1,00,000",
      image: "/images/southeast-asia.png",
      category: "International",
      rating: 4.7,
      reviews: 98,
      highlights: ["Bangkok Temples", "Marina Bay", "Petronas Towers", "Island Hopping"],
      discount: "15% OFF",
      nextDeparture: "18 Feb 2024",
      includes: ["Flights", "Hotels", "Transfers", "City Tours"],
    },
    {
      id: "dubai-abu-dhabi",
      title: "Dubai & Abu Dhabi Delight",
      location: "Dubai - Abu Dhabi",
      duration: "6 Days",
      groupSize: "2-15 People",
      price: "₹65,000",
      originalPrice: "₹75,000",
      image: "/images/dubai-tour.png",
      category: "International",
      rating: 4.9,
      reviews: 187,
      highlights: ["Burj Khalifa", "Desert Safari", "Sheikh Zayed Mosque", "Dubai Mall"],
      discount: "13% OFF",
      nextDeparture: "22 Feb 2024",
      includes: ["Flights", "Hotels", "Desert Safari", "City Tours"],
    },
    {
      id: "nepal-bhutan",
      title: "Nepal & Bhutan Himalayan Journey",
      location: "Kathmandu - Thimphu - Paro",
      duration: "8 Days",
      groupSize: "2-12 People",
      price: "₹75,000",
      originalPrice: "₹85,000",
      image: "/images/nepal-bhutan.png",
      category: "International",
      rating: 4.8,
      reviews: 76,
      highlights: ["Everest Views", "Tiger's Nest", "Monasteries", "Mountain Views"],
      discount: "12% OFF",
      nextDeparture: "28 Feb 2024",
      includes: ["Flights", "Hotels", "Permits", "Local Guides"],
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/europe-tour.png" alt="International Tours" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins text-white">
              International <span className="text-yellow-400">Fixed Departures</span>
            </h1>
            <p className="text-xl text-white mb-8 font-open-sans">
              Explore the world beyond borders with our carefully curated international tours. From the romantic cities
              of Europe to the vibrant cultures of Southeast Asia, discover the world with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">
                <Plane className="mr-2 h-4 w-4" />
                Flights Included
              </Badge>
              <Badge className="bg-red-600 text-white px-6 py-3 text-lg">Visa Assistance</Badge>
              <Badge className="bg-yellow-400 text-black px-6 py-3 text-lg">Expert Guides</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Upcoming International Departures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Experience the world's most fascinating destinations with our all-inclusive international tour packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalTours.map((tour) => (
              <Card
                key={tour.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Discount Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold">
                    {tour.discount}
                  </Badge>

                  {/* International Badge */}
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white font-semibold">
                    <Plane className="mr-1 h-3 w-3" />
                    International
                  </Badge>

                  {/* Next Departure */}
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-xs font-bold">Next Departure</div>
                    <div className="text-sm">{tour.nextDeparture}</div>
                  </div>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold">{tour.price}</div>
                    <div className="text-xs line-through text-gray-300">{tour.originalPrice}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-poppins">
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

                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-sm">{tour.rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({tour.reviews} reviews)</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.includes.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-green-300 text-green-700">
                          {item}
                        </Badge>
                      ))}
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

                  <Link href={`/fixed-departures/international/${tour.id}`}>
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold group/btn">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Travel Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Travel International with Us?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Flights Included</h3>
              <p className="text-gray-600 font-open-sans">
                All international flights and domestic transfers included in the package price.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Visa Assistance</h3>
              <p className="text-gray-600 font-open-sans">
                Complete visa assistance and documentation support for hassle-free travel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Local Experts</h3>
              <p className="text-gray-600 font-open-sans">
                Experienced local guides in each destination for authentic cultural experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">24/7 Support</h3>
              <p className="text-gray-600 font-open-sans">
                Round-the-clock support during your international journey for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-poppins">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto font-open-sans">
            Join our international fixed departures and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/customized-holidays/international">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-lg"
              >
                Customize Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
