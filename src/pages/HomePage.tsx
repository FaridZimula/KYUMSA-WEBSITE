import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Mail } from 'lucide-react';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Welcome to KYUMSA',
      description: 'Kyambogo University Muslim Students Association',
      buttonText: 'Learn More',
      buttonLink: 'our-profile'
    },
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Join Our Community',
      description: 'Building Unity Through Faith and Education',
      buttonText: 'View Events',
      buttonLink: 'our-events'
    },
    {
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Academic Excellence',
      description: 'Empowering Students for Success',
      buttonText: 'Explore Darusus',
      buttonLink: 'weekly-darusus'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Weekly Islamic Study Circle',
      date: 'Every Friday',
      time: '2:00 PM - 4:00 PM',
      location: 'Kyambogo University Mosque',
      description: 'Join us for our weekly study sessions covering various Islamic topics',
      image: 'https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      color: 'green'
    },
    {
      title: 'Charity Drive',
      date: 'November 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Campus Main Hall',
      description: 'Community outreach program supporting underprivileged families',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      color: 'gray'
    },
    {
      title: 'Ramadan Iftar Gathering',
      date: 'March 2026',
      time: 'Daily at Sunset',
      location: 'University Mosque',
      description: 'Daily community iftar meals during the holy month of Ramadan',
      image: 'https://images.pexels.com/photos/6210749/pexels-photo-6210749.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300',
      color: 'black'
    }
  ];

  const tags = [
    'Kyumsa Sports Gala',
    'KYUMSA CARAVAN',
    'Darusus',
    'Our Gallery',
    'Campus Life',
    'Community Service',
    'Islamic Studies',
    'Academic Excellence'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-[#1a1a2e] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">kyumsa00gmail.com</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Users className="h-16 w-16 text-[#00703C]" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">KYUMSA</h1>
              <p className="text-sm text-gray-600">Kyambogo University Muslim Students Association</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700"># Top Tags</h3>
            <div className="flex flex-wrap gap-2 justify-end">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full border border-gray-300 hover:bg-[#00703C] hover:text-white transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00703C]/80 to-[#005A30]/70" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in">
                  {slide.description}
                </p>
                <button
                  onClick={() => onNavigate(slide.buttonLink)}
                  className="bg-[#FFD300] text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors animate-fade-in"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Upcoming Events</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay connected with our community through various events and activities throughout the year
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  event.color === 'green'
                    ? 'bg-[#00703C] text-white'
                    : event.color === 'gray'
                    ? 'bg-gray-500 text-white'
                    : 'bg-black text-white'
                }`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('our-events')}
              className="bg-[#00703C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#005A30] transition-colors"
            >
              View All Events
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
