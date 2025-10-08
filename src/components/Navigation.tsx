import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const getNavItemClass = (page: string) => {
    return `px-4 py-2 rounded-md text-base font-medium transition-colors ${
      currentPage === page
        ? 'bg-[#00703C] text-white'
        : 'text-gray-800 hover:text-[#00703C]'
    }`;
  };

  const getMobileNavItemClass = (page: string) => {
    return `block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
      currentPage === page
        ? 'bg-[#00703C] text-white'
        : 'text-gray-800 hover:text-[#00703C]'
    }`;
  };

  return (
    <>
      <div className="bg-[#00703C] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">Mail Us on kyumsa00gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md">
                <span className="text-xs text-gray-500">Logo</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button onClick={() => handleNavigation('home')} className={getNavItemClass('home')}>
                Home
              </button>

              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`${getNavItemClass('about')} flex items-center space-x-1`}>
                  <span>About Us</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => handleNavigation('chairman-message')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Chairman's Message
                    </button>
                    <button
                      onClick={() => handleNavigation('our-profile')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Profile
                    </button>
                    <button
                      onClick={() => handleNavigation('our-executives')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Executives
                    </button>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('darusus')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`${getNavItemClass('darusus')} flex items-center space-x-1`}>
                  <span>Darusus</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'darusus' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => handleNavigation('weekly-darusus')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Weekly Darusus
                    </button>
                    <button
                      onClick={() => handleNavigation('daily-darusus')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Daily Darusus
                    </button>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('campus-life')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`${getNavItemClass('campus-life')} flex items-center space-x-1`}>
                  <span>Campus Life</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'campus-life' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => handleNavigation('our-events')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Events
                    </button>
                    <button
                      onClick={() => handleNavigation('kyumsa-caravan')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      The Kyumsa Caravan
                    </button>
                    <button
                      onClick={() => handleNavigation('our-gallery')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Gallery
                    </button>
                  </div>
                )}
              </div>

              <button onClick={() => handleNavigation('alumni')} className={getNavItemClass('alumni')}>
                Alumni
              </button>

              <button onClick={() => handleNavigation('contact')} className={getNavItemClass('contact')}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#00703C] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => handleNavigation('home')} className={getMobileNavItemClass('home')}>
              Home
            </button>

            <div className="space-y-1">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:text-[#00703C] font-medium"
              >
                <span>About Us</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'about' && (
                <div className="pl-6 space-y-1">
                  <button onClick={() => handleNavigation('chairman-message')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Our Chairman's Message
                  </button>
                  <button onClick={() => handleNavigation('our-profile')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Our Profile
                  </button>
                  <button onClick={() => handleNavigation('our-executives')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Our Executives
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'darusus' ? null : 'darusus')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:text-[#00703C] font-medium"
              >
                <span>Darusus</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'darusus' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'darusus' && (
                <div className="pl-6 space-y-1">
                  <button onClick={() => handleNavigation('weekly-darusus')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Weekly Darusus
                  </button>
                  <button onClick={() => handleNavigation('daily-darusus')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Daily Darusus
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'campus-life' ? null : 'campus-life')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:text-[#00703C] font-medium"
              >
                <span>Campus Life</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'campus-life' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'campus-life' && (
                <div className="pl-6 space-y-1">
                  <button onClick={() => handleNavigation('our-events')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Our Events
                  </button>
                  <button onClick={() => handleNavigation('kyumsa-caravan')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    The Kyumsa Caravan
                  </button>
                  <button onClick={() => handleNavigation('our-gallery')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#00703C]">
                    Our Gallery
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavigation('alumni')} className={getMobileNavItemClass('alumni')}>
              Alumni
            </button>

            <button onClick={() => handleNavigation('contact')} className={getMobileNavItemClass('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navigation;
