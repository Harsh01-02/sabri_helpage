
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const ElderlyCarePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Elderly Care" subtitle="Dignity, Comfort, and Support for Seniors" />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <img
            src={IMAGE_URLS.ELDERLY_CARE}
            alt="Elderly Care"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Elderly+Care'; }}
          />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
            Elderly Care at Sabri Helpage
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Sabri Helpage is a caring support system for older people, reaching out to those who are often ignored and unheard. Every older person deserves care, respect, and emotional security. We work hard to improve the quality of life for these people, ensuring age never gets in the way of health, comfort, or hope.
          </p>
          <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.PRIMARY }}>
            Our Key Services
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
            <li>Full Eye Care: Exams, early detection, and surgery support for seniors</li>
            <li>Medication Help: Access to essential medicines for chronic illnesses</li>
            <li>Nourishing Food Programs: Balanced nutrition for strength and health</li>
          </ul>
          <div className="bg-orange-100 rounded-xl p-6 text-center mt-8">
            <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.ACCENT_ORANGE }}>
              Support Our Elders
            </h4>
            <p className="text-gray-700 mb-2">Your donation helps us provide essential care, medication, and companionship.</p>
            <a
              href="/donate"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow hover:bg-gray-100"
            >
              Donate Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ElderlyCarePage;
