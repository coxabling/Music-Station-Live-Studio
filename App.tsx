import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export type UserRole = 'admin' | 'producer' | 'dj';

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = useCallback((role: UserRole) => {
    setUserRole(role);
    setPage('dashboard');
  }, []);

  const handleLogout = useCallback(() => {
    setUserRole(null);
    setPage('landing');
  }, []);

  const showLogin = useCallback(() => {
    setPage('login');
  }, []);
  
  const showLanding = useCallback(() => {
    setPage('landing');
  }, []);

  switch (page) {
    case 'login':
      return <LoginPage onLogin={handleLogin} onBack={showLanding} />;
    case 'dashboard':
      if (userRole) {
        return <DashboardPage userRole={userRole} onLogout={handleLogout} />;
      }
      // Fallback to login if role is not set
      setPage('login');
      return null;
    case 'landing':
    default:
      return <LandingPage onLoginClick={showLogin} />;
  }
};

export default App;
