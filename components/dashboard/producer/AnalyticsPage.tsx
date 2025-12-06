
import React from 'react';
import StatCard from '../StatCard';
import LineChart from '../LineChart';
import DoughnutChart from '../DoughnutChart';
import { StreamingIcon, AnalyticsIcon, CalendarIcon, MediaIcon } from '../../IconComponents';

const AnalyticsPage: React.FC = () => {
    
    const listenerDeviceData = [
        { label: 'Desktop', value: 45, color: '#3b82f6' },
        { label: 'Mobile', value: 35, color: '#8b5cf6' },
        { label: 'Smart Speaker', value: 15, color: '#10b981' },
        { label: 'Other', value: 5, color: '#f59e0b' },
    ];
    
    return (
        <>
            <h2 className="text-2xl font-bold text-white mb-6">Station Analytics: Pulse FM</h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Average Listeners" value="8,105" change="-1.2%" changeType="decrease" icon={StreamingIcon} />
                <StatCard title="Total Listening Hours (24h)" value="15,340" change="+5.6%" changeType="increase" icon={AnalyticsIcon} />
                <StatCard title="Most Popular Show" value="The Drive Home" icon={CalendarIcon} />
                <StatCard title="Most Played Jingle" value="Morning Jingle" icon={MediaIcon} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                    <LineChart title="Listener Trends (Last 24 Hours)" data={[2, 3, 4, 6, 8, 9, 8, 7, 6, 5, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2]} />
                </div>
                 <div className="lg:col-span-1">
                    <DoughnutChart title="Listener Devices" data={listenerDeviceData} />
                </div>
            </div>
            
             <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg mt-8">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Top 5 Shows by Listening Hours</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Show</th>
                      <th scope="col" className="px-6 py-3">Host</th>
                      <th scope="col" className="px-6 py-3">Average Listeners</th>
                      <th scope="col" className="px-6 py-3">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-700/40">
                      <td className="px-6 py-4 font-medium text-white">The Drive Home</td>
                      <td className="px-6 py-4">Alex Ray</td>
                      <td className="px-6 py-4">10,981</td>
                      <td className="px-6 py-4">21,962</td>
                    </tr>
                     <tr className="bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-700/40">
                      <td className="px-6 py-4 font-medium text-white">Morning Rush</td>
                      <td className="px-6 py-4">Jenna Parks</td>
                      <td className="px-6 py-4">9,540</td>
                      <td className="px-6 py-4">28,620</td>
                    </tr>
                     <tr className="bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-700/40">
                      <td className="px-6 py-4 font-medium text-white">After Hours</td>
                      <td className="px-6 py-4">DJ Nightshade</td>
                      <td className="px-6 py-4">7,321</td>
                      <td className="px-6 py-4">14,642</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </>
    );
};

export default AnalyticsPage;
