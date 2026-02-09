import React from 'react';
import { CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="py-12 md:py-24 bg-scotDark text-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-scotBlue rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-scotBlue/20 text-blue-200 text-sm font-bold mb-4 border border-scotBlue/30">
             <ArrowDown className="w-4 h-4 mr-1" />
             Never Miss Another Lead
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">
            Don't Let Voicemail Kill Your Business
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-bold text-xl md:text-2xl">80%</span> of callers hang up when they hear a beep.
            <br className="hidden md:block" />
            <span className="text-scotBlue font-bold block mt-2 text-xl md:text-2xl">NessDial stops that today.</span>
          </p>
        </div>

        {/* Two Column Layout: Video & Comparison */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left: Video Demo */}
          <div className="mb-10 lg:mb-0">
             <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 bg-scotBlue text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                    WATCH DEMO
                </div>
                {/* 
                  VIDEO TAG INSTRUCTIONS:
                  1. Name your video file 'demo.mp4'.
                  2. Place 'demo.mp4' in the 'public' folder of this project.
                  3. If the video fails to load, the 'poster' image will show instead.
                */}
                <div className="relative w-full rounded-xl overflow-hidden bg-black border border-gray-600 aspect-video">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="https://images.unsplash.com/photo-1621360841012-d768d2b271d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    >
                      <source src="/demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
             </div>
             <p className="text-center text-gray-400 mt-4 md:mt-6 max-w-md mx-auto leading-relaxed">
                Our agents understand Scottish terms like <strong>"aye"</strong>. <br/>
                <span className="text-white font-bold text-lg">It is built for Scotland.</span>
             </p>
          </div>

          {/* Right: Comparison Table */}
          <div className="bg-white rounded-2xl p-5 md:p-8 text-gray-900 shadow-xl border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center">
                {/* Replaced VS squircle with Logo */}
                <div className="w-8 h-8 md:w-10 md:h-10 mr-3 shadow-lg rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                        src="/logo.png" 
                        alt="NessDial" 
                        className="w-full h-full object-cover bg-scotBlue p-1" 
                    />
                </div>
                The NessDial Advantage
            </h3>
            
            <div className="space-y-4 md:space-y-6">
                {/* Row 1 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 md:pb-4">
                    <div className="w-5/12 pr-2">
                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Standard Voicemail</p>
                        <div className="flex items-center text-red-500 font-bold bg-red-50 inline-flex px-2 py-1 rounded text-xs md:text-base">
                            <XCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
                            Customer Hangs Up
                        </div>
                    </div>
                    
                    <div className="w-7/12 pl-2 text-right border-l border-gray-100">
                        <p className="text-[10px] md:text-xs font-bold text-scotBlue uppercase tracking-wider mb-1">NessDial Agent</p>
                        <div className="flex items-center justify-end text-green-700 font-bold bg-green-50 inline-flex px-2 py-1 rounded text-xs md:text-base">
                            Answers Instantly
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-1.5" />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 md:pb-4">
                    <div className="w-5/12 pr-2">
                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Booking</p>
                        <p className="text-xs md:text-sm text-gray-600 font-medium">Phone tag. Missed opportunities.</p>
                    </div>
                    
                    <div className="w-7/12 pl-2 text-right border-l border-gray-100">
                        <p className="text-[10px] md:text-xs font-bold text-scotBlue uppercase tracking-wider mb-1">Booking</p>
                        <p className="text-xs md:text-sm text-gray-900 font-bold">Books job directly into diary.</p>
                    </div>
                </div>

                 {/* Row 3 */}
                 <div className="flex items-center justify-between">
                    <div className="w-5/12 pr-2">
                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Impression</p>
                        <p className="text-xs md:text-sm text-gray-600 font-medium">"They're too busy for me."</p>
                    </div>
                    
                    <div className="w-7/12 pl-2 text-right border-l border-gray-100">
                        <p className="text-[10px] md:text-xs font-bold text-scotBlue uppercase tracking-wider mb-1">Impression</p>
                        <p className="text-xs md:text-sm text-gray-900 font-bold">"Wow, that was professional."</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 border-t border-gray-100">
                <div className="bg-scotBlue/5 rounded-xl p-4 md:p-5 border border-scotBlue/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <div className="text-scotBlue font-black text-3xl md:text-4xl mr-0 sm:mr-5 mb-2 sm:mb-0">£0</div>
                    <div>
                        <p className="font-bold text-gray-900 text-base md:text-lg">Effective Cost</p>
                        <p className="text-xs md:text-sm text-gray-600 leading-snug">
                           By saving just <span className="font-bold text-gray-900">one job</span> a month, the service pays for itself.
                        </p>
                    </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DemoSection;