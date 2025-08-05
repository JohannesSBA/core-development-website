"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Globe, Zap, Leaf, Heart, Truck, Droplets, PiggyBank } from "lucide-react"

interface HoverCardProps {
  title: string
  description: string
  image?: string
  isPhase2?: boolean
  icon?: React.ReactNode
  stats?: {
    communities?: number
    countries?: number
    impact?: string
  }
}

const getIconForTitle = (title: string) => {
  const titleLower = title.toLowerCase()
  if (titleLower.includes('energy') || titleLower.includes('infrastructure')) return <Zap className="h-5 w-5" />
  if (titleLower.includes('water')) return <Droplets className="h-5 w-5" />
  if (titleLower.includes('transport') || titleLower.includes('charging')) return <Truck className="h-5 w-5" />
  if (titleLower.includes('health') || titleLower.includes('pharmacy')) return <Heart className="h-5 w-5" />
  if (titleLower.includes('agriculture') || titleLower.includes('farming')) return <Leaf className="h-5 w-5" />
  if (titleLower.includes('microcredit') || titleLower.includes('financial')) return <PiggyBank className="h-5 w-5" />
  return <Target className="h-5 w-5" />
}

export default function OrganizationalHoverCard({ 
  title, 
  description, 
  image, 
  isPhase2 = false, 
  icon,
  stats 
}: HoverCardProps) {
  const defaultIcon = getIconForTitle(title)
  const displayIcon = icon || defaultIcon

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={`${
            isPhase2 
              ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700" 
              : "bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900"
          } transition-all duration-300 hover:scale-105 hover:shadow-xl text-white px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-medium rounded-lg cursor-pointer group relative overflow-hidden`}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
          
          <div className="relative z-10">
            <div className="h-3 w-3 lg:h-5 lg:w-5 mx-auto mb-1">
              {displayIcon}
            </div>
            <div className="mt-1">{title}</div>
            {isPhase2 && (
              <div className="mt-2">
                <Badge variant="secondary" className="bg-white/20 text-white text-xs border-white/30">
                  Phase 2
                </Badge>
              </div>
            )}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 lg:w-96 p-0 bg-white shadow-2xl border-0 rounded-2xl overflow-hidden" sideOffset={8}>
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-[#044248] to-[#E27025] p-4 lg:p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="p-1 lg:p-2 bg-white/20 rounded-lg">
                  <div className="h-4 w-4 lg:h-5 lg:w-5">
                    {displayIcon}
                  </div>
                </div>
                <h4 className="text-lg lg:text-xl font-bold">{title}</h4>
              </div>
              {isPhase2 && (
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                  Phase 2
                </Badge>
              )}
            </div>
            
            {/* Stats row if provided */}
            {stats && (
              <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-white/20">
                {stats.communities && (
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold">{stats.communities}+</div>
                    <div className="text-xs opacity-90">Communities</div>
                  </div>
                )}
                {stats.countries && (
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold">{stats.countries}</div>
                    <div className="text-xs opacity-90">Countries</div>
                  </div>
                )}
                {stats.impact && (
                  <div className="text-center">
                    <div className="text-sm lg:text-lg font-bold">{stats.impact}</div>
                    <div className="text-xs opacity-90">Impact</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 lg:p-6">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">{description}</p>
            
            {/* Image if provided */}
            {image && (
              <div className="mb-4">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-24 lg:h-32 object-cover rounded-lg shadow-md" 
                />
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-100 to-teal-100 rounded-full opacity-20 -translate-y-8 lg:-translate-y-10 translate-x-8 lg:translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-tr from-teal-100 to-orange-100 rounded-full opacity-20 translate-y-6 lg:translate-y-8 -translate-x-6 lg:-translate-x-8"></div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
