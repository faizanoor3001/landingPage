'use client';

import { DirectMarketingForm } from '@/components/DirectMarketing/components/Form';
import { Navbar } from '@/components/Navigation/Navbar';
import { motion } from 'framer-motion';

export default function DirectMarketingCalculator() {
  return (
    <div className="min-h-screen bg-black/20">
      <Navbar />
      
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-[#3CB371]/10 text-[#3CB371] px-4 py-2 rounded-full inline-block mb-6">
                Calculate Your Profit
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Direct Marketing Profit Calculator
              </h1>
              <p className="mt-2 text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate your potential profit from direct marketing your renewable energy and discover how ZoroEnergy can optimize your returns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Storage Payback Section */}
        <section className="relative py-20 bg-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  When Does an Electricity Storage System Pay for Itself?
                </h2>
                <div className="prose prose-lg prose-invert">
                  <p className="text-gray-300">
                    A common question when investing in an electricity storage system is: When will it start to pay off? In simple terms, this means the point at which the savings on your electricity bill match or exceed the initial investment.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Typically, the payback period for battery storage systems ranges between 5 to 10 years. However, the exact timeline can vary depending on factors such as upfront costs (after applying any available subsidies), your energy consumption patterns, and savings generated from increased self-consumption, reduced grid dependence, and any feed-in tariffs for excess solar power.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">How We Help Speed Up Your ROI</h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#3CB371] rounded-lg flex items-center justify-center group-hover:bg-[#2D8A5F] transition-colors duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">ZoroCore</h4>
                      <p className="text-gray-300">AI-powered energy manager that optimizes your home's energy flow for maximum efficiency.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#3CB371] rounded-lg flex items-center justify-center group-hover:bg-[#2D8A5F] transition-colors duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">ZoroFlex</h4>
                      <p className="text-gray-300">Dynamic electricity tariff that connects your system to real-time market prices.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Effectiveness Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Calculation Example: How Cost-Effective Is Optimizing Energy Storage?
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-300">
                  See how different setups compare and discover the potential savings with ZoroEnergy's optimization.
                </p>
              </div>
            </motion.div>
            
            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Grid Only",
                  consumption: "4,500 kWh",
                  cost: "€1,575/year",
                  savings: "€0/year",
                  highlight: false
                },
                {
                  title: "Solar Only",
                  consumption: "30% Self-Consumption",
                  cost: "€933.39/year",
                  savings: "€641.61/year",
                  highlight: false
                },
                {
                  title: "Solar + Battery",
                  consumption: "80% Self-Consumption",
                  cost: "€459.54/year",
                  savings: "€1,115.46/year",
                  highlight: false
                },
                {
                  title: "With ZoroEnergy",
                  consumption: "90% Optimization",
                  cost: "€234.54/year",
                  savings: "€1,340.46/year",
                  highlight: true
                }
              ].map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-xl p-6 ${
                    scenario.highlight 
                      ? 'bg-[#3CB371] hover:bg-[#2D8A5F]' 
                      : 'bg-white/5'
                  } transition-all duration-300`}
                >
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    {scenario.title}
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      Consumption: {scenario.consumption}
                    </p>
                    <p className="text-gray-300">
                      Annual Cost: {scenario.cost}
                    </p>
                    <p className={`text-lg font-semibold ${scenario.highlight ? 'text-white' : 'text-[#3CB371]'}`}>
                      Savings: {scenario.savings}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Form Section */}
        <section className="relative py-20 bg-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <DirectMarketingForm />
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Maximize What You Already Have
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300">
                  ZoroEnergy doesn't sell solar panels — we make your existing setup smarter. With ZoroCore intelligently managing your energy flows, and ZoroFlex giving you access to the lowest real-time grid rates, you can unlock massive savings from the solar and storage system you already have.
                </p>
                <p className="text-gray-300 mt-4">
                  With this level of efficiency, a typical household setup worth €20,000 could pay for itself in roughly 15 years. Considering most systems last 20–30 years, that's 5–15 years of near-zero electricity costs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 