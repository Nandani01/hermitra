"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  Target,
  Flame,
  Activity,
  Timer,
  Star,
} from "lucide-react"

interface Exercise {
  id: number
  name: string
  duration: number
  description: string
  benefits: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: "Yoga" | "Cardio" | "Strength" | "Flexibility"
  image: string
  instructions: string[]
  pcosSpecific: boolean
}

const exercises: Exercise[] = [
  {
    id: 1,
    name: "Cat-Cow Pose",
    duration: 300,
    description: "Gentle spinal movement to reduce stress and improve flexibility",
    benefits: ["Reduces stress", "Improves spinal flexibility", "Balances hormones"],
    difficulty: "Beginner",
    category: "Yoga",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "Start on hands and knees in tabletop position",
      "Inhale, arch your back and look up (Cow pose)",
      "Exhale, round your spine and tuck chin to chest (Cat pose)",
      "Continue flowing between poses with your breath",
    ],
    pcosSpecific: true,
  },
  {
    id: 2,
    name: "Bridge Pose",
    duration: 180,
    description: "Strengthens glutes and opens hip flexors",
    benefits: ["Strengthens core", "Opens hips", "Improves circulation"],
    difficulty: "Beginner",
    category: "Yoga",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "Lie on your back with knees bent",
      "Place feet hip-width apart, arms by sides",
      "Lift hips up, creating a straight line from knees to shoulders",
      "Hold the position while breathing deeply",
    ],
    pcosSpecific: true,
  },
  {
    id: 3,
    name: "HIIT Cardio Burst",
    duration: 900,
    description: "High-intensity interval training for insulin sensitivity",
    benefits: ["Improves insulin sensitivity", "Burns calories", "Boosts metabolism"],
    difficulty: "Intermediate",
    category: "Cardio",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "30 seconds high intensity exercise",
      "30 seconds rest or low intensity",
      "Repeat for 15 minutes total",
      "Include jumping jacks, burpees, mountain climbers",
    ],
    pcosSpecific: true,
  },
  {
    id: 4,
    name: "Warrior III Flow",
    duration: 240,
    description: "Balance and strength pose for core stability",
    benefits: ["Improves balance", "Strengthens core", "Enhances focus"],
    difficulty: "Intermediate",
    category: "Yoga",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "Stand in mountain pose",
      "Shift weight to left foot",
      "Lift right leg behind you, parallel to floor",
      "Extend arms forward for balance",
    ],
    pcosSpecific: false,
  },
  {
    id: 5,
    name: "Resistance Band Training",
    duration: 600,
    description: "Full-body strength training with resistance bands",
    benefits: ["Builds lean muscle", "Improves metabolism", "Convenient equipment"],
    difficulty: "Beginner",
    category: "Strength",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "Use resistance band for squats, rows, and presses",
      "Focus on controlled movements",
      "Complete 3 sets of 12-15 repetitions",
      "Rest 30 seconds between sets",
    ],
    pcosSpecific: true,
  },
  {
    id: 6,
    name: "Gentle Stretching Flow",
    duration: 450,
    description: "Relaxing stretches to reduce cortisol and tension",
    benefits: ["Reduces stress", "Improves flexibility", "Promotes relaxation"],
    difficulty: "Beginner",
    category: "Flexibility",
    image: "/placeholder.svg?height=200&width=300",
    instructions: [
      "Hold each stretch for 30-60 seconds",
      "Focus on deep breathing",
      "Include neck, shoulder, hip, and leg stretches",
      "Move slowly and mindfully",
    ],
    pcosSpecific: true,
  },
]

export default function ExercisePage() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [completedExercises, setCompletedExercises] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => {
          if (time <= 1) {
            setIsActive(false)
            if (selectedExercise) {
              setCompletedExercises((prev) => [...prev, selectedExercise.id])
            }
            return 0
          }
          return time - 1
        })
      }, 1000)
    } else if (!isActive || isPaused) {
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, isPaused, timeRemaining, selectedExercise])

  const startTimer = (exercise: Exercise) => {
    setSelectedExercise(exercise)
    setTimeRemaining(exercise.duration)
    setIsActive(true)
    setIsPaused(false)
  }

  const pauseTimer = () => {
    setIsPaused(!isPaused)
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    setTimeRemaining(selectedExercise?.duration || 0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const filteredExercises =
    selectedCategory === "all" ? exercises : exercises.filter((ex) => ex.category === selectedCategory)

  const categories = ["all", "Yoga", "Cardio", "Strength", "Flexibility"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative">
                <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
                <Activity className="h-4 w-4 text-green-500 absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Hermitra Fitness
              </span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:bg-pink-50 transition-all duration-300 bg-white/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              PCOS Yoga & Exercise
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specially designed exercises to help manage PCOS symptoms, improve insulin sensitivity, and promote hormonal
            balance through movement and mindfulness.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-pink-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-100">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-700">{completedExercises.length}</div>
              <div className="text-sm text-pink-600">Completed Today</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">
                {Math.floor(
                  completedExercises.reduce(
                    (acc, id) => acc + (exercises.find((ex) => ex.id === id)?.duration || 0),
                    0,
                  ) / 60,
                )}
                m
              </div>
              <div className="text-sm text-purple-600">Total Time</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300">
            <CardContent className="p-6 text-center">
              <Flame className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">7</div>
              <div className="text-sm text-green-600">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">85%</div>
              <div className="text-sm text-blue-600">Weekly Goal</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Timer */}
        {selectedExercise && (
          <Card className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white animate-fade-in-up">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedExercise.name}</h3>
                <div className="text-6xl font-mono font-bold mb-4">{formatTime(timeRemaining)}</div>
                <Progress
                  value={((selectedExercise.duration - timeRemaining) / selectedExercise.duration) * 100}
                  className="mb-6 h-3"
                />
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={() => (isActive ? pauseTimer() : setIsActive(true))}
                    size="lg"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    {isActive && !isPaused ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                    {isActive && !isPaused ? "Pause" : "Start"}
                  </Button>
                  <Button
                    onClick={resetTimer}
                    size="lg"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                {category === "all" ? "All Exercises" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Exercise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise, index) => (
            <Card
              key={exercise.id}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up animation-delay-${index * 100} overflow-hidden ${
                completedExercises.includes(exercise.id) ? "ring-2 ring-green-400 bg-green-50" : "bg-white/80"
              }`}
            >
              <div className="relative">
                <img
                  src={exercise.image || "/placeholder.svg"}
                  alt={exercise.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge
                    variant={exercise.difficulty === "Beginner" ? "default" : "secondary"}
                    className={`${
                      exercise.difficulty === "Beginner"
                        ? "bg-green-500"
                        : exercise.difficulty === "Intermediate"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    } text-white`}
                  >
                    {exercise.difficulty}
                  </Badge>
                  {exercise.pcosSpecific && <Badge className="bg-pink-500 text-white">PCOS Specific</Badge>}
                </div>
                <div className="absolute top-4 right-4">
                  {completedExercises.includes(exercise.id) && (
                    <CheckCircle className="h-6 w-6 text-green-500 bg-white rounded-full" />
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                  <Timer className="h-4 w-4 inline mr-1" />
                  {formatTime(exercise.duration)}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {exercise.name}
                  <Badge variant="outline" className="ml-2">
                    {exercise.category}
                  </Badge>
                </CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exercise.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Instructions:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {exercise.instructions.slice(0, 2).map((instruction, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => startTimer(exercise)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                    disabled={selectedExercise?.id === exercise.id && isActive}
                  >
                    {selectedExercise?.id === exercise.id && isActive ? (
                      <>
                        <Timer className="h-4 w-4 mr-2 animate-spin" />
                        In Progress
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Exercise
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PCOS Exercise Benefits */}
        <Card className="mt-12 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-pink-200 animate-fade-in-up animation-delay-500">
          <CardHeader>
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Why Exercise Helps with PCOS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Improves Insulin Sensitivity</h3>
                <p className="text-sm text-gray-600">
                  Regular exercise helps your body use insulin more effectively, reducing insulin resistance common in
                  PCOS.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Balances Hormones</h3>
                <p className="text-sm text-gray-600">
                  Exercise helps regulate hormones like testosterone and cortisol, improving PCOS symptoms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Supports Weight Management</h3>
                <p className="text-sm text-gray-600">
                  Helps maintain healthy weight and body composition, which is crucial for PCOS management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
