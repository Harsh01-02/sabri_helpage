// Fallback getText function for missing localization
function getText(_key, fallback) { return fallback; }

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { usePagesStore } from '../stores/pageInformationSlice';

const OurCausesLandingPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('causes'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Home page data:', pageData);
    }
  }, [pageData]);
  if (!pageData) return <div>Loading...</div>;
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      {pageData.sections.map((section, idx) => {
        if (section.type === 'header') {
          return (
            <PageHeader
              key={idx}
              title={section.title}
              subtitle={section.subtitle}
              eyebrow={section.eyebrow}
            />
          );
        }
        if (section.type === 'cause_card') {
          return (
            <div key={idx} className="bg-pink-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="mb-6 flex justify-center"><Badge tone={section.badgeTone || undefined}>{section.badge}</Badge></div>
              <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>{section.title}</h2>
              {section.subtitle && <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>}
              {section.subtitle && <p className="font-medium italic mb-6 text-center" style={{ color: COLORS.PRIMARY }}>{section.subtitle}</p>}
              {section.paragraphs && section.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-gray-700 text-center leading-relaxed py-4">{p}</p>
              ))}
              {section.description && <p className="text-base text-gray-700 text-center leading-relaxed py-4">{section.description}</p>}
              {section.bulletPoints && (
                <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
                  {section.bulletPoints.map((point, i) => (
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
                    <div key={i} className="bg-pink-50 p-6 rounded-xl border shadow-sm" style={{ borderColor: COLORS.PRIMARY_PALE }}>
                      <h4 className="font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{card.title}</h4>
                      <p className="text-sm text-gray-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              )}
              <Button variant="outline" onClick={() => onNavigate?.(section.buttonRoute)}>
                {section.buttonText || 'Read More'}
              </Button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default OurCausesLandingPage;
