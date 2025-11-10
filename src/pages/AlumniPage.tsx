import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const AlumniPage: React.FC = () => {
  useEffect(() => {
    // Redirect to TAMU website immediately
    window.location.replace('https://www.tamuweb.site/');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="relative h-80 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">KYUMSA Alumni</h1>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Redirecting to Alumni Portal</h2>
            <p className="text-gray-700 mb-8 text-lg">
              You will be redirected to the official KYUMSA Alumni website in a moment.
            </p>
            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00703C]"></div>
            </div>
            <a
              href="https://www.tamuweb.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#00703C] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#005A30] transition-colors"
            >
              <span>Go to Alumni Portal Now</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <p className="text-sm text-gray-600 mt-6">
              If you are not redirected automatically, click the button above.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AlumniPage;
