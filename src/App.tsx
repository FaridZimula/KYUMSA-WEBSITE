import React, { useState } from 'react';
import Navigation from './components/Navigation';
import LogoAnimation from './components/LogoAnimation';
import HomePage from './pages/HomePage';
import ChairmanMessagePage from './pages/ChairmanMessagePage';
import OurProfilePage from './pages/OurProfilePage';
import OurExecutivesPage from './pages/OurExecutivesPage';
import WeeklyDarususPage from './pages/WeeklyDarususPage';
import DailyDarususPage from './pages/DailyDarususPage';
import AlumniPage from './pages/AlumniPage';
import ContactUsPage from './pages/ContactUsPage';
import OurEventsPage from './pages/OurEventsPage';
import KyumsaCaravanPage from './pages/KyumsaCaravanPage';
import OurGalleryPage from './pages/OurGalleryPage';
import AdminDashboard from './pages/AdminDashboard';
import ChatBot from './components/ChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAnimation, setShowAnimation] = useState(true);

  // Determine initial page based on URL (supports /admin path and #hash for others)
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin' || path.endsWith('/admin')) {
      setCurrentPage('admin');
      return;
    }
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setCurrentPage(hash);
    }
  }, []);

  // Update URL when page changes
  React.useEffect(() => {
    if (currentPage === 'admin') {
      // Use path-based URL for admin
      window.history.replaceState(null, '', '/admin');
      return;
    }

    // For non-admin pages, keep using hash-based navigation to avoid server routing
    // Ensure base path is root when leaving admin or other path-based URLs
    if (window.location.pathname !== '/') {
      if (currentPage === 'home') {
        window.history.replaceState(null, '', '/');
        window.location.hash = '';
        return;
      }
      // Set to root first, then apply hash
      window.history.replaceState(null, '', '/');
    }

    if (currentPage !== 'home') {
      window.location.hash = currentPage;
    } else {
      window.location.hash = '';
    }
  }, [currentPage]);

  React.useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setCurrentPage(customEvent.detail);
    };
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'chairman-message':
        return <ChairmanMessagePage />;
      case 'our-profile':
        return <OurProfilePage />;
      case 'our-executives':
        return <OurExecutivesPage />;
      case 'weekly-darusus':
        return <WeeklyDarususPage />;
      case 'daily-darusus':
        return <DailyDarususPage />;
      case 'alumni':
        return <AlumniPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'our-events':
        return <OurEventsPage />;
      case 'kyumsa-caravan':
        return <KyumsaCaravanPage />;
      case 'our-gallery':
        return <OurGalleryPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  if (showAnimation) {
    return <LogoAnimation onComplete={() => setShowAnimation(false)} />;
  }

  // Don't show navigation or chatbot on admin page
  if (currentPage === 'admin') {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      {renderCurrentPage()}
      <ChatBot />
    </div>
  );
}

export default App;