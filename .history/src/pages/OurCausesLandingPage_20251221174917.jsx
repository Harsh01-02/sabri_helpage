
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';


const OurCausesLandingPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state)=>state.getPageBySlug("ourcauseslanding"));
  React.useEffect(() => {
    if (pageData) {
      console.log("OurCausesLanding page data:", pageData);
    }
  }, [pageDaata]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader
        title={pageData.title || 'Our Causes'}
        subtitle={pageData.meta?.description || 'Three focused missions driving our impact across communities'}
        eyebrow={pageData.eyebrow || 'What We Do'}
      />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {pageData.sections?.map((section, idx) => {
          if (section.type === 'cause') {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <div className="mb-6 flex justify-center"><Badge>{section.badge || ''}</Badge></div>
                <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.title}
                </h2>
                <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                {section.subtitle && (
                  <p className="font-medium italic mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
                    {section.subtitle}
                  </p>
                )}
                {section.body && (
                  <p className="text-base text-gray-700 text-center leading-relaxed py-4">{section.body}</p>
                )}
                {section.body2 && (
                  <p className="text-base text-gray-700 text-center leading-relaxed py-4">{section.body2}</p>
                )}
                {section.points && (
                  <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 min-w-[6px] h-[6px] rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full">
                    {section.cards.map((card, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: COLORS.PRIMARY_PALE }}>
                        <h4 className="font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{card.title}</h4>
                        <p className="text-sm text-gray-600">{card.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.button && (
                  <Button variant="outline" onClick={() => onNavigate?.(section.button.target)}>
                    {section.button.label}
                  </Button>
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

export default OurCausesLandingPage;
