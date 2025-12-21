import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const AWARD_IMAGES = [
  { src: '/awards/award1.jpg', date: 'March 2023' },
  { src: '/awards/award2.jpg', date: 'August 2022' },
  { src: '/awards/award3.jpg', date: 'December 2021' },
  { src: '/awards/award4.jpg', date: 'July 2020' },
];

const AwardsPage = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Awards" subtitle="Recognitions of our journey" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 mb-6">
            Let's Expand on Sabri Helpage's Impactful Work<br /><br />
            While formal awards and recognition are undoubtedly valuable, Sabri Helpage's greatest reward lies in the tangible impact it creates in the lives of its beneficiaries.<br /><br />
            The satisfaction, hope, and independence instilled in the elderly, street girls, and women we serve are the true testaments to our mission. Every smile, every success story, and every life transformed is an award in itself.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {AWARD_IMAGES.map((img, idx) => (
            <div key={img.src} className="flex flex-col items-center">
              <div className="w-full h-56 rounded-xl overflow-hidden shadow bg-white flex items-center justify-center mb-3">
                <img
                  src={img.src}
                  alt={`Award ${idx + 1}`}
                  className="object-contain w-full h-full"
                  onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x220?text=Award'; }}
                />
              </div>
              <span className="text-sm text-gray-500 font-medium">{img.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsPage;