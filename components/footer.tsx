"use client"

import { MapPin, Mail, Phone, Globe, Linkedin, Twitter, Facebook, X } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#044248] via-teal-700 to-[#E27025] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements with CORE colors */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-300/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* <div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Join the Movement</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ready to Build Africa's Climate-Resilient Future?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Partner with CORE Development to implement climate-oriented solutions that create lasting resilience,
              empowerment, and development across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div> */}

          {/* Footer Content */}
          <div className="grid gap-8 md:grid-cols-4 pt-16 border-t border-white/20">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/CoreLogo.png" alt="CORE Development" width={32} height={32} className="w-8 h-8" />
                <h3 className="text-xl font-bold text-white">CORE Development</h3>
              </div>
              <p className="text-teal-100 leading-relaxed text-sm">
                Climate Oriented Resilience, Empowerment & Development - Leading Africa's transition to climate
                resilient and sustainable development.
              </p>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent p-2"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent p-2"
                >
                  <Image src="/x-logo-white.png" alt="X" width={15} height={15} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent p-2"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>

             <div className="space-y-4">
             
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Company</h4>
              <div className="space-y-3 text-sm flex flex-col">
                <Link
                  href="/programs"
                  className="text-teal-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                > 
                  Programs
                </Link>
                <Link
                  href="/projects"
                  className="text-teal-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Projects  
                </Link>
                <Link
                  href="/founders"
                  className="text-teal-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Founders
                </Link>
                
                <Link
                  href="/contact"
                  className="text-teal-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Contact
                </Link>
              </div>
            </div>
           

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3 text-teal-100">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-3 text-teal-100">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@coredevelopment.et" className="hover:text-white transition-colors">
                    info@coredevelopment.org
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-teal-100">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+251111234567" className="hover:text-white transition-colors">
                    +251 11 123 4567
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-teal-100">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <span>www.coredevelopment.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-teal-100">
                <p>&copy; {new Date().getFullYear()} CORE Development. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-teal-100">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
