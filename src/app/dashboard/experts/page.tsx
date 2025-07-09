"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import {
  Heart,
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Phone,
  Video,
  MessageSquare,
  Award,
  Users,
  CalendarIcon,
} from "lucide-react"

interface Expert {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  experience: string
  location: string
  price: string
  availability: string[]
  image: string
  bio: string
  qualifications: string[]
  languages: string[]
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Gynecologist",
    rating: 4.9,
    reviews: 127,
    experience: "15+ years",
    location: "New York, NY",
    price: "$200",
    availability: ["Mon", "Wed", "Fri"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Specialized in PCOS treatment and reproductive endocrinology with over 15 years of experience helping women manage hormonal disorders.",
    qualifications: ["MD - Harvard Medical School", "Board Certified Gynecologist", "PCOS Specialist Certification"],
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialty: "Endocrinologist",
    rating: 4.8,
    reviews: 89,
    experience: "12+ years",
    location: "Los Angeles, CA",
    price: "$180",
    availability: ["Tue", "Thu", "Sat"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Expert in hormonal disorders and metabolic conditions, with special focus on PCOS and insulin resistance management.",
    qualifications: ["MD - Stanford University", "Endocrinology Fellowship", "Diabetes & Metabolism Specialist"],
    languages: ["English", "Mandarin"],
  },
  {
    id: 3,
    name: "Lisa Rodriguez, RD",
    specialty: "Nutritionist",
    rating: 4.7,
    reviews: 156,
    experience: "8+ years",
    location: "Chicago, IL",
    price: "$120",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Registered Dietitian specializing in PCOS nutrition, weight management, and insulin resistance dietary interventions.",
    qualifications: ["MS in Nutrition", "Registered Dietitian", "PCOS Nutrition Specialist"],
    languages: ["English", "Spanish"],
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Fertility Specialist",
    rating: 4.9,
    reviews: 203,
    experience: "18+ years",
    location: "Boston, MA",
    price: "$250",
    availability: ["Wed", "Thu", "Fri"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Reproductive endocrinologist with extensive experience in PCOS-related fertility treatments and assisted reproductive technologies.",
    qualifications: ["MD - Johns Hopkins", "Reproductive Endocrinology Fellowship", "Board Certified REI"],
    languages: ["English"],
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    specialty: "Mental Health",
    rating: 4.8,
    reviews: 94,
    experience: "10+ years",
    location: "San Francisco, CA",
    price: "$150",
    availability: ["Mon", "Tue", "Thu", "Fri"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Clinical psychologist specializing in women's mental health, PCOS-related anxiety, depression, and body image issues.",
    qualifications: ["PhD in Clinical Psychology", "Women's Health Specialist", "PCOS Mental Health Certification"],
    languages: ["English", "Hindi"],
  },
  {
    id: 6,
    name: "Amanda Foster, PT",
    specialty: "Physical Therapist",
    rating: 4.6,
    reviews: 78,
    experience: "7+ years",
    location: "Seattle, WA",
    price: "$100",
    availability: ["Mon", "Wed", "Fri", "Sat"],
    image: "/placeholder.svg?height=100&width=100",
    bio: "Physical therapist specializing in pelvic floor therapy and exercise programs for women with PCOS and related conditions.",
    qualifications: ["DPT - University of Washington", "Pelvic Floor Specialist", "Women's Health PT"],
    languages: ["English"],
  },
]

export default function ExpertsPage() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const specialties = [
    { value: "all", label: "All Specialists" },
    { value: "Gynecologist", label: "Gynecologists" },
    { value: "Endocrinologist", label: "Endocrinologists" },
    { value: "Nutritionist", label: "Nutritionists" },
    { value: "Fertility Specialist", label: "Fertility Specialists" },
    { value: "Mental Health", label: "Mental Health" },
    { value: "Physical Therapist", label: "Physical Therapists" },
  ]

  const filteredExperts =
    selectedSpecialty === "all" ? experts : experts.filter((expert) => expert.specialty === selectedSpecialty)

  if (selectedExpert) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Hermitra
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedExpert(null)}
                className="hover:bg-pink-50 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Experts
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Expert Profile */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={selectedExpert.image || "/placeholder.svg"} />
                      <AvatarFallback>
                        {selectedExpert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{selectedExpert.name}</CardTitle>
                      <CardDescription className="text-lg">{selectedExpert.specialty}</CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{selectedExpert.rating}</span>
                          <span className="text-gray-500 ml-1">({selectedExpert.reviews} reviews)</span>
                        </div>
                        <Badge variant="outline">{selectedExpert.experience}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{selectedExpert.bio}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{selectedExpert.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-2" />
                      <span>Available: {selectedExpert.availability.join(", ")}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Qualifications</h4>
                      <ul className="space-y-1">
                        {selectedExpert.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-pink-600 mr-2" />
                            <span className="text-sm">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Languages</h4>
                      <div className="flex space-x-2">
                        {selectedExpert.languages.map((lang, index) => (
                          <Badge key={index} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Options */}
              <Card className="animate-fade-in-up animation-delay-100">
                <CardHeader>
                  <CardTitle>Consultation Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg hover:bg-pink-50 transition-colors duration-300 cursor-pointer">
                      <Video className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <h4 className="font-medium">Video Call</h4>
                      <p className="text-sm text-gray-600">45 min session</p>
                      <p className="font-bold text-pink-600">{selectedExpert.price}</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg hover:bg-pink-50 transition-colors duration-300 cursor-pointer">
                      <Phone className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <h4 className="font-medium">Phone Call</h4>
                      <p className="text-sm text-gray-600">30 min session</p>
                      <p className="font-bold text-pink-600">${Number.parseInt(selectedExpert.price.slice(1)) - 50}</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg hover:bg-pink-50 transition-colors duration-300 cursor-pointer">
                      <MessageSquare className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <h4 className="font-medium">Chat Session</h4>
                      <p className="text-sm text-gray-600">Text-based</p>
                      <p className="font-bold text-pink-600">${Number.parseInt(selectedExpert.price.slice(1)) - 100}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              <Card className="animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <CardTitle>Book Appointment</CardTitle>
                  <CardDescription>Select your preferred date and time</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />

                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">Available Times</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"].map((time) => (
                        <Button key={time} variant="outline" size="sm" className="hover:bg-pink-50 bg-transparent">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <CardTitle>Patient Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Sarah M.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Dr. Johnson was incredibly helpful with my PCOS management. Very knowledgeable and caring."
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Emma L.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Excellent consultation. She provided clear explanations and practical advice for managing my
                      symptoms."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hermitra
              </span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:bg-pink-50 transition-all duration-300 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Connect with PCOS Experts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get personalized care from certified specialists who understand PCOS and can help you on your journey to
            better health.
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="mb-8 animate-fade-in-up animation-delay-100">
          <Tabs value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              {specialties.map((specialty) => (
                <TabsTrigger key={specialty.value} value={specialty.value} className="text-xs">
                  {specialty.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert, index) => (
            <Card
              key={expert.id}
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up animation-delay-${index * 100}`}
              onClick={() => setSelectedExpert(expert)}
            >
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={expert.image || "/placeholder.svg"} />
                    <AvatarFallback>
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{expert.name}</CardTitle>
                    <CardDescription>{expert.specialty}</CardDescription>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{expert.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({expert.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{expert.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{expert.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span>Available: {expert.availability.slice(0, 3).join(", ")}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-600">{expert.price}</span>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 border-red-200 animate-fade-in-up animation-delay-500">
          <CardHeader>
            <CardTitle className="text-red-700">Need Immediate Help?</CardTitle>
            <CardDescription>
              If you're experiencing a medical emergency, please contact emergency services immediately.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: 911
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                <MessageSquare className="h-4 w-4 mr-2" />
                Crisis Text Line
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
