
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const GirlEducationPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Girl Child Education" subtitle="Education and Empowerment" />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <img
            src={IMAGE_URLS.GIRL_EDUCATION}
            alt="Girl Child Empowerment"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Girl+Child+Support'; }}
          />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
            Girl Child Education at Sabri Helpage
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We believe every girl deserves access to education, respect, and the chance to dream without limits.
          </p>
          <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.PRIMARY }}>
            Our Main Goals
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
            <li>Helping girls get an education</li>
            <li>Monthly sanitary pad support</li>
          </ul>
          <div className="bg-orange-100 rounded-xl p-6 text-center mt-8">
            <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.ACCENT_ORANGE }}>
              Sponsor a Girl's Future
            </h4>
            <p className="text-gray-700 mb-2">Your support helps us provide education, dignity, and hope to girls in need.</p>
            <a
              href="/donate"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow hover:bg-gray-100"
            >
              Sponsor Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GirlEducationPage;