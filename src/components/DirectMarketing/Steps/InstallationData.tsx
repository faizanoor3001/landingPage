'use client';

import { StepProps } from '../types';

export const InstallationDataStep = ({ formState, errors, onChange, onNext, onPrevious }: StepProps) => {
  const { installationData } = formState;

  const handleInputChange = (field: keyof typeof installationData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!onChange) return;

    const value = e.target.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value;
    onChange({
      installationData: {
        ...installationData,
        [field]: value,
      },
    });
  };

  // Update relative self-consumption when absolute changes and vice versa
  const handleSelfConsumptionChange = (type: 'absolute' | 'relative') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!onChange) return;
    const value = parseFloat(e.target.value) || 0;

    if (type === 'absolute') {
      const relative = installationData.annualProduction > 0 
        ? (value / installationData.annualProduction) * 100 
        : 0;
      onChange({
        installationData: {
          ...installationData,
          absoluteSelfConsumption: value,
          relativeSelfConsumption: relative,
        },
      });
    } else {
      const absolute = (value * installationData.annualProduction) / 100;
      onChange({
        installationData: {
          ...installationData,
          absoluteSelfConsumption: absolute,
          relativeSelfConsumption: value,
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Installation Details</h3>
        <p className="text-sm text-gray-400 mb-6">
          Please provide the basic details about your installation.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Installation Type
          </label>
          <select
            value={installationData.type}
            onChange={handleInputChange('type')}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select type</option>
            <option value="pv">Solar</option>
            <option value="wind">Wind</option>
            <option value="kwk">CHP</option>
          </select>
          {errors?.type && (
            <p className="mt-1 text-sm text-red-500">{errors.type}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Marketing Form
          </label>
          <select
            value={installationData.marketingForm}
            onChange={handleInputChange('marketingForm')}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select form</option>
            <option value="DirectMarketingWithFunding">
              EEG Direct Marketing (Market Premium Model)
            </option>
            <option value="DirectMarketingWithoutFunding">
              Other Direct Marketing (No EEG Compensation)
            </option>
            <option value="PostEEG">
              Post-EEG Direct Marketing
            </option>
          </select>
          {errors?.marketingForm && (
            <p className="mt-1 text-sm text-red-500">{errors.marketingForm}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Nominal Power (kWp)
          </label>
          <input
            type="number"
            value={installationData.nominalPower || ''}
            onChange={handleInputChange('nominalPower')}
            step="0.01"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.nominalPower && (
            <p className="mt-1 text-sm text-red-500">{errors.nominalPower}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Annual Production (kWh)
          </label>
          <input
            type="number"
            value={installationData.annualProduction || ''}
            onChange={handleInputChange('annualProduction')}
            step="1"
            min="0"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
          />
          {errors?.annualProduction && (
            <p className="mt-1 text-sm text-red-500">{errors.annualProduction}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Self-Consumption
          </label>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="number"
                value={installationData.absoluteSelfConsumption || ''}
                onChange={handleSelfConsumptionChange('absolute')}
                placeholder="kWh"
                step="1"
                min="0"
                max={installationData.annualProduction}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
              />
              <p className="mt-1 text-xs text-gray-400">kWh</p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                value={installationData.relativeSelfConsumption || ''}
                onChange={handleSelfConsumptionChange('relative')}
                placeholder="%"
                step="0.1"
                min="0"
                max="100"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-green-500"
              />
              <p className="mt-1 text-xs text-gray-400">%</p>
            </div>
          </div>
          {errors?.absoluteSelfConsumption && (
            <p className="mt-1 text-sm text-red-500">{errors.absoluteSelfConsumption}</p>
          )}
          {errors?.relativeSelfConsumption && (
            <p className="mt-1 text-sm text-red-500">{errors.relativeSelfConsumption}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-8">
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