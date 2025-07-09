"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Home,
  User,
  LogOut,
  Stethoscope,
  ClipboardList,
  Users,
  Activity,
  Volume2,
  Calendar,
  Apple,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"

export default function DashboardPage() {
  const [isSignedIn, setIsSignedIn] = useState(true)

  const handleSignOut = () => {
    setIsSignedIn(false)
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-5 left-5 w-24 h-24 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-5 right-5 w-32 h-32 bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          </div>

          <Card className="w-full max-w-md animate-fade-in-up shadow-xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden relative z-10">
            <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
            <CardHeader className="text-center pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                <Heart className="h-8 w-8 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-2 w-2 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Welcome to Hermitra
              </CardTitle>
              <CardDescription className="text-gray-600">
                Sign in to access your personalized PCOS management dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-8">
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsSignedIn(true)}
              >
                Sign In to Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="text-center">
                <Link
                  href="/"
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 text-sm"
                >
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const primaryFeatures = [
    {
      icon: ClipboardList,
      title: "Take Assessment",
      description: "Complete our comprehensive PCOS risk assessment quiz with personalized scoring",
      color: "from-pink-500 to-rose-500",
      href: "/dashboard/assessment",
      badge: "Interactive Quiz",
    },
    {
      icon: Stethoscope,
      title: "Ultrasound Detection",
      description: "Upload ultrasound images for AI-powered PCOS cyst detection and analysis",
      color: "from-purple-500 to-indigo-500",
      href: "/dashboard/ultrasound",
      badge: "AI Powered",
    },
    {
      icon: Users,
      title: "Consult with Experts",
      description: "Connect with gynecologists, nutritionists, and certified PCOS specialists",
      color: "from-blue-500 to-cyan-500",
      href: "/dashboard/experts",
      badge: "Book Now",
    },
  ]

  const secondaryFeatures = [
    {
      icon: Activity,
      title: "Yoga & Exercise",
      description: "PCOS-specific workouts with timers",
      color: "from-green-500 to-emerald-500",
      href: "/dashboard/exercise",
    },
    {
      icon: Volume2,
      title: "Subliminal Sounds",
      description: "Therapeutic audio sessions and tips",
      color: "from-indigo-500 to-purple-500",
      href: "/dashboard/sounds",
    },
    {
      icon: Calendar,
      title: "Period Tracker",
      description: "Advanced cycle tracking",
      color: "from-red-500 to-pink-500",
      href: "/dashboard/tracker",
    },
    {
      icon: Apple,
      title: "Nutrition Guide",
      description: "PCOS-friendly meal plans",
      color: "from-orange-500 to-yellow-500",
      href: "/dashboard/nutrition",
    },
    {
      icon: BookOpen,
      title: "Her Story",
      description: "Success stories and support",
      color: "from-teal-500 to-green-500",
      href: "/dashboard/stories",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-2 w-2 text-white" />
                </div>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hermitra
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="flex items-center text-purple-600 font-medium px-3 py-2 bg-purple-50 rounded-lg text-sm"
              >
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/profile"
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium px-3 py-2 hover:bg-purple-50 rounded-lg transition-all duration-300 text-sm"
              >
                <User className="h-4 w-4 mr-1" />
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium px-3 py-2 hover:bg-purple-50 rounded-lg transition-all duration-300 text-sm"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-pink-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Welcome back, Sarah! 👋</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Your PCOS Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your personalized PCOS management dashboard is ready to help you on your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Features */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Target className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Get Started</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Essential Tools
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {primaryFeatures.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card
                  className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer animate-fade-in-up animation-delay-${index * 100} bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden relative`}
                >
                  <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <div
                    className={`absolute top-4 right-4 px-2 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-semibold rounded-full`}
                  >
                    {feature.badge}
                  </div>
                  <CardHeader className="text-center pt-8 pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors duration-300 mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-8">
                    <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                    <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform duration-300 text-sm">
                      Get Started
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features */}
      <section className="py-8 px-4 bg-white/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Zap className="h-4 w-4 text-indigo-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Explore More</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Additional Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {secondaryFeatures.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card
                  className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up animation-delay-${index * 100} bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden`}
                >
                  <CardHeader className="text-center pb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-base font-bold group-hover:text-purple-600 transition-colors duration-300 mb-1">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Your Progress</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Your PCOS Journey
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-100 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl">
              <CardHeader className="text-center py-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  3
                </div>
                <CardDescription className="font-medium">Assessments Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-200 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl">
              <CardHeader className="text-center py-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  2
                </div>
                <CardDescription className="font-medium">Expert Consultations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-300 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl">
              <CardHeader className="text-center py-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  45
                </div>
                <CardDescription className="font-medium">Days Tracked</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Ready to Begin?</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Start Your Assessment
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Begin with our comprehensive PCOS assessment to get personalized recommendations and insights.
            </p>
            <Link href="/dashboard/assessment">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                Take Your First Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
