'use client';

import { useEffect } from 'react';
import { StepProps } from '../types';

export const CostDataStep = ({ formState, errors, onChange, onNext, onPrevious }: StepProps) => {
  const { costData } = formState;

  useEffect(() => {
    if (!onChange) return;
    
    // Calculate total costs whenever any cost changes
    const totalCosts = Object.values(costData).reduce((sum, cost) => sum + cost, 0);
    const profit = formState.results.totalRevenue - totalCosts;

    onChange({
      results: {
        ...formState.results,
        totalCosts,
        profit,
      },
    }, true);
  }, [costData.maintenanceCosts, costData.insuranceCosts, costData.otherCosts]);

  const handleInputChange = (field: keyof typeof costData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    
    onChange({
      costData: {
        ...costData,
        [field]: parseFloat(e.target.value) || 0,
      },
    }, true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Cost Data</h3>
        <p className="text-sm text-gray-400 mb-6">
          Please provide your annual operating costs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Maintenance Costs (€/year)
          </label>
          <input
            type="number"
            value={costData.maintenanceCosts || ''}
            onChange={handleInputChange('maintenanceCosts')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.maintenanceCosts && (
            <p className="mt-1 text-sm text-red-500">{errors.maintenanceCosts}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Regular maintenance and repair costs
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Insurance Costs (€/year)
          </label>
          <input
            type="number"
            value={costData.insuranceCosts || ''}
            onChange={handleInputChange('insuranceCosts')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.insuranceCosts && (
            <p className="mt-1 text-sm text-red-500">{errors.insuranceCosts}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Insurance premiums for your installation
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Other Costs (€/year)
          </label>
          <input
            type="number"
            value={costData.otherCosts || ''}
            onChange={handleInputChange('otherCosts')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.otherCosts && (
            <p className="mt-1 text-sm text-red-500">{errors.otherCosts}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Additional operational costs
          </p>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-medium text-white mb-4">
          Cost Overview
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Total Revenue</p>
            <p className="text-lg font-semibold text-white">
              {formState.results.totalRevenue.toFixed(2)} €
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Total Costs</p>
            <p className="text-lg font-semibold text-white">
              {formState.results.totalCosts.toFixed(2)} €
            </p>
          </div>
          <div className="h-px bg-gray-700 my-2" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Estimated Annual Profit</p>
            <p className="text-2xl font-semibold text-green-500">
              {formState.results.profit.toFixed(2)} €
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
          View Results
        </button>
      </div>
    </div>
  );
}; 