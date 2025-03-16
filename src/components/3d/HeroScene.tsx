'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import ZLogo from './ZLogo'
import Navigation from '../Navigation'
import ParticleBackground from '../ParticleBackground'

const HeroScene = () => {
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
      <div className="absolute left-0 top-0 w-3/5 h-full">
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
      
      {/* Hero Content - Enterprise Style */}
      <div className="absolute right-0 top-0 w-2/5 h-full flex items-center">
        <div className="text-right pr-20 space-y-8">
          {/* Main Heading with Gradient */}
          <div>
            <h1 className="text-8xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent tracking-tight">
              ZORO
            </h1>
            <h2 className="text-5xl font-light text-[#3CB371] tracking-wide">
              Energy
            </h2>
          </div>

          {/* Tagline with Better Typography */}
          <p className="text-2xl text-white/80 font-light leading-relaxed">
            Empowering Your <br />
            Sustainable Future
          </p>

          {/* Stats Section */}
          <div className="flex justify-end gap-8 mb-8">
            <div className="text-right">
              <div className="text-4xl font-bold text-[#3CB371]">95%</div>
              <div className="text-sm text-white/60">Energy Efficiency</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-[#3CB371]">24/7</div>
              <div className="text-sm text-white/60">Monitoring</div>
            </div>
          </div>

          {/* CTA Button with Modern Style */}
          <button className="
            bg-[#3CB371] text-white px-12 py-4 rounded-lg text-xl
            font-medium transition-all duration-300
            hover:bg-[#45cc80] hover:shadow-lg hover:shadow-[#3CB371]/20
            relative overflow-hidden group
          ">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000">
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroScene 