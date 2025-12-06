import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.084l.955 3.43A1 1 0 007 16h6a1 1 0 00.955-.688L14.916 12H15a3 3 0 000-6h-3.763L18 3zM5 8a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z"/>
            </svg>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Music Station Live. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;