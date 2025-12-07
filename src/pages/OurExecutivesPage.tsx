import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import Footer from '../components/Footer';

const OurExecutivesPage: React.FC = () => {
  const defaultExecutives = [
    {
      name: 'Chairman',
      position: 'Chairperson',
      image: 'https://image9004.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'chairman@kyumsa.ac.ug',
      responsibilities: 'Overall leadership and strategic direction of KYUMSA'
    },
    {
      name: 'Chairlady',
      position: 'Chairlady',
      image: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'chairlady@kyumsa.ac.ug',
      responsibilities: 'Co-leads KYUMSA initiatives, supports leadership and outreach'
    },
    {
      name: 'Vice Chairman',
      position: 'Vice Chairperson',
      image: 'https://imahoto-3785079.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'vicechair@kyumsa.ac.ug',
      responsibilities: 'Assists the Chairman and coordinates organizational activities'
    },
    {
      name: 'General Secretary',
      position: 'General Secretary',
      image: 'https://images.1239291.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'secretary@kyumsa.ac.ug',
      responsibilities: 'Administrative coordination and communication management'
    },
    {
      name: 'Finance Secretary',
      position: 'Finance Secretary',
      image: 'https://imageo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'finance@kyumsa.ac.ug',
      responsibilities: 'Financial management and budgeting'
    },
    {
      name: 'Publicity Secretary',
      position: 'Publicity Secretary',
      image: 'https://im38/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'publicity@kyumsa.ac.ug',
      responsibilities: 'Marketing, communications, and public relations'
    },
    {
      name: 'Da\'wah Secretary',
      position: 'Da\'wah Secretary',
      image: 'https://images.pexelss&cs=tinysrgb&w=1280&h=1300',
      email: 'dawah@kyumsa.ac.ug',
      responsibilities: 'Islamic outreach and awareness programs'
    },
    {
      name: 'Academic Secretary',
      position: 'Academic Secretary',
      image: 'https://images.pexels.com/photos/3184296/pexels-phoress&cs=tinysrgb&w=1280&h=1300',
      email: 'academic@kyumsa.ac.ug',
      responsibilities: 'Academic support and educational programs'
    },
    {
      name: 'Sports Secretary',
      position: 'Sports Secretary',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?compress&cs=tinysrgb&w=1280&h=1300',
      email: 'sports@kyumsa.ac.ug',
      responsibilities: 'Sports activities and physical wellness programs'
    },
    {
      name: 'Sisters\' Representative',
      position: 'Sisters\' Representative',
      image: 'https://imagexels-photo-3184639eg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      email: 'sisters@kyumsa.ac.ug',
      responsibilities: 'Coordination of female students\' affairs and welfare'
    }
    ,
    // Additional placeholder executives (to show more cards)
    {
      name: 'Executive Member 11',
      position: 'Member',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      email: 'member11@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 12',
      position: 'Member',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      email: 'member12@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 13',
      position: 'Member',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      email: 'member13@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 14',
      position: 'Member',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      email: 'member14@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 15',
      position: 'Member',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
      email: 'member15@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 16',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      email: 'member16@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 17',
      position: 'Member',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      email: 'member17@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 18',
      position: 'Member',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      email: 'member18@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 19',
      position: 'Member',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      email: 'member19@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    },
    {
      name: 'Executive Member 20',
      position: 'Member',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      email: 'member20@kyumsa.ac.ug',
      responsibilities: 'Member duties'
    }
  ];

  const [executives, setExecutives] = useState(defaultExecutives);

  useEffect(() => {
    const saved = localStorage.getItem('executives');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setExecutives(parsed);
        }
      } catch (e) {
        console.error('Error loading executives:', e);
      }
    }
  }, []);

  // Arrange hierarchy: put Chairman, Chairlady, and Vice Chairperson as top cards
  const topExecutives = executives.filter((e) => e.category === 'chairperson' || /chair(man|lady)?|vice/i.test(e.position || e.name || ''));
  const otherExecutives = executives.filter((e) => !topExecutives.includes(e));


  // Listen for storage changes and admin save events
  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem('executives');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setExecutives(parsed);
          }
        } catch (e) {
          console.error('Error loading executives:', e);
        }
      }
    };

    const handleStorageChange = () => loadData();
    const handleAdminSave = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'executives') {
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
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Kyumsa move.jpg"
            alt="Executive Committee Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">The Kyumsa Executives</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet our dedicated executive committee members who work tirelessly to serve the Muslim student community at Kyambogo University. They are committed to upholding Islamic values while promoting academic excellence and social responsibility.
          </p>
          <div className="mt-4">
          </div>
        </div>
        {/* Top row: Our Chairpersons */}
        {topExecutives.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#00703C] text-center mt-8 mb-6">Our Chairpersons</h2>
            <div className="grid grid-cols-2 gap-6 mb-12">
            {topExecutives.map((executive, idx) => (
              <div key={`top-${idx}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-[240px] flex items-center justify-center overflow-hidden bg-gray-100">
                  <img
                    src={executive.image}
                    alt={executive.position}
                    className="max-h-[240px] max-w-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{executive.name || 'Executive Name'}</h3>
                  <p className="text-[#00703C] font-medium mb-2">{executive.position || 'Position'}</p>
                  <div className="text-xs text-gray-600 mb-3 flex flex-col items-center justify-center gap-1">
                    <Mail className="h-4 w-4 text-[#00703C]" />
                    <span className="break-words max-w-[90%]">{executive.email || 'info@kyumsa.ac.ug'}</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </>
        )}

        {/* Committee Executives */}
        {otherExecutives.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#00703C] text-center mt-12 mb-6">Committee Executives</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherExecutives.map((executive, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src={executive.image}
                  alt={executive.position}
                  className="max-h-[240px] max-w-full object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{executive.name || 'Executive Name'}</h3>
                <p className="text-[#00703C] font-medium mb-2">{executive.position || 'Position'}</p>
                <div className="text-xs text-gray-600 mb-3 flex flex-col items-center justify-center gap-1">
                  <Mail className="h-4 w-4 text-[#00703C]" />
                  <span className="break-words max-w-[90%]">{executive.email || 'info@kyumsa.ac.ug'}</span>
                </div>
              </div>
            </div>
          ))}
            </div>
          </>
        )}

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Interested in joining our executive committee or contributing to KYUMSA's activities? We welcome dedicated students who share our vision and values. Contact us to learn about opportunities to serve.
          </p>
          <button className="bg-[#00703C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#005A30] transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurExecutivesPage;
