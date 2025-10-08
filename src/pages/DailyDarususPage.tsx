import React from 'react';
import { Sun, Moon, Clock, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

const DailyDarususPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Daily Darusus</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enhance your daily spiritual routine with our regular Islamic study sessions. These brief but impactful lessons help you stay connected with Islamic knowledge throughout your busy academic schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Morning Session</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="h-5 w-5 text-[#00703C]" />
                <span className="font-semibold">7:00 AM - 7:30 AM</span>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-5 w-5 text-[#00703C] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Daily Quran Recitation & Brief Tafsir</p>
                  <p className="text-gray-700">
                    Start your day with Quranic recitation followed by a brief explanation of the verses. Perfect for students looking to maintain their spiritual connection before classes begin.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Topics covered:</strong> Daily Quran reading, basic Tajweed, meanings and reflections
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Moon className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Evening Session</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="h-5 w-5 text-[#00703C]" />
                <span className="font-semibold">6:30 PM - 7:00 PM</span>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-5 w-5 text-[#00703C] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Hadith of the Day & Islamic Reminders</p>
                  <p className="text-gray-700">
                    End your day with a hadith study and practical Islamic reminders. Brief sessions designed to strengthen your faith and provide guidance for daily life.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Topics covered:</strong> Hadith studies, Islamic etiquette, practical life lessons
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Session Format</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#00703C] mb-2">15 min</div>
              <p className="text-gray-700">Teaching & Recitation</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#00703C] mb-2">10 min</div>
              <p className="text-gray-700">Discussion & Reflection</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#00703C] mb-2">5 min</div>
              <p className="text-gray-700">Q&A Session</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Guidelines for Attendance</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Punctuality:</strong> Please arrive on time as sessions are brief and begin promptly</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Dress Code:</strong> Modest Islamic dress is required for all attendees</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Mobile Phones:</strong> Please silence your phones during sessions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Participation:</strong> Active participation and questions are encouraged</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Recording:</strong> Audio recordings are available upon request for those who cannot attend</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Ramadan Special Sessions</h3>
              <p className="text-sm">
                During Ramadan, we extend our daily sessions with additional Taraweeh prayers, Quran completion programs, and special lectures on fasting and spirituality.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
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
