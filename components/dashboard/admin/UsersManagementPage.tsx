
import React, { useState } from 'react';
import DataTable from '../DataTable';
import { PlusIcon } from '../../IconComponents';
import Modal from '../Modal';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'Producer' | 'DJ';
    station: string;
    status: 'Active' | 'Inactive' | 'Pending';
    lastLogin: string;
}

const UsersManagementPage: React.FC = () => {
    const [usersData, setUsersData] = useState<User[]>([
      { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Admin', station: 'N/A', status: 'Active', lastLogin: '2023-10-27 10:30 AM' },
      { id: 2, name: 'John Smith', email: 'john.smith@example.com', role: 'Producer', station: 'Pulse FM', status: 'Active', lastLogin: '2023-10-27 09:15 AM' },
      { id: 3, name: 'Alex Ray', email: 'alex.ray@example.com', role: 'DJ', station: 'Pulse FM', status: 'Active', lastLogin: '2023-10-26 08:00 PM' },
      { id: 4, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Producer', station: 'Retro Rewind', status: 'Inactive', lastLogin: '2023-09-15 03:20 PM' },
      { id: 5, name: 'Maria Garcia', email: 'maria.garcia@example.com', role: 'DJ', station: 'The Rock Block', status: 'Active', lastLogin: '2023-10-27 01:10 PM' },
      { id: 6, name: 'Chen Wei', email: 'chen.wei@example.com', role: 'Producer', station: 'Classical Moods', status: 'Active', lastLogin: '2023-10-25 11:45 AM' },
      { id: 7, name: 'Tom Harding', email: 'tom.harding@example.com', role: 'DJ', station: 'Jazz Cafe', status: 'Pending', lastLogin: 'N/A' },
      { id: 8, name: 'Emily White', email: 'emily.white@example.com', role: 'DJ', station: 'Indie Wave', status: 'Active', lastLogin: '2023-10-27 02:55 PM' },
      { id: 9, name: 'David Lee', email: 'david.lee@example.com', role: 'Producer', station: 'Global News Network', status: 'Active', lastLogin: '2023-10-27 08:05 AM' },
      { id: 10, name: 'Sarah Jones', email: 'sarah.jones@example.com', role: 'DJ', station: 'Sports Hub', status: 'Inactive', lastLogin: '2023-10-20 06:00 PM' },
    ]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const handleOpenModal = (user: User | null = null) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleDeleteUser = (id: number) => {
        if(window.confirm('Are you sure you want to delete this user?')) {
            setUsersData(usersData.filter(u => u.id !== id));
        }
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Manage Users</h2>
                <button onClick={() => handleOpenModal()} className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add New User
                </button>
            </div>

            {/* Added User generic type to DataTable to resolve property inference errors in renderRow */}
            <DataTable<User>
                title="All Users"
                columns={[
                    { key: 'name', header: 'Name' },
                    { key: 'email', header: 'Email' },
                    { key: 'role', header: 'Role' },
                    { key: 'station', header: 'Station' },
                    { key: 'status', header: 'Status' },
                    { key: 'lastLogin', header: 'Last Login' },
                    { key: 'actions' as any, header: 'Actions' },
                ]}
                data={usersData}
                renderRow={(user) => (
                    <>
                        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4">{user.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.station}</td>
                        <td className="px-6 py-4">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {user.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                        <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                             <button onClick={() => handleOpenModal(user)} className="font-medium text-primary-400 hover:text-primary-300">Edit</button>
                             <button onClick={() => handleDeleteUser(user.id)} className="font-medium text-red-400 hover:text-red-300">Delete</button>
                        </td>
                    </>
                )}
            />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingUser ? 'Edit User' : 'Add New User'}>
                <form>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="user-name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" name="user-name" id="user-name" defaultValue={editingUser?.name} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" name="email" id="email" defaultValue={editingUser?.email} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300">Role</label>
                            <select id="role" name="role" defaultValue={editingUser?.role} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                <option>Admin</option>
                                <option>Producer</option>
                                <option>DJ</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="station" className="block text-sm font-medium text-gray-300">Assigned Station</label>
                            <input type="text" name="station" id="station" defaultValue={editingUser?.station} className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="N/A for Admins" />
                        </div>
                    </div>
                    <div className="mt-8 pt-5 border-t border-gray-700">
                        <div className="flex justify-end">
                            <button type="button" onClick={handleCloseModal} className="bg-gray-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
                                Cancel
                            </button>
                            <button type="submit" onClick={(e) => { e.preventDefault(); handleCloseModal(); }} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500">
                                Save User
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default UsersManagementPage;
