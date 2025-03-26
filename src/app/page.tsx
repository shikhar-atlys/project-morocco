"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MapPin, Calendar, ChevronDown, FileText, Notebook, Building, Castle, MountainSnow, UtensilsCrossed, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

// Carousel data configuration
const carouselItems = [
  {
    id: 0,
    title: "Chefchaouen",
    description: "Known as the \"Blue Pearl of Morocco,\" Chefchaouen is famous for its striking blue-washed buildings nestled in the Rif Mountains. This picturesque town offers a peaceful atmosphere, stunning mountain views, and a unique blend of Moroccan and Andalusian culture.",
    imageSrc: "/home/carousal-frame-1-ben.svg",
    imageAlt: "Chefchaouen",
  },
  {
    id: 1,
    title: "Marrakech",
    description: "Marrakech, the \"Red City,\" is a vibrant cultural hub featuring magnificent palaces, bustling souks, and the famous Jemaa el-Fnaa square. With its historic medina, stunning gardens, and rich culinary scene, Marrakech offers visitors an unforgettable immersion into Moroccan culture.",
    imageSrc: "/home/carousal-frame-2-chef.svg",
    imageAlt: "Marrakech",
  },
  {
    id: 2,
    title: "Fes",
    description: "Fes is one of Morocco's oldest and most historically rich cities, famous for its medieval architecture and its status as the cultural and spiritual heart of the country. The Fes el-Bali medina is a UNESCO World Heritage site, & the city is home to the world's oldest university, Al Quaraouiyine.",
    imageSrc: "/home/carousal-frame-3-res.svg",
    imageAlt: "Fes",
  },
  {
    id: 3,
    title: "Sahara Desert",
    description: "A trip to the Sahara Desert is an unforgettable experience, and Merzouga is one of the best spots to explore it. You can take camel treks into the dunes, enjoy stargazing in the vast desert, & visit Berber villages. The experience of staying overnight in a desert camp is a highlight of the trip.",
    imageSrc: "/home/carousal-frame-4-sahara.svg",
    imageAlt: "Sahara Desert",
  },
  {
    id: 4,
    title: "Atlas Mountains",
    description: "The Atlas Mountains are a stunning range that stretches across Morocco, providing dramatic landscapes, traditional Berber villages, and opportunities for hiking. A visit to Toubkal National Park, home to Mount Toubkal is highly recommended for adventure lovers.",
    imageSrc: "/home/carousal-frame-5-atlas.svg",
    imageAlt: "Atlas Mountains",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Initial selection
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (currentSlide === carouselItems.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, currentSlide]);

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
        <div className="relative rounded-lg overflow-hidden mx-auto">
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
          
          <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 z-20 text-white hero-overlay">
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
      <div className="py-16 px-6 md:px-20">
        <section className="border-2 border-[rgba(247,249,248,1)] rounded-[20px]">
        
          <div className="bg-[#FBFCFD] py-10">
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
          </div>

          {/* Application Steps */}
          <div className="mt-16 relative flex flex-col lg:flex-row justify-between items-center pb-10 max-w-6xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-8 left-[60px] right-[60px] h-[1px] bg-gray-200 hidden lg:block"></div>
            
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

      {/* Why visit Morocco Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why visit morocco 🇲🇦</h2>
        
        <div className="flex flex-row justify-between">

          <div className="flex flex-col gap-15 items-start m-10">
            <div className="flex items-center">
              <div className="min-w-[40px]">
                <Castle width={28} height={28} />
              </div>
              <h3 className="text-4xl md:text-4xl font-bold">RICH CULTURAL HERITAGE</h3>
            </div>

            <div className="rounded-full overflow-hidden">
              <Image
                src="/home/diverse-landscapes.svg" 
                alt="Morocco mountains with snow"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center">
              <div className="min-w-[40px]">
                <UtensilsCrossed width={28} height={28} />
              </div>
              <h3 className="text-4xl md:text-4xl font-bold">CULINARY DELIGHTS</h3>
            </div>

            <div className="rounded-full overflow-hidden">
              <Image
                src="/home/water-sport.svg" 
                alt="Water sports in Morocco"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Diverse Landscapes */}
          <div className="flex flex-col items-end gap-15">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/home/rich-cultural-heritage.svg" 
                alt="Morocco coastal cliffs"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-6">
              <h3 className="text-4xl md:text-4xl font-bold">DIVERSE LANDSCAPES</h3>
              <MountainSnow width={28} height={28} />
            </div>

            <div className="rounded-full overflow-hidden">
              <Image
                src="/home/culinary-delights.svg" 
                alt="Moroccan traditional food"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-6">
              <h3 className="text-4xl md:text-4xl font-bold">WATER SPORTS</h3>
              <div className="min-w-[40px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H4C5.06087 12 6.07828 12.4214 6.82843 13.1716C7.57857 13.9217 8 14.9391 8 16C8 17.0609 8.42143 18.0783 9.17157 18.8284C9.92172 19.5786 10.9391 20 12 20C13.0609 20 14.0783 19.5786 14.8284 18.8284C15.5786 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L18 8L16 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10L6 8L8 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 5.5L13.5 10.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <Image src="/morocco-flag.svg" alt="Morocco flag" width={36} height={24} />
            <h2 className="text-5xl md:text-5xl font-extrabold">Morocco</h2>
            <div className="text-lg md:text-lg font-bold text-[#64748B]">The Land of Light</div>
          </div>
          <div className="flex flex-wrap max-w-[600px] text-[14px] text-[#0F172A]">
            <p>Morocco, often referred to as the &quot;Land of Light,&quot; offers a mesmerizing blend of history, culture, and natural beauty that captivates travelers from around the world.</p>
          </div>
        </div>
        
        
        <div className="mt-8">
          <Carousel 
            className="w-full" 
            setApi={setApi}
          >
            <CarouselContent>
              {carouselItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-full">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    <Image 
                      src={item.imageSrc} 
                      alt={item.imageAlt} 
                      width={1200} 
                      height={600}
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm" 
                         style={{ 
                           background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -10.51%, rgba(0, 0, 0, 0.4) 100%)',
                           backdropFilter: 'blur(52px)'
                         }}>
                      <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm max-w-3xl">
                        {item.description}
                      </p>
                      <div className="flex mt-3 items-center justify-between">
                        <div className="flex">
                          {carouselItems.map((dot) => (
                            <span 
                              key={dot.id}
                              className={`h-1.5 w-1.5 rounded-full mx-0.5 ${currentSlide === dot.id ? "bg-white" : "bg-white/20"}`}
                            />
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              if (currentSlide === 0) {
                                api?.scrollTo(carouselItems.length - 1);
                              } else {
                                api?.scrollPrev();
                              }
                            }}
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 border-0 text-white backdrop-blur-sm hover:bg-white/30"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button 
                            onClick={() => {
                              if (currentSlide === carouselItems.length - 1) {
                                api?.scrollTo(0);
                              } else {
                                api?.scrollNext();
                              }
                            }}
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 border-0 text-white backdrop-blur-sm hover:bg-white/30"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
