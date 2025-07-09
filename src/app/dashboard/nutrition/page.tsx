"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Heart,
  ArrowLeft,
  Apple,
  CheckCircle,
  XCircle,
  Search,
  Star,
  Clock,
  Users,
  ChefHat,
  Leaf,
  Zap,
  Shield,
  AlertTriangle,
} from "lucide-react"

interface Food {
  id: number
  name: string
  category: string
  type: "beneficial" | "avoid" | "moderate"
  benefits?: string[]
  concerns?: string[]
  glycemicIndex: "low" | "medium" | "high"
  antiInflammatory: boolean
  image: string
}

interface MealPlan {
  id: number
  name: string
  description: string
  duration: string
  difficulty: "Easy" | "Medium" | "Hard"
  meals: {
    breakfast: string[]
    lunch: string[]
    dinner: string[]
    snacks: string[]
  }
  benefits: string[]
  image: string
}

const foods: Food[] = [
  {
    id: 1,
    name: "Leafy Greens",
    category: "Vegetables",
    type: "beneficial",
    benefits: ["High in folate", "Anti-inflammatory", "Low glycemic index"],
    glycemicIndex: "low",
    antiInflammatory: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Fatty Fish",
    category: "Protein",
    type: "beneficial",
    benefits: ["Omega-3 fatty acids", "Reduces inflammation", "Supports hormone balance"],
    glycemicIndex: "low",
    antiInflammatory: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Berries",
    category: "Fruits",
    type: "beneficial",
    benefits: ["Antioxidants", "Low sugar", "Anti-inflammatory"],
    glycemicIndex: "low",
    antiInflammatory: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Refined Sugar",
    category: "Sweeteners",
    type: "avoid",
    concerns: ["Spikes blood sugar", "Increases inflammation", "Worsens insulin resistance"],
    glycemicIndex: "high",
    antiInflammatory: false,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "White Bread",
    category: "Grains",
    type: "avoid",
    concerns: ["High glycemic index", "Low fiber", "Blood sugar spikes"],
    glycemicIndex: "high",
    antiInflammatory: false,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Quinoa",
    category: "Grains",
    type: "beneficial",
    benefits: ["Complete protein", "High fiber", "Low glycemic index"],
    glycemicIndex: "low",
    antiInflammatory: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Nuts & Seeds",
    category: "Healthy Fats",
    type: "beneficial",
    benefits: ["Healthy fats", "Protein", "Magnesium"],
    glycemicIndex: "low",
    antiInflammatory: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Processed Foods",
    category: "Processed",
    type: "avoid",
    concerns: ["High sodium", "Preservatives", "Trans fats"],
    glycemicIndex: "high",
    antiInflammatory: false,
    image: "/placeholder.svg?height=100&width=100",
  },
]

const mealPlans: MealPlan[] = [
  {
    id: 1,
    name: "Anti-Inflammatory PCOS Plan",
    description: "7-day meal plan focused on reducing inflammation and balancing hormones",
    duration: "7 days",
    difficulty: "Easy",
    meals: {
      breakfast: ["Greek yogurt with berries", "Spinach and mushroom omelet", "Chia seed pudding"],
      lunch: ["Quinoa salad with vegetables", "Grilled salmon with sweet potato", "Lentil soup"],
      dinner: ["Baked chicken with roasted vegetables", "Zucchini noodles with pesto", "Stuffed bell peppers"],
      snacks: ["Mixed nuts", "Apple with almond butter", "Hummus with vegetables"],
    },
    benefits: ["Reduces inflammation", "Stabilizes blood sugar", "Supports weight management"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Low-Carb PCOS Plan",
    description: "Ketogenic-style meal plan to improve insulin sensitivity",
    duration: "14 days",
    difficulty: "Medium",
    meals: {
      breakfast: ["Avocado and eggs", "Keto smoothie", "Coconut flour pancakes"],
      lunch: ["Cauliflower rice bowl", "Zucchini lasagna", "Chicken Caesar salad"],
      dinner: ["Grilled steak with asparagus", "Baked cod with broccoli", "Pork chops with green beans"],
      snacks: ["Cheese and olives", "Macadamia nuts", "Celery with cream cheese"],
    },
    benefits: ["Improves insulin sensitivity", "Promotes weight loss", "Reduces cravings"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Mediterranean PCOS Plan",
    description: "Heart-healthy Mediterranean diet adapted for PCOS management",
    duration: "21 days",
    difficulty: "Easy",
    meals: {
      breakfast: ["Greek yogurt with nuts", "Whole grain toast with avocado", "Fruit and nut bowl"],
      lunch: ["Mediterranean quinoa bowl", "Greek salad with chickpeas", "Vegetable soup"],
      dinner: ["Grilled fish with vegetables", "Chicken with olive tapenade", "Vegetarian pasta"],
      snacks: ["Olives and cheese", "Fresh fruit", "Whole grain crackers"],
    },
    benefits: ["Heart healthy", "Anti-inflammatory", "Sustainable long-term"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function NutritionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(null)

  const categories = ["all", "Vegetables", "Fruits", "Protein", "Grains", "Healthy Fats", "Processed"]

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || food.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const beneficialFoods = filteredFoods.filter((food) => food.type === "beneficial")
  const avoidFoods = filteredFoods.filter((food) => food.type === "avoid")

  if (selectedMealPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 via-teal-50 to-cyan-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="relative">
                  <Heart className="h-8 w-8 text-green-600 animate-pulse" />
                  <Apple className="h-4 w-4 text-emerald-500 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Hermitra Nutrition
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedMealPlan(null)}
                className="hover:bg-green-50 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Nutrition
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Meal Plan Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              {selectedMealPlan.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{selectedMealPlan.description}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Badge className="bg-green-500">{selectedMealPlan.duration}</Badge>
              <Badge variant="outline">{selectedMealPlan.difficulty}</Badge>
            </div>
          </div>

          {/* Benefits */}
          <Card className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-green-700">Plan Benefits</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedMealPlan.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Meals */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(selectedMealPlan.meals).map(([mealType, meals], index) => (
              <Card
                key={mealType}
                className={`animate-fade-in-up animation-delay-${index * 100} hover:shadow-xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="capitalize text-lg flex items-center">
                    {mealType === "breakfast" && <Clock className="h-5 w-5 mr-2 text-orange-500" />}
                    {mealType === "lunch" && <ChefHat className="h-5 w-5 mr-2 text-blue-500" />}
                    {mealType === "dinner" && <Star className="h-5 w-5 mr-2 text-purple-500" />}
                    {mealType === "snacks" && <Apple className="h-5 w-5 mr-2 text-green-500" />}
                    {mealType}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {meals.map((meal, mealIndex) => (
                      <li key={mealIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{meal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shopping List */}
          <Card className="mt-8 animate-fade-in-up animation-delay-400">
            <CardHeader>
              <CardTitle>Shopping List Generator</CardTitle>
              <CardDescription>Get a personalized shopping list for this meal plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300">
                  Generate Shopping List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative">
                <Heart className="h-8 w-8 text-green-600 animate-pulse" />
                <Apple className="h-4 w-4 text-emerald-500 absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Hermitra Nutrition
              </span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:bg-green-50 transition-all duration-300 bg-white/80">
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              PCOS Nutrition Guide
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover PCOS-friendly foods, meal plans, and nutrition strategies to help manage symptoms, improve insulin
            sensitivity, and support hormonal balance through proper nutrition.
          </p>
        </div>

        {/* Nutrition Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-100 to-emerald-200 border-green-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-100">
            <CardContent className="p-6 text-center">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">85%</div>
              <div className="text-sm text-green-600">Anti-Inflammatory Foods</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-100 to-cyan-200 border-blue-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">Low GI</div>
              <div className="text-sm text-blue-600">Glycemic Index Focus</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-100 to-pink-200 border-purple-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">3</div>
              <div className="text-sm text-purple-600">Meal Plans Available</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-100 to-red-200 border-orange-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-700">92%</div>
              <div className="text-sm text-orange-600">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="foods" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm mb-8">
            <TabsTrigger
              value="foods"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Food Guide
            </TabsTrigger>
            <TabsTrigger
              value="meals"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Meal Plans
            </TabsTrigger>
            <TabsTrigger
              value="tips"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Nutrition Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="foods" className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search foods..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                        : "hover:bg-green-50 bg-transparent"
                    } transition-all duration-300`}
                  >
                    {category === "all" ? "All Foods" : category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Foods to Eat */}
            <div className="animate-fade-in-up animation-delay-100">
              <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Foods to Include
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {beneficialFoods.map((food, index) => (
                  <Card
                    key={food.id}
                    className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${index * 50} bg-white/80 backdrop-blur-sm border-green-200`}
                  >
                    <div className="relative">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="w-full h-32 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-500 text-white">{food.category}</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        {food.antiInflammatory && (
                          <Badge variant="outline" className="bg-white/90 text-green-600 border-green-300">
                            Anti-inflammatory
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            food.glycemicIndex === "low"
                              ? "border-green-300 text-green-600"
                              : food.glycemicIndex === "medium"
                                ? "border-yellow-300 text-yellow-600"
                                : "border-red-300 text-red-600"
                          }`}
                        >
                          {food.glycemicIndex.toUpperCase()} GI
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {food.benefits && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-green-700">Benefits:</h4>
                          <ul className="space-y-1">
                            {food.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Foods to Avoid */}
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                <XCircle className="h-6 w-6 mr-2" />
                Foods to Limit or Avoid
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {avoidFoods.map((food, index) => (
                  <Card
                    key={food.id}
                    className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${index * 50} bg-white/80 backdrop-blur-sm border-red-200`}
                  >
                    <div className="relative">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="w-full h-32 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500 filter grayscale"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 text-white">{food.category}</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            food.glycemicIndex === "low"
                              ? "border-green-300 text-green-600"
                              : food.glycemicIndex === "medium"
                                ? "border-yellow-300 text-yellow-600"
                                : "border-red-300 text-red-600"
                          }`}
                        >
                          {food.glycemicIndex.toUpperCase()} GI
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {food.concerns && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-red-700">Concerns:</h4>
                          <ul className="space-y-1">
                            {food.concerns.slice(0, 3).map((concern, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                {concern}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meals" className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-green-700 mb-6">PCOS-Friendly Meal Plans</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mealPlans.map((plan, index) => (
                  <Card
                    key={plan.id}
                    className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up animation-delay-${index * 100} cursor-pointer bg-white/80 backdrop-blur-sm`}
                    onClick={() => setSelectedMealPlan(plan)}
                  >
                    <div className="relative">
                      <img
                        src={plan.image || "/placeholder.svg"}
                        alt={plan.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Badge className="bg-green-500 text-white">{plan.duration}</Badge>
                        <Badge
                          variant="outline"
                          className={`bg-white/90 ${
                            plan.difficulty === "Easy"
                              ? "text-green-600 border-green-300"
                              : plan.difficulty === "Medium"
                                ? "text-yellow-600 border-yellow-300"
                                : "text-red-600 border-red-300"
                          }`}
                        >
                          {plan.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                        {plan.name}
                      </CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                          <div className="flex flex-wrap gap-1">
                            {plan.benefits.map((benefit, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300">
                          View Meal Plan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-green-700 mb-6">PCOS Nutrition Tips</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Blood Sugar Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm">Choose low glycemic index foods to prevent blood sugar spikes</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm">Eat protein with every meal to stabilize blood sugar</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm">Avoid refined sugars and processed carbohydrates</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-700 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Anti-Inflammatory Foods
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Include omega-3 rich foods like fatty fish and walnuts</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Add colorful vegetables and fruits high in antioxidants</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm">Use herbs and spices like turmeric and ginger</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-700 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Meal Timing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-sm">Eat regular meals to maintain stable blood sugar</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-sm">Consider intermittent fasting under medical supervision</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-sm">Don't skip breakfast to kickstart metabolism</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Portion Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-sm">Use smaller plates to control portion sizes</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-sm">Fill half your plate with non-starchy vegetables</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-sm">Practice mindful eating and chew slowly</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
