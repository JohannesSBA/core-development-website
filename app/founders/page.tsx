"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Award, Users, Target } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TiltedCard from "@/components/titleCards"
import Aurora from "@/components/Aurora"
import Link from "next/link"

const founders = [
  {
    name: "Dr. Eng. Seleshi Bekele",
    title: "Co-Founder & Chief Water Resources Advisor",
    image: "/seleshi.png",
    bio: "Seleshi Bekele (Amharic: ስለሺ በቀለ) is an Ethiopian politician and academic who served as the Chief Negotiator and Advisor on Transboundary Rivers and GERD at Office of Prime Minister of Ethiopia since 2021 and ambassador of Ethiopia to the US from 2022 to 2024. Prior to this position, He served as the Minister of Water, Irrigation and Energy of Ethiopia from 2018 to 2021.",
    expertise: ["International Development", "Water Resources", "Sustainable Development", "Policy Development"],
    education: [
      "PhD in Hydraulic Engineering from TU Dresden",
      "MSc in Civil Engineering from Newcastle Upon Tyne",
      "BSc in Civil Engineering from Addis Ababa University",
    ],
    experience: [
      "Former Dean of Arba Minch Water Technology Institute",
      "Head of International Water Management Institute for Nile Basin in East Africa",
      "UNECA, Interregional Advisor on Water, Energy and Capacity Development at DESA of United Nations",
      "Chief Negotiator and Advisor for the Prime Minister of Ethiopia at Ministers Level",
      "Former Minister of Water, Irrigation and Energy of Ethiopia (2018-2021)",
      "Ambassador of Ethiopia to the US (2022-2024)",
    ],
    linkedin: "seleshi-bekele-awulachew-b546b668/",
  },
  {
    name: "Dr. Amir Aman",
    title: "Co-Founder & Chief Health Strategy Officer",
    image: "/Amir.png",
    bio: "Dr. Amir Aman is an Ethiopian physician and public-health leader who served as the country's Minister of Health. A graduate of Addis Ababa University's medical program with an MSc in Public Health from the University of the Western Cape, he went on to shape global health financing and philanthropy as Senior Advisor at the Susan Thompson Buffett Foundation and as Country Operations Lead for the World Bank's Global Financing Facility. Across these roles he has built a reputation for high-level leadership, policy design, on-the-ground implementation, and successful resource mobilization.",
    expertise: ["Public Health", "Strategic Planning", "Leadership", "Global Health Financing"],
    education: [
      "Doctor of Medicine from Addis Ababa University",
      "MSc in Public Health from University of Western Cape",
    ],
    experience: [
      "Former Minister of Health, Ethiopia",
      "Former Senior Advisor, Susan Thompson Buffett Foundation",
      "Former Country Operations Lead, Global Financing Facility (GFF) / World Bank",
      "Extensive Expertise in Leadership, Policy, Implementation, and Resource Mobilization",
    ],
    linkedin: "amir-aman-448323153/",
  },
  {
    name: "Eng. Hizkyas Dufera",
    title: "Co-Founder & Chief Technology Officer",
    image: "/Hizikias.png",
    bio: "Eng. Hizkyas Dufera is an Ethiopian engineer and entrepreneur who has led the development of solar and renewable energy solutions in Ethiopia. With a background in electrical engineering and a commitment to sustainable development, he has played a key role in shaping the country's energy policy and solutions globally.",
    expertise: ["Project Finance", "Renewable Energy", "Strategic Leadership", "Innovation"],
    education: [
      "BSc in Electrical, Electronics and Communications Engineering from University of Maryland",
      "MS in Electric and Electronics Engineering from Rensselaer Polytechnic Institute",
    ],
    experience: [
      "Former U.S. aerospace and energy sector leader, securing substantial funding for renewable energy grants",
      "Founder of Dufsar Energy LLC, delivering solar and renewable energy solutions globally",
      "Spearheaded the CRISP initiative for climate-resilient agriculture",
      "Leads energy and irrigation policy reforms at Ethiopia's Ministry of Water, Irrigation, and Energy",
      "Senior Advisor | Entrepreneur | Policy Innovator",
    ],
    linkedin: "hizkyas-dufera-a8055b173/",
  },
]

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Aurora */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 opacity-30">
          <Aurora
            colorStops={["#0F766E", "#EA580C", "#0F766E"]} // CORE brand colors
            blend={0.7}
            amplitude={1.5}
            speed={0.6}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-200">
              <Users className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Leadership Team</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              <span className="text-gray-900">Meet Our</span>{" "}
              <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                Founders
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Visionary leaders driving Africa's transition to sustainable development through innovation, expertise,
              and unwavering commitment to climate resilience, empowerment, and development.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`grid gap-16 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <TiltedCard imageSrc={founder.image} alt={founder.name} />
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">{founder.name}</h2>
                    <p className="text-xl text-orange-600 font-semibold mb-6">{founder.title}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gradient-to-r from-teal-100 to-orange-100 text-teal-800 border-teal-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">{founder.bio}</p>

                  <div className="space-y-6">
                    {/* Education */}
                    <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-teal-600" />
                        Education
                      </h4>
                      <ul className="space-y-2">
                        {founder.education.map((edu, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Experience */}
                    <div className="bg-gradient-to-r from-orange-50 to-teal-50 p-6 rounded-xl border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-orange-600" />
                        Key Experience
                      </h4>
                      <ul className="space-y-2">
                        {founder.experience.map((exp, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href={`https://www.linkedin.com/in/${founder.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-2" />
                        <p>Connect on LinkedIn</p>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-orange-100 px-4 py-2 rounded-full">
              <Target className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Shared Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              United by a common vision, our founders bring diverse expertise and unwavering commitment to building a
              sustainable future for Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-teal-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Pioneering cutting-edge solutions that address Africa's unique climate and development challenges
                  through technology and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-orange-700">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Placing communities at the center of everything we do, ensuring local ownership and sustainable impact
                  in all our initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-teal-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Maintaining the highest standards in research, implementation, and impact measurement to deliver
                  transformational results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-600 via-teal-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Subtle Aurora Background */}
        <div className="absolute inset-0 opacity-20">
          <Aurora colorStops={["#ffffff", "#ffffff", "#ffffff"]} blend={0.3} amplitude={0.8} speed={0.4} />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Join Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ready to Work With Our Leadership Team?
            </h2>
            <p className="text-xl text-teal-100 leading-relaxed">
              Connect with our founders to explore partnerships and collaboration opportunities that drive climate
              resilience, empowerment, and sustainable development across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Learn About Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
