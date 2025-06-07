"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useWebsiteContent } from "@/lib/website-content-store"

export function BlogSection() {
  const { blog } = useWebsiteContent()
  const blogPosts = blog.posts.filter((post) => post.enabled)

  return (
    <section id="blog" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-4 py-1.5 text-sm mb-3">
            <BookOpen className="mr-2 h-3 w-3" />
            Travel Blog
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-['Poppins']">Stories & Insights</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">{blog.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Trending Badge */}
                {post.trending && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge className="absolute top-3 right-3 bg-yellow-400 text-black text-xs">{post.category}</Badge>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {post.readTime}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300 font-['Poppins'] line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-3 text-sm line-clamp-2 font-['Open_Sans']">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>

                  <Link
                    href={`/blog/${
                      post.id ||
                      post.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")
                    }`}
                  >
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-red-600 hover:text-red-700 font-semibold text-xs"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white px-8 py-2 text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Visit Our Blog
            </Button>
          </Link>
          <p className="text-gray-500 mt-3 text-sm">Explore 100+ travel articles and destination guides</p>
        </div>
      </div>
    </section>
  )
}
