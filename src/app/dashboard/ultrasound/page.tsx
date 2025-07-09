"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Upload, Camera, FileImage, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"

export default function UltrasoundDetection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<{
    detected: boolean
    confidence: number
    recommendations: string[]
  } | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setAnalysisResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
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
          "Follow up with regular medical checkups",
        ],
      }
      setAnalysisResult(mockResult)
      setIsAnalyzing(false)
    }, 3000)
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

            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Ultrasound Detection</h1>
          <p className="text-xl text-gray-600">Upload your ultrasound image for AI-powered PCOS detection analysis</p>
        </div>

        {/* Upload Section */}
        {!uploadedImage && (
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-pink-400 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-full p-6">
                    <Upload className="w-12 h-12 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Ultrasound Image</h3>
                    <p className="text-gray-600 mb-4">Drag and drop your ultrasound image here, or click to browse</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:shadow-lg transition-all inline-flex items-center space-x-2"
                    >
                      <Camera className="w-5 h-5" />
                      <span>Choose Image</span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">Supported formats: JPG, PNG, GIF (Max size: 10MB)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Preview and Analysis */}
        {uploadedImage && (
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Preview */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <FileImage className="w-6 h-6 text-pink-600" />
                  <span>Uploaded Image</span>
                </h3>
                <div className="border rounded-xl overflow-hidden">
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded ultrasound"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => {
                      setUploadedImage(null)
                      setAnalysisResult(null)
                    }}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Upload Different Image
                  </button>
                </div>
              </div>

              {/* Analysis Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Analysis</h3>

                {!analysisResult && !isAnalyzing && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-6">Ready to analyze your ultrasound image for PCOS indicators</p>
                    <button
                      onClick={analyzeImage}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      Start Analysis
                    </button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing image...</p>
                    <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                  </div>
                )}

                {analysisResult && (
                  <div className="space-y-6">
                    <div
                      className={`p-4 rounded-lg ${
                        analysisResult.detected
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-green-50 border border-green-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {analysisResult.detected ? (
                          <AlertCircle className="w-6 h-6 text-yellow-600" />
                        ) : (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        )}
                        <h4
                          className={`font-semibold ${analysisResult.detected ? "text-yellow-800" : "text-green-800"}`}
                        >
                          {analysisResult.detected ? "PCOS Indicators Detected" : "No Clear PCOS Indicators"}
                        </h4>
                      </div>
                      <p className={`text-sm ${analysisResult.detected ? "text-yellow-700" : "text-green-700"}`}>
                        Confidence: {analysisResult.confidence}%
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Recommendations:</h4>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Important:</strong> This AI analysis is for informational purposes only and should not
                        replace professional medical diagnosis. Please consult with a healthcare provider for proper
                        evaluation.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Ultrasound Detection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI analyzes ultrasound images for PCOS markers</li>
                <li>• Detects polycystic ovary patterns</li>
                <li>• Provides confidence scores and recommendations</li>
                <li>• Helps identify when to seek medical consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use clear, high-quality ultrasound images</li>
                <li>• Ensure proper lighting and contrast</li>
                <li>• Include relevant anatomical markers</li>
                <li>• Always follow up with healthcare providers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
