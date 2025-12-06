import React from 'react';
import { CheckIcon } from './IconComponents';

interface PricingProps {
  onLoginClick: () => void;
}

const tiers = [
  {
    name: 'Starter',
    price: 29,
    description: 'For hobbyists and new stations finding their voice.',
    features: [
      '2 GB storage',
      '500 concurrent listeners',
      '1 TB/month bandwidth',
      '2 DJ accounts',
      'Basic web player + 1 template',
      'Basic analytics',
    ],
    cta: 'Choose Starter',
    isMostPopular: false,
  },
  {
    name: 'Pro',
    price: 69,
    description: 'For growing stations that need more power and creative tools.',
    features: [
      '20 GB storage',
      '20,000 concurrent listeners',
      '20 TB/month bandwidth',
      '10 DJ accounts',
      'Pro website templates + podcasting',
      'Live recording & voice tracking',
      'Basic imaging bundle (2 jingles/mo)',
      'Priority email support',
    ],
    cta: 'Choose Pro',
    isMostPopular: true,
  },
  {
    name: 'Business',
    price: 149,
    description: 'For professional broadcasters ready to monetize and scale.',
    features: [
      '75 GB storage',
      '100,000 concurrent listeners',
      '50 TB/month bandwidth',
      '30 DJ accounts',
      'Mobile app publishing',
      'Full imaging package (5 jingles/mo)',
      'Auto-DJ & AI mastering',
      'Dynamic ad insertion',
      'Phone + priority chat support',
    ],
    cta: 'Choose Business',
    isMostPopular: false,
  },
];

const Pricing: React.FC<PricingProps> = ({ onLoginClick }) => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-400">Choose the plan that's right for your station. Cancel anytime.</p>
        </div>
        <div className="mt-16 grid max-w-lg mx-auto gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-xl border ${
                tier.isMostPopular ? 'border-primary-500 scale-105' : 'border-gray-700'
              } bg-gray-800 flex flex-col`}
            >
              {tier.isMostPopular && (
                <div className="bg-primary-500 text-white text-sm font-bold text-center py-1 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-4 text-gray-400">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-white">${tier.price}</span>
                  <span className="text-base font-medium text-gray-400">/mo</span>
                </div>
                <ul role="list" className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-800/50 rounded-b-lg">
                <button
                  onClick={onLoginClick}
                  className={`block w-full text-center rounded-lg px-6 py-3 text-lg font-semibold ${
                    tier.isMostPopular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-colors`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <div className="inline-block bg-gray-800 border border-gray-700 p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-white">Enterprise Plan</h3>
                <p className="mt-4 text-gray-400">Need unlimited listeners, custom CDN, and dedicated support? We've got you covered.</p>
                <button onClick={onLoginClick} className="mt-6 inline-block bg-transparent border border-primary-500 text-primary-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;