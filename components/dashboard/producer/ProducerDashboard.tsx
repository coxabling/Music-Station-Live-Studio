
import React from 'react';
import ProducerOverview from './ProducerOverview';
import SchedulePage from './SchedulePage';
import MediaLibraryPage from './MediaLibraryPage';
import ImagingStudioPage from './ImagingStudioPage';
import AnalyticsPage from './AnalyticsPage';


interface ProducerDashboardProps {
    activeView: string;
}

const ProducerDashboard: React.FC<ProducerDashboardProps> = ({ activeView }) => {
    const renderContent = () => {
        switch(activeView) {
            case 'schedule':
                return <SchedulePage />;
            case 'media':
                return <MediaLibraryPage />;
            case 'imaging':
                return <ImagingStudioPage />;
            case 'analytics':
                return <AnalyticsPage />;
            case 'dashboard':
            default:
                return <ProducerOverview />;
        }
    }

    return (
        <div className="animate-fade-in-up">
            {renderContent()}
        </div>
    );
};

export default ProducerDashboard;
