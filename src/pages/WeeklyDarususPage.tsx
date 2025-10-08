import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import Footer from '../components/Footer';

const WeeklyDarususPage: React.FC = () => {
  const weeklySchedule = [
    {
      day: 'Friday',
      topic: 'Family Darusu',
      time: 'After Aswir Prayers',
      speaker: 'Shk Ashraf Mutagubya',
      location: 'KYUMSA MOSQUE',
      description: 'Join us for our weekly Family Darusu where we discuss Islamic teachings and their practical applications in family life and daily living.',
      image: 'https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300'
    },
    {
      day: 'Thursday',
      topic: 'Nakasero Darusu',
      time: 'After Maghrib Prayers',
      speaker: 'Shk Yusuf ali bulafu',
      location: 'Nanziri Kennedy Grounds',
      description: 'A comprehensive study session covering various aspects of Islamic knowledge including Quran, Hadith, and contemporary Islamic issues.',
      image: 'https://images.pexels.com/photos/8985523/pexels-photo-8985523.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Weekly Darusus Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Weekly Darusus</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us every week for comprehensive Islamic studies sessions. Our weekly Dars programs cover various aspects of Islamic knowledge including Tafsir, Hadith, and Fiqh, conducted by experienced scholars.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {weeklySchedule.map((session, index) => (
            <div key={index} className="bg-[#00703C] text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="w-full aspect-[1280/1300] overflow-hidden">
                  <img
                    src={session.image}
                    alt={session.topic}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{session.topic}</h3>
                    <span className="inline-block bg-[#FFD300] text-black px-4 py-2 rounded-md font-semibold text-sm w-fit">
                      {session.day}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-[#FFD300]" />
                      <span className="font-semibold">{session.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#FFD300]" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-[#FFD300]" />
                      <span>{session.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-100 leading-relaxed">{session.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Location:</strong> All sessions are held at the Kyambogo University Mosque</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Attendance:</strong> Open to all students, both male and female (separate seating arrangements available)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Materials:</strong> Please bring your own Quran and notebook for taking notes</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Questions:</strong> Q&A sessions are held after each lesson for clarifications</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Language:</strong> Sessions are conducted in English and Arabic with explanations in local languages when necessary</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Benefits of Attending Weekly Dars</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-sm">Strengthen your faith and connection with Allah through authentic Islamic knowledge</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community Building</h3>
              <p className="text-sm">Connect with fellow Muslim students and build lasting friendships</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practical Guidance</h3>
              <p className="text-sm">Learn how to apply Islamic teachings in your daily student life</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WeeklyDarususPage;
