import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Does the AI sound robotic?",
    a: "Not at all. We use advanced voice synthesis that includes natural pauses, 'ums' and 'ahs'. Our Standard tier specifically offers high-quality Scottish accents trained on local dialects."
  },
  {
    q: "How does the appointment booking work?",
    a: "We connect the AI to your Google Calendar or booking software (like Calendly). The AI sees your availability in real-time and books slots directly. You just get a notification."
  },
  {
    q: "What happens if the AI doesn't know the answer?",
    a: "The AI is trained to take a message or escalate urgent calls by forwarding them to your mobile if specified. It will never make up information."
  },
  {
    q: "Is there a contract?",
    a: "No long-term contracts. NessDial is a monthly rolling subscription. You can cancel at any time."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-scotBlue" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;