// Fallback getText function for missing localization
function getText(_key, fallback) { return fallback; }

import React, { useState, useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';
import { usePagesStore } from '../stores/pageInformationSlice'; // Keep this line

const SociofarePage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('sociofare'));
  React.useEffect(() => {
    if (pageData) {
      console.log('SocioFare page data:', pageData);
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
            />
          );
        }
        if (section.type === 'intro_cards') {
          return (
            <main key={idx} className="max-w-5xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {section.cards.map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                    <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>{card.heading}</h3>
                    <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                    {card.paragraphs.map((p, j) => (
                      <p key={j} className="text-base text-gray-700 text-center leading-relaxed py-4">{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </main>
          );
        }
        if (section.type === 'mission_cards') {
          return (
            <main key={idx} className="max-w-5xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {item.icon === 'shield' ? (
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                  </div>
                ))}
              </div>
            </main>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SociofarePage;