'use client'

import React from 'react'
import Link from 'next/link'
import { contactInfo } from '@/config/contact'
import PageLayout from '@/components/layouts/PageLayout'

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.isEmailAvailable ? (
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#3CB371] hover:text-[#2D8A5F] transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    Email contact information will be available soon.
                  </p>
                </div>
              )}
              
              {contactInfo.isPhoneAvailable ? (
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-[#3CB371] hover:text-[#2D8A5F] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    Phone contact information will be available soon.
                  </p>
                </div>
              )}

              {contactInfo.isBusinessHoursAvailable ? (
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Business Hours</h3>
                  <div className="space-y-2">
                    {contactInfo.businessHours.map((schedule, index) => (
                      <p 
                        key={index} 
                        className={`text-gray-300 ${!schedule.isOpen && 'text-gray-500'}`}
                      >
                        {schedule.day}: {schedule.hours}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    Business hours information will be available soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            <p className="text-gray-300 mb-8">
              Have a specific question or need detailed information? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <Link 
              href="/#contact-section" 
              className="inline-block bg-[#3CB371] hover:bg-[#2D8A5F] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 