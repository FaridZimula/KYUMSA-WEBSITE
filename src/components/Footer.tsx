import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00703C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">KYUMSA</h3>
            <p className="text-gray-100 mb-4 text-justify md:text-left">
              Kyambogo University Muslim Students Association is dedicated to fostering Islamic values, academic excellence, and community service among Muslim students at Kyambogo University.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#FFD300]" />
                <span>kyumsa00gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-100 hover:text-[#FFD300] transition-colors">Home</a></li>
              <li><a href="#events" className="text-gray-100 hover:text-[#FFD300] transition-colors">Events</a></li>
              <li><a href="#social-work" className="text-gray-100 hover:text-[#FFD300] transition-colors">Social Work</a></li>
              <li><a href="#academic" className="text-gray-100 hover:text-[#FFD300] transition-colors">Academic</a></li>
              <li><a href="#resources" className="text-gray-100 hover:text-[#FFD300] transition-colors">Resources</a></li>
              <li><a href="#news" className="text-gray-100 hover:text-[#FFD300] transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-100">Daily Prayer Services</span></li>
              <li><span className="text-gray-100">Islamic Studies</span></li>
              <li><span className="text-gray-100">Academic Support</span></li>
              <li><span className="text-gray-100">Community Outreach</span></li>
              <li><span className="text-gray-100">Scholarship Programs</span></li>
              <li><span className="text-gray-100">Cultural Events</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-sm text-gray-100 mb-4 md:mb-0">
              © 2024 KYUMSA - Kyambogo University Muslim Students Association. All rights reserved.
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-100 hover:text-[#FFD300] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-100 hover:text-[#FFD300] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-100 hover:text-[#FFD300] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-100 hover:text-[#FFD300] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-100">
            Website built by <span className="font-semibold text-[#FFD300]">Tamu Web Solutions</span>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#FFD300] via-white to-[#FFD300]"></div>
    </footer>
  );
};

export default Footer;