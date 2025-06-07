"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Award, MapPin } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Explore. Experience. Evolve.",
      subtitle: "Crafted Travel Stories across India & the World",
      image: "/images/taj-mahal.png",
      accent: "Discover Hidden Gems",
      location: "Taj Mahal, Agra",
      link: "/tours/golden-triangle",
    },
    {
      title: "Spiritual Journeys Await",
      subtitle: "Connect with Ancient Wisdom & Sacred Places",
      image: "/images/varanasi-ganga.png",
      accent: "Find Inner Peace",
      location: "Varanasi, Uttar Pradesh",
      link: "/tours/spiritual-varanasi",
    },
    {
      title: "Adventure & Mountains",
      subtitle: "Conquer the Highest Peaks & Scenic Landscapes",
      image: "/images/ladakh-mountains.png",
      accent: "Live the Adventure",
      location: "Ladakh, Jammu & Kashmir",
      link: "/tours/ladakh-adventure",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-24 sm:w-32 h-24 sm:h-32 bg-red-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Display */}
        <div className="mb-3 sm:mb-4 animate-fade-in">
          <div className="flex justify-center">
            <Image
              src="/images/logo-transparent.png"
              alt="Indic Journeys Logo"
              width={50}
              height={50}
              className="mb-2 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-2 sm:mb-3 opacity-90">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold font-open-sans">500+ Travelers</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-semibold font-open-sans">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold font-open-sans">15+ Years</span>
          </div>
        </div>

        {/* Location Badge */}
        <Link href={heroSlides[currentSlide].link}>
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-yellow-400/90 text-black rounded-full px-4 sm:px-5 py-1 sm:py-1.5 font-semibold hover:bg-yellow-500/90 transition-colors cursor-pointer text-xs sm:text-sm">
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="font-open-sans">{heroSlides[currentSlide].location}</span>
            </div>
          </div>
        </Link>

        {/* Animated Title */}
        <div className="mb-3 sm:mb-4">
          <div className="text-yellow-400 font-semibold text-xs sm:text-base lg:text-lg mb-1 sm:mb-2 animate-fade-in font-open-sans">
            {heroSlides[currentSlide].accent}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 font-poppins leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-gradient">
              {heroSlides[currentSlide].title}
            </span>
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 font-open-sans text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-4">
          <Link href="/tours">
            <Button
              size="default"
              className="group bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-2.5 text-sm sm:text-base shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold w-full sm:w-auto"
            >
              Book Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Link href="/about">
            <Button
              size="default"
              variant="outline"
              className="group border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-2.5 text-sm sm:text-base backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </Button>
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-yellow-400 w-5 sm:w-6" : "bg-white/50 hover:bg-white/75 w-1.5 sm:w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 sm:w-5 h-7 sm:h-8 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 bg-white/75 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
