import Link from "next/link"
import { ArrowRight, Heart, Users, BookOpen, Stethoscope, Calendar, Music, Apple } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Welcome to Hermitra
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive PCOS awareness, support, and management platform. Empowering women with knowledge,
              tools, and community support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/learn-more"
              className="border-2 border-pink-300 text-pink-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Tailored PCOS management plans based on your unique needs and symptoms.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with other women on similar journeys and share experiences.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <BookOpen className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                Access evidence-based information and connect with healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive PCOS Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, manage, and thrive with PCOS in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-pink-100 to-purple-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Assessment</h3>
              <p className="text-gray-600">Take comprehensive quizzes to understand your PCOS risk and symptoms.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-purple-100 to-indigo-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Period Tracking</h3>
              <p className="text-gray-600">
                Monitor your menstrual cycle and identify patterns with our smart tracker.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-indigo-100 to-pink-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Music className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness & Exercise</h3>
              <p className="text-gray-600">Access yoga routines, meditation, and exercise plans designed for PCOS.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-green-100 to-blue-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Apple className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutrition Guide</h3>
              <p className="text-gray-600">Discover PCOS-friendly foods and meal plans to support your health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of women who are taking control of their PCOS with Hermitra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Create Free Account
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
