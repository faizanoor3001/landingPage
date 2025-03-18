'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import PageLayout from '@/components/layouts/PageLayout'

export default function ComingSoonPage() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const section = searchParams.get('section') || 'this section'
  
  // Format section name for display
  const formatSectionName = (sectionName: string) => {
    // Handle the case where sectionName might be undefined
    if (!sectionName) return 'This Section'
    
    return sectionName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Debug log for section parameter
  useEffect(() => {
    console.log('Current section:', section)
    console.log('Current pathname:', pathname)
    console.log('Search params:', Object.fromEntries(searchParams.entries()))
  }, [section, pathname, searchParams])

  return (
    <PageLayout>
      <div className="container mx-auto px-4 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="bg-[#3CB371]/10 text-[#3CB371] px-4 py-2 rounded-full inline-block mb-6">
              Under Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {formatSectionName(section)} Coming Soon
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're working hard to bring you this content. Stay tuned for updates!
            </p>
            <div className="space-y-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Want to know more about {section}?
                </h2>
                <p className="text-gray-300 mb-4">
                  Our team would be happy to provide you with detailed information and answer any questions you might have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-[#3CB371] hover:bg-[#2D8A5F] text-white px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                    onClick={() => {
                      // Track contact click
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'contact_click', {
                          section_interest: section,
                          source: 'coming_soon_page'
                        })
                      }
                    }}
                  >
                    Contact Our Team
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/" 
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-200"
                    onClick={() => {
                      // Track home return click
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'return_home', {
                          section_interest: section,
                          source: 'coming_soon_page'
                        })
                      }
                    }}
                  >
                    Back to Home
                  </Link>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                Subscribe to our newsletter to get notified when this section launches
                <Link 
                  href="/#newsletter" 
                  className="text-[#3CB371] hover:text-[#2D8A5F] ml-2 transition-colors"
                  onClick={() => {
                    // Track newsletter click
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'newsletter_click', {
                        section_interest: section,
                        source: 'coming_soon_page'
                      })
                    }
                  }}
                >
                  Subscribe here →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 