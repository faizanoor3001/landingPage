'use client';

import { useState } from 'react';
import { InstallationDataStep } from '../Steps/InstallationData';
import { MarketDataStep } from '../Steps/MarketData';
import { CostDataStep } from '../Steps/CostData';
import { ResultsStep } from '../Steps/Results';
import { StepIndicator } from './StepIndicator';
import { FormState, InstallationType, MarketingFormType } from '../types';
import { validateInstallationData } from '../utils/validation';
import { validateMarketData } from '../utils/validation';
import { validateCostData } from '../utils/validation';
import { calculateTotalRevenue, calculateTotalCosts } from '../utils/calculations';

const initialFormState: FormState = {
  installationData: {
    type: 'pv' as InstallationType,
    marketingForm: 'DirectMarketingWithFunding' as MarketingFormType,
    nominalPower: 0,
    annualProduction: 0,
    absoluteSelfConsumption: 0,
    relativeSelfConsumption: 0,
  },
  marketData: {
    directMarketingFee: 0,
    marketValue: 0,
    marketPremium: 0,
    selfConsumptionSavings: 0,
  },
  costData: {
    maintenanceCosts: 0,
    insuranceCosts: 0,
    otherCosts: 0,
  },
  results: {
    totalRevenue: 0,
    totalCosts: 0,
    profit: 0,
  },
};

const steps = [
  { title: 'Installation Data', description: 'Enter your installation details' },
  { title: 'Market Data', description: 'Specify market-related values' },
  { title: 'Cost Data', description: 'Add your annual costs' },
  { title: 'Results', description: 'View calculation results' },
];

export const DirectMarketingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateResults = (updatedFormState: FormState) => {
    const totalRevenue = calculateTotalRevenue(
      updatedFormState.installationData,
      updatedFormState.marketData
    );
    
    const totalCosts = calculateTotalCosts(updatedFormState.costData);
    
    return {
      totalRevenue,
      totalCosts,
      profit: totalRevenue - totalCosts,
    };
  };

  const handleNext = () => {
    let validationErrors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        validationErrors = validateInstallationData(formState.installationData);
        break;
      case 2:
        validationErrors = validateMarketData(formState.marketData);
        break;
      case 3:
        validationErrors = validateCostData(formState.costData);
        if (Object.keys(validationErrors).length === 0) {
          const results = calculateResults(formState);
          setFormState(prev => ({ ...prev, results }));
        }
        break;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleFormStateChange = (
    stepData: Partial<FormState>,
    recalculateResults: boolean = false
  ) => {
    setFormState(prev => {
      const updatedState = { ...prev, ...stepData };
      if (recalculateResults) {
        const results = calculateResults(updatedState);
        return { ...updatedState, results };
      }
      return updatedState;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <StepIndicator
        steps={steps}
        currentStep={currentStep}
      />

      <div className="mt-8">
        {currentStep === 1 && (
          <InstallationDataStep
            formState={formState}
            errors={errors}
            onChange={handleFormStateChange}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <MarketDataStep
            formState={formState}
            errors={errors}
            onChange={handleFormStateChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentStep === 3 && (
          <CostDataStep
            formState={formState}
            errors={errors}
            onChange={handleFormStateChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentStep === 4 && (
          <ResultsStep
            formState={formState}
            onPrevious={handlePrevious}
          />
        )}
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-medium text-white mb-3">About the Calculator</h4>
            <p className="text-sm text-gray-400">
              This calculator provides an estimate of your potential earnings from direct marketing your renewable energy installation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white mb-3">Important Notes</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• All calculations are estimates</li>
              <li>• Market values may vary</li>
              <li>• Consult experts for final decisions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white mb-3">Need Help?</h4>
            <div className="space-y-2">
              <a 
                href="/contact" 
                className="block text-sm text-green-500 hover:text-green-400"
              >
                Contact Support
              </a>
              <a 
                href="/faq" 
                className="block text-sm text-green-500 hover:text-green-400"
              >
                FAQ
              </a>
              <a 
                href="/terms" 
                className="block text-sm text-green-500 hover:text-green-400"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ZORO Energy. All calculations are provided for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}; 