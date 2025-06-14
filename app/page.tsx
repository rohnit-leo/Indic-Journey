import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/hero-section"
import { FeaturedJourneysSection } from "@/components/featured-journeys-section"
import { SpecializationsSection } from "@/components/specializations-section"
import { BookingSection } from "@/components/booking-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedJourneysSection />
      <SpecializationsSection />
      <BookingSection />
      <BlogSection />
      <TestimonialsSection />
    </MainLayout>
  )
}
