import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import WhyMusicStationLive from './WhyAirWave';
import AIPrompt from './AIPrompt';
import CTA from './CTA';
import Footer from './Footer';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header onLoginClick={onLoginClick} />
      <main>
        <Hero onLoginClick={onLoginClick} />
        <Features />
        <Pricing onLoginClick={onLoginClick} />
        <WhyMusicStationLive />
        <AIPrompt />
        <CTA onLoginClick={onLoginClick} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;