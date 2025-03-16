'use client'

import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            ZORO
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-white/80 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/products" className="text-white/80 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors">
              EN
            </button>
            <button className="bg-[#3CB371] text-white px-4 py-2 rounded-lg hover:bg-[#2D8A5F] transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 