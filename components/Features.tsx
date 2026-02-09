import React from 'react';
import { PhoneCall, Calendar, MessageSquare, ShieldCheck, Mic2, Globe } from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: "Instant Voice Response",
    description: "Answers instantly, 24/7."
  },
  {
    icon: Calendar,
    title: "Verbal Booking",
    description: "Books jobs directly into diary."
  },
  {
    icon: MessageSquare,
    title: "Post-Call SMS",
    description: "Sends text summaries automatically."
  },
  {
    icon: Mic2,
    title: "Scottish Accent",
    description: "Friendly, local, authentic dialect."
  },
  {
    icon: ShieldCheck,
    title: "Spam Screening",
    description: "Filters sales calls politely."
  },
  {
    icon: Globe,
    title: "Always On",
    description: "Captures leads while you work."
  }
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-base text-scotBlue font-semibold tracking-wide uppercase">Why NessDial?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Real Conversation.
          </p>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-500 mx-auto">
            Give your business a professional voice that works harder than voicemail ever could.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3 md:mb-6">
                <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-scotBlue" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-snug md:leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;