import React from 'react';
import { BookOpen, Heart, Users, Target } from 'lucide-react';
import Footer from '../components/Footer';

const OurProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Kyumsa Men.jpg"
            alt="Our Profile Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Profile</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-[#00703C] text-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6">About KYUMSA</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              The Kyambogo University Muslim Students Association (KYUMSA) is a vibrant community of Muslim students dedicated to fostering Islamic values, academic excellence, and social responsibility. Established to serve the spiritual and academic needs of Muslim students at Kyambogo University, we have grown into one of the most active and influential student organizations on campus.
            </p>
            <p>
              Our association operates under the principles of Islamic brotherhood, mutual respect, and collective progress. We provide a supportive environment where students can practice their faith, pursue academic success, and develop leadership skills that will serve them throughout their lives.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#FFD300] rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="h-10 w-10 text-black" />
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <p className="text-black leading-relaxed">
              To be the leading Muslim student organization that nurtures holistic development, promotes Islamic values, and produces graduates who are academically excellent, spiritually grounded, and socially responsible.
            </p>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="h-10 w-10 text-white" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-white leading-relaxed">
              To provide a platform for Muslim students to strengthen their faith, excel academically, engage in community service, and develop leadership qualities that will positively impact society.
            </p>
          </div>
        </div>

        <div className="bg-[#00703C] text-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-[#FFD300] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Islamic Knowledge</h3>
              <p>
                We emphasize the importance of understanding and practicing authentic Islamic teachings through regular study circles and religious programs.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-[#FFD300] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Unity & Brotherhood</h3>
              <p>
                We foster a strong sense of community, mutual support, and Islamic brotherhood among all members regardless of their backgrounds.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-[#FFD300] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Social Responsibility</h3>
              <p>
                We actively engage in charitable works, community outreach, and social welfare programs to benefit both Muslims and non-Muslims.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Activities</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Daily and Weekly Islamic Studies:</strong> Regular Dars sessions covering Quran, Hadith, Fiqh, and other Islamic sciences</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Academic Support:</strong> Mentorship programs, study groups, and academic workshops to enhance student performance</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Social Welfare:</strong> Charity drives, community service projects, and support for underprivileged students</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Ramadan Programs:</strong> Daily Iftar gatherings, Taraweeh prayers, and special religious activities during the holy month</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Da'wah Activities:</strong> Islamic awareness campaigns and interfaith dialogue programs</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2"></div>
              <p><strong>Sports and Recreation:</strong> Organized sports activities and recreational events that promote healthy living</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProfilePage;
