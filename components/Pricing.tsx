import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Tier, PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: Tier.STARTER,
    name: "Starter",
    price: "£39",
    features: [
      "150 Minutes per Month",
      "24/7 Coverage",
      "Native Scottish Accent",
      "Instant SMS Summaries",
      "Email Notifications",
      "Custom Scripting"
    ]
  },
  {
    id: Tier.STANDARD,
    name: "Standard",
    price: "£69",
    popular: true,
    features: [
      "300 Minutes per Month",
      "24/7 Coverage",
      "Native Scottish Accent",
      "Instant SMS Summaries",
      "Appointment Booking",
      "Priority Email Support"
    ]
  },
  {
    id: Tier.ENTERPRISE,
    name: "Enterprise",
    price: "Custom",
    features: [
      "500+ Minutes per Month",
      "Full Custom AI Build",
      "Custom Voice & Tone Tuning",
      "Complex Call Routing",
      "CRM Integration (HubSpot, etc)",
      "Priority Phone Support"
    ]
  }
];

interface PricingProps {
  onSelectPlan: (tier: Tier) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<Tier>(Tier.STANDARD);

  return (
    <div id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-green-200 shadow-sm">
            ✨ No Setup Fees. Cancel Anytime.
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Simple Pricing. Huge ROI.</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Stop losing leads to voicemail. Capturing just a single extra job pays for the service many times over.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex justify-center mb-8">
           <div className="bg-gray-100 p-1.5 rounded-xl flex w-full max-w-sm">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActiveTab(plan.id)}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 ${
                    activeTab === plan.id
                      ? 'bg-white text-scotBlue shadow-sm ring-1 ring-black/5'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
           </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan) => (
             <PricingCard key={plan.id} plan={plan} onSelectPlan={onSelectPlan} />
          ))}
        </div>

        {/* Mobile Single Card Layout */}
        <div className="md:hidden max-w-sm mx-auto">
           {plans.filter(p => p.id === activeTab).map((plan) => (
              <PricingCard key={plan.id} plan={plan} onSelectPlan={onSelectPlan} isMobile />
           ))}
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (t: Tier) => void;
  isMobile?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan, isMobile }) => {
  return (
    <div 
      className={`relative rounded-2xl border flex flex-col p-8 bg-white transition-all duration-300 ${
        plan.popular 
          ? 'border-scotBlue shadow-xl z-10' 
          : 'border-gray-200 shadow-sm hover:shadow-md'
      } ${!isMobile && plan.popular ? 'scale-105 transform' : ''}`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-scotBlue text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
          {plan.price !== 'Custom' && <span className="ml-1 text-gray-500">/month</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
            <span className="text-gray-600 text-sm leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onSelectPlan(plan.id)}
        className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
          plan.popular 
            ? 'bg-scotBlue text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
            : 'bg-gray-50 text-scotBlue hover:bg-gray-100 border border-gray-200'
        }`}
      >
        Choose {plan.name}
      </button>
    </div>
  );
};

export default Pricing;