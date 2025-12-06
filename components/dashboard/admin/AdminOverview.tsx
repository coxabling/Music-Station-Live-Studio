
import React from 'react';
import StatCard from '../StatCard';
import LineChart from '../LineChart';
import DataTable from '../DataTable';
import { MonetizationIcon, StreamingIcon, RadioTowerIcon, UsersIcon } from '../../IconComponents';
import SystemStatus from './SystemStatus';

const AdminOverview: React.FC = () => {

  const stationsData = [
    { id: 1, name: 'Pulse FM', status: 'Live', listeners: '10,432', plan: 'Business' },
    { id: 2, name: 'Retro Rewind', status: 'Live', listeners: '8,765', plan: 'Pro' },
    { id: 3, name: 'Jazz Cafe', status: 'Offline', listeners: '0', plan: 'Pro' },
    { id: 4, name: 'Indie Wave', status: 'Live', listeners: '1,234', plan: 'Starter' },
    { id: 5, name: 'Classical Moods', status: 'Maintenance', listeners: '0', plan: 'Pro' },
    { id: 6, name: 'The Rock Block', status: 'Live', listeners: '5,678', plan: 'Business' },
    { id: 7, name: 'Talk Radio Central', status: 'Live', listeners: '2,345', plan: 'Business' },
    { id: 8, name: 'ChillHop Beats', status: 'Offline', listeners: '0', plan: 'Starter' },
  ];

  const usersData = [
    { id: 1, name: 'Jane Doe', role: 'Admin', station: 'N/A', status: 'Active' },
    { id: 2, name: 'John Smith', role: 'Producer', station: 'Pulse FM', status: 'Active' },
    { id: 3, name: 'Alex Ray', role: 'DJ', station: 'Pulse FM', status: 'Active' },
    { id: 4, name: 'Sam Wilson', role: 'Producer', station: 'Retro Rewind', status: 'Inactive' },
    { id: 5, name: 'Maria Garcia', role: 'DJ', station: 'The Rock Block', status: 'Active' },
    { id: 6, name: 'Chen Wei', role: 'Producer', station: 'Classical Moods', status: 'Active' },
    { id: 7, name: 'Tom Harding', role: 'DJ', station: 'Jazz Cafe', status: 'Pending' },
    { id: 8, name: 'Emily White', role: 'DJ', station: 'Indie Wave', status: 'Active' },
  ];
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Admin Overview</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Total Revenue" value="$42,389" change="+12.5%" changeType="increase" icon={MonetizationIcon} />
                <StatCard title="Active Listeners" value="12,834" change="-2.1%" changeType="decrease" icon={StreamingIcon} />
                <StatCard title="Total Stations" value="287" change="+5 new" changeType="increase" icon={RadioTowerIcon} />
                <StatCard title="Active Users" value="642" change="+15 new" changeType="increase" icon={UsersIcon} />
            </div>

            <LineChart title="Platform Listener Hours (Last 30 Days)" data={[10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 130, 150]} />
        </div>
        <div className="lg:col-span-1">
            <SystemStatus />
        </div>
      </div>


      <DataTable 
        title="Active Stations"
        columns={[
            { key: 'name', header: 'Station Name' },
            { key: 'status', header: 'Status' },
            { key: 'listeners', header: 'Listeners' },
            { key: 'plan', header: 'Plan' },
            { key: 'actions' as any, header: 'Actions'},
        ]}
        data={stationsData}
        renderRow={(station) => (
            <>
                <td className="px-6 py-4 font-medium text-white">{station.name}</td>
                <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${station.status === 'Live' ? 'bg-green-100 text-green-800' : station.status === 'Offline' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {station.status}
                    </span>
                </td>
                <td className="px-6 py-4">{station.listeners}</td>
                <td className="px-6 py-4">{station.plan}</td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-400 hover:text-primary-300">Manage</a>
                </td>
            </>
        )}
      />

       <DataTable 
        title="Platform Users"
        columns={[
            { key: 'name', header: 'User Name' },
            { key: 'role', header: 'Role' },
            { key: 'station', header: 'Station' },
            { key: 'status', header: 'Status' },
            { key: 'actions' as any, header: 'Actions'},
        ]}
        data={usersData}
        renderRow={(user) => (
            <>
                <td className="px-6 py-4 font-medium text-white">{user.name}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.station}</td>
                <td className="px-6 py-4">
                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {user.status}
                    </span>
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-400 hover:text-primary-300">Edit</a>
                </td>
            </>
        )}
      />

    </>
  );
};

export default AdminOverview;
