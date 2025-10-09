import React, { useState } from 'react';
import Footer from '../components/Footer';

const ChairmanMessagePage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00703C]">Message from Our Chairman</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                Assalamu Alaikum Warahmatullahi Wabarakatuh,
              </p>
              <p>
                It is with immense gratitude to Allah (SWT) that I welcome you to the Kyambogo University Muslim Students Association (KYUMSA). As your Chairman, I am honored to serve an organization that stands as a beacon of faith, knowledge, and unity within our beloved institution.
              </p>
              <p>
                KYUMSA has been instrumental in fostering Islamic values, academic excellence, and moral character among Muslim students at Kyambogo University. Our mission transcends the boundaries of religious practice; we strive to create a holistic environment where students can grow spiritually, intellectually, and socially while maintaining their Islamic identity.
              </p>
              {isExpanded && (
                <>
                  <p>
                    Throughout the years, KYUMSA has organized numerous programs including daily and weekly Darusus (Islamic study circles), community outreach initiatives, charity drives, and spiritual gatherings. These activities not only strengthen our connection with Allah but also build lasting bonds of brotherhood and sisterhood among our members.
                  </p>
                  <p>
                    We believe that true success lies in balancing our Deen (religion) with our Dunya (worldly affairs). Therefore, we continuously work to support our members academically while nurturing their spiritual growth. Our association provides mentorship programs, academic support, and creates platforms for students to engage in meaningful Islamic discourse.
                  </p>
                  <p>
                    As we navigate the challenges of contemporary university life, KYUMSA remains committed to being a support system for all Muslim students. We encourage active participation in all our activities and welcome new ideas that can help us serve our community better.
                  </p>
                  <p>
                    I extend my heartfelt appreciation to all our members, executives, and supporters who have contributed to the success of this organization. May Allah accept our efforts and make us among those who serve His Deen with sincerity.
                  </p>
                  <p className="font-semibold">
                    "And hold firmly to the rope of Allah all together and do not become divided." (Quran 3:103)
                  </p>
                  <p className="italic">
                    Together, let us continue building a community that reflects the true essence of Islam - one of peace, knowledge, compassion, and unity.
                  </p>
                  <p className="font-semibold mt-6">
                    Barakallahu Feekum,<br />
                    SSAGALA LUQMAN<br />
                    Chairman, KYUMSA
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 bg-[#00703C] text-white hover:bg-[#005A30] transition-colors font-semibold"
              style={{ width: '150px', height: '50px' }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ width: '400px', height: '600px' }}>
              <img
                src="/Chairman's image.jpg"
                alt="Chairman"
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
