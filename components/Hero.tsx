import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Mic, Activity, Volume2, PlayCircle } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onDemoClick }) => {
  return (
    <div className="relative bg-scotDark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="#005EB8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Your Business Needs a <span className="text-scotBlue">Voice</span>, Not Just a Voicemail.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Real AI voice agents that <strong>talk</strong> to your customers. We answer calls, qualify leads, and book jobs 24/7 with a friendly Scottish accent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-scotBlue hover:bg-blue-600 md:text-lg transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Get Your Voice Agent
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
              <button 
                onClick={onDemoClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800 md:text-lg transition-all"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Video Demo
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                <span className="font-bold text-white">£0 Setup Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                <span>Natural Conversation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                <span>Local Dialect Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Phone Call Simulation - Hidden on Mobile */}
          <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-end">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900 w-[320px] sm:w-[360px]">
              
              {/* Phone Status Bar */}
              <div className="bg-gray-800 h-8 flex justify-center items-center absolute top-0 w-full z-20">
                  <div className="w-24 h-5 bg-black rounded-b-xl"></div>
              </div>
              
              {/* Screen Content */}
              <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black h-[600px] flex flex-col pt-16 relative">
                  
                  {/* Caller Info */}
                  <div className="text-center px-6 z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-scotBlue to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-white/10 relative">
                          <Phone className="w-10 h-10 text-white fill-current animate-pulse" />
                          <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">MacGregor Plumbing</h3>
                      <p className="text-blue-400 font-medium tracking-wide text-sm uppercase">NessDial Agent Active</p>
                      <p className="text-gray-400 text-sm mt-3 font-mono">00:24</p>
                  </div>

                  {/* Audio Waveform Visualization */}
                  <div className="flex items-center justify-center space-x-1.5 h-16 mt-8 mb-auto w-full px-12">
                      {[...Array(7)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-2 bg-blue-500 rounded-full animate-pulse" 
                            style={{ 
                              height: `${30 + Math.random() * 70}%`, 
                              animationDuration: `${0.5 + Math.random() * 0.5}s`,
                              opacity: 0.8 
                            }}
                          ></div>
                      ))}
                  </div>

                  {/* Transcription Card */}
                  <div className="mx-4 mb-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg transform transition-all hover:scale-105">
                      <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-scotBlue flex items-center justify-center shrink-0 mt-1">
                              <Volume2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                              <p className="text-xs text-blue-300 font-bold uppercase mb-1">Transcription</p>
                              <p className="text-white text-sm leading-relaxed font-medium">
                                "Hello there! Thanks for phoning MacGregor Plumbing. I can certainly help get an engineer out to you. Is it an emergency?"
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Call Controls */}
                  <div className="grid grid-cols-3 gap-4 px-8 pb-10">
                      <div className="aspect-square rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                        <Mic className="w-6 h-6" />
                      </div>
                      <div className="aspect-square rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/40 hover:bg-red-600 transition-colors transform hover:scale-105">
                        <Phone className="w-8 h-8 rotate-[135deg] fill-current" />
                      </div>
                      <div className="aspect-square rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                        <Activity className="w-6 h-6" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;