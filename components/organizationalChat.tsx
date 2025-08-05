import { HoverCard, HoverCardContent, HoverCardPortal, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Link } from "@radix-ui/react-navigation-menu";
import { HoverCardRoot } from "./ui/hover-card";
import OrganizationalHoverCard from "./organizationalHoverCard";
import { Building2, Zap, Droplets, Truck, Heart, Leaf, PiggyBank, ArrowRight, Users, Target, Globe } from "lucide-react";

export default function OrganizationalChart() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden rounded-2xl p-4 lg:p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #E27025 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-bounce"></div>

      <div className="relative z-10">
        {/* CORE Group Header */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-core-teal to-core-orange rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-core-teal to-core-orange text-white px-8 lg:px-16 py-6 lg:py-8 text-2xl lg:text-3xl font-bold text-center rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 lg:space-x-4">
                <Building2 className="h-6 w-6 lg:h-8 lg:w-8" />
                <span>CORE Group</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main connecting line with animation */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="relative">
            <div className="w-px h-8 lg:h-12 bg-gradient-to-b from-core-orange to-core-teal animate-pulse-slow"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-core-orange rounded-full animate-bounce shadow-glow"></div>
          </div>
        </div>

        {/* Horizontal line for main divisions */}
        <div className="relative mb-6 lg:mb-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 lg:w-5/6 h-1 bg-gradient-to-r from-core-orange via-core-teal to-core-orange rounded-full shadow-lg"></div>
          {/* Vertical connectors */}
          <div className="flex justify-between w-4/5 lg:w-5/6 mx-auto">
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
            <div className="w-1 h-4 lg:h-6 bg-gradient-to-b from-core-teal to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Divisions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 mb-8 lg:mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <Zap className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Energy</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <Droplets className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Water</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <Truck className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Transport</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <Heart className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Health</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <Leaf className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Agriculture</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg lg:rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 "></div>
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-2 lg:px-4 py-4 lg:py-6 text-center font-bold rounded-lg lg:rounded-xl shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <PiggyBank className="h-4 w-4 lg:h-6 lg:w-6 mx-auto mb-1 lg:mb-2" />
              <div className="text-xs lg:text-sm md:text-base">CORE Microfinance</div>
            </div>
          </div>
        </div>

        {/* Sub-divisions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">
          {/* CORE Energy */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <OrganizationalHoverCard
                title="Energy Infrastructure"
                description="Developing and deploying renewable energy infrastructure across Africa, including solar farms, wind installations, and grid modernization projects. Our infrastructure solutions are designed to be scalable, sustainable, and accessible to communities across the continent."
                isPhase2={false}
                stats={{
                  communities: 150,
                  countries: 12,
                  impact: "50MW+"
                }}
              />
              <OrganizationalHoverCard
                title="Energy Appliances"
                description="Manufacturing and distributing energy-efficient appliances designed specifically for African markets. We focus on affordability, durability, and sustainability to ensure widespread adoption of clean energy solutions."
                isPhase2={false}
                stats={{
                  communities: 200,
                  countries: 8,
                  impact: "10K+ Units"
                }}
              />
            </div>
          </div>

          {/* CORE Water */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <OrganizationalHoverCard 
                title="Water Supply" 
                description="Implementing innovative water supply solutions including rainwater harvesting, groundwater management, and water purification systems. We ensure access to clean, safe drinking water for communities across Africa."
                isPhase2={false}
                stats={{
                  communities: 300,
                  countries: 15,
                  impact: "1M+ Liters"
                }}
              />
              <OrganizationalHoverCard 
                title="Water Management" 
                description="Developing comprehensive water management systems including irrigation technologies, water conservation programs, and sustainable water resource planning for agricultural and urban applications."
                isPhase2={false}
                stats={{
                  communities: 180,
                  countries: 10,
                  impact: "500K+ Hectares"
                }}
              />
            </div>
          </div>

          {/* CORE Transport */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/2 w-1 h-16 lg:h-24 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <OrganizationalHoverCard 
                title="Charging/Swapping Stations" 
                description="Building a comprehensive network of electric vehicle charging and battery swapping stations across Africa. Our infrastructure supports the transition to sustainable transportation while ensuring accessibility and reliability."
                isPhase2={false}
                stats={{
                  communities: 80,
                  countries: 6,
                  impact: "200+ Stations"
                }}
              />
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Truck className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  EVs and E-Bikes
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Users className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Transportation
                  <br />
                  Services
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
            </div>
          </div>

          {/* CORE Health */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/2 w-1 h-32 lg:h-48 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Heart className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Pharmacy
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Target className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Health Insurance
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Globe className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Pharmaceutical
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Heart className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Specialized health
                  <br />
                  services
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
            </div>
          </div>

          {/* CORE Agriculture */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/2 w-1 h-64 lg:h-96 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Leaf className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Ag Inputs
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Droplets className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Irrigation
                  <br />
                  Technologies
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Leaf className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Farming
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Truck className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Ag Logistics
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Zap className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Agro Processing
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <Globe className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Market Access
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
            </div>
          </div>

          {/* CORE Microfinance */}
          <div className="space-y-3 lg:space-y-4">
            {/* Connecting lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1/2 h-1 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 right-1/4 w-1 h-4 lg:h-6 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
              <div className="absolute top-4 lg:top-6 left-1/2 w-1 h-24 lg:h-32 bg-gradient-to-b from-teal-600 to-transparent rounded-full"></div>
            </div>
            <div className="pt-8 lg:pt-12 space-y-3 lg:space-y-4">
              <OrganizationalHoverCard 
                title="Microcredit Services" 
                description="Providing accessible microcredit services to small businesses and entrepreneurs across Africa. Our flexible lending solutions support economic growth and financial inclusion in underserved communities."
                isPhase2={false}
                stats={{
                  communities: 250,
                  countries: 18,
                  impact: "$5M+ Loans"
                }}
              />
              <OrganizationalHoverCard 
                title="Financial Education" 
                description="Empowering communities through comprehensive financial literacy programs, business development training, and sustainable financial planning education to build long-term economic resilience."
                isPhase2={false}
                stats={{
                  communities: 400,
                  countries: 20,
                  impact: "50K+ Trained"
                }}
              />
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg shadow-lg hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105">
                  <PiggyBank className="h-3 w-3 lg:h-4 lg:w-4 mx-auto mb-1" />
                  Digital Banking
                  <br />
                  Solutions
                  <br />
                  <span className="text-xs bg-white/20 px-1 lg:px-2 py-1 rounded-full">P-2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
