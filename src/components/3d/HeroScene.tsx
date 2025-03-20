'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Navigation from '../Navigation'
import ParticleBackground from '../ParticleBackground'

const HeroScene = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const contactSection = document.getElementById('contact-section')
      contactSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isMounted) {
    return (
      <div className="h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#0F172A]">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/energy-background.mp4" type="video/mp4" />
        </video>
      </div>

      <Navigation />
      
      {/* 3D Scene Container */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Environment preset="city" />
            <ZLogo position={[-2, 0, 0]} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Hero Content - Right Side */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div className="max-w-xl w-full px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Energy Future
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Sustainable solutions for a brighter tomorrow. Join the energy revolution with ZORO.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#3CB371] text-white px-12 py-4 rounded-lg text-xl
                font-medium transition-all duration-300 hover:bg-[#45cc80] 
                hover:shadow-lg hover:shadow-[#3CB371]/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000">
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroScene 