import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const ChairmanMessagePage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [chairmanData, setChairmanData] = useState({
    name: 'SSAGALA LUQMAN',
    title: 'Chairman KYUMSA 2025-2026',
    image: "/Chairman's image.jpg",
    message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

It is with immense gratitude to Allah (SWT) that I welcome you to the Kyambogo University Muslim Students Association (KYUMSA). As your Chairman, I am honored to serve an organization that stands as a beacon of faith, knowledge, and unity within our beloved institution.

KYUMSA has been instrumental in fostering Islamic values, academic excellence, and moral character among Muslim students at Kyambogo University. Our mission transcends the boundaries of religious practice; we strive to create a holistic environment where students can grow spiritually, intellectually, and socially while maintaining their Islamic identity.`
  });

  useEffect(() => {
    const saved = localStorage.getItem('chairmanMessage');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setChairmanData(parsed);
      } catch (e) {
        console.error('Error loading chairman message:', e);
      }
    }
  }, []);

  // Listen for storage changes and admin save events to update in real-time
  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem('chairmanMessage');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setChairmanData(parsed);
        } catch (e) {
          console.error('Error loading chairman message:', e);
        }
      }
    };

    const handleStorageChange = () => loadData();
    const handleAdminSave = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'chairmanMessage') {
        loadData();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleStorageChange);
    window.addEventListener('adminDataSaved', handleAdminSave as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleStorageChange);
      window.removeEventListener('adminDataSaved', handleAdminSave as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/kyumsa mosque.jpg"
            alt="Chairman Message Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Our Chairman's Message</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start md:px-8">
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-sm md:max-w-none md:w-[400px] md:h-[600px]">
              <img
                src={chairmanData.image}
                alt="Chairman"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#00703C] text-white p-3 md:p-4 text-center">
                <h3 className="text-lg md:text-xl font-bold">{chairmanData.name}</h3>
                <p className="text-xs md:text-sm">{chairmanData.title}</p>
              </div>
            </div>
          </div>
          
          <div className="order-2 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#00703C] text-center md:text-left">Message from Our Chairman</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              {isExpanded ? (
                <div className="whitespace-pre-line">{chairmanData.message}</div>
              ) : (
                <p>{chairmanData.message.split('\n\n')[0] || chairmanData.message.split('\n').slice(0, 3).join('\n')}</p>
              )}
            </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#00703C] text-white hover:bg-[#005A30] transition-colors font-semibold rounded-md"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChairmanMessagePage;
