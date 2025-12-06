
import React from 'react';
import DJOverview from './DJOverview';
import LiveStudioPage from './LiveStudioPage';
import SchedulePage from './SchedulePage';

interface DJDashboardProps {
    activeView: string;
}

const DJDashboard: React.FC<DJDashboardProps> = ({ activeView }) => {
    const renderContent = () => {
        switch(activeView) {
            case 'live-studio':
                return <LiveStudioPage />;
            case 'schedule':
                return <SchedulePage />;
            case 'dashboard':
            default:
                return <DJOverview />;
        }
    }

    return (
        <div className="animate-fade-in-up">
            {renderContent()}
        </div>
    );
};

export default DJDashboard;
