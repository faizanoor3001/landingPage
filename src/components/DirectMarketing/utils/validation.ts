import { InstallationData, MarketData, MarketingFormType, CostData } from '../types';

export const validateInstallationData = (data: InstallationData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.type) {
    errors.type = 'Please select an installation type';
  }

  if (!data.marketingForm) {
    errors.marketingForm = 'Please select a marketing form';
  }

  if (!data.nominalPower || data.nominalPower <= 0) {
    errors.nominalPower = 'Please enter a valid nominal power';
  }

  if (!data.annualProduction || data.annualProduction <= 0) {
    errors.annualProduction = 'Please enter a valid annual production';
  }

  // Validate self-consumption
  if (data.absoluteSelfConsumption < 0) {
    errors.absoluteSelfConsumption = 'Self-consumption cannot be negative';
  } else if (data.absoluteSelfConsumption > data.annualProduction) {
    errors.absoluteSelfConsumption = 'Self-consumption cannot exceed annual production';
  }

  if (data.relativeSelfConsumption < 0 || data.relativeSelfConsumption > 100) {
    errors.relativeSelfConsumption = 'Self-consumption percentage must be between 0 and 100';
  }

  return errors;
};

export const validateMarketData = (data: MarketData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.directMarketingFee || data.directMarketingFee < 0) {
    errors.directMarketingFee = 'Please enter a valid direct marketing fee';
  }

  if (!data.marketValue || data.marketValue < 0) {
    errors.marketValue = 'Please enter a valid market value';
  }

  if (!data.marketPremium || data.marketPremium < 0) {
    errors.marketPremium = 'Please enter a valid market premium';
  }

  if (!data.selfConsumptionSavings || data.selfConsumptionSavings < 0) {
    errors.selfConsumptionSavings = 'Please enter valid self-consumption savings';
  }

  return errors;
};

export const validateCostData = (costData: CostData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (costData.maintenanceCosts < 0) {
    errors.maintenanceCosts = 'Maintenance costs cannot be negative';
  }

  if (costData.insuranceCosts < 0) {
    errors.insuranceCosts = 'Insurance costs cannot be negative';
  }

  if (costData.otherCosts < 0) {
    errors.otherCosts = 'Other costs cannot be negative';
  }

  return errors;
}; 