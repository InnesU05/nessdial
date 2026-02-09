import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'pricing' | 'demo' | 'features') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            {/* Logo Container */}
            <div className="w-10 h-10 bg-scotBlue/10 rounded-lg flex items-center justify-center mr-3 overflow-hidden border border-scotBlue/20">
              <img 
                src="/logo.png" 
                alt="NessDial Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  // Show fallback icon/text if needed, or just let the container be a colored box
                  e.currentTarget.parentElement?.classList.add('bg-scotBlue');
                }}
              />
            </div>
            
            <span className="font-bold text-xl tracking-tight text-scotDark">NessDial</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => onNavigate('features')} className="text-gray-600 hover:text-scotBlue transition-colors font-medium">Features</button>
            <button onClick={() => onNavigate('pricing')} className="text-gray-600 hover:text-scotBlue transition-colors font-medium">Pricing</button>
            <button onClick={() => onNavigate('demo')} className="text-gray-600 hover:text-scotBlue transition-colors font-medium">Demo</button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-scotBlue hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-scotBlue p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => { onNavigate('features'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-scotBlue">Features</button>
            <button onClick={() => { onNavigate('pricing'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-scotBlue">Pricing</button>
            <button onClick={() => { onNavigate('demo'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-scotBlue">Demo</button>
            <button onClick={() => { onNavigate('pricing'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-scotBlue font-bold bg-blue-50">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;