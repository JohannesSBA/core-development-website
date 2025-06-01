import { HoverCard, HoverCardContent, HoverCardPortal, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Link } from "@radix-ui/react-navigation-menu";
import { HoverCardRoot } from "./ui/hover-card";
import OrganizationalHoverCard from "./organizationalHoverCard";

export default function OrganizationalChart() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-transparent">
     

      {/* CORE Group Header */}
      <div className="flex justify-center mb-8">
        <div className="bg-teal-700 text-white px-12 py-6 text-2xl font-bold text-center">CORE Group</div>
      </div>

      {/* Main connecting line */}
      <div className="flex justify-center mb-4">
        <div className="w-px h-8 bg-orange-500"></div>
      </div>

      {/* Horizontal line for main divisions */}
      <div className="relative mb-4">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-orange-500"></div>
        {/* Vertical connectors */}
        <div className="flex justify-between w-4/5 mx-auto">
          <div className="w-px h-4 bg-orange-500"></div>
          <div className="w-px h-4 bg-orange-500"></div>
          <div className="w-px h-4 bg-orange-500"></div>
          <div className="w-px h-4 bg-orange-500"></div>
          <div className="w-px h-4 bg-orange-500"></div>
        </div>
      </div>

      {/* Main Divisions */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-orange-600 text-white px-4 py-4 text-center font-bold">CORE Energy</div>
        <div className="bg-orange-600 text-white px-4 py-4 text-center font-bold">CORE Water</div>
        <div className="bg-orange-600 text-white px-4 py-4 text-center font-bold">CORE Transport</div>
        <div className="bg-orange-600 text-white px-4 py-4 text-center font-bold">CORE Health</div>
        <div className="bg-orange-600 text-white px-4 py-4 text-center font-bold">CORE Agriculture</div>
      </div>

      {/* Sub-divisions */}
      <div className="grid grid-cols-5 gap-4">
        {/* CORE Energy */}
        <div className="space-y-4">
          {/* Connecting lines */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-1/2 h-px bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 right-1/4 w-px h-4 bg-teal-600"></div>
          </div>
          <div className="pt-8 space-y-4">
            <OrganizationalHoverCard title="Energy Infrastructure" description="Energy Infrastructure" />
            <OrganizationalHoverCard title="Energy Appliances" description="Energy Appliances" />
          </div>
        </div>

        {/* CORE Water */}
        <div className="space-y-4">
          {/* Connecting lines */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-1/2 h-px bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 right-1/4 w-px h-4 bg-teal-600"></div>
          </div>
          <div className="pt-8 space-y-4">
            <OrganizationalHoverCard title="Water Supply" description="Water Supply" />
            <OrganizationalHoverCard title="Water Management" description="Water Management" />
          </div>
        </div>

        {/* CORE Transport */}
        <div className="space-y-4">
          {/* Connecting lines */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-1/2 h-px bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 right-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/2 w-px h-20 bg-teal-600"></div>
          </div>
          <div className="pt-8 space-y-4">
            <OrganizationalHoverCard title="Charging/Swapping Stations" description="Charging/Swapping Stations" />
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">EVs and E-Bikes</div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Transportation
              <br />
              Services
              <br />
              P-2
            </div>
          </div>
        </div>

        {/* CORE Health */}
        <div className="space-y-4">
          {/* Connecting lines */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-1/2 h-px bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 right-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/2 w-px h-36 bg-teal-600"></div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">Pharmacy</div>
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">Health Insurance</div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Pharmaceutical
              <br />
              P-2
            </div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Specialized health
              <br />
              services
              <br />
              P-2
            </div>
          </div>
        </div>

        {/* CORE Agriculture */}
        <div className="space-y-4">
          {/* Connecting lines */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-1/2 h-px bg-teal-600"></div>
            <div className="absolute top-4 left-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 right-1/4 w-px h-4 bg-teal-600"></div>
            <div className="absolute top-4 left-1/2 w-px h-80 bg-teal-600"></div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">Ag Inputs</div>
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">
              Irrigation
              <br />
              Technologies
            </div>
            <div className="bg-teal-700 text-white px-3 py-3 text-center text-sm font-medium">Farming</div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Ag Logistics
              <br />
              P-2
            </div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Agro Processing
              <br />
              P-2
            </div>
            <div className="bg-teal-500 text-white px-3 py-3 text-center text-sm font-medium">
              Market Access
              <br />
              P-2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
