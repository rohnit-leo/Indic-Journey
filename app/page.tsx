"use client"

import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/hero-section"
import { FeaturedJourneysSection } from "@/components/featured-journeys-section"
import { SpecializationsSection } from "@/components/specializations-section"
import { BookingSection } from "@/components/booking-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import sanityClient from '@/lib/sanity';

export default async function HomePage() {
  const heroSection = await sanityClient.fetch(`*[_type == "heroSection"][0]`);

  return (
    <MainLayout>
      <div>
        <section
          style={{
            backgroundImage: `url(${heroSection.backgroundImage.asset.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="hero-section"
        >
          <h1>{heroSection.title}</h1>
          <p>{heroSection.subtitle}</p>
        </section>
      </div>
      <FeaturedJourneysSection />
      <SpecializationsSection />
      <BookingSection />
      <BlogSection />
      <TestimonialsSection />
    </MainLayout>
  )
}
