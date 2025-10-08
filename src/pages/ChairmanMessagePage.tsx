import React from 'react';
import { Quote } from 'lucide-react';
import Footer from '../components/Footer';

const ChairmanMessagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Chairman's Message</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <Quote className="h-16 w-16 text-[#00703C]" />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh,</strong>
            </p>

            <p>
              It is with great pleasure and profound gratitude to Allah (SWT) that I address you as the Chairman of the Kyambogo University Muslim Students Association (KYUMSA). Our organization stands as a beacon of Islamic values, academic excellence, and community service within our beloved institution.
            </p>

            <p>
              KYUMSA is more than just a student organization; it is a family united by faith, purpose, and a shared commitment to both spiritual and academic growth. We strive to create an environment where every Muslim student can thrive, practice their faith freely, and contribute meaningfully to the university community and society at large.
            </p>

            <p>
              Our mission is anchored in three fundamental pillars: strengthening Islamic knowledge through regular study circles and religious programs, promoting academic excellence through mentorship and support systems, and engaging in charitable works that reflect the compassionate teachings of Islam.
            </p>

            <p>
              As we navigate the challenges of modern university life, we remain steadfast in our commitment to maintaining the highest standards of Islamic conduct while excelling in our academic pursuits. We encourage all our members to be exemplary students, responsible citizens, and dedicated Muslims who contribute positively to society.
            </p>

            <p>
              I extend my heartfelt appreciation to our dedicated executive committee, our supportive members, and all those who contribute to making KYUMSA a vibrant and impactful organization. Together, we continue to build a legacy of faith, knowledge, and service.
            </p>

            <p>
              May Allah (SWT) bless our efforts, guide our paths, and grant us success in this life and the hereafter.
            </p>

            <p className="text-lg mt-8">
              <strong>Wassalamu Alaikum Wa Rahmatullahi Wa Barakatuh</strong>
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="font-semibold text-xl text-[#00703C]">Chairman</p>
              <p className="text-lg">Kyambogo University Muslim Students Association</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChairmanMessagePage;
