"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Heart, ArrowLeft, CalendarIcon, TrendingUp, Circle, Droplets, Activity, AlertCircle } from "lucide-react"

interface PeriodData {
  date: string
  flow: "light" | "medium" | "heavy" | "spotting"
  symptoms: string[]
  mood: string
  notes: string
  temperature?: number
}

interface CycleStats {
  averageLength: number
  lastPeriod: string
  nextPredicted: string
  cycleVariation: number
}

const symptoms = [
  "Cramps",
  "Bloating",
  "Headache",
  "Mood swings",
  "Fatigue",
  "Breast tenderness",
  "Acne",
  "Food cravings",
  "Back pain",
  "Nausea",
]

const moods = ["Great", "Good", "Okay", "Low", "Irritable", "Anxious", "Sad"]

export default function TrackerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [periodData, setPeriodData] = useState<Record<string, PeriodData>>({
    "2024-01-15": {
      date: "2024-01-15",
      flow: "heavy",
      symptoms: ["Cramps", "Bloating"],
      mood: "Low",
      notes: "First day of cycle, heavy flow",
    },
    "2024-01-16": {
      date: "2024-01-16",
      flow: "heavy",
      symptoms: ["Cramps", "Fatigue"],
      mood: "Okay",
      notes: "Still heavy, taking pain relief",
    },
    "2024-01-17": {
      date: "2024-01-17",
      flow: "medium",
      symptoms: ["Bloating"],
      mood: "Good",
      notes: "Flow decreasing",
    },
  })

  const [currentFlow, setCurrentFlow] = useState<"light" | "medium" | "heavy" | "spotting">("medium")
  const [currentSymptoms, setCurrentSymptoms] = useState<string[]>([])
  const [currentMood, setCurrentMood] = useState("Good")
  const [currentNotes, setCurrentNotes] = useState("")

  const cycleStats: CycleStats = {
    averageLength: 32,
    lastPeriod: "2024-01-15",
    nextPredicted: "2024-02-16",
    cycleVariation: 3,
  }

  const handleSaveData = () => {
    if (!selectedDate) return

    const dateString = selectedDate.toISOString().split("T")[0]
    setPeriodData((prev) => ({
      ...prev,
      [dateString]: {
        date: dateString,
        flow: currentFlow,
        symptoms: currentSymptoms,
        mood: currentMood,
        notes: currentNotes,
      },
    }))

    // Reset form
    setCurrentSymptoms([])
    setCurrentNotes("")
  }

  const getFlowColor = (flow: string) => {
    switch (flow) {
      case "heavy":
        return "bg-red-500"
      case "medium":
        return "bg-pink-500"
      case "light":
        return "bg-pink-300"
      case "spotting":
        return "bg-pink-200"
      default:
        return "bg-gray-300"
    }
  }

  const getFlowIcon = (flow: string) => {
    switch (flow) {
      case "heavy":
        return <Droplets className="h-4 w-4 text-red-600" />
      case "medium":
        return <Droplets className="h-4 w-4 text-pink-600" />
      case "light":
        return <Droplets className="h-4 w-4 text-pink-400" />
      case "spotting":
        return <Circle className="h-4 w-4 text-pink-300" />
      default:
        return null
    }
  }

  const selectedDateString = selectedDate?.toISOString().split("T")[0]
  const selectedDateData = selectedDateString ? periodData[selectedDateString] : null

  const getDaysUntilNext = () => {
    const today = new Date()
    const nextPeriod = new Date(cycleStats.nextPredicted)
    const diffTime = nextPeriod.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getCurrentPhase = () => {
    const daysUntilNext = getDaysUntilNext()
    if (daysUntilNext <= 0) return "Menstrual"
    if (daysUntilNext <= 7) return "Pre-menstrual"
    if (daysUntilNext <= 14) return "Luteal"
    if (daysUntilNext <= 21) return "Ovulation"
    return "Follicular"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 via-purple-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative">
                <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
                <CalendarIcon className="h-4 w-4 text-red-500 absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hermitra Tracker
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Period & Symptom Tracker
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track your menstrual cycle, symptoms, and patterns to better understand your body and manage PCOS symptoms
            effectively.
          </p>
        </div>

        {/* Cycle Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-pink-100 to-rose-200 border-pink-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-100">
            <CardContent className="p-6 text-center">
              <CalendarIcon className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-700">{cycleStats.averageLength}</div>
              <div className="text-sm text-pink-600">Average Cycle</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-100 to-pink-200 border-purple-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <CardContent className="p-6 text-center">
              <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">{getCurrentPhase()}</div>
              <div className="text-sm text-purple-600">Current Phase</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-100 to-pink-200 border-red-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300">
            <CardContent className="p-6 text-center">
              <Droplets className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-700">{getDaysUntilNext()}</div>
              <div className="text-sm text-red-600">Days Until Next</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-100 to-red-200 border-orange-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-700">±{cycleStats.cycleVariation}</div>
              <div className="text-sm text-orange-600">Cycle Variation</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <Card className="lg:col-span-2 animate-fade-in-up animation-delay-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-pink-600" />
                Cycle Calendar
              </CardTitle>
              <CardDescription>Click on a date to log your symptoms and flow</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border w-full"
                modifiers={{
                  period: Object.keys(periodData).map((date) => new Date(date)),
                }}
                modifiersStyles={{
                  period: { backgroundColor: "#ec4899", color: "white", borderRadius: "50%" },
                }}
              />

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                  <span>Period Days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-300 rounded-full mr-2"></div>
                  <span>Ovulation (predicted)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-300 rounded-full mr-2"></div>
                  <span>Fertile Window</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Log */}
          <Card className="animate-fade-in-up animation-delay-200">
            <CardHeader>
              <CardTitle>Daily Log - {selectedDate?.toLocaleDateString() || "Select a date"}</CardTitle>
              <CardDescription>Record your symptoms and flow for the selected day</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flow Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">Flow Intensity</label>
                <div className="grid grid-cols-2 gap-2">
                  {["spotting", "light", "medium", "heavy"].map((flow) => (
                    <Button
                      key={flow}
                      variant={currentFlow === flow ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentFlow(flow as any)}
                      className={`${
                        currentFlow === flow
                          ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                          : "hover:bg-pink-50 bg-transparent"
                      } transition-all duration-300`}
                    >
                      {getFlowIcon(flow)}
                      <span className="ml-2 capitalize">{flow}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <label className="text-sm font-medium mb-3 block">Symptoms</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom}
                        checked={currentSymptoms.includes(symptom)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setCurrentSymptoms([...currentSymptoms, symptom])
                          } else {
                            setCurrentSymptoms(currentSymptoms.filter((s) => s !== symptom))
                          }
                        }}
                      />
                      <label htmlFor={symptom} className="text-sm cursor-pointer">
                        {symptom}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mood */}
              <div>
                <label className="text-sm font-medium mb-3 block">Mood</label>
                <div className="flex flex-wrap gap-2">
                  {moods.map((mood) => (
                    <Button
                      key={mood}
                      variant={currentMood === mood ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentMood(mood)}
                      className={`${
                        currentMood === mood
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "hover:bg-purple-50 bg-transparent"
                      } transition-all duration-300`}
                    >
                      {mood}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-sm font-medium mb-3 block">Notes</label>
                <Textarea
                  placeholder="Any additional notes about your day..."
                  value={currentNotes}
                  onChange={(e) => setCurrentNotes(e.target.value)}
                  className="resize-none"
                />
              </div>

              <Button
                onClick={handleSaveData}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
              >
                Save Daily Log
              </Button>

              {/* Show existing data */}
              {selectedDateData && (
                <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h4 className="font-medium mb-2">Existing Data:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      {getFlowIcon(selectedDateData.flow)}
                      <span className="ml-2 capitalize">{selectedDateData.flow} flow</span>
                    </div>
                    {selectedDateData.symptoms.length > 0 && (
                      <div>
                        <span className="font-medium">Symptoms: </span>
                        {selectedDateData.symptoms.join(", ")}
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Mood: </span>
                      {selectedDateData.mood}
                    </div>
                    {selectedDateData.notes && (
                      <div>
                        <span className="font-medium">Notes: </span>
                        {selectedDateData.notes}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Analytics */}
        <Card className="mt-8 animate-fade-in-up animation-delay-300">
          <CardHeader>
            <CardTitle>Cycle Analytics & Insights</CardTitle>
            <CardDescription>Understanding your patterns can help manage PCOS symptoms</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="trends" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="trends" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Cycle Length Trend</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Last 3 months average</span>
                        <Badge variant="outline">32 days</Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>28 days</span>
                        <span>35 days</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Flow Intensity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Heavy</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                          <span className="text-xs">30%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Medium</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-pink-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                          <span className="text-xs">50%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Light</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-pink-300 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                          <span className="text-xs">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="symptoms" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Most Common Symptoms</h4>
                    <div className="space-y-3">
                      {["Cramps", "Bloating", "Fatigue", "Mood swings", "Headache"].map((symptom, index) => (
                        <div key={symptom} className="flex items-center justify-between">
                          <span className="text-sm">{symptom}</span>
                          <Badge variant="outline">{85 - index * 10}%</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Symptom Severity</h4>
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-red-600">High</div>
                        <div className="text-sm text-red-500">Days 1-2</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <AlertCircle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-yellow-600">Medium</div>
                        <div className="text-sm text-yellow-500">Days 3-4</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Mood Patterns</h4>
                    <div className="space-y-2">
                      {["Great", "Good", "Okay", "Low", "Irritable"].map((mood, index) => (
                        <div key={mood} className="flex items-center justify-between">
                          <span className="text-sm">{mood}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full"
                              style={{ width: `${Math.max(10, 60 - index * 10)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-700 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        PCOS Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-sm">Your cycle length is within normal range for PCOS (28-35 days)</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-sm">Irregular patterns detected - consider consulting your doctor</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-sm">Stress management may help reduce symptom severity</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <Heart className="h-5 w-5 mr-2" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-sm">Track for 3+ months for better pattern recognition</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-sm">Consider exercise during follicular phase for energy</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-sm">Focus on anti-inflammatory foods during luteal phase</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">Share with Your Healthcare Provider</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Export your cycle data to discuss patterns and symptoms with your doctor
                      </p>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Export Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
