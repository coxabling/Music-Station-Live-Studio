
import React from 'react';
import { StreamingIcon, WebsiteIcon, CreativeIcon, AIIcon, MonetizationIcon, AdminIcon } from './IconComponents';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: 'Streaming & Hosting',
    description: 'Managed Icecast/Shoutcast endpoints, scalable CDN, auto-failover, and detailed listener analytics.',
    icon: StreamingIcon,
  },
  {
    name: 'Station Websites',
    description: 'Modern, responsive templates with a built-in CMS, embedded players, and podcast feed generators.',
    icon: WebsiteIcon,
  },
  {
    name: 'Radio Imaging & Creative',
    description: 'Professional jingles, sweepers, and station IDs with fast turnarounds. Access AI and pro voice talent.',
    icon: CreativeIcon,
  },
  {
    name: 'AI Services',
    description: 'Auto-DJ, smart scheduling, audio cleaning, AI-assisted composition, and automated content clipping.',
    icon: AIIcon,
  },
  {
    name: 'Monetization Tools',
    description: 'Dynamic ad insertion, subscription/donation widgets, paywalled streams, and royalty reporting.',
    icon: MonetizationIcon,
  },
  {
    name: 'Admin & Operations',
    description: 'Integrated billing, webhooks for automation, multi-tenant architecture, and white-label options.',
    icon: AdminIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Everything You Need to Broadcast</h2>
          <p className="mt-4 text-lg text-gray-400">From hobbyist to enterprise, our toolkit scales with you.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 shadow-lg hover:border-primary-500 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
