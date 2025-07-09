"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface Question {
  id: number
  question: string
  options: { value: string; label: string; score: number }[]
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "How regular are your menstrual periods?",
    options: [
      { value: "regular", label: "Very regular (21-35 day cycles)", score: 0 },
      { value: "somewhat", label: "Somewhat irregular (varies by 7+ days)", score: 2 },
      { value: "very", label: "Very irregular or absent", score: 4 },
    ],
    category: "Menstrual",
  },
  {
    id: 2,
    question: "Do you experience excessive hair growth on face, chest, or back?",
    options: [
      { value: "none", label: "No excessive hair growth", score: 0 },
      { value: "mild", label: "Mild hair growth", score: 2 },
      { value: "moderate", label: "Moderate to severe hair growth", score: 4 },
    ],
    category: "Physical",
  },
  {
    id: 3,
    question: "Have you experienced significant weight gain or difficulty losing weight?",
    options: [
      { value: "no", label: "No weight issues", score: 0 },
      { value: "some", label: "Some difficulty with weight", score: 2 },
      { value: "significant", label: "Significant weight gain/difficulty losing", score: 4 },
    ],
    category: "Metabolic",
  },
  {
    id: 4,
    question: "Do you have acne or oily skin?",
    options: [
      { value: "none", label: "Clear skin, no acne", score: 0 },
      { value: "mild", label: "Occasional mild acne", score: 1 },
      { value: "severe", label: "Persistent or severe acne", score: 3 },
    ],
    category: "Physical",
  },
  {
    id: 5,
    question: "Have you experienced hair thinning or male-pattern baldness?",
    options: [
      { value: "none", label: "No hair thinning", score: 0 },
      { value: "mild", label: "Mild hair thinning", score: 2 },
      { value: "significant", label: "Significant hair loss", score: 4 },
    ],
    category: "Physical",
  },
  {
    id: 6,
    question: "Do you have dark patches of skin (neck, armpits, groin)?",
    options: [
      { value: "none", label: "No dark patches", score: 0 },
      { value: "mild", label: "Mild darkening", score: 2 },
      { value: "prominent", label: "Prominent dark patches", score: 3 },
    ],
    category: "Physical",
  },
  {
    id: 7,
    question: "Have you had difficulty getting pregnant?",
    options: [
      { value: "na", label: "Not applicable/Haven't tried", score: 0 },
      { value: "no", label: "No difficulty conceiving", score: 0 },
      { value: "some", label: "Some difficulty (6+ months trying)", score: 3 },
      { value: "significant", label: "Significant difficulty (1+ year)", score: 5 },
    ],
    category: "Reproductive",
  },
  {
    id: 8,
    question: "Do you experience mood swings, anxiety, or depression?",
    options: [
      { value: "none", label: "No mood issues", score: 0 },
      { value: "mild", label: "Mild mood changes", score: 1 },
      { value: "significant", label: "Significant mood issues", score: 3 },
    ],
    category: "Mental Health",
  },
  {
    id: 9,
    question: "Do you have a family history of PCOS, diabetes, or metabolic disorders?",
    options: [
      { value: "none", label: "No family history", score: 0 },
      { value: "some", label: "Some family history", score: 2 },
      { value: "strong", label: "Strong family history", score: 4 },
    ],
    category: "Genetic",
  },
  {
    id: 10,
    question: "How would you describe your energy levels?",
    options: [
      { value: "high", label: "High energy, rarely tired", score: 0 },
      { value: "moderate", label: "Moderate energy with some fatigue", score: 1 },
      { value: "low", label: "Low energy, frequently tired", score: 3 },
    ],
    category: "General Health",
  },
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateResults = () => {
    let totalScore = 0
    questions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalScore += option.score
        }
      }
    })
    setScore(totalScore)
    setShowResults(true)
  }

  const getRiskLevel = (score: number) => {
    if (score <= 8) return { level: "Low", color: "text-green-600", bg: "bg-green-100", icon: TrendingDown }
    if (score <= 16) return { level: "Moderate", color: "text-yellow-600", bg: "bg-yellow-100", icon: Minus }
    return { level: "High", color: "text-red-600", bg: "bg-red-100", icon: TrendingUp }
  }

  const getRecommendations = (score: number) => {
    if (score <= 8) {
      return [
        "Continue maintaining a healthy lifestyle",
        "Regular exercise and balanced diet",
        "Annual health check-ups",
        "Monitor any changes in symptoms",
      ]
    } else if (score <= 16) {
      return [
        "Consider consulting with a healthcare provider",
        "Focus on stress management and regular exercise",
        "Monitor menstrual cycle patterns",
        "Consider dietary modifications",
      ]
    } else {
      return [
        "Strongly recommend consulting with a gynecologist",
        "Consider comprehensive hormonal testing",
        "Implement lifestyle changes immediately",
        "Seek support from PCOS specialists",
      ]
    }
  }

  if (showResults) {
    const riskLevel = getRiskLevel(score)
    const recommendations = getRecommendations(score)
    const RiskIcon = riskLevel.icon

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

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Assessment Complete!
            </h1>
            <p className="text-lg text-gray-600">Here are your personalized results based on your responses</p>
          </div>

          {/* Results Card */}
          <Card className="mb-8 animate-fade-in-up animation-delay-100">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 rounded-full ${riskLevel.bg} flex items-center justify-center mx-auto mb-4`}>
                <RiskIcon className={`h-10 w-10 ${riskLevel.color}`} />
              </div>
              <CardTitle className="text-2xl">
                Your PCOS Risk Level: <span className={riskLevel.color}>{riskLevel.level}</span>
              </CardTitle>
              <CardDescription>Based on your assessment score of {score} out of 35 points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Risk Score</span>
                  <span>{score}/35</span>
                </div>
                <Progress value={(score / 35) * 100} className="h-3" />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">0-8</div>
                  <div className="text-sm text-gray-600">Low Risk</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">9-16</div>
                  <div className="text-sm text-gray-600">Moderate Risk</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">17-35</div>
                  <div className="text-sm text-gray-600">High Risk</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="mb-8 animate-fade-in-up animation-delay-200">
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your risk level, here's what we recommend</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-300">
            <Card>
              <CardHeader>
                <CardTitle>Immediate Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/dashboard/experts">
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                    Consult with Expert
                  </Button>
                </Link>
                <Link href="/dashboard/tracker">
                  <Button variant="outline" className="w-full bg-transparent">
                    Start Period Tracking
                  </Button>
                </Link>
                <Link href="/dashboard/nutrition">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Nutrition Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Continue Your Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/dashboard/exercise">
                  <Button variant="outline" className="w-full bg-transparent">
                    Start Exercise Program
                  </Button>
                </Link>
                <Link href="/dashboard/sounds">
                  <Button variant="outline" className="w-full bg-transparent">
                    Try Subliminal Sounds
                  </Button>
                </Link>
                <Link href="/dashboard/stories">
                  <Button variant="outline" className="w-full bg-transparent">
                    Read Success Stories
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Alert className="mt-8 animate-fade-in-up animation-delay-400">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> This assessment is for informational purposes only and should not replace
              professional medical diagnosis. Please consult with a healthcare provider for proper evaluation and
              treatment.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id]

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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            PCOS Risk Assessment
          </h1>
          <p className="text-lg text-gray-600">Answer these questions to get your personalized PCOS risk evaluation</p>
        </div>

        {/* Progress */}
        <div className="mb-8 animate-fade-in-up animation-delay-100">
          <div className="flex justify-between text-sm mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 animate-fade-in-up animation-delay-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline">{currentQ.category}</Badge>
              <span className="text-sm text-gray-500">Question {currentQuestion + 1}</span>
            </div>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={currentAnswer || ""}
              onValueChange={(value) => handleAnswer(currentQ.id, value)}
              className="space-y-4"
            >
              {currentQ.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between animate-fade-in-up animation-delay-300">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="hover:bg-pink-50 transition-all duration-300 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={nextQuestion}
            disabled={!currentAnswer}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
