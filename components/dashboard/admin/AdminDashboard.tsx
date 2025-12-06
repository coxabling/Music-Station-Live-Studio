
import React from 'react';
import AdminOverview from './AdminOverview';
import StationsManagementPage from './StationsManagementPage';
import UsersManagementPage from './UsersManagementPage';
import AnalyticsPage from './AnalyticsPage';

interface AdminDashboardProps {
    activeView: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeView }) => {
    const renderContent = () => {
        switch(activeView) {
            case 'stations':
                return <StationsManagementPage />;
            case 'users':
                return <UsersManagementPage />;
            case 'analytics':
                return <AnalyticsPage />;
            case 'dashboard':
            default:
                return <AdminOverview />;
        }
    }

    return (
        <div className="animate-fade-in-up">
            {renderContent()}
        </div>
    );
};

export default AdminDashboard;
