import React, { useState, useEffect } from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const GalleryPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('gallery'));
  useEffect(() => {
    if (pageData) {
      console.log('Gallery page data:', pageData);
    }
  }, [pageData]);
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
