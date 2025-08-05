"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Droplets, Users, Shield, ArrowRight, CheckCircle, Globe, Zap, Target, Award, MapPin } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Aurora from "@/components/Aurora"

// Custom hook for scroll animations
function useScrollAnimation({ threshold = 0.1, rootMargin = "0px 0px -20% 0px" } = {}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible] as const
}

// Animated counter component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number
  duration?: number
  suffix?: string
}) {
  const countRef = useRef(0)
  const hasAnimatedRef = useRef(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const newCount = Math.floor(progress * end)
            countRef.current = newCount

            if (elementRef.current) {
              elementRef.current.textContent = `${newCount}${suffix}`
            }

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration, suffix])

  return <span ref={elementRef}>0{suffix}</span>
}

const projects = [
  {
    id: "rural-economic",
    title: "Rural Economic Centers",
    icon: Shield,
    color: "teal",
    category: "Community Development",
    location: "Ethiopia",
    status: "Active",
    description:
      "Empowering Kebele and Woreda Administration Centers and enabling vibrant communities through integrated economic solutions.",
    features: [
      "Job Creation Programs",
      "Transportation Services",
      "Healthcare Access",
      "Agricultural Support Services",
      "Banking & Financial Services",
    ],
    impact: {
      capacity: "25.2 kW PV, 96.5 kWh ESS, and 20 kW backup",
      communities: "15+ Centers",
      beneficiaries: "50,000+ People",
    },
    image: "/Rec.png",
  },
  {
    id: "smart-tap",
    title: "SmartTap Water Initiative",
    icon: Droplets,
    color: "orange",
    category: "Water Access",
    location: "Rural Ethiopia",
    status: "Scaling",
    description:
      "The smartTAP initiative revolutionizes rural water access by introducing solar-powered, prepaid water systems managed by women-led SMEs.",
    features: [
      "Women-led SME Management",
      "Solar-powered Systems",
      "Prepaid Water Access",
      "Scalable & Replicable Model",
      "Increased Water Reliability",
    ],
    impact: {
      capacity: "Solar-powered water systems",
      communities: "25+ Villages",
      beneficiaries: "100,000+ People",
    },
    image: "/SmartTap.png",
  },
  {
    id: "ev-revolution",
    title: "EV Revolution Initiative",
    icon: Zap,
    color: "teal",
    category: "Clean Transportation",
    location: "Urban Ethiopia",
    status: "Pilot Phase",
    description:
      "Clean transportation solutions that reduce carbon footprint, create jobs, and save billions in fuel imports through 100% renewable energy.",
    features: [
      "100% Renewable Energy",
      "Reduces GHG Emissions",
      "Saves $4 billion/year in fuel imports",
      "Job Creation & Training",
      "Electric Vehicle Infrastructure",
    ],
    impact: {
      capacity: "Electric vehicle ecosystem",
      communities: "3 Major Cities",
      beneficiaries: "1M+ Commuters",
    },
    image: "/Ev-ph.png",
  },
]

function ProjectSection({ project, index, isEven }: { project: any; index: number; isEven: boolean }) {
  const [projectRef, projectVisible] = useScrollAnimation({ rootMargin: "0px 0px -10% 0px" })

  return (
    <section
      ref={projectRef}
      className={`py-20 lg:py-32 ${isEven ? "bg-white" : "bg-gradient-to-br from-gray-50 to-white"}`}
    >
      <div
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-200 ${
          projectVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Rest of the project content remains the same */}
        <div className={`grid gap-16 lg:gap-20 lg:grid-cols-2 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Content */}
          <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
            <div className="space-y-6">
              {/* Project Header */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`inline-flex items-center space-x-3 p-3 rounded-full ${
                    project.color === "teal" ? "bg-teal-100" : "bg-orange-100"
                  } transition-all duration-300 hover:scale-110`}
                >
                  <project.icon
                    className={`h-8 w-8 ${project.color === "teal" ? "text-teal-600" : "text-orange-500"}`}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      project.color === "teal"
                        ? "bg-teal-50 text-teal-700 border-teal-200"
                        : "bg-orange-50 text-orange-700 border-orange-200"
                    }`}
                  >
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </Badge>
                  <Badge
                    className={`${
                      project.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Scaling"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">{project.title}</h2>

              <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-3">
              {project.features.map((feature: string, featureIndex: number) => (
                <div
                  key={featureIndex}
                  className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    project.color === "teal"
                      ? "border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                      : "border-orange-200 hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  <CheckCircle
                    className={`h-5 w-5 ${project.color === "teal" ? "text-teal-600" : "text-orange-500"}`}
                  />
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Impact Stats */}
            {/* <Card className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Award className="h-5 w-5 mr-2 text-teal-600" />
                  Project Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg border">
                    <div
                      className={`text-lg font-bold ${project.color === "teal" ? "text-teal-600" : "text-orange-500"}`}
                    >
                      {project.impact.capacity}
                    </div>
                    <p className="text-sm text-gray-600">Capacity</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border">
                    <div
                      className={`text-lg font-bold ${project.color === "teal" ? "text-teal-600" : "text-orange-500"}`}
                    >
                      {project.impact.communities}
                    </div>
                    <p className="text-sm text-gray-600">Communities</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border">
                    <div
                      className={`text-lg font-bold ${project.color === "teal" ? "text-teal-600" : "text-orange-500"}`}
                    >
                      {project.impact.beneficiaries}
                    </div>
                    <p className="text-sm text-gray-600">Beneficiaries</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`group transition-all duration-300 transform hover:scale-105 ${
                  project.color === "teal"
                    ? "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                } text-white shadow-lg hover:shadow-xl`}
              >
                Learn More About This Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-2 ${
                  project.color === "teal"
                    ? "border-teal-500 text-teal-600 hover:bg-teal-50"
                    : "border-orange-500 text-orange-600 hover:bg-orange-50"
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent`}
              >
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${!isEven ? "lg:col-start-1" : ""}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  project.color === "teal" ? "from-teal-900/20 to-transparent" : "from-orange-900/20 to-transparent"
                }`}
              ></div>

              {/* Project Status Badge */}
              <div className="absolute top-6 left-6">
                <Badge
                  className={`${
                    project.status === "Active"
                      ? "bg-green-500 text-white"
                      : project.status === "Scaling"
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-500 text-white"
                  } shadow-lg`}
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
                project.color === "teal" ? "bg-teal-500" : "bg-orange-500"
              } opacity-20 animate-pulse`}
            ></div>
            <div
              className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                project.color === "teal" ? "bg-teal-400" : "bg-orange-400"
              } opacity-30 animate-bounce`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  const [heroRef, heroVisible] = useScrollAnimation({ rootMargin: "0px 0px -20% 0px" })
  const [statsRef, statsVisible] = useScrollAnimation({ rootMargin: "0px 0px -10% 0px" })

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section with Aurora */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 opacity-20">
          <Aurora colorStops={["#0F766E", "#EA580C", "#0F766E"]} blend={0.8} amplitude={1.2} speed={0.5} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>

        <div
          ref={heroRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 relative z-10 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-200">
              <Target className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Transforming Communities Through Innovation</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-gray-900">Our</span>{" "}
              <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for climate resilience and sustainable development across Africa. We combine
              cutting-edge technology with local expertise to create lasting impact through Climate Oriented Resilience,
              Empowerment & Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="mr-2 h-5 w-5" />
                Explore Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="/contact">
                   <Users className="mr-2 h-5 w-5" />
                    Partner With Us
                </Link>
               
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-300/20 rounded-full animate-ping"></div>

        <div
          ref={statsRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 relative z-10 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact So Far</h2>
            <p className="text-teal-100 text-lg">Making a difference across communities in Ethiopia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={3} suffix="+" />
              </div>
              <p className="text-white/90">Active Projects</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={40} suffix="+" />
              </div>
              <p className="text-white/90">Communities Served</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={150} suffix="K+" />
              </div>
              <p className="text-white/90">Lives Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={25} suffix=" MW" />
              </div>
              <p className="text-white/90">Clean Energy Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0

        return <ProjectSection key={project.id} project={project} index={index} isEven={isEven} />
      })}

      <Footer />
    </div>
  )
}
