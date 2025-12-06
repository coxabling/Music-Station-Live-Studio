import React from 'react';

interface CTAProps {
  onLoginClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onLoginClick }) => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to go live?</span>
          <span className="block text-primary-400">Launch your station in under an hour.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300 max-w-2xl mx-auto">
          Stream to millions, publish apps, and get bespoke imaging — all in one place. Try the Pro imaging pack and hear the difference.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={onLoginClick}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Plans start at $29/mo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;