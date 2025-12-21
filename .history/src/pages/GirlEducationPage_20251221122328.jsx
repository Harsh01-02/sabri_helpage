
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const GirlEducationPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Girl Child Education" subtitle="Education and Empowerment" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Banner Image */}
        <div className="w-full rounded-xl h-64 md:h-96 overflow-hidden mb-10 shadow-lg">
          <img
            src={IMAGE_URLS.GIRL_EDUCATION}
            alt="Girl Child Empowerment"
            className="w-full h-full object-cover"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Girl+Child+Support'; }}
          />
        </div>

        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Welcome to <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Girl Child Education at Sabri Helpage</span>
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We believe every girl deserves access to education, respect, and the chance to dream without limits.
            </p>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">
              "To empower every girl to build a better and safer future through education and support."
            </p>
            <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
              — Sabri Helpage Mission
            </p>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Our Main Goals for Girls in Need</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Helping Girls Get an Education</p>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Monthly sanitary pad support</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="p-8 rounded-2xl text-center shadow-lg bg-gradient-to-r from-orange-400 to-orange-500">
          <h3 className="text-2xl font-bold mb-3 text-white">Sponsor a Girl's Future</h3>
          <p className="text-lg text-white mb-4">Your support helps us provide education, dignity, and hope to girls in need.</p>
          <a
            href="/donate"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow-xl hover:bg-gray-100"
          >
            Sponsor Now
          </a>
        </div>
      </main>
    </div>
  );
};

export default GirlEducationPage;