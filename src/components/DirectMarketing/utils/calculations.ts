import { InstallationData, MarketData, CostData } from '../types';

interface MarketValues {
  [key: string]: {
    marketValue: number;
    managementPremium: number;
  };
}

// These values should be fetched from an API or configuration
const MARKET_VALUES: MarketValues = {
  pv: {
    marketValue: 0.085, // €/kWh
    managementPremium: 0.004, // €/kWh
  },
  wind: {
    marketValue: 0.075,
    managementPremium: 0.004,
  },
  kwk: {
    marketValue: 0.080,
    managementPremium: 0.004,
  },
};

export const calculateGridFeedIn = (
  annualProduction: number,
  absoluteSelfConsumption: number
): number => {
  return Math.max(0, annualProduction - absoluteSelfConsumption);
};

export const calculateMarketPremium = (
  eegCompensation: number,
  marketValue: number
): number => {
  return Math.max(0, eegCompensation - marketValue);
};

export const calculateMarketingFee = (
  gridFeedIn: number,
  installationType: string
): number => {
  // Base marketing fee in €/kWh
  const baseFee = 0.002;
  
  // Additional fee based on installation type
  const typeFee = {
    pv: 0.0005,
    wind: 0.001,
    kwk: 0.0015,
  }[installationType] || 0;

  return (baseFee + typeFee) * gridFeedIn;
};

export interface ProfitCalculation {
  withoutDirectMarketing: number;
  withDirectMarketing: number;
  difference: number;
  breakdown: {
    eegCompensation: number;
    marketValue: number;
    managementPremium: number;
    marketPremium: number;
    marketingFee: number;
  };
}

export const calculateProfit = (data: InstallationData): ProfitCalculation => {
  const { type, eegCompensation = 0, annualProduction } = data;
  const marketData = MARKET_VALUES[type];
  const gridFeedIn = calculateGridFeedIn(annualProduction, data.absoluteSelfConsumption);

  const marketValue = marketData.marketValue * gridFeedIn;
  const managementPremium = marketData.managementPremium * gridFeedIn;
  const marketPremium = calculateMarketPremium(eegCompensation, marketData.marketValue) * gridFeedIn;
  const marketingFee = calculateMarketingFee(gridFeedIn, type);

  const withoutDirectMarketing = eegCompensation * gridFeedIn;
  const withDirectMarketing = marketValue + managementPremium + marketPremium - marketingFee;

  return {
    withoutDirectMarketing,
    withDirectMarketing,
    difference: withDirectMarketing - withoutDirectMarketing,
    breakdown: {
      eegCompensation: eegCompensation * gridFeedIn,
      marketValue,
      managementPremium,
      marketPremium,
      marketingFee,
    },
  };
};

export const calculateTotalRevenue = (
  installationData: InstallationData,
  marketData: MarketData
): number => {
  // Calculate grid feed-in amount
  const gridFeedIn = installationData.annualProduction - installationData.absoluteSelfConsumption;
  
  // Calculate grid feed-in revenue
  const gridFeedInRevenue = (gridFeedIn / 1000) * (
    marketData.marketValue +
    (installationData.marketingForm === 'DirectMarketingWithFunding' ? marketData.marketPremium : 0) -
    marketData.directMarketingFee
  );

  // Calculate self-consumption revenue
  const selfConsumptionRevenue = (installationData.absoluteSelfConsumption / 1000) * marketData.selfConsumptionSavings;

  // Return total revenue
  return gridFeedInRevenue + selfConsumptionRevenue;
};

export const calculateTotalCosts = (costData: CostData): number => {
  return costData.maintenanceCosts + costData.insuranceCosts + costData.otherCosts;
}; 