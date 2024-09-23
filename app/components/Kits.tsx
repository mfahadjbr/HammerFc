'use client'

import { useState, useEffect } from 'react'

const images = [
  '/kit.jpg?height=500&width=600&text=Match+Day',
  '/kit1.jpg?height=500&width=600&text=Match+Day',
  '/kit2.jpg?height=500&width=600&text=Match+Day'
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    },4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className='mt-[15px]'>
        <h1 className='text-center text-4xl text-gray-600 font-semibold font-serif'>Kits</h1>
    </div>
    <div className='flex justify-center items-center'>
    <section className="relative  h-[620px] w-[900px] m-2 overflow-hidden rounded-2xl object-fill shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 object-fill ${
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
    </div>
    </>
  )
}