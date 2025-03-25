"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Header */}
      <header className="p-4 px-6 md:px-20 flex justify-between items-center border-b">
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
        
        {/* Center text */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-gray-600">Apply visa to</span>
          <div className="flex items-center gap-1">
            <Image 
              src="/morocco-flag.svg" 
              alt="Morocco flag" 
              width={24} 
              height={16}
              className="rounded-sm"
            />
            <span className="font-medium">Morocco from India</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="text-black border-gray-200 rounded-md"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find a center
          </Button>
          
          <Button 
            variant="default" 
            className="bg-[#0f172a] text-white rounded-md hover:bg-[#1e293b]"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-50 px-6 md:px-20 py-2">
        <ul className="flex gap-6 text-gray-700 text-sm">
          <li className="py-2 px-1">
            <Link href="/" className="hover:text-black">Home</Link>
          </li>
          <li className="py-2 px-1">
            <Link href="/about-us" className="hover:text-black">About us</Link>
          </li>
          <li className="py-2 px-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="p-0 h-auto font-normal text-sm text-gray-700 hover:text-black">
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
          <li className="py-2 px-1">
            <Link href="/centers" className="hover:text-black">Our Centers</Link>
          </li>
          <li className="py-2 px-1">
            <Link href="/information" className="hover:text-black">General Information</Link>
          </li>
          <li className="py-2 px-1">
            <Link href="/track" className="hover:text-black">Track Applications</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm mx-6 md:mx-20 my-12 p-8">
          {/* Partner info */}
          <p className="text-gray-800 mb-16">
            Skylane is official partner of Embassy of Morocco in India.
          </p>

          {/* Welcome section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="text-gray-700 mb-1">Welcome to</h2>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-4xl md:text-5xl font-bold">Morocco</h1>
                <Image 
                  src="/morocco-flag.png" 
                  alt="Morocco flag" 
                  width={40} 
                  height={26}
                  className="rounded-sm"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-1">VISA Application Center</h1>
              <p className="text-xl text-gray-700">in India</p>
            </div>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-black border-gray-200 rounded-md mt-6 md:mt-0"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
