import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Users, BookOpen, LogIn, Sparkles, ArrowRight, Star, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
     
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            {/* Wellness Journey Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-pink-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Your wellness journey starts here</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hermitra
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-3 font-light">
              Your PCOS Awareness & Wellness Companion
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Track. Detect. Heal.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-xl text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-white/80 backdrop-blur-xl"
                >
                  Learn About PCOS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Shield className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Comprehensive PCOS Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tracking to healing, we provide comprehensive tools and support for your PCOS journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">1 in 10 Women</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  PCOS affects millions of women worldwide, making it one of the most common hormonal disorders
                  affecting reproductive health.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden animation-delay-200">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">Manageable Condition</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  With proper lifestyle changes, medical care, and support, PCOS symptoms can be effectively managed and
                  controlled.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden animation-delay-400">
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-pink-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">Knowledge is Power</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Understanding your condition is the first step towards taking control of your health and overall
                  well-being.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10 animate-fade-in-up animation-delay-600">
            <Link href="/learn-more">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More About PCOS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <BookOpen className="h-4 w-4 text-indigo-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                What is PCOS?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                PCOS (Polycystic Ovary Syndrome) is a hormonal disorder common among women of reproductive age. It's
                characterized by irregular periods, excess androgen levels, and polycystic ovaries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                What are the common symptoms of PCOS?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                Common symptoms include irregular or missed periods, excess hair growth, acne, weight gain, hair
                thinning, and difficulty getting pregnant. Symptoms can vary greatly between individuals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                Can PCOS be cured?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                While there's no cure for PCOS, it can be effectively managed through lifestyle changes, medication, and
                proper medical care. Many women with PCOS lead healthy, fulfilling lives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                How is PCOS diagnosed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                PCOS is typically diagnosed through a combination of physical exams, blood tests to check hormone
                levels, and ultrasound imaging to examine the ovaries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                Can women with PCOS get pregnant?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                Yes, many women with PCOS can get pregnant. While PCOS can make it more challenging to conceive, with
                proper treatment and lifestyle management, pregnancy is often possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Join thousands of women</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of women who are managing their PCOS with confidence, support, and the right tools for
              success.
            </p>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                <LogIn className="mr-2 h-5 w-5" />
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
