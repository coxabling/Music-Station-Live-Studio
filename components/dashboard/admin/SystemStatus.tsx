
import React from 'react';
import { ShieldCheckIcon } from '../../IconComponents';

const SystemStatus: React.FC = () => {
    const services = [
        { name: 'Streaming API', status: 'Operational' },
        { name: 'Website CMS', status: 'Operational' },
        { name: 'Billing Services', status: 'Operational' },
        { name: 'AI Imaging Engine', status: 'Degraded Performance' },
        { name: 'CDN Delivery', status: 'Operational' },
        { name: 'Analytics Pipeline', status: 'Operational' },
    ];

    const getStatusColor = (status: string) => {
        if (status === 'Operational') return 'bg-green-400';
        if (status === 'Degraded Performance') return 'bg-yellow-400';
        return 'bg-red-400';
    };

    return (
        <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg h-full">
            <div className="p-4 border-b border-gray-700 flex items-center">
                <ShieldCheckIcon className="h-6 w-6 mr-3 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">System Status</h3>
            </div>
            <div className="p-4">
                <ul className="space-y-3">
                    {services.map(service => (
                        <li key={service.name} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{service.name}</span>
                            <div className="flex items-center">
                                <span className={`mr-2 h-2 w-2 rounded-full ${getStatusColor(service.status)}`}></span>
                                <span className={`${getStatusColor(service.status).replace('bg', 'text')}`}>{service.status}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 text-xs text-center text-gray-400 border-t border-gray-700/50 pt-3">
                    All systems are being monitored.
                </div>
            </div>
        </div>
    );
};

export default SystemStatus;
