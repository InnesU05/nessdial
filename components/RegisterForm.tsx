import React, { useState, useEffect } from 'react';
import { Tier, RegistrationData } from '../types';
import { CheckCircle, Loader2, AlertCircle, MapPin, Calendar, PoundSterling, HelpCircle, FileText, Mail, CreditCard, Clock } from 'lucide-react';

// INSTRUCTIONS:
// 1. Create a "Custom Webhook" in Make.com (or Zapier/n8n)
// 2. Paste the Webhook URL below inside the quotes.
const WEBHOOK_URL = ""; 

interface RegisterFormProps {
  selectedTier: Tier;
  onBack: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ selectedTier, onBack }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    businessPhone: '',
    location: '',
    selectedTier: selectedTier,
    operatingDays: '',
    servicePrices: '',
    faqs: '',
    businessDescription: '',
    message: ''
  });

  // Update form data if prop changes (though usually handled by select inside form)
  useEffect(() => {
    setFormData(prev => ({ ...prev, selectedTier }));
  }, [selectedTier]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'NessDial Landing Page'
          }),
        });
        if (!response.ok) throw new Error('Failed to submit form');
      } else {
        // Simulation
        console.log("Form Data:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setStep('success');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or contact us directly at nessdialai@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEnterprise = formData.selectedTier === Tier.ENTERPRISE;

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          
          {isEnterprise ? (
            // ENTERPRISE SUCCESS SCREEN
            <>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle className="h-10 w-10 text-scotBlue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Thanks for contacting us about an <strong>Enterprise Agent</strong>. We have received your details.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8 text-left">
                <p className="text-sm text-blue-900 flex items-start">
                   <Clock className="w-5 h-5 mr-2 flex-shrink-0 text-scotBlue" />
                   We aim to manually review your requirements and contact you within <strong>24 hours</strong> to discuss your custom build.
                </p>
              </div>
            </>
          ) : (
            // STARTER & STANDARD SUCCESS SCREEN (PAYMENT FLOW)
            <>
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Mail className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Step 1 Complete!</h2>
              <h3 className="text-xl font-medium text-scotBlue mb-6">Now Check Your Email</h3>
              
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8 text-left shadow-sm">
                <h4 className="font-bold text-orange-800 flex items-center mb-2">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Action Required: Payment
                </h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  We have sent a secure <strong>Stripe Payment Link</strong> to <span className="font-semibold text-gray-900">{formData.email}</span>.
                </p>
                <div className="bg-white p-3 rounded-lg border border-orange-200 text-sm text-orange-900 font-bold flex items-start">
                   <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 text-orange-600" />
                   We cannot start building your agent until this payment is confirmed.
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-8">
                Once paid, we aim to have your custom Scottish AI agent live in under <strong>24 hours</strong>.
              </p>
            </>
          )}

          <button 
            onClick={onBack}
            className="w-full bg-scotBlue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="text-gray-500 hover:text-scotBlue mb-6 flex items-center">
          &larr; Back to Pricing
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-scotDark px-8 py-8 text-center relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 L100 0 L100 100 Z" fill="#005EB8" />
                </svg>
             </div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg p-1">
                   <img src="/logo.png" alt="NessDial Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {isEnterprise ? 'Request a Quote' : 'Request an Agent'}
                </h2>
                <div className="mt-3 inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
                   <p className="text-blue-100 font-medium">
                     Tier: <span className="text-white font-bold uppercase tracking-wider">{formData.selectedTier}</span>
                   </p>
                </div>
             </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start text-sm border border-red-100">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Mandatory Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Essential Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    name="firstName"
                    type="text" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    name="lastName"
                    type="text" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    name="businessName"
                    type="text" 
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location / Area Covered <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input 
                      required
                      name="location"
                      type="text" 
                      placeholder="e.g. Aberdeen & Shire"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    required
                    name="businessPhone"
                    type="tel" 
                    placeholder="Mobile or Landline"
                    value={formData.businessPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Optional Knowledge Base Section */}
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
               <h3 className="text-lg font-bold text-scotDark mb-4 flex items-center">
                 2. Knowledge Base 
                 <span className="ml-2 text-xs font-normal text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">Optional - Can be filled later</span>
               </h3>
               
               <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                       <Calendar className="w-4 h-4 mr-1.5 text-scotBlue" /> Operating Days/Hours
                    </label>
                    <input 
                      name="operatingDays"
                      type="text" 
                      placeholder="e.g. Mon-Fri 8am-6pm"
                      value={formData.operatingDays}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none bg-white"
                    />
                  </div>

                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                       <PoundSterling className="w-4 h-4 mr-1.5 text-scotBlue" /> Common Service Prices
                    </label>
                    <textarea 
                      name="servicePrices"
                      rows={2}
                      placeholder="e.g. Call out fee £50, Boiler Service £80..."
                      value={formData.servicePrices}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                       <HelpCircle className="w-4 h-4 mr-1.5 text-scotBlue" /> Common FAQs
                    </label>
                    <textarea 
                      name="faqs"
                      rows={2}
                      placeholder="Any questions clients ask often?"
                      value={formData.faqs}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                       <FileText className="w-4 h-4 mr-1.5 text-scotBlue" /> Business Description
                    </label>
                    <textarea 
                      name="businessDescription"
                      rows={3}
                      placeholder="Briefly describe what you do..."
                      value={formData.businessDescription}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none bg-white"
                    />
                  </div>
               </div>
            </div>

            {/* Plan & Notes */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Confirmation</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Tier</label>
                  <select 
                    name="selectedTier"
                    value={formData.selectedTier}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none bg-white font-medium"
                  >
                    <option value={Tier.STARTER}>Starter (£39/mo)</option>
                    <option value={Tier.STANDARD}>Standard (£69/mo)</option>
                    <option value={Tier.ENTERPRISE}>Enterprise (Custom)</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Changing this will update your request type.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                  <textarea 
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-scotBlue text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Processing...
                  </>
                ) : (
                  isEnterprise ? "Request Custom Quote" : "Submit & Request Payment Link"
                )}
              </button>
              
              {/* Prominent Disclaimer */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start text-left">
                 <Clock className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                 <div>
                    <p className="font-bold text-amber-900 text-sm">We Personally Build Your Agent</p>
                    <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                        To ensure the highest quality, our team manually builds and tests every agent for you. This is <strong>not</strong> an instant automated setup. We aim to have your fully custom agent ready within <strong>24 hours</strong>.
                    </p>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;