

import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const GirlEducationPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('girl-education'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Girl Education page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData.title || 'Girl Child Education'} subtitle={pageData.meta?.description || ''} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'girl-education') {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>{section.title}</h2>
                {section.description && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">{section.description}</p>
                )}
                {section.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full">
                    {section.cards.map((card, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: COLORS.PRIMARY_PALE }}>
                        <h4 className="font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{card.title}</h4>
                        <p className="text-sm text-gray-600">{card.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.ctaText && section.ctaRoute && (
                  <div className="bg-orange-100 rounded-xl p-6 text-center mt-8">
                    <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.ACCENT_ORANGE }}>{section.ctaText}</h4>
                    <a
                      href={`/${section.ctaRoute}`}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow hover:bg-gray-100"
                    >
                      {section.ctaText}
                    </a>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default GirlEducationPage;