import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Music Station Live', href: '#why-music-station-live' },
    { name: 'AI Studio', href: '#ai-prompt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.084l.955 3.43A1 1 0 007 16h6a1 1 0 00.955-.688L14.916 12H15a3 3 0 000-6h-3.763L18 3zM5 8a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
              Music Station Live
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
             <button onClick={onLoginClick} className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">
                Login
            </button>
            <button onClick={onLoginClick} className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;