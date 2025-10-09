import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Footer from '../components/Footer';

const OurExecutivesPage: React.FC = () => {
  const executives = [
    {
      name: 'Chairman',
      position: 'Chairperson',
      image: 'https://image9004.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Overall leadership and strategic direction of KYUMSA'
    },
    {
      name: 'Vice Chairman',
      position: 'Vice Chairperson',
      image: 'https://imahoto-3785079.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Assists the Chairman and coordinates organizational activities'
    },
    {
      name: 'General Secretary',
      position: 'General Secretary',
      image: 'https://images.1239291.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Administrative coordination and communication management'
    },
    {
      name: 'Finance Secretary',
      position: 'Finance Secretary',
      image: 'https://imageo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Financial management and budgeting'
    },
    {
      name: 'Publicity Secretary',
      position: 'Publicity Secretary',
      image: 'https://im38/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Marketing, communications, and public relations'
    },
    {
      name: 'Da\'wah Secretary',
      position: 'Da\'wah Secretary',
      image: 'https://images.pexelss&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Islamic outreach and awareness programs'
    },
    {
      name: 'Academic Secretary',
      position: 'Academic Secretary',
      image: 'https://images.pexels.com/photos/3184296/pexels-phoress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Academic support and educational programs'
    },
    {
      name: 'Sports Secretary',
      position: 'Sports Secretary',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Sports activities and physical wellness programs'
    },
    {
      name: 'Sisters\' Representative',
      position: 'Sisters\' Representative',
      image: 'https://imagexels-photo-3184639eg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      responsibilities: 'Coordination of female students\' affairs and welfare'
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Executive Committee</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet our dedicated executive committee members who work tirelessly to serve the Muslim student community at Kyambogo University. They are committed to upholding Islamic values while promoting academic excellence and social responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[1280/1300] overflow-hidden">
                <img
                  src={executive.image}
                  alt={executive.position}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h3>
                <p className="text-[#00703C] font-semibold mb-3">{executive.position}</p>
                <p className="text-gray-700 text-sm mb-4">{executive.responsibilities}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-[#00703C]" />
                    <span>kyumsa@kyambogo.ac.ug</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#00703C]" />
                    <span>+256 XXX XXX XXX</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
