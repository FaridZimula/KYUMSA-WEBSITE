import React from 'react';
import { Truck, Heart, Users, Gift, Target } from 'lucide-react';
import Footer from '../components/Footer';

const KyumsaCaravanPage: React.FC = () => {
  const initiatives = [
    {
      title: 'Medical Outreach',
      icon: Heart,
      description: 'Free medical checkups, consultations, and distribution of essential medicines to underserved communities.',
      impact: '500+ people served annually'
    },
    {
      title: 'Food Distribution',
      icon: Gift,
      description: 'Providing food packages and hot meals to families in need, especially during Ramadan and emergencies.',
      impact: '300+ families supported'
    },
    {
      title: 'Educational Support',
      icon: Users,
      description: 'Supplying school materials, books, and uniforms to children from disadvantaged backgrounds.',
      impact: '200+ students assisted'
    },
    {
      title: 'Community Development',
      icon: Target,
      description: 'Infrastructure projects including water wells, sanitation facilities, and community centers.',
      impact: '10+ projects completed'
    }
  ];

  const activities = [
    {
      image: '/Health Out Reach.jpg',
      title: 'Community Health Outreach',
      description: 'Our team visiting remote villages to provide essential services and support'
    },
    {
      image: '/KYUMSA Clean up.jpg',
      title: 'Community Clean Up',
      description: 'Organizing community clean-up drives to promote environmental awareness'
    },
    {
      image: '/Daily Darus Cover image.jpg',
      title: 'Dawa Outreach',
      description: 'Distributing food packages to families affected by economic hardships'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260)'
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white z-10">The Kyumsa Caravan</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Message from Our Caravan Amir</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-lg text-white leading-relaxed mb-4">
                The KYUMSA Caravan is our flagship community outreach program that takes the spirit of Islamic charity directly to communities in need. This mobile initiative represents our commitment to serving humanity and embodying the teachings of compassion and generosity in Islam.
              </p>
              <p className="text-lg text-white leading-relaxed mb-6">
                Through the Caravan, we mobilize students, volunteers, and resources to reach remote and underserved areas, providing essential services including medical care, food distribution, educational support, and community development projects. The program runs year-round with special emphasis during Ramadan and other significant occasions.
              </p>
              <button className="bg-[#FFD300] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors">
                Read Full Message
              </button>
            </div>
            <div className="w-full md:w-64 flex-shrink-0">
              <img
                src="/Allan copy.jpg"
                alt="Caravan Amir"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-[#FFD300]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{initiative.title}</h3>
                      <p className="text-white mb-3">{initiative.description}</p>
                      <p className="text-sm font-semibold text-[#FFD300]">{initiative.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Caravan in Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[127/130] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-700 text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#00703C] to-[#005A30] rounded-lg shadow-xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-sm">People Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-sm">Communities Reached</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-sm">Caravan Trips</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm">Active Volunteers</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <div className="mb-4">
                <Users className="h-12 w-12 mx-auto text-[#FFD300]" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-3">Volunteer</h3>
              <p className="text-white mb-4">Join our team of dedicated volunteers and participate in Caravan trips to serve communities in need.</p>
              <button className="bg-[#FFD300] text-gray-900 px-6 py-2 rounded-md hover:bg-[#FFC700] transition-colors font-semibold">
                Sign Up
              </button>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <div className="mb-4">
                <Gift className="h-12 w-12 mx-auto text-[#FFD300]" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-3">Donate</h3>
              <p className="text-white mb-4">Support our initiatives through financial contributions or donation of essential items and supplies.</p>
              <button className="bg-[#FFD300] text-gray-900 px-6 py-2 rounded-md hover:bg-[#FFC700] transition-colors font-semibold">
                Donate Now
              </button>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#00703C] to-[#005A30] rounded-lg">
              <div className="mb-4">
                <Heart className="h-12 w-12 mx-auto text-[#FFD300]" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-3">Partner</h3>
              <p className="text-white mb-4">Organizations and institutions can partner with us to expand our reach and impact.</p>
              <button className="bg-[#FFD300] text-gray-900 px-6 py-2 rounded-md hover:bg-[#FFC700] transition-colors font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Caravan Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#00703C] text-white px-4 py-2 rounded-md font-bold flex-shrink-0">
                DEC<br />15
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Medical Outreach - Namuwongo</h3>
                <p className="text-gray-700 text-sm">Free medical camp with doctors and nurses providing consultations and medicines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#00703C] text-white px-4 py-2 rounded-md font-bold flex-shrink-0">
                JAN<br />10
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Food Distribution - Katwe</h3>
                <p className="text-gray-700 text-sm">Distribution of food packages to 100 families in the community</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#00703C] text-white px-4 py-2 rounded-md font-bold flex-shrink-0">
                FEB<br />05
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Educational Support - Bwaise</h3>
                <p className="text-gray-700 text-sm">Providing school supplies and books to 150 students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KyumsaCaravanPage;
