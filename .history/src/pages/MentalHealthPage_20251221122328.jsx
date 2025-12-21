
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const MentalHealthPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Mental Health" subtitle="Awareness, Support, and Care" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Banner Image */}
        <div className="w-full rounded-xl h-64 md:h-96 overflow-hidden mb-10 shadow-lg">
          <img
            src={IMAGE_URLS.MENTAL_HEALTH}
            alt="Mental Health Support"
            className="w-full h-full object-cover"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Mental+Health'; }}
          />
        </div>

        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Welcome to <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Mental Health at Sabri Helpage</span>
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              Sabri Helpage works to break the stigma around mental health through counseling, awareness, and support groups. We believe in a society where everyone feels safe asking for help, being themselves, and growing with dignity and strength.
            </p>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">
              "To build a more emotionally aware and supportive society by putting mental health at the centre of everything we do."
            </p>
            <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
              — Sabri Helpage Mission
            </p>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Our Focus Areas</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Awareness campaigns</p>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">College student programs</p>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <p className="leading-relaxed py-4 mr-4">Support networks</p>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Our Programs for Mental Health</h3>
          <div className="space-y-8">
            <div className="p-6 rounded-xl border-l-4 shadow-md" style={{ borderColor: COLORS.ACCENT_ORANGE, backgroundColor: COLORS.BG_LIGHT_GRAY }}>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">1. Getting the Word Out (Awareness)</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work hard to teach people in our communities about <strong>mental health</strong>, dispel myths, and encourage open conversations. We help people understand how important <strong>emotional health</strong> is and lower the stigma around it through talks, campaigns, and interactive sessions.
              </p>
            </div>
            <div className="p-6 rounded-xl border-l-4 shadow-md" style={{ borderColor: COLORS.ACCENT_ORANGE, backgroundColor: COLORS.BG_LIGHT_GRAY }}>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">2. Program for the Mental Health of College Students</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                We run structured mental health programs in colleges because we know that <strong>stress, anxiety, and emotional pressure are rising among young adults</strong>. These include awareness sessions, expressive activities, safe-space discussions, and <strong>early emotional screening</strong> to help students figure out what their mental health needs are and how to deal with them.
              </p>
            </div>
            <div className="p-6 rounded-xl border-l-4 shadow-md" style={{ borderColor: COLORS.ACCENT_ORANGE, backgroundColor: COLORS.BG_LIGHT_GRAY }}>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">3. Making a Network of People Who Will Help You (Support Pathways)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>
                  <strong>Podcast Conversations:</strong> Sharing real-life stories, advice, and expert opinions to connect with young people and help them become more emotionally strong.
                </li>
                <li>
                  <strong>One-on-one interactions:</strong> Giving people personalized help so they can talk about their problems and get kind advice on how to improve their health.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="p-8 rounded-2xl text-center shadow-lg bg-gradient-to-r from-orange-400 to-orange-500">
          <h3 className="text-2xl font-bold mb-3 text-white">Need Confidential Support?</h3>
          <p className="text-lg text-white mb-4">You are not alone. Reach out to our dedicated team today.</p>
          <a
            href="mailto:info@sabrihelpage.org"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow-xl hover:bg-gray-100"
          >
            Contact Our Team
          </a>
        </div>
      </main>
    </div>
  );
};

export default MentalHealthPage;