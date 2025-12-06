import React from 'react';
import { UserRole } from '../../App';
import { MenuIcon } from '../IconComponents';

interface DashboardHeaderProps {
  userRole: UserRole;
  toggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userRole, toggleSidebar }) => {
  return (
    <header className="relative z-10 flex-shrink-0 flex h-16 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 shadow-md">
      <button
        onClick={toggleSidebar}
        className="px-4 border-r border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
        aria-label="Open sidebar"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
             <h1 className="text-xl font-semibold text-white self-center">
              Welcome, <span className="capitalize">{userRole}</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
