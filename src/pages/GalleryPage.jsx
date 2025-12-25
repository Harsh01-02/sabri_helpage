
import React from 'react';


const staticImages = [
  { url: '/event1.jpg', caption: 'Annual Charity Gala' },
  { url: '/event2.jpg', caption: 'Community Outreach Program' },
  { url: '/event3.jpg', caption: 'Health Camp' },
  { url: '/event4.jpg', caption: 'Volunteer Meetup' },
  { url: '/event5.jpg', caption: 'Elderly Care Initiative' },
  { url: '/event6.jpg', caption: 'Girl Child Education Drive' },
  { url: '/elderlyCareImg.jpg', caption: 'Elderly Care' },
  { url: '/MentalHealth.jpg', caption: 'Mental Health Workshop' },
  { url: '/girlChildEducation.jpg', caption: 'Girl Child Education' },
  { url: '/WaterFilteration.jpg', caption: 'Water Filtration Project' },
  { url: '/events1.jpg', caption: 'Fundraiser Walkathon' },
  { url: '/events2.jpg', caption: 'Awareness Campaign' },
];
import { usePagesStore } from '../stores/pageInformationSlice';


const GalleryPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('gallery'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Gallery page data:', pageData);
    }
  }, [pageData]);

  return (
    <section className="py-0 bg-white">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2 text-primary">Our Gallery</h1>
        <p className="text-lg text-gray-600">A glimpse into our work and impact</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staticImages.map((img, idx) => (
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
