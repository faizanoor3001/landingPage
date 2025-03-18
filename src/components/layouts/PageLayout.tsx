'use client'

import React from 'react'
import Navigation from '../Navigation'
import ParticleBackground from '../ParticleBackground'
import Link from 'next/link'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background with particles */}
      <div className="absolute inset-0 opacity-50">
        <ParticleBackground />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#1E293B] mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/coming-soon?section=mission" className="text-white/70 hover:text-white transition-colors">Mission</Link></li>
                <li><Link href="/coming-soon?section=career" className="text-white/70 hover:text-white transition-colors">Career</Link></li>
                <li><Link href="/coming-soon?section=team" className="text-white/70 hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/coming-soon?section=news" className="text-white/70 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li><Link href="/coming-soon?section=energy-platform" className="text-white/70 hover:text-white transition-colors">Energy Platform</Link></li>
                <li><Link href="/coming-soon?section=smart-monitoring" className="text-white/70 hover:text-white transition-colors">Smart Monitoring</Link></li>
                <li><Link href="/coming-soon?section=analytics-and-ai" className="text-white/70 hover:text-white transition-colors">Analytics & AI</Link></li>
                <li><Link href="/coming-soon?section=api-access" className="text-white/70 hover:text-white transition-colors">API Access</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><Link href="/coming-soon?section=documentation" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/coming-soon?section=systems" className="text-white/70 hover:text-white transition-colors">Systems</Link></li>
                <li><Link href="/coming-soon?section=system-status" className="text-white/70 hover:text-white transition-colors">System Status</Link></li>
                <li><Link href="/coming-soon?section=help-center" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="/coming-soon?section=terms-and-conditions" className="text-white/70 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/coming-soon?section=privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/coming-soon?section=service-level-agreement" className="text-white/70 hover:text-white transition-colors">Service Level Agreement</Link></li>
                <li><Link href="/coming-soon?section=trust-commitment" className="text-white/70 hover:text-white transition-colors">Trust Commitment</Link></li>
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
                  <Link href="https://www.linkedin.com/company/zoroenergy/" className="text-white/70 hover:text-[#3CB371] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                  <Link href="https://x.com/ZoroEnergy" className="text-white/70 hover:text-[#3CB371] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/zoroenergy/" className="text-white/70 hover:text-[#3CB371] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/50 text-sm">
                © 2025 ZORO Energy. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/coming-soon?section=imprint" className="text-white/50 hover:text-white text-sm transition-colors">
                  Imprint
                </Link>
                <Link href="/coming-soon?section=sitemap" className="text-white/50 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 