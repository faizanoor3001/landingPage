'use client'

import React from 'react'
import BrandVideo from '../video/BrandVideo'
import ParticleBackground from '../ParticleBackground'
import Navigation from '../Navigation'

interface HeroSceneVideoProps {
  className?: string
}

const HeroSceneVideo: React.FC<HeroSceneVideoProps> = ({ className = '' }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`relative min-h-screen flex items-center ${className}`}>
      {/* Background with particles */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Energy Future
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Sustainable solutions for a brighter tomorrow. Join the energy revolution with ZORO.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#3CB371] hover:bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>

          {/* Right Content - Video */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px] bg-black/20 backdrop-blur-sm rounded-2xl p-4">
              <BrandVideo
                videoSrc="/videos/brand-video.mp4"
                placeholderSrc="/images/brand-video-placeholder.jpeg"
                className="w-full h-auto shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSceneVideo 