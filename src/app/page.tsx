'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { benefits, features } from '../data'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import PageLayout from '@/components/layouts/PageLayout'

// Keep both versions available
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
})

const HeroSceneVideo = dynamic(() => import('@/components/hero/HeroSceneVideo'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  )
})

// Set this to true to use the 3D version, false to use the video version
const USE_3D_VERSION = false

export default function Home() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black/80">
        <Suspense fallback={
          <div className="min-h-[80vh] flex items-center justify-center bg-black/80">
            <div className="text-white text-2xl">Loading...</div>
          </div>
        }>
          {USE_3D_VERSION ? <HeroScene /> : <HeroSceneVideo />}
        </Suspense>
        
        {/* Benefits Section */}
        <section className="relative py-24 mt-0">
          <div className="section-overlay" />
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Empowering Your Energy Future
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover how ZORO Energy transforms your renewable energy management with advanced technology and intelligent solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="enterprise-card p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-[#3CB371]/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 bg-white/5">
          <div className="section-overlay" />
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Comprehensive Energy Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our platform provides end-to-end solutions for monitoring, optimizing, and managing your renewable energy systems.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-24">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`flex items-center gap-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2">
                    <div className={`enterprise-card p-8 ${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'}`}>
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-white/70 mb-6">{feature.description}</p>
                      <button className="bg-[#3CB371] hover:bg-[#2D8A5F] text-white px-6 py-2 rounded-lg transition-all duration-300">
                        Get in Touch
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className={`aspect-square rounded-2xl bg-gradient-to-br from-[#3CB371]/20 to-transparent backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center ${index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'}`}>
                      <div className="text-6xl text-[#3CB371]/40 font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-center mb-8">
                Ready to transform your energy future? Fill out the form below and we'll get back to you shortly.
              </p>
              <ContactForm variant="secondary" />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 