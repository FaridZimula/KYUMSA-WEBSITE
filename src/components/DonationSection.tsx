import React from 'react';

const DonationSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Support Our Cause</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Your generous contribution helps us continue our mission of supporting students and the community. Every donation makes a difference.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#00703C] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-[#FFD300] mb-4">Airtel Money</h3>
            <p className="text-gray-200 mb-6">
              Use the details below to donate via Airtel Money.
            </p>
            <div className="space-y-4 text-white flex-grow flex flex-col items-center">
              <p><strong className="font-semibold">Number:</strong> +256 7XX XXX XXX</p>
              <p><strong className="font-semibold">Name:</strong> KYUMSA</p>
            </div>
            <a
              href="tel:*185*1*1*07XXXXXXX*AMOUNT#"
              className="mt-6 w-full bg-[#FFD300] text-gray-900 text-center px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Donate Now
            </a>
          </div>
          <div className="bg-[#00703C] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-[#FFD300] mb-4">MTN MOMO</h3>
            <p className="text-gray-200 mb-6">
              Use the details below to donate via MTN MOMO.
            </p>
            <div className="space-y-4 text-white flex-grow flex flex-col items-center">
              <p><strong className="font-semibold">Number:</strong> +256 7XX XXX XXX</p>
              <p><strong className="font-semibold">Name:</strong> KYUMSA</p>
            </div>
            <a
              href="tel:*165*1*1*07XXXXXXX*AMOUNT#"
              className="mt-6 w-full bg-[#FFD300] text-gray-900 text-center px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Donate Now
            </a>
          </div>
          <div className="bg-[#00703C] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-[#FFD300] mb-4">Bank Transfer</h3>
            <p className="text-gray-200 mb-6">
              For direct bank deposits, use the details below.
            </p>
            <div className="space-y-3 text-white flex flex-col items-center">
              <p><strong className="font-semibold">Bank Name:</strong> [Your Bank Name]</p>
              <p><strong className="font-semibold">Account Name:</strong> Kyambogo University Muslim Students Association</p>
              <p><strong className="font-semibold">Account Number:</strong> [Your Account Number]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;