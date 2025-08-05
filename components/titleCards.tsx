"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

interface TiltedCardProps {
  imageSrc: string
  alt?: string
  className?: string
}

export default function TiltedCard({ imageSrc, alt = "Profile", className = "" }: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative w-80 h-80 mx-auto transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#044248] to-[#E27025] rounded-full shadow-2xl">
        <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            width={300}
            height={300}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-orange-400/20 rounded-full blur-xl -z-10 scale-110"></div>
    </div>
  )
}
