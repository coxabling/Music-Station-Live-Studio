import React from 'react';
import { CheckBadgeIcon } from './IconComponents';

const advantages = [
  {
    title: 'Integrated Imaging Production',
    description: 'Our plans include professional jingles and sweepers, not just hosting. A creative studio at your fingertips.',
  },
  {
    title: 'AI-Powered Creative Workflow',
    description: 'Generate creative assets instantly with AI, refined by human experts for guaranteed quality.',
  },
  {
    title: 'True End-to-End Platform',
    description: 'We cover everything: hosting, website, apps, imaging, and monetization. No need to stitch together multiple services.',
  },
  {
    title: 'Built for Scale and Agencies',
    description: 'Launch a station in under an hour with our intuitive UX. White-label options are perfect for agencies and networks.',
  },
];

const WhyMusicStationLive: React.FC = () => {
  return (
    <section id="why-music-station-live" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-primary-400 tracking-wide uppercase">The Music Station Live Difference</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            More Than Just a Stream Host
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We built the platform we always wanted: powerful, creative, and fully integrated.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-10 md:grid-cols-2">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">{advantage.title}</h3>
                  <p className="mt-2 text-base text-gray-400">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMusicStationLive;