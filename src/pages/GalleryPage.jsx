
import React from 'react';


// ...existing code...
import { usePagesStore } from '../stores/pageInformationSlice';


const GalleryPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('gallery'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Gallery page data:', pageData);
    }
  }, [pageData]);

  // Extract sections
  const headerSection = pageData?.sections?.find(s => s.type === 'header');
  const gallerySection = pageData?.sections?.find(s => s.type === 'gallery_grid');

  return (
    <section className="py-0 bg-white">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2 text-primary">{headerSection?.title || 'Our Gallery'}</h1>
        <p className="text-lg text-gray-600">{headerSection?.subtitle || 'A glimpse into our work and impact'}</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(gallerySection?.images || []).map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow border border-gray-100 bg-gray-50 flex flex-col">
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-64 object-cover"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/400x300?text=Gallery+Image`;
                }}
              />
              <div className="p-4 text-center">
                <span className="text-sm text-gray-700">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default GalleryPage;
