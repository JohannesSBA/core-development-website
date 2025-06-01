import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Target, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Leading Africa's Climate Future
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-green-600">
                Climate Oriented <span className="text-green-600">Resilience, </span>{" "} 
                <span className="text-orange-500">Empowerement & Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-[600px]">
                Core Development leads Africa's transition to climate resilient and sustainable development through
                innovative solutions, community engagement, and strategic partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero1.png"
                alt="Sustainable development in Africa"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              To lead Africa's transition to climate resilient and sustainable development, creating a future where
              communities thrive in harmony with nature.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Climate Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building adaptive capacity to climate change through innovative solutions and community-based
                  approaches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Empowering local communities with knowledge, resources, and tools for sustainable development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Strategic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implementing targeted interventions that create lasting positive change across Africa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700">Continental Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scaling solutions across African nations to maximize impact and knowledge sharing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/SmartTap.png"
                alt="CORE Development team in Ethiopia"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                About CORE Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Rooted in Ethiopia, Impacting Africa
              </h2>
              <p className="text-lg text-gray-600">
                Based in Ethiopia, CORE Development is at the forefront of Africa's sustainable development movement. We
                combine local expertise with global best practices to address climate challenges and build resilient
                communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Climate adaptation strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Sustainable agriculture programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Renewable energy initiatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Community capacity building</span>
                </div>
              </div>
              <Link href="/founders">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-2">
                  Meet Our Founders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Join Us in Building Africa's Future
            </h2>
            <p className="text-xl text-green-50">
               Join us to create sustainable, climate-resilient communities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white bg-transparent hover:text-green-700"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
