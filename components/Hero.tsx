
import React from 'react';

interface HeroProps {
  onLoginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-950/50 border border-primary-500/30 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-ping"></span>
          <span className="text-xs font-bold text-primary-400 tracking-wider uppercase">V3.1 Now Live: Gemini Imaging Pro</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] animate-fade-in-up">
          RADIO STATIONS<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-indigo-400">EVOLVED.</span>
        </h1>
        
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Stream hosting, AI-powered jingles, and professional station websites. Everything you need to broadcast like a global network.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onLoginClick} 
            className="w-full sm:w-auto bg-primary-600 text-white px-10 py-4 rounded-2xl text-lg font-black hover:bg-primary-500 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 active:scale-95"
          >
            Launch Studio
          </button>
          <a 
            href="#features" 
            className="w-full sm:w-auto bg-gray-800/50 backdrop-blur-md text-white border border-gray-700 px-10 py-4 rounded-2xl text-lg font-black hover:bg-gray-700 transition-all hover:border-gray-500"
          >
            Explore Tech
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
