'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { benefits, features } from '../data'
import Link from 'next/link'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0F172A]" />
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroScene />
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
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

      {/* Footer Section */}
      <footer className="relative bg-[#1E293B] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/mission" className="text-white/70 hover:text-white transition-colors">Mission</Link></li>
                <li><Link href="/career" className="text-white/70 hover:text-white transition-colors">Career</Link></li>
                <li><Link href="/team" className="text-white/70 hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/news" className="text-white/70 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li><Link href="/platform" className="text-white/70 hover:text-white transition-colors">Energy Platform</Link></li>
                <li><Link href="/monitoring" className="text-white/70 hover:text-white transition-colors">Smart Monitoring</Link></li>
                <li><Link href="/analytics" className="text-white/70 hover:text-white transition-colors">Analytics & AI</Link></li>
                <li><Link href="/api" className="text-white/70 hover:text-white transition-colors">API Access</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><Link href="/documentation" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/systems" className="text-white/70 hover:text-white transition-colors">Systems</Link></li>
                <li><Link href="/status" className="text-white/70 hover:text-white transition-colors">System Status</Link></li>
                <li><Link href="/help" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/sla" className="text-white/70 hover:text-white transition-colors">Service Level Agreement</Link></li>
                <li><Link href="/trust" className="text-white/70 hover:text-white transition-colors">Trust Commitment</Link></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="text-white/70 mb-4">Would you like to be the first to know about new products and solutions?</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#3CB371] text-white"
                />
                <button className="w-full bg-[#3CB371] text-white px-6 py-2 rounded-lg hover:bg-[#2D8A5F] transition-colors">
                  Newsletter subscription
                </button>
              </div>
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Social</h4>
                <div className="flex space-x-4">
                  <Link href="https://linkedin.com" className="text-white/70 hover:text-[#3CB371] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                  <Link href="https://twitter.com" className="text-white/70 hover:text-[#3CB371] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/50 text-sm">
                © 2024 ZORO Energy. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/imprint" className="text-white/50 hover:text-white text-sm transition-colors">
                  Imprint
                </Link>
                <Link href="/sitemap" className="text-white/50 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 