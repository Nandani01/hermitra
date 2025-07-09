import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Target, Award, Sparkles, ArrowRight, Shield, BookOpen } from "lucide-react"

export default function About() {
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
              <Heart className="h-4 w-4 text-pink-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Our Story</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Hermitra
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're dedicated to empowering women with PCOS through comprehensive support, education, and personalized
              care solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Target className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Women with PCOS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why We Exist</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                PCOS affects 1 in 10 women of reproductive age, yet many struggle to find comprehensive support and
                resources. We created Hermitra to bridge this gap, providing a one-stop platform for PCOS management,
                education, and community support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform combines cutting-edge technology with evidence-based medical knowledge to help women take
                control of their PCOS journey with confidence and support.
              </p>
            </div>
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Our Promise</h4>
                  <p className="text-gray-600">
                    To provide accessible, reliable, and personalized PCOS support for every woman on her wellness
                    journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Award className="h-4 w-4 text-indigo-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">Compassion</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  We understand the challenges of living with PCOS and approach every interaction with empathy and care.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden animation-delay-200">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Knowledge is power. We provide evidence-based information to help women make informed decisions about
                  their health.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden animation-delay-400">
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-pink-600"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Together we're stronger. We foster a supportive community where women can share experiences and
                  support each other.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-6 border border-white/20">
              <Users className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Meet the Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our multidisciplinary team of healthcare professionals, technologists, and advocates work together to
              support your PCOS journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Gynecologist & PCOS Specialist",
                description: "15+ years of experience in reproductive endocrinology and PCOS management.",
                color: "from-pink-500 to-rose-500",
              },
              {
                name: "Dr. Maria Rodriguez",
                role: "Nutritionist",
                description: "Specialized in PCOS nutrition and metabolic health with evidence-based approaches.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                name: "Dr. Emily Chen",
                role: "Mental Health Counselor",
                description: "Focuses on the psychological aspects of PCOS and women's mental wellness.",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold mb-1">{member.name}</CardTitle>
                  <p className="text-purple-600 font-medium text-sm">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
              <span className="text-gray-700 font-medium text-sm">Join Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of women who trust Hermitra for their PCOS management and wellness journey.
            </p>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
