export type InstallationType = 'pv' | 'wind' | 'kwk';

export type MarketingFormType = 'DirectMarketingWithFunding' | 'DirectMarketingWithoutFunding' | 'PostEEG';

export interface InstallationData {
  type: InstallationType;
  marketingForm: MarketingFormType;
  nominalPower: number;
  annualProduction: number;
  absoluteSelfConsumption: number;
  relativeSelfConsumption: number;
  eegCompensation?: number;
}

export interface MarketData {
  directMarketingFee: number;
  marketValue: number;
  marketPremium: number;
  selfConsumptionSavings: number;
}

export interface CostData {
  maintenanceCosts: number;
  insuranceCosts: number;
  otherCosts: number;
}

export interface Results {
  totalRevenue: number;
  totalCosts: number;
  profit: number;
}

export interface ContactData {
  email: string;
  phone?: string;
  companyName: string;
  firstName: string;
  lastName: string;
  address: {
    postalCode: string;
    city: string;
    street: string;
    houseNumber: string;
  };
}

export interface ContractData {
  isOperational: boolean;
  commissioningDate: string;
  currentMarketingForm?: string;
  desiredStartDate: {
    day: number;
    month: number;
    year: number;
  };
  contractDuration: number;
}

export interface FormState {
  installationData: InstallationData;
  marketData: MarketData;
  costData: CostData;
  results: Results;
}

export interface ValidationErrors {
  type?: string;
  marketingForm?: string;
  nominalPower?: string;
  annualProduction?: string;
  selfConsumption?: string;
  [key: string]: string | undefined;
}

export interface StepProps {
  formState: FormState;
  errors?: Record<string, string>;
  onChange?: (stepData: Partial<FormState>, recalculateResults?: boolean) => void;
  onNext?: () => void;
  onPrevious?: () => void;
} 