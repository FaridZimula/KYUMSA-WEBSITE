import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:faridzimula602@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260)'
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white z-10">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions, suggestions, or want to get involved with KYUMSA, feel free to reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <a href="mailto:faridzimula602@gmail.com" className="text-[#FFD300] hover:underline font-semibold">
              faridzimula602@gmail.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#FFD300] to-[#FFA500] rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-white font-semibold">Kyambogo University Mosque</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {formStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                Your email client will open shortly. Thank you for contacting us!
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                Something went wrong. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C] focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C] focus:border-transparent"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00703C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#005A30] transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 p-8 pb-4">Our Location</h2>
            <div className="h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7577832848!2d32.624540274532486!3d0.3523554997476868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba29e9faaaab%3A0xf2d245b6fc337798!2sKyambogo%20University%20Mosque!5e0!3m2!1sen!2sug!4v1234567890123!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kyambogo University Mosque Location"
              />
            </div>
            <div className="p-8 pt-4">
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                Kyambogo University Mosque<br />
                Kyambogo, Kampala, Uganda
              </p>
              <a
                href="https://www.google.com/maps/place/Kyambogo+University+Mosque/data=!4m7!3m6!1s0x177dba29e9faaaab:0xf2d245b6fc337798!8m2!3d0.3523555!4d32.6267299!16s%2Fg%2F11txmzf92t!19sChIJq6r66Sm6fRcRmHcz_LZF0vI?authuser=0&hl=en&rclk=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#00703C] hover:underline font-semibold"
              >
                <MapPin className="h-5 w-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Office Hours</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <h3 className="font-semibold text-white mb-2 text-lg">Weekdays</h3>
              <p className="text-white">Monday - Friday</p>
              <p className="text-[#FFD300] font-semibold text-lg mt-2">9:00 AM - 5:00 PM</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FFD300] to-[#FFA500] rounded-lg">
              <h3 className="font-semibold text-white mb-2 text-lg">Weekends</h3>
              <p className="text-white">Saturday - Sunday</p>
              <p className="text-white font-semibold text-lg mt-2">By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
