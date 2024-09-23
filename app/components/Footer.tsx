import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Club Name */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hammers%20white-RUZcWXCIuZBWpGHsOEPGNo1XOrcg67.webp"
                alt="Hammers Football Club Logo"
                width={100}
                height={50}
                className="mr-2"
              />
              <div>
                <h2 className="text-xl font-bold">HAMMERS</h2>
                <p className="text-sm">FOOTBALL CLUB</p>
              </div>
            </div>
          </div>

          {/* Contact Info and Social Media */}
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
            <p className="mb-2">hammersfootballclub.com</p>
            <p className="mb-2">+923096565190</p>
            <p className="mb-2">+923035883129</p>
          </div>

          {/* Copyright and Safety Policies */}
          <div className="w-full md:w-auto text-center md:text-right">
            <p className="text-sm">
              © 2024 Hammers Football Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}