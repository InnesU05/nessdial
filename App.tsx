import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import { LegalDoc } from './components/LegalDocs';
import { Tier } from './types';

type ViewState = 'home' | 'register' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTier, setSelectedTier] = useState<Tier>(Tier.STANDARD);

  const handleSelectPlan = (tier: Tier) => {
    setSelectedTier(tier);
    setCurrentView('register');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (view: 'home' | 'pricing' | 'demo' | 'features' | 'terms' | 'privacy') => {
    if (view === 'terms' || view === 'privacy') {
      setCurrentView(view);
      window.scrollTo(0, 0);
      return;
    }

    setCurrentView('home');
    
    // Allow React to render home view first if we were on register/legal
    setTimeout(() => {
      let elementId = '';
      if (view === 'pricing') elementId = 'pricing';
      else if (view === 'demo') elementId = 'demo';
      else if (view === 'features') elementId = 'features';
      
      if (elementId) {
        const el = document.getElementById(elementId);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {currentView === 'home' && (
        <>
          <Navbar onNavigate={handleNavigate} />
          <Hero 
            onCtaClick={() => handleNavigate('pricing')} 
            onDemoClick={() => handleNavigate('demo')}
          />
          <Stats />
          <Features />
          <DemoSection />
          <Pricing onSelectPlan={handleSelectPlan} />
          <FAQ />
          <Footer onNavigate={handleNavigate} onGetStarted={() => handleNavigate('pricing')} />
        </>
      )}

      {currentView === 'register' && (
        <RegisterForm selectedTier={selectedTier} onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'terms' && (
        <LegalDoc type="terms" onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'privacy' && (
        <LegalDoc type="privacy" onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
};

export default App;