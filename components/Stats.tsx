import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-4">
            <div className="text-4xl font-bold text-scotBlue mb-2">62%</div>
            <div className="text-gray-600 font-medium">Of calls to tradies go unanswered. That's money walking out the door.</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-scotBlue mb-2">1 Job</div>
            <div className="text-gray-600 font-medium">Saving just one lead per month covers your entire subscription cost.</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-scotBlue mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Your agent works whilst you're on the tools, sleeping, or on holiday.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;