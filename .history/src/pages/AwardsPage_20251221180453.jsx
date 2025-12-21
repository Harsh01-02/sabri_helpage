
import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const AwardsPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('awards'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Awards page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData.title || 'Awards'} subtitle={pageData.meta?.description || ''} />
      <div className="max-w-3xl mx-auto px-6">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'awards') {
            return (
              <div key={idx}>
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: COLORS.PRIMARY, letterSpacing: '0.01em' }}>{section.title}</h2>
                  <div className="mx-auto max-w-2xl">
                    {section.description && <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">{section.description}</p>}
                    {section.body && <p className="text-base md:text-lg text-gray-600 mb-4">{section.body}</p>}
                  </div>
                </div>
                {section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                    {section.images.map((img, idx) => (
                      <div key={img.src || idx} className="flex flex-col items-center">
                        <div className="w-full h-56 rounded-xl overflow-hidden shadow bg-white flex items-center justify-center mb-3">
                          <img
                            src={img.src}
                            alt={img.alt || `Award ${idx + 1}`}
                            className="object-contain w-full h-full"
                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x220?text=Award'; }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 font-medium">{img.date}</span>
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
    </section>
  );
};

export default AwardsPage;