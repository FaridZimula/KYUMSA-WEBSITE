import React from 'react';
import { ExternalLink, Users, Award, Briefcase, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const AlumniPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">KYUMSA Alumni</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our alumni network is a testament to KYUMSA's impact on shaping leaders who excel in their careers while maintaining strong Islamic values. Stay connected with fellow graduates and continue supporting the next generation of Muslim students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Users className="h-12 w-12 text-[#00703C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-700">Active Alumni Members</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Award className="h-12 w-12 text-[#00703C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">20+</h3>
            <p className="text-gray-700">Years of Excellence</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Briefcase className="h-12 w-12 text-[#00703C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">30+</h3>
            <p className="text-gray-700">Countries Represented</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Alumni Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Networking Opportunities</h3>
                <p className="text-gray-700">Connect with fellow alumni across various industries and professions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mentorship Programs</h3>
                <p className="text-gray-700">Guide current students and share your professional experiences</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Annual Reunions</h3>
                <p className="text-gray-700">Participate in yearly gatherings and reconnect with old friends</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Development</h3>
                <p className="text-gray-700">Access workshops, seminars, and career development resources</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Projects</h3>
                <p className="text-gray-700">Collaborate on charitable initiatives and community service projects</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00703C] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Stay Informed</h3>
                <p className="text-gray-700">Receive updates about KYUMSA activities and university developments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <Heart className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Support Current Students</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Your success is an inspiration to current students. Help shape the next generation by sharing your knowledge, providing mentorship, or contributing to student welfare programs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
              <p className="text-sm">Guide students in their academic and career paths</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Scholarships</h3>
              <p className="text-sm">Support deserving students through financial aid</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Guest Lectures</h3>
              <p className="text-sm">Share your expertise with current students</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Portal</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit our official alumni website managed by Tamu Web Solutions to register, update your information, and stay connected with the KYUMSA alumni community.
          </p>
          <a
            href="https://tamuwebsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#00703C] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#005A30] transition-colors"
          >
            <span>Visit Alumni Portal</span>
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="text-sm text-gray-600 mt-6">
            Powered by Tamu Web Solutions
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AlumniPage;
