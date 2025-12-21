

import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';
import { usePagesStore } from '../stores/pageInformationSlice';

const SociofarePage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('sociofare'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Sociofare page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader 
        title={pageData.title || 'SocioFare Awards'}
        subtitle={pageData.meta?.description || 'Celebrating the unsung heroes of our community'}
      />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'sociofare-awards' || section.type === 'awards-events') {
            return (
              <div key={idx} className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {section.cards?.map((card, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                      {card.icon && <div className="mb-4">{card.icon}</div>}
                      <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>{card.title}</h3>
                      <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                      <p className="text-base text-gray-700 text-center leading-relaxed py-4">{card.description}</p>
                    </div>
                  ))}
                </div>
                {section.body && (
                  <div className="text-center text-gray-700 text-lg mb-8">{section.body}</div>
                )}
                {section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                    {section.images.map((img, idx) => (
                      <div key={img.src || idx} className="flex flex-col items-center">
                        <div className="w-full h-56 rounded-xl overflow-hidden shadow bg-white flex items-center justify-center mb-3">
                          <img
                            src={img.src}
                            alt={img.alt || `Sociofare Award ${idx + 1}`}
                            className="object-contain w-full h-full"
                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x220?text=Sociofare+Award'; }}
                          />
                        </div>
                        {img.date && <span className="text-sm text-gray-500 font-medium">{img.date}</span>}
                      </div>
                    ))}
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

export default SociofarePage;