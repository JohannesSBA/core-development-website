"use client"
import { Zap } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
   return (
    <div>
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-green-600 to-orange-500 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400">CORE Development</h3>
              <p className="text-white">
                Leading Africa's transition to climate resilient and sustainable development.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-orange-400">Company</h4>
              <div className="space-y-2 text-sm flex flex-col gap-2">
                <Link href="/about" className="text-gray-100 hover:text-white">
                  About
                </Link>
                <Link href="/founders" className="text-gray-100 hover:text-white">
                  Founders
                </Link>
                <Link href="/projects" className="text-gray-100 hover:text-white">
                  Projects
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-orange-400">Services</h4>
              <div className="space-y-2 text-sm flex flex-col gap-2">
                <Link href="/projects" className="text-gray-100 hover:text-white">
                  Climate Adaptation
                </Link>
                <Link href="/projects" className="text-gray-100 hover:text-white">
                  Sustainable Agriculture
                </Link>
                <Link href="/projects" className="text-gray-100 hover:text-white">
                  Renewable Energy
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-orange-400">Contact</h4>
              <div className="space-y-2 text-sm text-gray-100">
                <p>Addis Ababa, Ethiopia</p>
                <p>info@coredevelopment.et</p>
                <p>+251 11 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/20 rounded-full animate-ping"></div>
      </section>

    </div>
   )
};
