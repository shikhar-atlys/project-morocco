"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MapPin, Calendar, ChevronDown, FileText, Notebook, Building } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Header */}
      <header className="py-4 px-6 md:px-20 flex justify-between items-center border-b">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/skylane_logo.svg" 
              alt="Skylane Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="text-black border-gray-200 rounded-md text-sm"
          >
            Find a center
          </Button>
          
          <Button 
            variant="default" 
            className="bg-[#0f172a] text-white rounded-md hover:bg-[#1e293b] text-sm gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white px-6 md:px-20">
        <ul className="flex gap-8 text-gray-700">
          <li className="py-4">
            <Link href="/" className="hover:text-black">Home</Link>
          </li>
          <li className="py-4">
            <Link href="/about-us" className="hover:text-black">About us</Link>
          </li>
          <li className="py-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="p-0 h-auto font-normal text-gray-700 hover:text-black">
                  Apply for VISAs
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tourist Visa</DropdownMenuItem>
                <DropdownMenuItem>Business Visa</DropdownMenuItem>
                <DropdownMenuItem>Student Visa</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="py-4">
            <Link href="/centers" className="hover:text-black">Our Centers</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 md:px-20 py-10">
        <div className="relative rounded-lg overflow-hidden mx-auto max-w-6xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
          
          <Image
            src="/home/landing-hero-image.svg" 
            alt="Morocco cityscape"
            width={1400}
            height={600}
            className="w-full object-cover"
          />
          
          <p className="absolute top-4 left-4 text-white/90 text-sm z-20">
            *Skylane is official partner of Embassy of Morocco in India.
          </p>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 z-20 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-lg mb-2">Welcome to</p>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">Morocco</h1>
                  <Image 
                    src="/morocco-flag.svg" 
                    alt="Morocco flag" 
                    width={36}
                    height={24}
                    className="rounded-sm"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">VISA Application Center</h1>
                <p className="text-lg text-white">in India</p>
              </div>
              
              <Button 
                variant="outline"
                className="bg-white text-black border-white rounded-md mt-6 md:mt-0 hover:bg-white/90"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Quick & Easy Application Booking Process with Skylane</h2>
        
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
          Skylane is pleased to announce the opening of Morocco Visa Application Center (MVAC) at in India. All applicants residing in India (Indian citizens and Foreign Nationals) can apply at any of the above-mentioned MVACs by walking in and submitting their Visa applications along with passport, requisite documents, and relevant fees either through cash, NEFT, or demand draft. Applications submitted in Delhi and Mumbai will be assessed by The Morocco Embassy in New Delhi.
        </p>

        <div className="flex justify-center">
          <Button 
            variant="default" 
            className="bg-[#0f172a] text-white rounded-md hover:bg-[#1e293b] gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Button>
        </div>

        {/* Application Steps */}
        <div className="mt-16 relative flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-gray-200 hidden lg:block"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-gray-100 p-4 rounded-full mb-4 z-10 relative">
              <MapPin className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-medium mb-1">Select your</h3>
            <p className="text-sm text-gray-600">Preferred City</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-gray-100 p-4 rounded-full mb-4 z-10 relative">
              <FileText className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-medium mb-1">Identify your</h3>
            <p className="text-sm text-gray-600">Visa type</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-gray-100 p-4 rounded-full mb-4 z-10 relative">
              <Notebook className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-medium mb-1">Upload Passport &</h3>
            <p className="text-sm text-gray-600">Verify details</p>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-gray-100 p-4 rounded-full mb-4 z-10 relative">
              <Calendar className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-medium mb-1">Select your</h3>
            <p className="text-sm text-gray-600">preferred slot</p>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-gray-100 p-4 rounded-full mb-4 z-10 relative">
              <Building className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-medium mb-1">Visit us at your</h3>
            <p className="text-sm text-gray-600">booked VAC</p>
          </div>
        </div>
      </section>
    </div>
  );
}
