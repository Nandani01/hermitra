"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Heart,
  Home,
  Upload,
  ImageIcon,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  FileImage,
  Zap,
} from "lucide-react"

export default function UltrasoundPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<{
    detected: boolean
    confidence: number
    recommendations: string[]
  } | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setAnalysisComplete(false)
      setAnalysisResult(null)
    }
  }

  const handleAnalyze = () => {
    if (!uploadedFile) return

    setIsAnalyzing(true)
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = {
        detected: Math.random() > 0.5,
        confidence: Math.floor(Math.random() * 30) + 70,
        recommendations: [
          "Consult with a gynecologist for professional evaluation",
          "Consider lifestyle modifications including diet and exercise",
          "Monitor symptoms and track menstrual cycles",
          "Follow up with regular medical checkups"
        ]
      }
      
      setAnalysisResult(mockResult)
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

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
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium px-3 py-2 hover:bg-purple-50 rounded-lg transition-all duration-300 text-sm"
              >
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/dashboard"
              className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
          </div>
          
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Zap className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Ultrasound Detection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your ultrasound images for AI-powered PCOS cyst detection and analysis
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <Upload className="h-6 w-6 mr-2" />
                Upload Ultrasound Image
              </CardTitle>
              <CardDescription className="text-center">
                Supported formats: JPG, PNG, DICOM. Maximum file size: 10MB
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors duration-300">
                <input
                  type="file"
                  accept="image/*,.dcm"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="ultrasound-upload"
                />
                <label
                  htmlFor="ultrasound-upload"
                  className="cursor-pointer flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-gray-500">Your ultrasound image here</p>
                  </div>
                </label>
              </div>

              {uploadedFile && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <FileImage className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-green-800">{uploadedFile.name}</p>
                    <p className="text-sm text-green-600">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              )}

              {uploadedFile && !isAnalyzing && !analysisComplete && (
                <Button
                  onClick={handleAnalyze}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Analyze with AI
                </Button>
              )}

              {isAnalyzing && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                      <span className="text-purple-700 font-medium">Analyzing image...</span>
                    </div>
                  </div>
                  <Progress value={33} className="w-full" />
                  <p className="text-center text-gray-600 text-sm">
                    Our AI is examining your ultrasound for PCOS indicators
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {analysisComplete && analysisResult && (
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                  {analysisResult.detected ? (
                    <AlertCircle className="h-6 w-6 mr-2 text-orange-500" />
                  ) : (
                    <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                  )}
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className={analysisResult.detected ? "border-orange-200 bg-orange-50" : "border-green-200 bg-green-50"}>
                  <AlertDescription className={analysisResult.detected ? "text-orange-800" : "text-green-800"}>
                    {analysisResult.detected
                      ? `Potential PCOS indicators detected with ${analysisResult.confidence}% confidence`
                      : `No significant PCOS indicators detected (${analysisResult.confidence}% confidence)`}
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Confidence Level</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-3">
                        <Progress value={analysisResult.confidence} className="flex-1" />
                        <span className="font-semibold">{analysisResult.confidence}%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        analysisResult.detected
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                        {analysisResult.detected ? "Indicators Found" : "No Indicators"}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard/experts" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Consult with Expert
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                    onClick={() => {
                      setUploadedFile(null)
                      setAnalysisComplete(false)
                      setAnalysisResult(null)
                    }}
                  >
                    Analyze Another Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )} 
              </div>
  )}
