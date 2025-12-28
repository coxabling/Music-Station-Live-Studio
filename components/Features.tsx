
import React from 'react';
import { StreamingIcon, WebsiteIcon, CreativeIcon, AIIcon, MonetizationIcon, AdminIcon } from './IconComponents';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const features: Feature[] = [
  {
    name: 'Streaming Cloud',
    description: 'Ultra-low latency Icecast hosting with global edge delivery and auto-failover protection.',
    icon: StreamingIcon,
    className: 'md:col-span-2'
  },
  {
    name: 'Imaging AI',
    description: 'Instant jingles and station IDs generated with studio-grade TTS.',
    icon: CreativeIcon,
  },
  {
    name: 'Auto-DJ v3',
    description: 'Smart scheduling that learns your listeners habits and optimizes rotation.',
    icon: AIIcon,
  },
  {
    name: 'Global Ad Hub',
    description: 'Dynamic server-side ad insertion with programmatic monetization built-in.',
    icon: MonetizationIcon,
    className: 'md:col-span-2'
  },
  {
    name: 'Brand Sites',
    description: 'High-performance station websites with real-time metadata syncing.',
    icon: WebsiteIcon,
  },
  {
    name: 'Ops Manager',
    description: 'Centralized station management for multi-market networks.',
    icon: AdminIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-4">The Platform</h2>
          <p className="text-4xl md:text-5xl font-black text-white leading-tight">
            Built for those who live to <span className="italic text-gray-500">broadcast.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className={`group bg-gray-800/40 p-8 rounded-[2rem] border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden relative ${feature.className || ''}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                <feature.icon className="h-32 w-32" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary-600/10 text-primary-400 border border-primary-500/20 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{feature.description}</p>
              </div>
              
              <div className="mt-8 relative z-10">
                <button className="text-[10px] font-black text-white uppercase tracking-widest flex items-center group-hover:text-primary-400 transition-colors">
                  Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
