
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ElementType;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = changeType ? (isIncrease ? 'text-green-400' : 'text-red-400') : 'text-gray-400';

  return (
    <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/50 shadow-lg relative group hover:bg-gray-800 transition-all duration-300 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-12 -right-12 h-32 w-32 bg-primary-500/10 blur-[40px] rounded-full group-hover:bg-primary-500/20 transition-all"></div>
      
      <div className="flex items-center space-x-4 relative z-10">
        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-600/10 text-primary-400 flex items-center justify-center border border-primary-500/20 shadow-inner group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{title}</p>
          <div className="flex items-baseline space-x-2 mt-0.5">
              <p className="text-2xl font-black text-white">{value}</p>
              {change && (
                  <p className={`text-xs font-bold ${changeColor} flex items-center bg-gray-900/40 px-1.5 py-0.5 rounded`}>
                       {isIncrease ? '▲' : '▼'} {change}
                  </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
