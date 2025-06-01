"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Sun,
  Users,
  FileText,
  Sprout,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Custom hook for scroll animations
function useScrollAnimation(
  { threshold = 0.1, rootMargin = "0px 0px -20% 0px" } = {}
) {
  const [visible, setVisible] = useState(false);          // ⭐ state, not ref
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);                               // triggers re-render
          observer.unobserve(entry.target);               // fire once
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible] as const;
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
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

            // Update the DOM directly
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

const services = [
  {
    id: "rural-economic",
    title: "Rural Economic Sectors",
    icon: Shield,
    color: "green",
    description:
      "Empowering Kebele and Woreda Administration Centers and enabling a vibrant community",
    features: ["Job Creation", "Transportation Services", "Health services", "Agricultural Services", "Banking Services"],
    stats: { projects: "25.2 kW PV, 96.5 kWh ESS, and 20 kW ", communities: 500, impact: "2M+" },
    image: "/Rec.png",
  },
  {
    id: "smart-tap",
    title: "smartTap",
    icon: Sprout,
    color: "orange",
    description:
      "The smartTAP initiative revolutionizes rural water access by introducing solar-powered, prepaid water systems.",
    features: ["Managed by women-led SMEs", "Scalable and Replicable", "Increases Reliability"],
    stats: { projects: 200, communities: 800, impact: "5M+" },
    image: "/SmartTap.png",
  },
  {
    id: "Ev-revolution",
    title: "EV-Revolution",
    icon: Sun,
    color: "green",
    description: "Clean energy solutions that power communities while reducing carbon footprint and energy costs.",
    features: ["100% Renewable Energy", "Reduces GHG Emission", "Saves $4 billion/year in fuel imports", "Job Creation"],
    stats: { projects: 100, communities: 300, impact: "1M+" },
    image: "/Ev-ph.png",
  },
//   {
//     id: "water-management",
//     title: "Water Resource Management",
//     icon: Droplets,
//     color: "orange",
//     description:
//       "Sustainable water solutions ensuring access to clean water while preserving precious water resources.",
//     features: [
//       "Water harvesting systems",
//       "Irrigation optimization",
//       "Water quality monitoring",
//       "Watershed management",
//     ],
//     stats: { projects: 120, communities: 400, impact: "3M+" },
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "capacity-building",
//     title: "Community Capacity Building",
//     icon: Users,
//     color: "green",
//     description: "Empowering local communities with knowledge, skills, and tools for sustainable development.",
//     features: ["Training programs", "Leadership development", "Technical skills transfer", "Community organizing"],
//     stats: { projects: 300, communities: 1000, impact: "10M+" },
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "impact-assessment",
//     title: "Environmental Impact Assessment",
//     icon: FileText,
//     color: "orange",
//     description: "Comprehensive environmental analysis and monitoring to ensure sustainable development practices.",
//     features: ["Environmental audits", "Impact monitoring", "Compliance assessment", "Sustainability reporting"],
//     stats: { projects: 80, communities: 200, impact: "500K+" },
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: "policy-advocacy",
//     title: "Policy Development & Advocacy",
//     icon: Globe,
//     color: "green",
//     description:
//       "Shaping policies and advocating for systemic change to support climate resilience and sustainability.",
//     features: ["Policy research", "Stakeholder engagement", "Advocacy campaigns", "Regulatory support"],
//     stats: { projects: 50, communities: 100, impact: "50M+" },
//     image: "/placeholder.svg?height=400&width=600",
//   },
]

export default function ProjectsPage() {
    const [heroRef, heroVisible]   = useScrollAnimation({ rootMargin: "0px 0px -20% 0px" });
    const [statsRef, statsVisible] = useScrollAnimation({ rootMargin: "0px 0px -10% 0px" });

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-white to-orange-100 py-20 lg:py-32">
        <div
          ref={heroRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block rounded-full bg-gradient-to-r from-green-200 to-orange-200 px-6 py-2 text-sm font-medium text-green-900">
              Transforming Africa Through Innovation
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-800">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for climate resilience and sustainable development across Africa. We combine
              cutting-edge technology with local expertise to create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-orange-600">
        <div
          ref={statsRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={0} suffix="+" />
              </div>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={1} suffix="+" />
              </div>
              <p className="text-white/90">Communities Served</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={1} suffix="M+" />
              </div>
              <p className="text-white/90">Lives Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">
                <AnimatedCounter end={1} suffix="+" />
              </div>
              <p className="text-white/90">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0

        return (
          <section key={service.id} className={`py-20 lg:py-32 ${isEven ? "bg-white" : "bg-gray-50"}`}>
            <div className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-200`}>
              <div
                className={`grid gap-12 lg:gap-20 lg:grid-cols-2 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center space-x-3 p-3 rounded-full ${
                        service.color === "green" ? "bg-green-100" : "bg-orange-100"
                      } transition-all duration-300 hover:scale-110`}
                    >
                      <service.icon
                        className={`h-8 w-8 ${service.color === "green" ? "text-green-600" : "text-orange-500"}`}
                      />
                      <Badge
                        variant="secondary"
                        className={`${
                          service.color === "green" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        Service {index + 1}
                      </Badge>
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">{service.title}</h2>

                    <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                          service.color === "green"
                            ? "border-green-200 hover:border-green-300 hover:bg-green-50"
                            : "border-orange-200 hover:border-orange-300 hover:bg-orange-50"
                        }`}
                      >
                        <CheckCircle
                          className={`h-5 w-5 ${service.color === "green" ? "text-green-600" : "text-orange-500"}`}
                        />
                        <span className="font-medium text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                    {/* <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${
                          service.color === "green" ? "text-green-600" : "text-orange-500"
                        }`}
                      >
                        {service.stats.projects}+
                      </div>
                      <p className="text-sm text-gray-600">Projects</p>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${
                          service.color === "green" ? "text-green-600" : "text-orange-500"
                        }`}
                      >
                        {service.stats.communities}+
                      </div>
                      <p className="text-sm text-gray-600">Communities</p>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${
                          service.color === "green" ? "text-green-600" : "text-orange-500"
                        }`}
                      >
                        {service.stats.impact}
                      </div>
                      <p className="text-sm text-gray-600">Lives Impacted</p>
                    </div> */}
                  </div>

                  <Button
                    size="lg"
                    className={`group transition-all duration-300 transform hover:scale-105 ${
                      service.color === "green"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-orange-500 hover:bg-orange-600"
                    } text-white shadow-lg hover:shadow-xl`}
                  >
                    Learn More About This Service
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative ${!isEven ? "lg:col-start-1" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        service.color === "green"
                          ? "from-green-900/20 to-transparent"
                          : "from-orange-900/20 to-transparent"
                      }`}
                    ></div>
                  </div>

                  {/* Floating elements */}
                  <div
                    className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
                      service.color === "green" ? "bg-green-500" : "bg-orange-500"
                    } opacity-20 animate-pulse`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                      service.color === "green" ? "bg-green-400" : "bg-orange-400"
                    } opacity-30 animate-bounce`}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
      <Footer />
    </div>
  )
}
