
import React from 'react';

interface DoughnutChartProps {
    title: string;
    data: { label: string; value: number; color: string }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title, data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulative = 0;

    const items = data.map(item => {
        const percentage = (item.value / total) * 100;
        const startAngle = (cumulative / total) * 360;
        const endAngle = ((cumulative + item.value) / total) * 360;
        cumulative += item.value;
        
        const largeArcFlag = percentage > 50 ? 1 : 0;
        const x1 = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
        const y1 = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
        const x2 = 50 + 40 * Math.cos(Math.PI * endAngle / 180);
        const y2 = 50 + 40 * Math.sin(Math.PI * endAngle / 180);

        return {
            ...item,
            percentage: percentage.toFixed(1),
            path: `M 50,50 L ${x1},${y1} A 40,40 0 ${largeArcFlag},1 ${x2},${y2} Z`
        };
    });

    return (
        <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-6">
                <svg viewBox="0 0 100 100" className="w-40 h-40">
                    {items.map((item) => (
                        <path key={item.label} d={item.path} fill={item.color} />
                    ))}
                    <circle cx="50" cy="50" r="25" fill="#1f2937" />
                </svg>
                <div className="text-sm space-y-2">
                    {items.map(item => (
                        <div key={item.label} className="flex items-center">
                            <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                            <span className="text-gray-300">{item.label}:</span>
                            <span className="font-semibold text-white ml-auto pl-4">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
