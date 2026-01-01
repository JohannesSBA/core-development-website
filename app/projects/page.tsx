"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Droplets,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target,
  Award,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Aurora from "@/components/Aurora";

// Custom hook for scroll animations
function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -20% 0px",
} = {}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible] as const;
}

// Animated counter component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const countRef = useRef(0);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const newCount = Math.floor(progress * end);
            countRef.current = newCount;

            if (elementRef.current) {
              elementRef.current.textContent = `${newCount}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, suffix]);

  return <span ref={elementRef}>0{suffix}</span>;
}

const projects = [
  {
    id: "charging-stations",
    title: "Charging Stations",
    icon: Shield,
    color: "teal",
    category: "Clean Transportation",
    location: "Ethiopia",
    status: "Active",
    description:
      "Deploying charging stations for electric vehicles in major cities across Ethiopia.",
    mapLink: "https://maps.app.goo.gl/KiUiHgPMbrWtYaDLA",
    mapEmbedSrc:
      "https://www.google.com/maps?q=9.0231303,38.7750861&z=18&output=embed",
    features: [
      "Reduces GHG Emissions",
      "Charging/Swapping Stations",
      "Job Creation & Training",
      "Electric Vehicle Infrastructure",
    ],
    impact: {
      capacity: "Electric vehicle ecosystem",
      communities: "Major Cities",
      beneficiaries: "1M+ Commuters",
    },
    image: "/Rec.jpg",
  },
  {
    id: "rural-economic",
    title: "Rural Economic Centers",
    icon: Shield,
    color: "teal",
    category: "Community Development",
    location: "Ethiopia",
    status: "",
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
    image: "/Rec.jpg",
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
      "Charging/Swapping Stations",
      "Job Creation & Training",
      "Electric Vehicle Infrastructure",
    ],
    impact: {
      capacity: "Electric vehicle ecosystem",
      communities: "3 Major Cities",
      beneficiaries: "1M+ Commuters",
    },
    image: "/TukTuk.jpg",
  },
];

const stats = [
  { label: "Communities Served", value: 40, suffix: "+", icon: MapPin },
  { label: "Lives Impacted", value: 150, suffix: "K+", icon: Award },
  { label: "Clean Energy Capacity", value: 25, suffix: " MW", icon: Zap },
];

function ProjectSection({
  project,
  index,
  isEven,
}: {
  project: any;
  index: number;
  isEven: boolean;
}) {
  const [projectRef, projectVisible] = useScrollAnimation({
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={projectRef}
      className={`relative py-12 lg:py-20 ${
        isEven ? "bg-white" : "bg-gradient-to-br from-gray-50 to-white"
      }`}
    >
      <div
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-200 ${
          projectVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl">
          <div
            className={`absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl ${
              project.color === "teal" ? "bg-teal-200/50" : "bg-orange-200/60"
            }`}
          ></div>
          <div
            className={`absolute -bottom-24 left-0 h-64 w-64 rounded-full blur-3xl ${
              project.color === "teal" ? "bg-teal-100/60" : "bg-orange-100/70"
            }`}
          ></div>

          <div
            className={`relative grid items-stretch gap-12 lg:gap-16 lg:grid-cols-2 ${
              !isEven ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`flex flex-col gap-8 p-8 lg:p-12 ${
                !isEven ? "lg:col-start-2" : ""
              } relative z-10`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`inline-flex items-center space-x-3 rounded-full px-4 py-2 ${
                    project.color === "teal" ? "bg-teal-50" : "bg-orange-50"
                  } ring-1 ring-white/60 shadow-sm`}
                >
                  <project.icon
                    className={`h-7 w-7 ${
                      project.color === "teal"
                        ? "text-teal-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span className="text-sm font-semibold text-gray-800">
                    {project.category}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="border-gray-200 bg-white/80"
                >
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {project.location}
                </Badge>
                <Badge
                  className={`border-0 ${
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

              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                {project.mapLink && (
                  <Link
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-semibold ${
                      project.color === "teal"
                        ? "text-teal-700 hover:text-teal-900"
                        : "text-orange-600 hover:text-orange-800"
                    }`}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View location on Google Maps
                  </Link>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.features.map(
                  (feature: string, featureIndex: number) => (
                    <span
                      key={featureIndex}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm ${
                        project.color === "teal"
                          ? "bg-teal-50 text-teal-800 ring-1 ring-teal-100"
                          : "bg-orange-50 text-orange-800 ring-1 ring-orange-100"
                      }`}
                    >
                      <CheckCircle
                        className={`h-4 w-4 ${
                          project.color === "teal"
                            ? "text-teal-600"
                            : "text-orange-500"
                        }`}
                      />
                      {feature}
                    </span>
                  ),
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Capacity
                  </p>
                  <p
                    className={`text-lg font-semibold ${
                      project.color === "teal"
                        ? "text-teal-700"
                        : "text-orange-600"
                    }`}
                  >
                    {project.impact.capacity}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Communities
                  </p>
                  <p
                    className={`text-lg font-semibold ${
                      project.color === "teal"
                        ? "text-teal-700"
                        : "text-orange-600"
                    }`}
                  >
                    {project.impact.communities}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Beneficiaries
                  </p>
                  <p
                    className={`text-lg font-semibold ${
                      project.color === "teal"
                        ? "text-teal-700"
                        : "text-orange-600"
                    }`}
                  >
                    {project.impact.beneficiaries}
                  </p>
                </div>
              </div>
            </div>

            {/* Media */}
            <div
              className={`relative p-8 lg:p-12 ${
                !isEven ? "lg:col-start-1" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-gray-50 shadow-xl">
                {project.mapEmbedSrc ? (
                  <div className="aspect-[4/3]">
                    <iframe
                      src={project.mapEmbedSrc}
                      title={`${project.title} location`}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-[4/3]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
                    project.color === "teal"
                      ? "from-teal-900/20 to-transparent"
                      : "from-orange-900/20 to-transparent"
                  }`}
                ></div>

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

                {project.mapLink && (
                  <Link
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6"
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className={`shadow ${
                        project.color === "teal"
                          ? "bg-white text-teal-700 hover:bg-teal-50"
                          : "bg-white text-orange-700 hover:bg-orange-50"
                      }`}
                    >
                      Open in Google Maps
                    </Button>
                  </Link>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <MapPin
                  className={`h-4 w-4 ${
                    project.color === "teal"
                      ? "text-teal-600"
                      : "text-orange-500"
                  }`}
                />
                <span>
                  Ground-level view to explore the project location and access
                  directions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const [heroRef, heroVisible] = useScrollAnimation({
    rootMargin: "0px 0px -20% 0px",
  });
  const [statsRef, statsVisible] = useScrollAnimation({
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section with Aurora */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 opacity-20">
          <Aurora
            colorStops={["#0F766E", "#EA580C", "#0F766E"]}
            blend={0.8}
            amplitude={1.2}
            speed={0.5}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>

        <div
          ref={heroRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 relative z-10 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-200 shadow-sm">
                <Target className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-800">
                  Transforming Communities Through Innovation
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-gray-900">Our</span>{" "}
                <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Comprehensive solutions for climate resilience and sustainable
                development across Africa—powered by renewable energy, local
                partnerships, and community-first design.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 ring-1 ring-teal-100">
                  Renewable-first infrastructure
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 ring-1 ring-orange-100">
                  Community co-creation
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-200">
                  Lasting social impact
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="relative">
              <div className="relative rounded-3xl border border-white/70 bg-white/80 shadow-2xl backdrop-blur p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold text-teal-700">
                      Impact pulse
                    </p>
                    <p className="text-sm text-gray-500">
                      Live view of our current reach
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 opacity-80" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl border border-gray-100 bg-white/90 px-4 py-5 shadow-sm ${
                        index === 1 ? "sm:translate-y-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <stat.icon className="h-4 w-4 text-teal-600" />
                        {stat.label}
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-teal-700 via-teal-800 to-orange-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-y-1/2 rounded-full bg-orange-300/20 blur-3xl"></div>

        <div
          ref={statsRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 delay-300 relative z-10 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-50 ring-1 ring-white/20">
                <Globe className="h-4 w-4" />
                By the numbers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Impact So Far
              </h2>
              <p className="text-teal-100 text-lg">
                Measuring the reach of our clean energy, mobility, and water
                initiatives across Ethiopia.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-teal-50 bg-white/10 px-4 py-3 rounded-full ring-1 ring-white/20 backdrop-blur">
              <Shield className="h-4 w-4" />
              Transparent metrics, updated with every deployment.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-teal-50">
                    <stat.icon className="h-5 w-5 text-white/80" />
                    <span className="text-sm font-semibold">{stat.label}</span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20" />
                </div>
                <div className="mt-3 text-4xl font-bold text-white">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-teal-100">
                  Growth driven by local teams, reliable infrastructure, and
                  community trust.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <ProjectSection
            key={project.id}
            project={project}
            index={index}
            isEven={isEven}
          />
        );
      })}

      <Footer />
    </div>
  );
}
