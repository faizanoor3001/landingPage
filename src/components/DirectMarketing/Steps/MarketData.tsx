'use client';

import { StepProps } from '../types';

export const MarketDataStep = ({ formState, errors, onChange, onNext, onPrevious }: StepProps) => {
  const { marketData, installationData } = formState;

  const handleInputChange = (field: keyof typeof marketData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    
    onChange({
      marketData: {
        ...marketData,
        [field]: parseFloat(e.target.value) || 0,
      },
    }, true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Market Data</h3>
        <p className="text-sm text-gray-400 mb-6">
          Please provide market-related values.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Direct Marketing Fee (€/MWh)
          </label>
          <input
            type="number"
            value={marketData.directMarketingFee || ''}
            onChange={handleInputChange('directMarketingFee')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.directMarketingFee && (
            <p className="mt-1 text-sm text-red-500">{errors.directMarketingFee}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Fee charged by the direct marketer
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Market Value (€/MWh)
          </label>
          <input
            type="number"
            value={marketData.marketValue || ''}
            onChange={handleInputChange('marketValue')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.marketValue && (
            <p className="mt-1 text-sm text-red-500">{errors.marketValue}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Current market value for your energy type
          </p>
        </div>

        {installationData.marketingForm === 'DirectMarketingWithFunding' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Market Premium (€/MWh)
            </label>
            <input
              type="number"
              value={marketData.marketPremium || ''}
              onChange={handleInputChange('marketPremium')}
              step="0.01"
              min="0"
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
            />
            {errors?.marketPremium && (
              <p className="mt-1 text-sm text-red-500">{errors.marketPremium}</p>
            )}
            <p className="mt-1 text-xs text-gray-400">
              EEG market premium for your installation
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Self-Consumption Savings (€/MWh)
          </label>
          <input
            type="number"
            value={marketData.selfConsumptionSavings || ''}
            onChange={handleInputChange('selfConsumptionSavings')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.selfConsumptionSavings && (
            <p className="mt-1 text-sm text-red-500">{errors.selfConsumptionSavings}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Savings per MWh from self-consumed energy
          </p>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-medium text-white mb-4">
          Estimated Annual Revenue
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-300">Grid Feed-in Revenue</p>
            <p className="text-2xl font-semibold text-white">
              {((installationData.annualProduction - installationData.absoluteSelfConsumption) / 1000 * 
                (marketData.marketValue + 
                 (installationData.marketingForm === 'DirectMarketingWithFunding' ? marketData.marketPremium : 0) -
                 marketData.directMarketingFee)).toFixed(2)} €
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Self-Consumption Savings</p>
            <p className="text-2xl font-semibold text-white">
              {((installationData.absoluteSelfConsumption / 1000) * marketData.selfConsumptionSavings).toFixed(2)} €
            </p>
          </div>
          <div className="col-span-2">
            <div className="h-px bg-gray-700 my-4" />
            <p className="text-sm text-gray-300">Total Revenue (before costs)</p>
            <p className="text-2xl font-semibold text-green-500">
              {formState.results.totalRevenue.toFixed(2)} €
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}; 