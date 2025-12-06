
import React from 'react';
import StatCard from '../StatCard';
import LineChart from '../LineChart';
import DoughnutChart from '../DoughnutChart';
import { MonetizationIcon, StreamingIcon, RadioTowerIcon, UsersIcon } from '../../IconComponents';

const AnalyticsPage: React.FC = () => {
    
    const planDistributionData = [
        { label: 'Starter', value: 120, color: '#3b82f6' },
        { label: 'Pro', value: 95, color: '#8b5cf6' },
        { label: 'Business', value: 65, color: '#10b981' },
        { label: 'Enterprise', value: 7, color: '#f59e0b' },
    ];
    
    return (
        <>
            <h2 className="text-2xl font-bold text-white mb-6">Platform Analytics</h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Monthly Recurring Revenue" value="$42,389" change="+12.5%" changeType="increase" icon={MonetizationIcon} />
                <StatCard title="Total Listener Hours (Mo)" value="1.2M" change="+8.2%" changeType="increase" icon={StreamingIcon} />
                <StatCard title="New Stations (Mo)" value="32" change="+3" changeType="increase" icon={RadioTowerIcon} />
                <StatCard title="New Users (Mo)" value="115" change="-10" changeType="decrease" icon={UsersIcon} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                    <LineChart title="Revenue Growth (Last 12 Months)" data={[10, 15, 12, 18, 25, 23, 28, 35, 33, 40, 41, 42]} />
                </div>
                 <div className="lg:col-span-1">
                    <DoughnutChart title="Station Plan Distribution" data={planDistributionData} />
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <LineChart title="New User Signups (Last 30 Days)" data={[5, 8, 6, 10, 9, 12, 11, 15, 18, 14, 16, 20, 22, 19, 25, 23, 28, 30, 26, 29, 35, 32, 38, 40, 37, 42, 45, 41, 48, 50]} />
                 <LineChart title="Daily Active Listeners (Last 30 Days)" data={[8, 9, 8.5, 9.5, 10, 11, 10.5, 12, 11, 11.5, 12.8, 12.5, 13, 12.9, 13.5, 14, 13.8, 14.2, 14.5, 14.1, 15, 14.8, 15.2, 15.5, 15.3, 16, 15.8, 16.2, 16.5, 16.3]} />
            </div>
        </>
    );
};

export default AnalyticsPage;
