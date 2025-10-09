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
      image: '/kyumsa mosque.jpg',
      title: 'Welcome to KYUMSA',
      description: 'Kyambogo University Muslim Students Association',
      buttonText: 'Learn More',
      buttonLink: 'our-profile'
    },
    {
      image: '/Slider 2.jpg',
      title: 'Join Our Community',
      description: 'Building Unity Through Faith and Education',
      buttonText: 'View Events',
      buttonLink: 'our-events'
    },
    {
      image: '/Slide 4.jpg',
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
      image: '/Reunion.jpg',
      color: 'green'
    },
    {
      title: 'Charity Drive',
      date: 'November 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Campus Main Hall',
      description: 'Community outreach program supporting underprivileged families',
      image: '/executive meeting.jpg',
      color: 'gray'
    },
    {
      title: 'Ramadan Iftar Gathering',
      date: 'March 2026',
      time: 'Daily at Sunset',
      location: 'University Mosque',
      description: 'Daily community iftar meals during the holy month of Ramadan',
      image: '/General assembly.jpg',
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
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h3 className="text-sm font-semibold text-gray-700"># Top Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1.5 bg-[#00703C] text-white text-xs font-medium rounded hover:bg-[#005A30] transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[67vh] overflow-hidden">
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
            <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-fade-in">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-justify">What We Do</h2>
          <p className="text-gray-600 mb-12 max-w-2xl text-justify">
            Discover our diverse programs and activities designed to nurture faith, excellence, and community service
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-8">
            <div className="group perspective-1000">
              <div className="relative h-56 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-[#00703C] rounded-lg p-6 flex flex-col items-center justify-center text-white backface-hidden">
                  <Users className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold">Community Building</h3>
                </div>
                <div className="absolute inset-0 bg-white border-2 border-[#00703C] rounded-lg p-6 flex items-center justify-center text-gray-800 backface-hidden rotate-y-180">
                  <p className="text-sm text-justify">Fostering unity and brotherhood among Muslim students through regular gatherings and activities</p>
                </div>
              </div>
            </div>
            <div className="group perspective-1000">
              <div className="relative h-56 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-[#00703C] rounded-lg p-6 flex flex-col items-center justify-center text-white backface-hidden">
                  <Calendar className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold">Islamic Studies</h3>
                </div>
                <div className="absolute inset-0 bg-white border-2 border-[#00703C] rounded-lg p-6 flex items-center justify-center text-gray-800 backface-hidden rotate-y-180">
                  <p className="text-sm text-justify">Weekly and daily Darusus sessions to deepen understanding of Islamic knowledge and practice</p>
                </div>
              </div>
            </div>
            <div className="group perspective-1000">
              <div className="relative h-56 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-[#00703C] rounded-lg p-6 flex flex-col items-center justify-center text-white backface-hidden">
                  <MapPin className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold">Charity Work</h3>
                </div>
                <div className="absolute inset-0 bg-white border-2 border-[#00703C] rounded-lg p-6 flex items-center justify-center text-gray-800 backface-hidden rotate-y-180">
                  <p className="text-sm text-justify">Organizing outreach programs and supporting underprivileged communities through regular initiatives</p>
                </div>
              </div>
            </div>
            <div className="group perspective-1000">
              <div className="relative h-56 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-[#00703C] rounded-lg p-6 flex flex-col items-center justify-center text-white backface-hidden">
                  <Mail className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold">Student Support</h3>
                </div>
                <div className="absolute inset-0 bg-white border-2 border-[#00703C] rounded-lg p-6 flex items-center justify-center text-gray-800 backface-hidden rotate-y-180">
                  <p className="text-sm text-justify">Providing academic guidance, mentorship, and resources to help students excel in their studies</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 mt-16 text-justify">Upcoming Events</h2>
          <p className="text-gray-600 mb-12 max-w-2xl text-justify">
            Stay connected with our community through various events and activities throughout the year
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#00703C] text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
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
                  <p className="text-sm opacity-90 text-justify">{event.description}</p>
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
