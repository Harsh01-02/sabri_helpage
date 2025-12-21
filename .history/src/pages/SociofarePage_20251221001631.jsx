import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';

const SociofarePage = () => {
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  
  // Static text fallback
  const getText = (key, fallback) => fallback;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader 
        title="SocioFare Awards"
        subtitle="Celebrating the unsung heroes of our community"
      />
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Main Content - Improved Text Box */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Honoring Unsung Heroes</h2>
            <div className="text-base md:text-lg text-gray-700 text-center space-y-6">
              <p>
                Sabri Helpage takes immense pride in dedicating the nursing house, where wellness, dedication, and unwavering support have created a lasting impact on society.
              </p>
              <p>
                These individuals work quietly behind the scenes, driven by compassion and purpose. We shine a light on their remarkable contributions and express our heartfelt gratitude for their continued efforts in making the world a better, kinder place for all.
              </p>
              <p>
                Their actions inspire resilience and a spirit of unity in our communities, reminding us that true change is built on selfless service and collective hope.
              </p>
            </div>
          </div>
        </div>


        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: getText('sociofareMissionTitle', 'Our Mission'),
              description: getText('sociofareMissionBody', 'The SocioFare is a movement dedicated to recognizing and celebrating selfless individuals who devote their lives to the service of others.')
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: getText('sociofareJoinTitle', 'Join Us'),
              description: getText('sociofareJoinBody', 'Be part of this celebration of real-life heroes who illuminate the path for others through their compassion and service.')
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-20 rounded-2xl p-10 md:p-12 text-white bg-primary">
          <h3 className="text-3xl font-bold mb-4">{getText('sociofareCtaTitle','Nominate a Hero')}</h3>
          <p className="mb-6 max-w-2xl mx-auto text-primary-pale">
            {getText('sociofareCtaBody','Know someone making a difference? Nominate them for the SocioFare Awards and help us recognize their incredible work.')}
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold text-primary hover:bg-gray-50 transition-colors">
            Submit Nomination
          </button>
        </div>
      </div>
    </div>
  );
};

export default SociofarePage;