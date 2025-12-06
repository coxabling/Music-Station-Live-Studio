
import React, { useState } from 'react';
import DataTable from '../DataTable';
import { PlusIcon } from '../../IconComponents';
import Modal from '../Modal';

interface Station {
    id: number;
    name: string;
    owner: string;
    plan: string;
    status: 'Live' | 'Offline' | 'Maintenance';
    listeners: number;
    storage: string;
    bandwidth: string;
}

const StationsManagementPage: React.FC = () => {
    const [stationsData, setStationsData] = useState<Station[]>([
        { id: 1, name: 'Pulse FM', owner: 'John Smith', plan: 'Business', status: 'Live', listeners: 10432, storage: '65.2/75 GB', bandwidth: '41.8/50 TB' },
        { id: 2, name: 'Retro Rewind', owner: 'Sam Wilson', plan: 'Pro', status: 'Live', listeners: 8765, storage: '18.1/20 GB', bandwidth: '15.2/20 TB' },
        { id: 3, name: 'Jazz Cafe', owner: 'Tom Harding', plan: 'Pro', status: 'Offline', listeners: 0, storage: '5.4/20 GB', bandwidth: '2.1/20 TB' },
        { id: 4, name: 'Indie Wave', owner: 'Emily White', plan: 'Starter', status: 'Live', listeners: 1234, storage: '1.8/2 GB', bandwidth: '0.8/1 TB' },
        { id: 5, name: 'Classical Moods', owner: 'Chen Wei', plan: 'Pro', status: 'Maintenance', listeners: 0, storage: '10.2/20 GB', bandwidth: '8.7/20 TB' },
        { id: 6, name: 'The Rock Block', owner: 'Maria Garcia', plan: 'Business', status: 'Live', listeners: 5678, storage: '45.0/75 GB', bandwidth: '33.3/50 TB' },
        { id: 7, name: 'Talk Radio Central', owner: 'Admin', plan: 'Business', status: 'Live', listeners: 2345, storage: '22.9/75 GB', bandwidth: '19.4/50 TB' },
        { id: 8, name: 'ChillHop Beats', owner: 'Admin', plan: 'Starter', status: 'Offline', listeners: 0, storage: '0.5/2 GB', bandwidth: '0.1/1 TB' },
        { id: 9, name: 'Global News Network', owner: 'Jane Doe', plan: 'Enterprise', status: 'Live', listeners: 15987, storage: '120/200 GB', bandwidth: '98.5/100 TB' },
        { id: 10, name: 'Sports Hub', owner: 'Admin', plan: 'Business', status: 'Live', listeners: 9541, storage: '55.6/75 GB', bandwidth: '48.1/50 TB' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStation, setEditingStation] = useState<Station | null>(null);

    const handleOpenModal = (station: Station | null = null) => {
        setEditingStation(station);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingStation(null);
    };

    const handleDeleteStation = (id: number) => {
        if(window.confirm('Are you sure you want to delete this station?')) {
            setStationsData(stationsData.filter(s => s.id !== id));
        }
    }

  return (
    <>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Manage Stations</h2>
            <button onClick={() => handleOpenModal()} className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                <PlusIcon className="h-5 w-5 mr-2" />
                Add New Station
            </button>
        </div>

        <DataTable
            title="All Stations"
            columns={[
                { key: 'name', header: 'Station Name' },
                { key: 'owner', header: 'Owner' },
                { key: 'plan', header: 'Plan' },
                { key: 'status', header: 'Status' },
                { key: 'listeners', header: 'Listeners' },
                { key: 'storage', header: 'Storage' },
                { key: 'bandwidth', header: 'Bandwidth' },
                { key: 'actions' as any, header: 'Actions' },
            ]}
            data={stationsData}
            renderRow={(station) => (
                <>
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{station.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{station.owner}</td>
                    <td className="px-6 py-4">{station.plan}</td>
                    <td className="px-6 py-4">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${station.status === 'Live' ? 'bg-green-100 text-green-800' : station.status === 'Offline' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {station.status}
                        </span>
                    </td>
                    <td className="px-6 py-4">{station.listeners.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{station.storage}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{station.bandwidth}</td>
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                        <button onClick={() => handleOpenModal(station)} className="font-medium text-primary-400 hover:text-primary-300">Edit</button>
                        <button onClick={() => handleDeleteStation(station.id)} className="font-medium text-red-400 hover:text-red-300">Delete</button>
                    </td>
                </>
            )}
        />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingStation ? 'Edit Station' : 'Add New Station'}>
            <form>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                        <label htmlFor="station-name" className="block text-sm font-medium text-gray-300">Station Name</label>
                        <input type="text" name="station-name" id="station-name" defaultValue={editingStation?.name} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>
                     <div>
                        <label htmlFor="owner" className="block text-sm font-medium text-gray-300">Owner</label>
                        <input type="text" name="owner" id="owner" defaultValue={editingStation?.owner} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="plan" className="block text-sm font-medium text-gray-300">Plan</label>
                        <select id="plan" name="plan" defaultValue={editingStation?.plan} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            <option>Starter</option>
                            <option>Pro</option>
                            <option>Business</option>
                            <option>Enterprise</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-300">Status</label>
                        <select id="status" name="status" defaultValue={editingStation?.status} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            <option>Live</option>
                            <option>Offline</option>
                            <option>Maintenance</option>
                        </select>
                    </div>
                </div>
                 <div className="mt-8 pt-5 border-t border-gray-700">
                    <div className="flex justify-end">
                        <button type="button" onClick={handleCloseModal} className="bg-gray-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
                            Cancel
                        </button>
                        <button type="submit" onClick={(e) => { e.preventDefault(); handleCloseModal(); }} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    </>
  );
};

export default StationsManagementPage;
