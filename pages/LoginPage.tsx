import React from 'react';
import { UserRole } from '../App';
import { AdminIcon, CreativeIcon, StreamingIcon } from '../components/IconComponents';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const roleOptions = [
    { role: 'admin' as UserRole, title: 'Admin', description: 'Manage stations, users, and platform analytics.', icon: AdminIcon },
    { role: 'producer' as UserRole, title: 'Producer', description: 'Manage schedules, media, and station imaging.', icon: CreativeIcon },
    { role: 'dj' as UserRole, title: 'DJ', description: 'Prepare for your show and go live to your audience.', icon: StreamingIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 animate-fade-in-up">
      <div className="flex items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.084l.955 3.43A1 1 0 007 16h6a1 1 0 00.955-.688L14.916 12H15a3 3 0 000-6h-3.763L18 3zM5 8a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
        <h1 className="text-3xl font-bold text-white">Music Station Live</h1>
      </div>

      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Select Your Role</h2>
        <div className="space-y-4">
          {roleOptions.map(({ role, title, description, icon: Icon }) => (
            <button
              key={role}
              onClick={() => onLogin(role)}
              className="w-full flex items-center text-left p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 border border-gray-600 hover:border-primary-500 transition-all duration-200"
            >
              <Icon className="h-8 w-8 text-primary-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <button onClick={onBack} className="mt-8 text-sm text-primary-400 hover:underline">
        &larr; Back to Home
      </button>
    </div>
  );
};

export default LoginPage;
