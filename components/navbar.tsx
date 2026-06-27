"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Leaf } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/projects", label: "Projects" },
    { href: "/founders", label: "Founders" },
    { href: "/contact", label: "Contact" },
    { href: "/corecharge", label: "CORE Charge" },
  ]

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center space-x-2">
            <Image src="/CoreLogo.png" width={50} height={50} alt="logo" />
          </Link>

          {/* Desktop Navigation — pinned to the true center of the header */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 hover:scale-105 ${pathname === item.href ? "text-green-600" : "text-gray-600"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex shrink-0 items-center space-x-4">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
              <Link href="/projects">
                Get Involved
              </Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */} 
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="flex items-center justify-center ">
                    <Image src="/CoreLogo.png" width={30} height={30} alt="logo" />
                  </div>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
