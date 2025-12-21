import React, { useState } from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const GalleryPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('gallery'));
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!pageData) {
    return <div>Loading...</div>;
  }

  // Find the gallery section
  const gallerySection = pageData.sections?.find(section => section.type === 'gallery');
  const images = gallerySection?.images || [];
  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-0 bg-white">
      <PageHeader 
        title={pageData.title || 'Our Gallery'}
        subtitle={pageData.meta?.description || ''}
        bgImage="/images/gallery/gallery-header.jpg"
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold border transition-colors ${selectedCategory === category ? 'bg-[#b73d34] text-white border-[#b73d34]' : 'bg-white text-[#b73d34] border-[#b73d34] hover:bg-[#f8e9e8]'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div key={img.id || idx} className="rounded-xl overflow-hidden shadow border border-gray-100 bg-gray-50 flex flex-col">
              <img
                src={img.url}
                alt={img.caption || 'Gallery Image'}
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
};

export default GalleryPage;
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((img) => (
                  <div 
                    key={img.id} 
                    className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => handleImageError(e, img.caption)}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-700">{img.caption}</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full" style={{ backgroundColor: COLORS.PRIMARY_PALE, color: COLORS.PRIMARY }}>
                        {img.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No images found in this category.
                </div>
              )}
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;