import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const founders = [
  {
    name: "Dr. Eng. Seleshi Bekele",
    title: "Co-Founder",
    image: "/seleshi.png",
    bio: "Seleshi Bekele (Amharic: ስለሺ በቀለ) is an Ethiopian politician and academic who served as the Chief Negotiator and Advisor on Transboundary Rivers and GERD at Office of Prime Minister of Ethiopia since 2021 and ambassador of Ethiopia to the US from 2022 to 2024. Prior to this position, He served as the Minister of Water, Irrigation and Energy of Ethiopia from 2018 to 2021.",
    expertise: ["International Development", "Capacity Building", "Sustainable Development"],
    education: ["PhD in Hydraulic Engineering from TU Dresden, ", "MSc in Civil Engineering from Newcastly Upon Tyne, ", "BSC in Civil Engineering from Addis Ababa University"],
    experience: ["Fromer Dean of arbaminch water technology insitiute", "Head of International Water Management Institute for Nile Basin in East Africa", "UNECA, Interregional Advisor on Water, Energy and Capacity Development at DESA of United Nations", "Chief Negotiator and Advisor for the Prime Minister of Ethiopia at Ministers Level"],

  },
  {
    name: "Dr. Amir Aman",
    title: "Co-Founder",
    image: "/Amir.png",
    bio: "Dr. Amir Aman is an Ethiopian physician and public-health leader who served as the country’s Minister of Health. A graduate of Addis Ababa University’s medical program with an MSc in Public Health from the University of the Western Cape, he went on to shape global health financing and philanthropy as Senior Advisor at the Susan Thompson Buffett Foundation and as Country Operations Lead for the World Bank’s Global Financing Facility. Across these roles he has built a reputation for high-level leadership, policy design, on-the-ground implementation, and successful resource mobilization.",
    expertise: ["Public Health", "Strategic Planning", "Leadership"],
    education: "Doctor of Medicine from Addis Ababa University, Msc in Public Health from University of Western Cape",
    experience: ["Former Minister of Health, Ethiopia", "Former Senior Advisor, Susan Thompson Buffett Foundation ", "Former Country Operations Lead, Global Financing Facility (GFF) / World Bank ", "Extensive Expertise in Leadership, Policy, Implementation, and Resource Mobilization"],
  },
  {
    name: "Eng. Hizkyas Dufera",
    title: "Co-Founder",
    image: "/hizikias.png",
    bio: "Eng. Hizkyas Dufera is an Ethiopian engineer and entrepreneur who has led the development of solar and renewable energy solutions in Ethiopia. With a background in electrical engineering and a commitment to sustainable development, he has played a key role in shaping the country's energy policy and solutions globally",
    expertise: ["Project Finance", "Strategic Development", "Strategic Leadership"],
    education: "BsC of Science in Electrical, Electornics and Communications Engineernig from University of Maryland, Ms in Electric and Electronics Engineering from Renseselaer Polytechnic Insititue",
    experience: ["Former U.S. aerospace and energy sector leader, securing substantial funding for renewable energy grants", "Founder of Dufsar Energy LLC, delivering solar and renewable energy solutions globally", "Spearheaded the CRISP initiative for climate-resilient agriculture.", "Leads energy and irrigation policy reforms at Ethiopia’s Ministry of Water, Irrigation, and Energy.", "Senior Advisor | Entrepreneur | Policy Innovator"]
  },
]

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Leadership Team</div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
              Meet Our <span className="text-green-600">Founders</span>
            </h1>
            <p className="text-xl text-gray-600">
              Visionary leaders driving Africa's transition to sustainable development through innovation, expertise,
              and unwavering commitment to climate resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg mx-auto"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h2>
                    <p className="text-xl text-orange-600 font-semibold mb-4">{founder.title}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{founder.bio}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <p className="text-gray-600">{founder.education}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 p-2">Experience</h4>
                      <p className="text-gray-600">
                        {founder.experience.map((experience, i) => (
                          <li key={i} className="text-gray-600 text-sm">
                            {experience}
                          </li>
                        ))}
                      </p>
                    </div>
                    
                  </div>

                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Our Shared Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              United by a common vision, our founders bring diverse expertise and unwavering commitment to building a
              sustainable future for Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pioneering cutting-edge solutions that address Africa's unique climate and development challenges
                  through technology and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Placing communities at the center of everything we do, ensuring local ownership and sustainable impact
                  in all our initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maintaining the highest standards in research, implementation, and impact measurement to deliver
                  transformational results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-green-50">
              Connect with our leadership team to explore partnerships and collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                Schedule a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white bg-transparent hover:text-green-700"
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
