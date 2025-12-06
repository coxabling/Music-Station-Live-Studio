import React from 'react';

interface LineChartProps {
  title: string;
  data: number[];
}

const LineChart: React.FC<LineChartProps> = ({ title, data }) => {
  const width = 500;
  const height = 200;
  const padding = 30;
  const maxValue = Math.max(...data);
  const points = data.map((d, i) => `${(i / (data.length - 1)) * (width - 2 * padding) + padding},${height - padding - (d / maxValue) * (height - 2 * padding)}`).join(' ');

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg mt-8 p-4">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
            {/* Y-axis lines */}
            {[0, 0.25, 0.5, 0.75, 1].map(val => (
                <line key={val} x1={padding} y1={height - padding - val * (height - 2 * padding)} x2={width - padding} y2={height - padding - val * (height - 2 * padding)} stroke="#4a5568" strokeWidth="1" strokeDasharray="2,2" />
            ))}
            {/* X-axis */}
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#4a5568" strokeWidth="1" />
            {/* Gradient */}
            <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
            </defs>
            {/* Area fill */}
            <polygon points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`} fill="url(#chartGradient)" />
            {/* Line */}
            <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} />
        </svg>
    </div>
  );
};

export default LineChart;
