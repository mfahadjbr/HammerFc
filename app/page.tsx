'use client'

import { useState, useEffect } from 'react'
import Kits from './components/Kits'
const images = [
  '/1.png?height=500&width=1600&text=Match+Day',
  '/22.jpg?height=500&width=600&text=Match+Day'
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    },2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <section className="relative h-[500px] m-2 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity object-cover duration-1000 shadow-2xl ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'fill',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </section>
    <Kits/>
    </>
  )
}