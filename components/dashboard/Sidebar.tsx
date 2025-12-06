
import React from 'react';
import { UserRole } from '../../App';
import { DashboardIcon, UsersIcon, RadioTowerIcon, AnalyticsIcon, CalendarIcon, MediaIcon, CreativeIcon, LogoutIcon, CloseIcon, MicrophoneIcon } from '../IconComponents';

type View = 'dashboard' | 'stations' | 'users' | 'analytics' | 'schedule' | 'media' | 'imaging' | 'live-studio';

interface SidebarProps {
  userRole: UserRole;
  onLogout: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeView: string;
  onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole, onLogout, isOpen, setIsOpen, activeView, onNavigate }) => {

  const navLinks = {
    admin: [
      { name: 'Dashboard', icon: DashboardIcon, view: 'dashboard' as View },
      { name: 'Stations', icon: RadioTowerIcon, view: 'stations' as View },
      { name: 'Users', icon: UsersIcon, view: 'users' as View },
      { name: 'Analytics', icon: AnalyticsIcon, view: 'analytics' as View },
    ],
    producer: [
      { name: 'Dashboard', icon: DashboardIcon, view: 'dashboard' as View },
      { name: 'Schedule', icon: CalendarIcon, view: 'schedule' as View },
      { name: 'Media Library', icon: MediaIcon, view: 'media' as View },
      { name: 'Imaging Studio', icon: CreativeIcon, view: 'imaging' as View },
      { name: 'Analytics', icon: AnalyticsIcon, view: 'analytics' as View },
    ],
    dj: [
      { name: 'Dashboard', icon: DashboardIcon, view: 'dashboard' as View },
      { name: 'My Schedule', icon: CalendarIcon, view: 'schedule' as View },
      { name: 'Live Studio', icon: MicrophoneIcon, view: 'live-studio' as View },
    ]
  };

  const content = (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 flex-shrink-0 px-4 bg-gray-900 border-b border-gray-700/50">
            <a href="#" className="text-xl font-bold text-white flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.084l.955 3.43A1 1 0 007 16h6a1 1 0 00.955-.688L14.916 12H15a3 3 0 000-6h-3.763L18 3zM5 8a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
                <span>MSL</span>
            </a>
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                <CloseIcon className="h-6 w-6" />
            </button>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navLinks[userRole].map((item) => (
              <button
                key={item.name}
                onClick={() => { onNavigate(item.view); setIsOpen(false); }}
                className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    activeView === item.view 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className={`mr-3 flex-shrink-0 h-6 w-6 ${
                    activeView === item.view ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                }`} aria-hidden="true" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-700/50 p-4">
           <button onClick={onLogout} className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
                <LogoutIcon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-300" aria-hidden="true" />
                Logout
           </button>
        </div>
      </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
         <div className="fixed inset-0 bg-gray-900/80" onClick={() => setIsOpen(false)}></div>
         <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
            {content}
         </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
           <div className="flex flex-col h-0 flex-1 bg-gray-800 border-r border-gray-700/50">
             {content}
           </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
