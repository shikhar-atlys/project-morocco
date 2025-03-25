"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarContent, NavbarItem, Link as NextUILink, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
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
              src="/skylane-logo.png" 
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
              src="/morocco-flag.png" 
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
            variant="bordered"
            className="text-black border-gray-200 rounded-md"
            startContent={<MapPin size={18} />}
          >
            Find a center
          </Button>
          
          <Button 
            color="primary" 
            className="bg-[#0f172a] text-white rounded-md"
            startContent={<Calendar size={18} />}
          >
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <Navbar className="bg-gray-50 px-6 md:px-20" maxWidth="full">
        <NavbarContent className="gap-6 text-gray-700 text-sm">
          <NavbarItem>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about-us" className="hover:text-black">
              About us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="light" 
                  className="p-0 bg-transparent min-w-0 h-auto font-normal text-sm text-gray-700 hover:text-black"
                  endContent={<ChevronDown size={14} />}
                >
                  Apply for VISAs
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Visa application options">
                <DropdownItem key="tourist">Tourist Visa</DropdownItem>
                <DropdownItem key="business">Business Visa</DropdownItem>
                <DropdownItem key="student">Student Visa</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link href="/centers" className="hover:text-black">
              Our Centers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/information" className="hover:text-black">
              General Information
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/track" className="hover:text-black">
              Track Applications
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

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
              className="bg-white text-black border border-gray-200 rounded-md mt-6 md:mt-0"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
