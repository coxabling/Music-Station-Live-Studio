import React from 'react';

interface HeroProps {
  onLoginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900/50 animate-background-pan" style={{ backgroundSize: '200% 200%' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight animate-fade-in-up">
          The All-in-One <span className="text-primary-400">Internet Radio</span> Platform
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Music Station Live bundles reliable stream hosting, beautiful station websites, professional radio imaging, and AI tools. Go from zero to live in under an hour, then scale to millions.
        </p>
        <div className="mt-10 flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={onLoginClick} className="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-700 transition-transform transform hover:scale-105 shadow-lg">
            Launch Your Station
          </button>
          <a href="#features" className="bg-gray-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition-transform transform hover:scale-105 shadow-lg">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;