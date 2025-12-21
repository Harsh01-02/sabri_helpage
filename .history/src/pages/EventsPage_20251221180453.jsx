

import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const EventsPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('events'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Events page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <PageHeader title={pageData.title || 'Events'} subtitle={pageData.meta?.description || ''} />
      <div className="max-w-3xl mx-auto px-4">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'events') {
            return (
              <div key={idx}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: COLORS.PRIMARY }}>{section.title}</h2>
                {section.years && (
                  <div className="flex justify-center gap-4 mb-10">
                    {section.years.map((y, i) => (
                      <button
                        key={y}
                        onClick={() => section.setYear && section.setYear(y)}
                        className={`px-5 py-2 rounded-full font-semibold border transition-colors ${section.year === y ? 'bg-[#b73d34] text-white border-[#b73d34]' : 'bg-white text-[#b73d34] border-[#b73d34] hover:bg-[#f8e9e8]'}`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                )}
                {section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {section.images.map((img, idx) => (
                      <div key={img} className="rounded-xl overflow-hidden shadow border border-gray-100 bg-gray-50">
                        <img
                          src={img}
                          alt={`Event ${idx + 1}`}
                          className="w-full h-56 object-cover"
                          onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/600x300?text=Event+Image'; }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default EventsPage;
