'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', variant = 'primary' }) => {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    preferredContact: 'email',
    bestTimeToContact: '',
    message: '',
    // Advanced fields
    industry: '',
    timeframe: '',
    existingSetup: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Generate time slots from 9 AM to 5 PM in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date(2024, 0, 1, hour, minute)
        const timeString = time.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        })
        slots.push({
          value: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
          label: timeString
        })
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        preferredContact: 'email',
        bestTimeToContact: '',
        message: '',
        // Advanced fields
        industry: '',
        timeframe: '',
        existingSetup: '',
      })
      setShowAdvanced(false)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to submit form. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const buttonStyles = variant === 'primary'
    ? 'bg-[#3CB371] hover:bg-[#2D6A4F] text-white'
    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Basic Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Customer Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="your@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-white mb-1">
              Job Title *
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="Your role"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="Include country code (e.g., +1 234 567 8900)"
            />
          </div>
          <div>
            <label htmlFor="bestTimeToContact" className="block text-sm font-medium text-white mb-1">
              Best Time to Contact *
            </label>
            <select
              id="bestTimeToContact"
              name="bestTimeToContact"
              value={formData.bestTimeToContact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent [&>option]:bg-[#1a1a1a] [&>option]:text-white"
            >
              <option value="" className="bg-[#1a1a1a] text-white">Select preferred time</option>
              {timeSlots.map(slot => (
                <option key={slot.value} value={slot.value} className="bg-[#1a1a1a] text-white">
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Preferred Contact Method *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === 'email'}
                  onChange={handleChange}
                  className="form-radio text-[#3CB371] bg-white/5 border-white/10 focus:ring-[#3CB371]"
                />
                <span className="text-white">Email</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === 'phone'}
                  onChange={handleChange}
                  className="form-radio text-[#3CB371] bg-white/5 border-white/10 focus:ring-[#3CB371]"
                />
                <span className="text-white">Phone</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Project Details / Inquiry *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
            placeholder="Please describe your project requirements or inquiry"
          />
        </div>
      </div>

      {/* Advanced Section Toggle */}
      <button
        type="button"
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="w-full text-center text-sm text-white/70 hover:text-white flex items-center justify-center gap-2 py-2"
      >
        <span>{showAdvanced ? 'Hide additional details' : 'Provide more details (optional)'}</span>
        <svg
          className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Advanced Section */}
      {showAdvanced && (
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-white mb-1">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
                placeholder="Your industry"
              />
            </div>
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-white mb-1">
                Implementation Timeframe
              </label>
              <input
                type="text"
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
                placeholder="Expected implementation timeline"
              />
            </div>
          </div>

          <div>
            <label htmlFor="existingSetup" className="block text-sm font-medium text-white mb-1">
              Existing Energy Setup
            </label>
            <input
              type="text"
              id="existingSetup"
              name="existingSetup"
              value={formData.existingSetup}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
              placeholder="Describe your current energy setup"
            />
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="text-red-400 text-sm">{errorMessage}</div>
      )}

      {status === 'success' && (
        <div className="text-green-400 text-sm">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
          status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
        } ${buttonStyles}`}
      >
        {status === 'loading' ? 'Sending...' : 'Get in Touch'}
      </button>
    </form>
  )
}

export default ContactForm 