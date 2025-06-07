import type React from "react"
import "./globals.css"
import { Mona_Sans as FontSans } from "next/font/google"
import { Poppins, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LiveChat } from "@/components/support/live-chat"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "Indic Journeys - Explore India & World | Authentic Travel Experiences",
  description:
    "Discover authentic travel experiences across India and the world with Indic Journeys. 15+ years of expertise, 500+ happy travelers, and 4.9/5 rating. Book your transformative journey today!",
  keywords:
    "India travel, tour packages, heritage tours, spiritual journeys, adventure travel, Kerala backwaters, Golden Triangle, Ladakh tours, Rajasthan tours",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${poppins.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
