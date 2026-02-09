import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onGetStarted?: () => void;
  onNavigate: (view: 'home' | 'pricing' | 'demo' | 'features' | 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <footer className="bg-scotDark text-white pt-8 md:pt-16 pb-8 relative">
       {/* Pre-footer CTA */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-scotBlue rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-2xl">
              <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to modernise your business?</h3>
                  <p className="text-blue-100 text-lg">Stop losing leads today. Set up takes less than 5 minutes.</p>
              </div>
              <button 
                onClick={onGetStarted}
                className="bg-white text-scotBlue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               {/* Logo in Footer */}
               <img src="/logo.png" alt="NessDial" className="w-8 h-8 mr-2 object-contain bg-white rounded-md" />
               <span className="font-bold text-xl">NessDial</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Helping Scottish businesses capture every opportunity with intelligent, automated receptionists. Built in Scotland, for Scotland.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('demo')} className="hover:text-white transition-colors">Demo</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:nessdialai@gmail.com" className="hover:text-white transition-colors">nessdialai@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:07986019065" className="hover:text-white transition-colors">07986 019065</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Aberdeen, Scotland</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NessDial. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;