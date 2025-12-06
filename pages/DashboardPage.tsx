
import React, { useState } from 'react';
import { UserRole } from '../App';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import AdminDashboard from '../components/dashboard/admin/AdminDashboard';
import ProducerDashboard from '../components/dashboard/producer/ProducerDashboard';
import DJDashboard from '../components/dashboard/dj/DJDashboard';

interface DashboardPageProps {
  userRole: UserRole;
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ userRole, onLogout }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useState('dashboard');

    const renderDashboard = () => {
        switch(userRole) {
            case 'admin': return <AdminDashboard activeView={activeView} />;
            case 'producer': return <ProducerDashboard activeView={activeView} />;
            case 'dj': return <DJDashboard activeView={activeView} />;
            default: return <div className="text-center text-red-500">Error: Invalid user role.</div>;
        }
    }

    return (
        <div className="flex h-screen bg-gray-800 text-gray-200 font-sans">
            <Sidebar 
                userRole={userRole} 
                onLogout={onLogout} 
                isOpen={sidebarOpen} 
                setIsOpen={setSidebarOpen}
                activeView={activeView}
                onNavigate={(view: any) => setActiveView(view)}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader userRole={userRole} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4 sm:p-6 lg:p-8">
                    {renderDashboard()}
                </main>
            </div>
        </div>
    );
};
export default DashboardPage;
