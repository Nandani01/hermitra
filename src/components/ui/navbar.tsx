import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar(){
    return (
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
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/learn-more"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                Learn More About PCOS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

    )
}