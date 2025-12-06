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
    <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary-600/20 text-primary-400 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-400 truncate">{title}</p>
        <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-semibold text-white">{value}</p>
            {change && (
                <p className={`text-sm font-semibold ${changeColor} flex items-center`}>
                     {isIncrease ? '▲' : '▼'} {change}
                </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
