
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const ElderlyCarePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Elderly Care" subtitle="Dignity, Comfort, and Support for Seniors" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Banner Image */}
        <div className="w-full rounded-xl h-64 md:h-96 overflow-hidden mb-10 shadow-lg">
          <img
            src={IMAGE_URLS.ELDERLY_CARE}
            alt="Elderly Care"
            className="w-full h-full object-cover"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Elderly+Care'; }}
          />
        </div>

        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Welcome to <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Elderly Care at Sabri Helpage</span>
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              Sabri Helpage is a caring support system for older people, reaching out to those who are often ignored and unheard. Every older person deserves care, respect, and emotional security. We work hard to improve the quality of life for these people, ensuring age never gets in the way of health, comfort, or hope.
            </p>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">
              "To create a world where our elders are respected, supported, and loved."
            </p>
            <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
              — Sabri Helpage Mission
            </p>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Our Key Services for Seniors</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Full Eye Care: Regular eye exams, early detection of vision problems, and support for surgeries help seniors regain vision, confidence, and independence.</p>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Medication Help: Ensuring access to essential medicines for chronic illnesses, improving daily life and long-term health stability.</p>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Nourishing Food Programs: Providing balanced nutrition to support strength, immunity, and overall health for seniors.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="p-8 rounded-2xl text-center shadow-lg bg-gradient-to-r from-orange-400 to-orange-500">
          <h3 className="text-2xl font-bold mb-3 text-white">Support Our Elders</h3>
          <p className="text-lg text-white mb-4">Your donation helps us provide essential care, medication, and companionship.</p>
          <a
            href="/donate"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow-xl hover:bg-gray-100"
          >
            Donate Now
          </a>
        </div>
      </main>
    </div>
  );
};

export default ElderlyCarePage;
