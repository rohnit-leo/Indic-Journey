import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo-transparent.png"
                alt="Indic Journeys Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold">Indic Journeys</span>
            </div>
            <p className="text-gray-300 font-['Open_Sans']">
              Crafting transformative travel experiences across India and the world. Your journey of exploration,
              experience, and evolution starts here.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-yellow-400 hover:text-black">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-yellow-400 hover:text-black">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-yellow-400 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-yellow-400 hover:text-black">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Poppins']">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fixed-departures" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Fixed Departures
                </Link>
              </li>
              <li>
                <Link href="/customized-holidays" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Customized Holidays
                </Link>
              </li>
              <li>
                <Link href="/heritage-walks" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Heritage Walks
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Poppins']">Tour Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/fixed-departures/domestic"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Domestic Fixed Departures
                </Link>
              </li>
              <li>
                <Link
                  href="/fixed-departures/international"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  International Fixed Departures
                </Link>
              </li>
              <li>
                <Link
                  href="/customized-holidays/domestic"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Domestic Customized Holidays
                </Link>
              </li>
              <li>
                <Link
                  href="/customized-holidays/international"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  International Customized Holidays
                </Link>
              </li>
              <li>
                <Link href="/heritage-walks/old-pune" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Old Pune Heritage Walk
                </Link>
              </li>
              <li>
                <Link
                  href="/heritage-walks/temple-tour"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Temple Tour of Pune
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Poppins']">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">
                  403 - Anandvan Residency, Lane A-31, Opp. Moti Bakery, Dhayari - 411041
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">7720993751 / 93711 31975</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">indicjourneys@gmail.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Subscribe to Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-['Open_Sans']">© 2024 Indic Journeys. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cancellation" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
