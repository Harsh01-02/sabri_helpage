
import React from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';

const iconMap = {
  star: (
    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.172 3.247 1.179-6.873L2 9.753l6.908-1.004L12 2.5l3.092 6.249L22 9.753l-5.007 4.371 1.179 6.873z" /></svg>
  ),
  users: (
    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 10-8 0v5m12 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a6 6 0 0112 0z" /></svg>
  ),
  network: (
    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h7m-7 0H5" /></svg>
  ),
};

const CSRSummitPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('csr-summit'));

  if (!pageData) return <div>Loading...</div>;

  // Extract sections
  const heroSection = pageData.sections?.find(s => s.type === 'hero_banner');
  const aboutCardsSection = pageData.sections?.find(s => s.type === 'about_cards');
  const highlightsSection = pageData.sections?.find(s => s.type === 'summit_highlights');
  const registrationSection = pageData.sections?.find(s => s.type === 'registration_cta');

  return (
    <section className="py-16 md:py-24 bg-bg-light-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        {heroSection && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-10 md:p-16 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{heroSection.title}</h1>
              <p className="text-xl mb-8">{heroSection.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-10">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{heroSection.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  <span>{heroSection.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Cards */}
        {aboutCardsSection && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {aboutCardsSection.cards?.map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl shadow-lg flex flex-col justify-center h-full">
                <h2 className="text-2xl font-bold text-primary mb-4">{card.heading}</h2>
                {card.description && <p className="text-gray-700 leading-relaxed">{card.description}</p>}
                {card.list && (
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    {card.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Summit Highlights */}
        {highlightsSection && (
          <div className="bg-white p-10 rounded-xl shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8">{highlightsSection.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {highlightsSection.highlights?.map((highlight, idx) => (
                <div key={idx}>
                  <div className="mx-auto mb-4">
                    {iconMap[highlight.icon] || null}
                  </div>
                  <p className="font-semibold">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration CTA */}
        {registrationSection && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">{registrationSection.heading}</h2>
            <p className="text-gray-700 mb-8">{registrationSection.description}</p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-white bg-primary hover:bg-primary-dark transition duration-200 text-lg shadow-lg"
            >
              <span>{registrationSection.buttonText}</span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CSRSummitPage;
