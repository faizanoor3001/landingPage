'use client'

import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import { benefits, features } from '../data'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import PageLayout from '@/components/layouts/PageLayout'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { DirectMarketingModal } from '@/components/DirectMarketing/components/Modal'

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
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-black/20">
        <Suspense fallback={
          <div className="min-h-[80vh] flex items-center justify-center bg-black/20">
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
                Transform Your Building's Sustainability
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the power of intelligent building management with our comprehensive suite of features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="enterprise-card p-8">
                  <div className="flex flex-col items-center text-center">
                    {benefit.metric && (
                      <AnimatedCounter
                        value={benefit.metric.value}
                        unit={benefit.metric.unit}
                        prefix={benefit.metric.prefix}
                      />
                    )}
                    <h3 className="text-xl font-semibold mb-4 mt-4">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
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
                Smart Building Management Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Transform your building with our comprehensive suite of intelligent management solutions.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-16">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`flex items-start gap-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2">
                    <div className={`enterprise-card p-8 ${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'}`}>
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-white/70 mb-6">{feature.description}</p>
                      <ul className="space-y-3 mb-8">
                        {feature.bulletPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#3CB371] mr-2">•</span>
                            <span className="text-white/70">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {feature.title === "Integration Capabilities" ? (
                        <Link
                          href="/direct-marketing-calculator"
                          className="inline-block bg-[#3CB371] hover:bg-[#2D8A5F] text-white px-6 py-2 rounded-lg transition-all duration-300"
                        >
                          Calculate Profit
                        </Link>
                      ) : (
                        <button className="bg-[#3CB371] hover:bg-[#2D8A5F] text-white px-6 py-2 rounded-lg transition-all duration-300">
                          Learn More
                        </button>
                      )}
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
        <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-900/60 to-black/60 scroll-mt-20">
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

      <DirectMarketingModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </PageLayout>
  )
} 