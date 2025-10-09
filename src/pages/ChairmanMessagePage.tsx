import React from 'react';
import Footer from '../components/Footer';

const ChairmanMessagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/kyumsa mosque.jpg"
            alt="Chairman Message Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Chairman's Message</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00703C]">Message from Our Chairman</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to KYUCSA, where innovation meets opportunity. As your president, I'm excited to lead an organization that has consistently championed academic excellence and professional development in computing.
              </p>
              <p>
                This year, we're committed to expanding our reach through enhanced digital resources, industry partnerships, and cutting-edge workshops that prepare you for the evolving tech landscape.
              </p>
              <p>
                Together, we're not just building careers – we're shaping the future of technology in Uganda and beyond. Join us in this exciting journey of growth, learning, and innovation.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/Chairman's image.jpg"
                alt="President"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#00703C] text-white p-4">
                <h3 className="text-xl font-bold">SSAGALA LUQMAN</h3>
                <p className="text-sm">CHAIRMAN KYUMSA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChairmanMessagePage;
