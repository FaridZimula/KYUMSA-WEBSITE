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
import ChatBot from './components/ChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAnimation, setShowAnimation] = useState(true);

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