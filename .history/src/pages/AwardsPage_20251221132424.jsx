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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: COLORS.PRIMARY, letterSpacing: '0.01em' }}>
            Our True Rewards
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Let's Expand on Sabri Helpage's Impactful Work</span>
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              While <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>formal awards and recognition</span> are undoubtedly valuable, Sabri Helpage's greatest reward lies in the <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>tangible impact</span> it creates in the lives of its beneficiaries.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              The <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>satisfaction, hope, and independence</span> instilled in the elderly, street girls, and women we serve are the true testaments to our mission.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-2">
              Every <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>smile</span>, every <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>success story</span>, and every <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>life transformed</span> is an award in itself.
            </p>
          </div>
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