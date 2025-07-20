'use client'

import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const solutions = [
  {
    icon: '🤖',
    title: 'ASURA AI Assistant',
    description: 'Your virtual building engineer: 24/7 monitoring, optimization, and natural language support.'
  },
  {
    icon: '📈',
    title: 'Predictive Intelligence',
    description: 'Machine learning forecasts for temperature, energy demand, and maintenance with industry-leading accuracy.'
  },
  {
    icon: '⏱️',
    title: 'Real-time Monitoring',
    description: 'Track 47+ data points across your building for instant insights and proactive management.'
  },
  {
    icon: '⚙️',
    title: 'Smart Controls',
    description: 'Automated HVAC and building systems with micro-adjustments every 30 seconds for comfort and savings.'
  },
  {
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Connects with your existing systems and platforms for a unified, future-proof solution.'
  }
];

const products = [
  {
    icon: '💡',
    title: 'Energy Management Platform',
    description: 'Centralized platform for monitoring, controlling, and optimizing all your building’s energy systems.'
  },
  {
    icon: '📊',
    title: 'Smart Monitoring Systems',
    description: 'Advanced sensors and IoT devices for real-time data collection and actionable insights.'
  },
  {
    icon: '🧠',
    title: 'Analytics & AI',
    description: 'Powerful analytics and machine learning to predict, analyze, and optimize building performance.'
  },
  {
    icon: '🔌',
    title: 'API Access',
    description: 'Seamless integration with your existing software and hardware via robust APIs.'
  },
  {
    icon: '💧',
    title: 'Digital Water Management',
    description: 'Intelligent water usage monitoring, leak detection, and automated irrigation for sustainability.'
  }
];

const impactStats = [
  { value: '32%', label: 'Avg. Energy Savings', color: 'text-green-400' },
  { value: '96%', label: 'Comfort Score', color: 'text-blue-400' },
  { value: '45%', label: 'CO₂ Reduction', color: 'text-emerald-400' },
  { value: '24/7', label: 'AI Monitoring', color: 'text-purple-400' },
];

const team = [
  {
    name: 'Faiza Noor',
    role: 'CTO',
    email: 'faiza@zoroenergy.com',
    linkedin: 'https://www.linkedin.com/in/faiza-noor/', // placeholder, update if needed
    image: '/images/team/faiza-noor-cto.jpg',
  },
  {
    name: 'Mythra Varun',
    role: 'CEO',
    email: 'mythra@zoroenergy.com',
    linkedin: 'https://www.linkedin.com/in/vmythravarun/', // placeholder, update if needed
    image: '/images/team/mythra-varun-ceo.JPG',
  },
];

export default function ComingSoonPage() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  if (section === 'products') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
            Explore our suite of intelligent products designed to make your building smarter, greener, and more efficient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {products.map((prod) => (
              <div key={prod.title} className="bg-white/5 rounded-xl p-8 flex flex-col items-center text-center shadow-lg border border-white/10 hover:border-[#3CB371] transition-all">
                <div className="text-5xl mb-4">{prod.icon}</div>
                <h2 className="text-2xl font-semibold text-white mb-2">{prod.title}</h2>
                <p className="text-gray-300">{prod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    );
  }

  if (section === 'about') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About ZORO Energy
          </h1>
          <p className="text-xl text-gray-300 mb-10 text-center max-w-2xl">
            Empowering a sustainable future with intelligent building management. Our mission: make every building smart, efficient, and environmentally friendly through AI-driven technology.
          </p>

          {/* Impact/Results Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full max-w-4xl">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-6 flex flex-col items-center text-center border border-white/10">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div className="mb-12 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden border-4 border-white/10 shadow-lg mb-2">
              <Image src="/images/zoro-team-image.jpg" alt="ZORO Team" width={600} height={300} className="object-cover w-full h-auto" />
            </div>
            <div className="text-gray-400 text-sm">Our core team at ZORO Energy</div>
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-3xl mb-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white/5 rounded-xl p-8 flex flex-col items-center text-center border border-white/10 shadow-lg max-w-xs w-full">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
                  <Image src={member.image} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <div className="text-gray-400 mb-1">{member.role}</div>
                <div className="text-gray-300 text-sm mb-2">{member.email}</div>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="32" height="32" fill="currentColor" className="text-blue-500" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    );
  }

  // Default: Solutions page
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Smart Building Solutions with ASURA
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
          Discover how our AI-driven platform transforms building management through intelligent automation, predictive analytics, and seamless integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-3xl justify-center">
          {solutions.map((sol) => (
            <div key={sol.title} className="bg-white/5 rounded-xl p-8 flex flex-col items-center text-center shadow-lg border border-white/10 hover:border-[#3CB371] transition-all">
              <div className="text-5xl mb-4">{sol.icon}</div>
              <h2 className="text-2xl font-semibold text-white mb-2">{sol.title}</h2>
              <p className="text-gray-300">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 