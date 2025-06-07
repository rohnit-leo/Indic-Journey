"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useWebsiteContent } from "@/lib/website-content-store"

export function TestimonialsSection() {
  const { testimonials } = useWebsiteContent()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3 font-['Poppins']">{testimonials.title}</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-3 font-['Open_Sans'] italic text-sm">"{testimonial.text}"</p>

                <div className="border-t pt-3">
                  <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.location}</div>
                  <div className="text-xs text-red-600 font-medium mt-1">{testimonial.tour}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-5 py-2 rounded-full">
            <Star className="h-4 w-4 fill-black text-black" />
            <span className="font-semibold text-black text-sm">{testimonials.stats.rating}</span>
            <span className="text-black">•</span>
            <span className="text-black text-sm">{testimonials.stats.travelers}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
