import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Footer from '../components/Footer';

const OurEventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Annual Islamic Conference',
      date: 'December 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'University Main Hall',
      attendees: '500+',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A full-day conference featuring renowned Islamic scholars discussing contemporary issues facing Muslim youth in higher education.'
    },
    {
      title: 'Weekly Islamic Study Circle',
      date: 'Every Friday',
      time: '2:00 PM - 4:00 PM',
      location: 'Kyambogo University Mosque',
      attendees: '100+',
      image: 'https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Regular study sessions covering Quran, Hadith, and Islamic jurisprudence with interactive discussions.'
    },
    {
      title: 'Ramadan Iftar Program',
      date: 'March 2026 (Daily)',
      time: 'Sunset',
      location: 'University Mosque',
      attendees: '200+',
      image: 'https://images.pexels.com/photos/6210749/pexels-photo-6210749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Daily communal iftar meals throughout Ramadan, bringing together the Muslim community in brotherhood.'
    },
    {
      title: 'KYUMSA Sports Day',
      date: 'January 20, 2026',
      time: '8:00 AM - 6:00 PM',
      location: 'University Sports Complex',
      attendees: '300+',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Annual sports tournament featuring football, volleyball, athletics, and other sports activities.'
    },
    {
      title: 'Community Charity Drive',
      date: 'November 30, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Campus Grounds',
      attendees: '150+',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collecting donations and distributing essential items to underprivileged communities around the university.'
    },
    {
      title: 'Islamic Arts & Culture Exhibition',
      date: 'February 10, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Center',
      attendees: '400+',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Showcase of Islamic calligraphy, poetry, traditional crafts, and cultural performances.'
    }
  ];

  const pastEvents = [
    {
      title: 'Eid-ul-Fitr Celebration 2025',
      date: 'April 2025',
      attendees: '600+',
      image: 'https://images.pexels.com/photos/3171762/pexels-photo-3171762.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Blood Donation Campaign',
      date: 'August 2025',
      attendees: '120+',
      image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Academic Excellence Awards',
      date: 'July 2025',
      attendees: '250+',
      image: 'https://images.pexels.com/photos/7944231/pexels-photo-7944231.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Events</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            KYUMSA organizes a diverse range of events throughout the year, from religious programs and academic seminars to sports activities and community service initiatives.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-[#00703C]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-[#00703C]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-[#00703C]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-[#00703C]" />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                  <p className="text-sm text-[#00703C] font-semibold">{event.attendees} Attendees</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Event Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-3">
                <Calendar className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Religious Programs</h3>
              <p className="text-sm">Islamic lectures, study circles, and spiritual gatherings</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-3">
                <Users className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Social Events</h3>
              <p className="text-sm">Community gatherings, celebrations, and networking events</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-3">
                <MapPin className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Community Service</h3>
              <p className="text-sm">Charity drives, outreach programs, and volunteer activities</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-3">
                <Clock className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Sports & Recreation</h3>
              <p className="text-sm">Sports tournaments, fitness activities, and outdoor events</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default OurEventsPage;
