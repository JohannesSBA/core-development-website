import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrganizationalChart from "@/components/organizationalChat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Target } from "lucide-react";

const programPillars = [
  "Clean mobility",
  "Water access",
  "Energy & storage",
  "Agri value chains",
  "Financial inclusion",
  "Skills & jobs",
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-teal-200 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-orange-200 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <Badge className="bg-white text-teal-700 border border-teal-100 shadow-sm">
                Programs
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Climate-resilient programs built with communities
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
                  We co-design initiatives that combine renewable energy, water
                  access, mobility, and financial inclusion—ensuring lasting
                  impact for the people we serve.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {programPillars.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-800 ring-1 ring-teal-100 shadow-sm"
                  >
                    <Shield className="h-4 w-4 text-teal-600" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Globe className="mr-2 h-5 w-5" />
                  View how we work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 shadow-md"
                >
                  <Link href="/contact">
                    <Target className="mr-2 h-5 w-5" />
                    Partner with us
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-2xl backdrop-blur p-8 lg:p-10">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-teal-100 blur-2xl" />
                  <div className="absolute -bottom-16 left-4 h-32 w-32 rounded-full bg-orange-100 blur-2xl" />
                </div>
                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 ring-1 ring-teal-100">
                    Our motivation
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    A trusted development partner
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    CORE Group aspires to be the premier private sector
                    development partner to governments and international
                    development entities, driving climate-resilient and
                    sustainable growth across Ethiopia and beyond.
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Reliable infrastructure grounded in renewable energy",
                      "Local capacity building and inclusive governance",
                      "Partnerships that deliver measurable social impact",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 ring-1 ring-gray-100"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Structure */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 ring-1 ring-teal-100">
                Programs structure
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                How our programs come to life
              </h3>
              <p className="text-gray-600 max-w-3xl">
                We integrate technology, finance, and local expertise to unlock
                climate resilience. Each pillar connects people to essential
                services—energy, water, mobility, and livelihoods.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-3 rounded-full shadow-sm ring-1 ring-gray-200">
              <Shield className="h-4 w-4 text-teal-600" />
              Six pillars anchored in community outcomes.
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 right-20 h-40 w-40 rounded-full bg-teal-100 blur-3xl" />
              <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-orange-100 blur-3xl" />
            </div>

            <div className="relative p-6 lg:p-10 space-y-6">
              <div className="flex flex-wrap gap-2">
                {programPillars.map((pillar) => (
                  <Badge
                    key={pillar}
                    variant="outline"
                    className="bg-white/80 text-gray-800 border-gray-200 shadow-sm"
                  >
                    {pillar}
                  </Badge>
                ))}
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 md:p-6 shadow-inner">
                <div className="hidden lg:block">
                  <OrganizationalChart />
                </div>

                <div className="hidden md:block lg:hidden">
                  <div className="max-w-4xl mx-auto">
                    <OrganizationalChart />
                  </div>
                </div>

                <div className="block md:hidden">
                  <div className="flex justify-center">
                    <Image
                      src="/programs.png"
                      alt="CORE Group Organizational Chart"
                      width={400}
                      height={600}
                      className="w-full max-w-sm h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 bg-gradient-to-r from-teal-700 via-teal-800 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                Partner with CORE Group
              </p>
              <h4 className="text-3xl font-bold mt-2">
                Bring clean, resilient infrastructure to more communities.
              </h4>
              <p className="text-white/80 mt-2">
                Let’s align on outcomes and deploy solutions that last.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-white text-teal-800 hover:bg-gray-100 shadow-lg"
              >
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
