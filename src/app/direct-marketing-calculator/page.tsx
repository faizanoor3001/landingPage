import { DirectMarketingForm } from '@/components/DirectMarketing/components/Form';

export default function DirectMarketingCalculator() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">
            Direct Marketing Profit Calculator
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Calculate your potential profit from direct marketing your renewable energy.
          </p>
        </div>
        <DirectMarketingForm />
      </div>
    </div>
  );
} 