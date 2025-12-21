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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <h3 className="text-xl font-bold text-primary mb-4">Dedication & Impact</h3>
              <p className="text-base text-gray-700 text-center leading-relaxed">
                Sabri Helpage is honored to dedicate the SocioFare Awards to those whose unwavering commitment, compassion, and service have made a profound and lasting impact on our society.
              </p>
              <p className="text-base text-gray-700 text-center leading-relaxed mt-4">
                These distinguished individuals work quietly and selflessly, driven by a deep sense of purpose.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <h3 className="text-xl font-bold text-primary mb-4">Inspiration & Unity</h3>
              <p className="text-base text-gray-700 text-center leading-relaxed">
                Through their remarkable contributions, they exemplify the highest ideals of community service and inspire us all to strive for a better, kinder world.
              </p>
              <p className="text-base text-gray-700 text-center leading-relaxed mt-4">
                Their actions foster resilience and unity, reminding us that true progress is achieved through collective hope and dedicated service to others.
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

        {/* Mission Cards - Modern Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Dedication & Impact',
              description: 'Honoring those whose unwavering commitment and compassion have made a lasting impact on our society.'
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1" />
                </svg>
              ),
              title: 'Inspiration & Unity',
              description: 'Celebrating those who foster resilience and unity, inspiring us all to strive for a better, kinder world.'
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans min-h-[260px] justify-center hover:shadow-md transition-shadow"
            >
              <div className="p-2 rounded-lg bg-primary/10 mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 text-center">{card.title}</h3>
              <p className="text-gray-700 text-center text-base leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SociofarePage;