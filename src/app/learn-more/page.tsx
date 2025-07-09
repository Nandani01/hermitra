import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, AlertCircle, Activity, Users, Stethoscope, Sparkles, ArrowRight, BookOpen, Info } from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <BookOpen className="h-4 w-4 text-pink-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Educational Resource</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Understanding PCOS
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn everything you need to know about Polycystic Ovary Syndrome - from symptoms and causes to treatment
              options and lifestyle management.
            </p>
          </div>
        </div>
      </section>

      {/* What is PCOS Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Info className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">The Basics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What is PCOS?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Polycystic Ovary Syndrome</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                PCOS is a hormonal disorder that affects women of reproductive age. It's characterized by irregular
                menstrual periods, excess androgen (male hormone) levels, and polycystic ovaries - ovaries that contain
                many small cysts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Despite its name, not all women with PCOS have cysts on their ovaries, and having ovarian cysts doesn't
                necessarily mean you have PCOS.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  PCOS affects 1 in 10 women of childbearing age and is one of the leading causes of female infertility.
                </p>
              </div>
            </div>
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Key Statistics</h4>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-600">• Affects 5-10% of women worldwide</p>
                    <p className="text-gray-600">• Often diagnosed in teens and 20s</p>
                    <p className="text-gray-600">• Leading cause of infertility</p>
                    <p className="text-gray-600">• Manageable with proper care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Recognize the Signs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Common PCOS Symptoms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Irregular Periods",
                description: "Infrequent, irregular, or prolonged menstrual cycles",
                color: "from-red-500 to-pink-500",
                icon: Activity,
              },
              {
                title: "Excess Hair Growth",
                description: "Hirsutism - excessive hair on face, chest, and back",
                color: "from-purple-500 to-indigo-500",
                icon: Users,
              },
              {
                title: "Acne & Oily Skin",
                description: "Persistent acne, especially on face, chest, and back",
                color: "from-blue-500 to-cyan-500",
                icon: AlertCircle,
              },
              {
                title: "Weight Gain",
                description: "Difficulty losing weight, especially around the midsection",
                color: "from-green-500 to-emerald-500",
                icon: Activity,
              },
              {
                title: "Hair Thinning",
                description: "Male-pattern baldness or thinning hair on the scalp",
                color: "from-yellow-500 to-orange-500",
                icon: Users,
              },
              {
                title: "Skin Darkening",
                description: "Dark patches of skin, often in neck creases and armpits",
                color: "from-indigo-500 to-purple-500",
                icon: AlertCircle,
              },
            ].map((symptom, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${symptom.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <symptom.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold mb-1">{symptom.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Stethoscope className="h-4 w-4 text-indigo-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Understanding the Root</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What Causes PCOS?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center mb-4">Known Contributing Factors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insulin Resistance</h4>
                    <p className="text-gray-600 text-sm">Up to 70% of women with PCOS have insulin resistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Genetics</h4>
                    <p className="text-gray-600 text-sm">Family history increases the likelihood of developing PCOS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hormonal Imbalance</h4>
                    <p className="text-gray-600 text-sm">Elevated androgen levels disrupt normal ovarian function</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Inflammation</h4>
                    <p className="text-gray-600 text-sm">Low-grade inflammation may contribute to PCOS development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center mb-4">Important to Know</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>PCOS is not caused by:</strong> Poor diet, lack of exercise, or lifestyle choices alone.
                    While these factors can worsen symptoms, they don't cause PCOS.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Research is ongoing:</strong> Scientists continue to study PCOS to better understand its
                    exact causes and develop more effective treatments.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Early intervention helps:</strong> While we can't prevent PCOS, early diagnosis and
                    treatment can significantly improve quality of life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Heart className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Hope & Healing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Treatment & Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While there's no cure for PCOS, it can be effectively managed with the right approach and support.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                Lifestyle Modifications
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <div className="space-y-3">
                  <p>
                    <strong>Diet:</strong> Focus on low-glycemic foods, lean proteins, and healthy fats. Limit processed
                    foods and refined sugars.
                  </p>
                  <p>
                    <strong>Exercise:</strong> Regular physical activity helps improve insulin sensitivity and hormone
                    balance. Aim for 150 minutes of moderate exercise weekly.
                  </p>
                  <p>
                    <strong>Weight Management:</strong> Even a 5-10% weight loss can significantly improve PCOS
                    symptoms.
                  </p>
                  <p>
                    <strong>Stress Management:</strong> Practice stress-reduction techniques like meditation, yoga, or
                    deep breathing exercises.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                Medical Treatments
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <div className="space-y-3">
                  <p>
                    <strong>Birth Control Pills:</strong> Help regulate menstrual cycles and reduce androgen levels.
                  </p>
                  <p>
                    <strong>Metformin:</strong> Improves insulin sensitivity and may help with weight management.
                  </p>
                  <p>
                    <strong>Anti-androgen Medications:</strong> Help reduce excess hair growth and acne.
                  </p>
                  <p>
                    <strong>Fertility Treatments:</strong> Available for women trying to conceive, including ovulation
                    induction medications.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 px-6 hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600 transition-colors duration-300 py-4">
                Alternative Therapies
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <div className="space-y-3">
                  <p>
                    <strong>Supplements:</strong> Inositol, vitamin D, and omega-3 fatty acids may help improve
                    symptoms.
                  </p>
                  <p>
                    <strong>Acupuncture:</strong> Some studies suggest it may help regulate menstrual cycles and reduce
                    insulin resistance.
                  </p>
                  <p>
                    <strong>Herbal Remedies:</strong> Spearmint tea and cinnamon may have beneficial effects, but
                    consult your doctor first.
                  </p>
                  <p>
                    <strong>Mind-Body Practices:</strong> Yoga, meditation, and mindfulness can help manage stress and
                    improve overall well-being.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Take Action Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Start Your PCOS Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Knowledge is the first step. Take control of your PCOS with our comprehensive support platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-white/80 backdrop-blur-xl"
                >
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
