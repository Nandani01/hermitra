"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Heart,
  Calendar,
  Users,
  BookOpen,
  Stethoscope,
  Music,
  Apple,
  Camera,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = () => {
    // Simulate logout
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hermitra
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button onClick={handleLogout} className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
          <p className="text-xl text-gray-600">Here's your PCOS wellness dashboard</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Days Since Last Period</p>
                <p className="text-3xl font-bold text-pink-600">23</p>
              </div>
              <Calendar className="w-12 h-12 text-pink-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Wellness Score</p>
                <p className="text-3xl font-bold text-purple-600">8.2/10</p>
              </div>
              <TrendingUp className="w-12 h-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Exercise This Week</p>
                <p className="text-3xl font-bold text-indigo-600">4/5</p>
              </div>
              <Heart className="w-12 h-12 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Mood Today</p>
                <p className="text-3xl font-bold text-green-600">Good</p>
              </div>
              <Heart className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/dashboard/ultrasound" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Ultrasound Detection</h3>
              <p className="text-gray-600 mb-4">Upload ultrasound images for AI-powered PCOS detection and analysis.</p>
              <div className="text-pink-600 font-medium group-hover:text-pink-700">Upload Image →</div>
            </div>
          </Link>

          <Link href="/dashboard/assessment" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">PCOS Assessment</h3>
              <p className="text-gray-600 mb-4">Take our comprehensive quiz to assess your PCOS risk level.</p>
              <div className="text-purple-600 font-medium group-hover:text-purple-700">Start Assessment →</div>
            </div>
          </Link>

          <Link href="/dashboard/experts" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-indigo-100 to-pink-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Expert Consultation</h3>
              <p className="text-gray-600 mb-4">Connect with PCOS specialists and healthcare professionals.</p>
              <div className="text-indigo-600 font-medium group-hover:text-indigo-700">Find Experts →</div>
            </div>
          </Link>

          <Link href="/dashboard/exercise" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Yoga & Exercise</h3>
              <p className="text-gray-600 mb-4">Access PCOS-friendly workout routines and yoga sessions.</p>
              <div className="text-green-600 font-medium group-hover:text-green-700">Start Workout →</div>
            </div>
          </Link>

          <Link href="/dashboard/sounds" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Music className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Subliminal Sounds</h3>
              <p className="text-gray-600 mb-4">Relaxing music and meditation sounds for stress relief.</p>
              <div className="text-blue-600 font-medium group-hover:text-blue-700">Listen Now →</div>
            </div>
          </Link>

          <Link href="/dashboard/tracker" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Period Tracker</h3>
              <p className="text-gray-600 mb-4">Track your menstrual cycle and identify patterns.</p>
              <div className="text-purple-600 font-medium group-hover:text-purple-700">View Calendar →</div>
            </div>
          </Link>

          <Link href="/dashboard/nutrition" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <Apple className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Nutrition Guide</h3>
              <p className="text-gray-600 mb-4">Discover PCOS-friendly foods and meal planning tips.</p>
              <div className="text-orange-600 font-medium group-hover:text-orange-700">Explore Foods →</div>
            </div>
          </Link>

          <Link href="/dashboard/stories" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Her Stories</h3>
              <p className="text-gray-600 mb-4">Read inspiring stories from women with PCOS.</p>
              <div className="text-pink-600 font-medium group-hover:text-pink-700">Read Stories →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
