"use client"
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { CheckCircle, Send, Mail, Phone, Globe, Linkedin, Twitter, Facebook, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";

export default function ContactPage() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        service: "",
        message: "",
        budget: "",
        timeline: "",
      })
    }, 3000)
  }
    return (
        <div>
            <Navbar />
            <section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-green-100 to-orange-100"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block rounded-full bg-gradient-to-r from-green-100 to-orange-100 px-6 py-2 text-sm font-medium text-green-800">
              Let's Build Together
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-gray-900">
              Get in{" "}
              <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your community with sustainable solutions? We're here to help you create lasting impact
              across Africa. Let's start the conversation.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange("organization", e.target.value)}
                            placeholder="Your organization"
                            className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange("phone", e.target.value)}
                            placeholder="+251 11 123 4567"
                            className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project, goals, and how we can help..."
                          rows={5}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600">
                  Reach out to us directly or visit one of our offices across Africa.
                </p>
              </div>

              {/* Quick Contact */}
              <Card className="shadow-lg border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">seleshiba@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">+251 11 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">www.coredevelopment.org</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-500 hover:bg-blue-50">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </section>
      <Footer />
        </div>
    )
}
