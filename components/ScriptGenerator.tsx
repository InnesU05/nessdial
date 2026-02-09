import React, { useState } from 'react';
import { Sparkles, Loader2, PlayCircle, Mic, Volume2 } from 'lucide-react';
import { generateSampleScript } from '../services/geminiService';

const ScriptGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType) return;
    
    setIsLoading(true);
    const script = await generateSampleScript(businessName, businessType);
    setGeneratedScript(script);
    setIsLoading(false);
  };

  return (
    <div className="py-24 bg-scotDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-6">Hear the Difference</h2>
            <p className="text-lg text-gray-300 mb-8">
              Want to know what your AI agent will <strong>say</strong> to your customers? 
              Enter your details to generate a custom voice script tailored for Scottish trades.
            </p>

            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl relative group cursor-pointer hover:border-scotBlue transition-colors">
              {/* Fake Video Player */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-10 w-10 text-white" />
                </div>
              </div>
              <img 
                src="https://picsum.photos/800/450?grayscale" 
                alt="Video Thumbnail" 
                className="object-cover w-full h-full opacity-60"
              />
              <div className="absolute bottom-4 left-4 flex items-center text-white font-medium z-20">
                <Mic className="w-4 h-4 mr-2 text-scotBlue" />
                Listen to Audio Demo (1:42)
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="text-scotBlue h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-900">Create Your Voice Script</h3>
            </div>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Anderson Roofing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <input 
                  type="text" 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g. Emergency Roofing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scotBlue focus:border-scotBlue outline-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading || !businessName || !businessType}
                className="w-full bg-scotBlue text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Writing Script...
                  </>
                ) : (
                  "Generate Script Preview"
                )}
              </button>
            </form>

            {generatedScript && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                   <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Agent Spoken Output</p>
                   <Volume2 className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-gray-800 italic leading-relaxed font-serif text-lg">"{generatedScript}"</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScriptGenerator;