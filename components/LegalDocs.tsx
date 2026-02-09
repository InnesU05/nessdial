import React from 'react';

interface LegalDocProps {
  type: 'terms' | 'privacy';
  onBack: () => void;
}

export const LegalDoc: React.FC<LegalDocProps> = ({ type, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="text-gray-500 hover:text-scotBlue mb-6 flex items-center font-medium">
          &larr; Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 md:p-12">
          {type === 'terms' ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Introduction</h3>
                <p>Welcome to NessDial. By accessing our website and using our AI receptionist services, you agree to be bound by these Terms and Conditions.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Service Description</h3>
                <p>NessDial provides AI-powered voice agents for business communication. While we strive for 99.9% uptime and accuracy, we cannot guarantee error-free operation at all times due to the nature of AI and telecommunications networks.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Subscription and Billing</h3>
                <p>Services are billed on a monthly rolling basis. You may cancel your subscription at any time. Cancellations will take effect at the end of the current billing cycle.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. User Responsibilities</h3>
                <p>You agree to provide accurate information when registering. You are responsible for ensuring your use of our service complies with all local laws and regulations regarding telecommunications and data recording.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5. Limitation of Liability</h3>
                <p>NessDial shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, resulting from the use or inability to use our service.</p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Data Collection</h3>
                <p>We collect information you provide directly to us, such as your name, email address, phone number, and business details. We also process call data (transcripts and audio) to provide our service.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Use of Information</h3>
                <p>We use your information to operate, maintain, and improve our services. We do not sell your personal data to third parties.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. AI Processing</h3>
                <p>Your call data is processed by our AI algorithms to generate responses and summaries. This data is encrypted in transit and at rest.</p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at nessdialai@gmail.com.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};