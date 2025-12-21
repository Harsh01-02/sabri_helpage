
import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const PublicationsPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('publications'));

  if (!pageData) {
    return <div>Loading...</div>;
  }

  const publicationsSection = pageData.sections?.find(section => section.type === 'publications');
  const publications = publicationsSection?.items || [];

  return (
    <section className="py-20" style={{ backgroundColor: COLORS.BG_LIGHT_PINK || '#f8e9e8' }}>
      <PageHeader title={pageData.title || 'Publications & Reports'} subtitle={pageData.meta?.description || ''} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg text-center">
              <div className="text-5xl mb-4">{pub.icon}</div>
              <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{pub.type}</p>
              {pub.downloadUrl && (
                <a href={pub.downloadUrl} className="px-4 py-2 bg-[#b73d34] text-white rounded-lg font-semibold" download>
                  Download
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
