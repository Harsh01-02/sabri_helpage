
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const MentalHealthPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Mental Health" subtitle="Awareness, Support, and Care" />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <img
            src={IMAGE_URLS.MENTAL_HEALTH}
            alt="Mental Health Support"
            className="w-full aspect-[16/7] min-h-[200px] object-cover rounded-xl shadow"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Mental+Health'; }}
          />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
            Why Mental Health Matters
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Sabri Helpage works to break the stigma around mental health through counseling, awareness, and support groups. We believe in a society where everyone feels safe asking for help, being themselves, and growing with dignity and strength.
          </p>
          <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.PRIMARY }}>
            Our Focus
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
            <li>Awareness campaigns and open conversations</li>
            <li>College student mental health programs</li>
            <li>Support networks and safe spaces</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.PRIMARY }}>
            How We Help
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
            <li>Workshops and talks to dispel myths and encourage emotional health</li>
            <li>Structured programs in colleges for early screening and support</li>
            <li>Personalized help and podcast conversations to build resilience</li>
          </ul>
          <div className="bg-orange-100 rounded-xl p-6 text-center mt-8">
            <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.ACCENT_ORANGE }}>
              Need Confidential Support?
            </h4>
            <p className="text-gray-700 mb-2">You are not alone. Reach out to our dedicated team today.</p>
            <a
              href="mailto:info@sabrihelpage.org"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow hover:bg-gray-100"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentalHealthPage;