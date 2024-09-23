'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="bg-gray-800 text-white text-[25px] font-semibold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hammers%20white-RUZcWXCIuZBWpGHsOEPGNo1XOrcg67.webp"
              alt="Hammer Football Club Islamabad Logo"
              width={70}
              height={50}
              className="mr-2"
            />
            <span className="sr-only">Hammer FC</span>
          </Link>

          <nav className="hidden md:flex justify-center flex-grow">
            <ul className="flex space-x-8">
              <li><Link href="/" className=" transition-colors">Home</Link></li>
              <li><Link href="/about" className=" transition-colors">About Us</Link></li>
              <li><Link href="/squad" className="transition-colors">Squad</Link></li>
            </ul>
          </nav>

          <Button
            variant="ghost"
            className="md:hidden text-gray-800 hover:text-gray-600"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[#1a76d2] shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold">Menu</h2>
            <Button variant="ghost" onClick={toggleSidebar}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex-grow">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link href="/" className="block py-2 px-4  transition-colors rounded-md" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-4  transition-colors rounded-md" onClick={toggleSidebar}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/squad" className="block py-2 px-4  transition-colors rounded-md" onClick={toggleSidebar}>
                  Squad
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  )
}