import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrganizationalChart from "@/components/organizationalChat";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <div>
            <Navbar />
            <div className="w-screen h-screen p-12 flex flex-col md:flex-row gap-2 bg-gradient-to-br from-green-100 via-white to-orange-100 ">
                <div className="w-full md:w-1/4 h-full ">
                <div className="p-16 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="space-y-6 text-center max-w-3xl mx-auto">
                        <div className="mb-8">
                            <div className="mx-auto w-24 h-1 bg-green-600 rounded-full mb-6" />
                            <h1 className="text-4xl font-bold text-green-700 tracking-tighter pb-2">
                                Our Motivation
                            </h1>
                        </div>
                        <p className="text-lg leading-7 text-gray-700 max-w-prose mx-auto">
                            CORE Group aspires to be the premier private sector development partner to governments and 
                            international development entities, driving Climate Resilient and Sustainable Development 
                            across Ethiopia and beyond.
                        </p>
                    </div>
                    
                </div>
                </div>
                <div className="md:w-3/4 h-full flex flex-col w-full justify-center">
                <p className="text-center font-bold text-green-700 pb-4">CORE Group advances climate resilience, sustainability, inclusivity, and empowerment through five key sectors</p>
                <div className="hidden md:flex">
                    <OrganizationalChart />
                </div>
                <div className="visible md:hidden">
                    <Image src="/programs.png" alt="Organizational Chart" width={500} height={500} />
                </div>
                </div>
            </div>
            <Footer />  
        </div>
    )
}