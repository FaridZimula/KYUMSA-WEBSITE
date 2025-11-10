import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const DailyDarususPage: React.FC = () => {
  const weeklyDarusus = [
    {
      day: 'Monday',
      sessions: [
        {
          title: 'Monday Darus',
          instructor: 'Shk Sayyid Muhammad Lukenge',
          location: 'KYUMSA MOSQUE',
          time: 'After Maghrib prayers',
          image: '/Monday Darus.jpg'
        },
        {
          title: 'Ladies Halaq',
          instructor: 'Imaam Lithiwan Muweesi',
          location: 'KYUMSA MOSQUE',
          time: 'After Aswir prayers',
          image: '/Ladies Halaq.jpg'
        }
      ]
    },
    {
      day: 'Tuesday',
      sessions: [
        {
          title: 'Tuesday Darusu',
          instructor: 'Shk Yusuf Ali Bulafu',
          location: 'KYUMSA MOSQUE',
          time: 'After Maghrib prayers',
          image: '/tuesday darus.jpg'
        },
        {
          title: 'Fiqh Darusu',
          instructor: 'Shk Kizito Ibrahim',
          location: 'KYUMSA MOSQUE',
          time: 'After Aswir prayers',
          image: '/FIQH DARUS.jpg'
        }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        {
          title: 'Kennedy Darusu',
          instructor: 'Mr Kabagambe Musa',
          location: 'Nanziri Kennedy Grounds',
          time: 'After Ishae prayers',
          image: '/Kennedy Darusu.jpg'
        }
      ]
    },
    {
      day: 'Thursday',
      sessions: [
        {
          title: 'Gents Halaq',
          instructor: 'Shk Kizito Ibrahim',
          location: 'KYUMSA MOSQUE',
          time: 'After Aswir prayers',
          image: '/Gents Halaq.jpg'
        },
        {
          title: 'Ladies Quran Darusu',
          instructor: 'Shk Umar Saddamu Musinguzi & Sheikhat Taqqiya Katende',
          location: 'KYUMSA MOSQUE',
          time: 'After Aswir prayers',
          image: '/Ladies Quran Darusu.jpg'
        },
        {
          title: 'Nakasero Darusu',
          instructor: 'Shk Yusuf Ali Bulafu',
          location: 'Nakasero',
          time: 'After Maghrib prayers',
          image: '/Nakasero darus.jpg'
        }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        {
          title: 'Family Darusu',
          instructor: 'Shk Ashraf Mutagubya',
          location: 'KYUMSA MOSQUE',
          time: 'After Aswir prayers',
          image: '/Family Darus.jpg'
        },
        {
          title: 'Family Tea Gathering',
          instructor: 'Community Event',
          location: 'Chosen hall of residence',
          time: 'After Ishae prayers',
          image: '/Tea Gathering.jpg'
        }
      ]
    },
    {
      day: 'Saturday',
      sessions: [
        {
          title: 'Banda Darusu',
          instructor: 'Shk Muluga Mahad',
          location: 'BANDA MOSQUE',
          time: 'After Maghrib prayers',
          image: '/Banda Darus.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Daily Darus Cover image.jpg"
            alt="Daily Darusus Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Daily Darusus</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us throughout the week for enriching Islamic study sessions. Our weekly darusus cover various aspects of Islamic knowledge, guided by experienced scholars and instructors.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {weeklyDarusus.map((daySchedule, index) => (
            <div key={index}>
              <div className="flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-[#00703C] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">{daySchedule.day}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6">
                {daySchedule.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="bg-[#00703C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[350px]"
                  >
                    <div className="aspect-[127/130] md:w-[350px] md:h-[356px] overflow-hidden mx-auto">
                      <img
                        src={session.image}
                        alt={session.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                      <p className="text-white font-semibold mb-3">{session.instructor}</p>
                      <div className="space-y-2 text-sm text-white">
                        <div className="flex items-center justify-center">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-[#FFD300]" />
                          <span>{session.location}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-[#FFD300]" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Session Format</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">15 min</div>
              <p className="text-white">Teaching & Recitation</p>
            </div>
            <div className="text-center p-6 bg-black rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">10 min</div>
              <p className="text-white">Discussion & Reflection</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">5 min</div>
              <p className="text-white">Q&A Session</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-3">Ramadan Special Sessions</h3>
              <p className="text-sm">
                During Ramadan, we extend our daily sessions with additional Taraweeh prayers, Quran completion programs, and special lectures on fasting and spirituality.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-3">Exam Period Adjustments</h3>
              <p className="text-sm">
                During examination periods, we adjust our schedule to accommodate students' study needs while maintaining essential spiritual nourishment through shorter sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DailyDarususPage;
