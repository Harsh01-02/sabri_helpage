

import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const ElderlyCarePage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('elderly-care'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Elderly Care page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData.title || 'Elderly Care'} subtitle={pageData.meta?.description || ''} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'elderly-care') {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>{section.title}</h2>
                {section.description && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">{section.description}</p>
                )}
                {section.points && (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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

export default ElderlyCarePage;
