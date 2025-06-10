"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Star, Award, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Fixed Departures",
      href: "/fixed-departures",
      submenu: [
        { name: "Domestic Tours", href: "/fixed-departures/domestic" },
        { name: "International Tours", href: "/fixed-departures/international" },
      ],
    },
    {
      name: "Customized Holidays",
      href: "/customized-holidays",
      submenu: [
        { name: "Domestic Holidays", href: "/customized-holidays/domestic" },
        { name: "International Holidays", href: "/customized-holidays/international" },
      ],
    },
    {
      name: "Heritage Walks",
      href: "/heritage-walks",
      submenu: [
        { name: "Old Pune Heritage Walk", href: "/heritage-walks/old-pune" },
        { name: "Temple Tour of Pune", href: "/heritage-walks/temple-tour" },
        { name: "Museums of Pune", href: "/heritage-walks/museums" },
        { name: "Bhuleshwar - Sangameshwar - Changwateshwa", href: "/heritage-walks/temple-circuit" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Compact Top Bar */}
      <div className="bg-gradient-to-r from-yellow-400 to-red-600 text-black py-1.5 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span className="font-medium">7720993751 / 93711 31975</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Award className="h-3 w-3" />
              <span>15+ Years Experience</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-current" />
              <span className="font-medium">4.9/5 • 500+ Travelers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100" : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Indic Journeys Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110 lg:w-10 lg:h-10"
                />
              </div>
              <div>
                <span className="text-xl lg:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-poppins">
                  Indic Journeys
                </span>
                <div className="text-xs text-gray-500 font-medium font-open-sans hidden sm:block">
                  Explore • Experience • Evolve
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-yellow-500 transition-all duration-300 font-medium text-sm xl:text-base group font-open-sans">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-64">
                        {item.submenu.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link href={subItem.href} className="w-full">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-gray-700 hover:text-yellow-500 transition-all duration-300 font-medium text-sm xl:text-base group font-open-sans"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center">
              <Link href="/fixed-departures">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold px-4"
                >
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium py-3 px-4 hover:bg-yellow-50 rounded-lg transform hover:translate-x-2 font-open-sans text-base block"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-600 hover:text-yellow-600 transition-all duration-300 py-2 px-4 hover:bg-yellow-50 rounded-lg block text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link href="/fixed-departures" onClick={() => setIsMenuOpen(false)} className="block w-full">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 text-black hover:text-white font-semibold">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
