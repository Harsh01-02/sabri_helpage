

import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const AboutPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('about'));
  React.useEffect(() => {
    if (pageData) {
      console.log('About page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData.title || 'About Us'} subtitle={pageData.meta?.description || ''} />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'welcome') {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.headline}
                </h2>
                <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                {section.description && (
                  <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                    <p className="text-base text-gray-700 text-center leading-relaxed py-4">{section.description}</p>
                  </div>
                )}
              </div>
            );
          }
          if (section.type === 'mission') {
            return (
              <div key={idx} className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                  <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">{section.text}</p>
                </div>
              </div>
            );
          }
          if (section.type === 'impact-quote') {
            return (
              <div key={idx} className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                  <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">{section.quote}</p>
                  <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
                    — {section.attribution}
                  </p>
                </div>
              </div>
            );
          }
          if (section.type === 'team') {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
                <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Governing Body</h3>
                <div className="space-y-8 text-gray-700">
                  {section.members?.map((member, i) => (
                    <div key={i} className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                      <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
                      <div className="py-4 mr-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{member.name}</h4>
                        <p className="leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (section.type === 'supporters') {
            return (
              <div key={idx} className="py-12 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Our Supporters</p>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition duration-500">
                    {section.supporters?.map((s, i) => (
                      <span key={i} className="text-xl md:text-2xl font-bold text-gray-600">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default AboutPage;
