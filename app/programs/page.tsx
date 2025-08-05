import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrganizationalChart from "@/components/organizationalChat";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-orange-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="grid lg:grid-cols-4 gap-8 items-start">
                    {/* Motivation Section */}
                    <div className="lg:col-span-1">
                        <div className="p-8 lg:p-12 bg-green-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] sticky top-8">
                            <div className="space-y-6 text-center">
                                <div className="mb-8">
                                    <div className="mx-auto w-24 h-1 bg-green-600 rounded-full mb-6" />
                                    <h1 className="text-3xl lg:text-4xl font-bold text-green-700 tracking-tighter pb-2">
                                        Our Motivation
                                    </h1>
                                </div>
                                <p className="text-base lg:text-lg leading-7 text-gray-700">
                                    CORE Group aspires to be the premier private sector development partner to governments and 
                                    international development entities, driving Climate Resilient and Sustainable Development 
                                    across Ethiopia and beyond.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Organizational Chart Section */}
                    <div className="lg:col-span-3">
                        <div className="text-center mb-8">
                            <p className="text-lg lg:text-xl font-bold text-green-700 max-w-4xl mx-auto">
                                CORE Group advances climate resilience, sustainability, inclusivity, and empowerment through six key sectors
                            </p>
                        </div>
                        
                        {/* Desktop Chart */}
                        <div className="hidden lg:block">
                            <OrganizationalChart />
                        </div>
                        
                        {/* Tablet Chart - Simplified */}
                        <div className="hidden md:block lg:hidden">
                            <div className="max-w-4xl mx-auto">
                                <OrganizationalChart />
                            </div>
                        </div>
                        
                        {/* Mobile Chart - Image */}
                        <div className="block md:hidden">
                            <div className="flex justify-center">
                                <Image 
                                    src="/programs.png" 
                                    alt="CORE Group Organizational Chart" 
                                    width={400} 
                                    height={600}
                                    className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />  
        </div>
    )
}