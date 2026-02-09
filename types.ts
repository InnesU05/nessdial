export enum Tier {
  STARTER = 'Starter',
  STANDARD = 'Standard',
  ENTERPRISE = 'Enterprise'
}

export interface PricingPlan {
  id: Tier;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface RegistrationData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  businessPhone: string; // Renamed from phone
  location: string; // New Mandatory
  selectedTier: Tier;
  
  // Optional Fields
  operatingDays?: string;
  servicePrices?: string;
  faqs?: string;
  businessDescription?: string;
  message?: string; // Additional Notes
}