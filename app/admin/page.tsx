"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ComprehensiveAdmin } from "@/components/admin/comprehensive-admin"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    // Only execute this code in the browser
  interface WindowWithLocalStorage extends Window {
    localStorage: Storage
  }
    if (typeof window !== "undefined") {
      const win: WindowWithLocalStorage = window as WindowWithLocalStorage
      const authStatus = win.localStorage.getItem("authStatus")
      if (authStatus === "true") {
        setIsAuthenticated(true)
      } else {
        // Use the correct absolute URL with a callback to ensure navigation works
        console.log("Redirecting to login...")
        win.location.href = "/admin/login"
      }
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return <ComprehensiveAdmin />
}
