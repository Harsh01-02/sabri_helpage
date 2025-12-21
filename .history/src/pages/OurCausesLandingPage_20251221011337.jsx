import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const OurCausesLandingPage = ({ onNavigate }) => {
  const [cfg, setCfg] = useState(null);

  useEffect(() => {
    let mounted = true;
    api
      .getConfig()
      .then((res) => {
        const data = res?.data || res;
        if (mounted) setCfg(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const texts = cfg?.texts;
  const getText = (key, fallback) =>
    (texts && typeof texts.get === 'function' && texts.get(key)) || fallback;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title={getText('ourCausesTitle', 'Our Causes')}
        subtitle={getText(
          'ourCausesSubtitle',
          'Three focused missions driving our impact across communities'
        )}
        eyebrow={getText('ourCausesEyebrow', 'What We Do')}
        variant="primary"
      />

      {/* Mental Health Awareness */}
      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl shadow-xl p-10 md:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: COLORS.PRIMARY_LIGHT }}></div>
            
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <Badge>Awareness</Badge>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: COLORS.PRIMARY_DARK }}>
                  {getText('causeMentalTitle', 'Mental Health Awareness')}
                </h2>
                
                <div className="inline-block px-6 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                  <p className="font-semibold text-xl italic" style={{ color: COLORS.PRIMARY }}>
                    {getText('causeMentalSubtitle', '"Breaking the silence"')}
                  </p>
                </div>
                
                <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                  {getText(
                    'causeMentalBody',
                    'Mental health remains a taboo subject in many Indian households. Sabri Helpage is dedicated to de-stigmatizing mental illness through awareness campaigns and counseling support.'
                  )}
                </p>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  {getText(
                    'causeMentalBody2',
                    'We organize workshops to help young people recognize the signs of depression and anxiety, fostering a generation that is not afraid to ask for help.'
                  )}
                </p>
                
                <Button variant="outline" onClick={() => onNavigate?.('mental-health')}>
                  Read More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Elderly Care & Dignity */}
      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl shadow-xl p-10 md:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-30 -ml-28 -mb-28 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: COLORS.PRIMARY_LIGHT }}></div>
            
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <Badge tone="primary">Core Focus</Badge>
              </div>
              
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.PRIMARY_DARK }}>
                  {getText('causeElderlyTitle', 'Elderly Care & Dignity')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  {getText(
                    'causeElderlyBody',
                    'We support abandoned seniors with medical camps, legal aid, and essential supplies, ensuring safety, dignity, and access to care.'
                  )}
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto mb-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform" style={{ backgroundColor: COLORS.PRIMARY }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {getText(
                          'causeElderlyPoint1',
                          'Legal & Medical Support for seniors to claim their rights and receive geriatric care.'
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform" style={{ backgroundColor: COLORS.PRIMARY }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {getText(
                          'causeElderlyPoint2',
                          'Community programs combating loneliness and promoting active, healthy living.'
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" onClick={() => onNavigate?.('elderly-care')}>
                  Read More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Girl Child & Education */}
      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl shadow-xl p-10 md:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-30 -ml-36 -mt-36 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: COLORS.PRIMARY_LIGHT }}></div>
            
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <Badge>Empowerment</Badge>
              </div>
              
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.PRIMARY_DARK }}>
                  {getText('causeGirlTitle', 'Girl Child & Education')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  {getText(
                    'causeGirlBody',
                    'Our focus is on street girls—the most invisible demographic in urban India. Education is the tool to break the cycle of poverty.'
                  )}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card" style={{ borderColor: COLORS.PRIMARY_LIGHT }}>
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl group-hover/card:scale-110 transition-transform" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
                    <svg className="w-7 h-7" style={{ color: COLORS.PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: COLORS.PRIMARY_DARK }}>
                    {getText('causeGirlCard1Title', 'Hygiene & Dignity')}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {getText('causeGirlCard1Body', 'Menstrual hygiene kits and health education for adolescent girls.')}
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card" style={{ borderColor: COLORS.PRIMARY_LIGHT }}>
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl group-hover/card:scale-110 transition-transform" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
                    <svg className="w-7 h-7" style={{ color: COLORS.PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: COLORS.PRIMARY_DARK }}>
                    {getText('causeGirlCard2Title', 'Vocational Skills')}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {getText('causeGirlCard2Body', 'Beyond literacy, we provide skills to secure safe, dignified employment.')}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" onClick={() => onNavigate?.('girl-education')}>
                  Read More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* SocioFare & Impact */}
      <PageSection bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2">
            <div className="relative text-white rounded-3xl p-10 md:p-12 h-full overflow-hidden group hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: COLORS.PRIMARY_DARK }}>
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-500 bg-white"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The SocioFare Awards</h2>
                <p className="text-xl leading-relaxed mb-8" style={{ color: COLORS.PRIMARY_PALE }}>
                  A unique initiative by Sabri Helpage to shine a spotlight on excellence in social welfare. Celebrate those who dedicate their lives to helping others.
                </p>
                <Button variant="primary">Nominate a Changemaker →</Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="p-8 md:p-10 rounded-3xl border-2 h-full hover:shadow-xl transition-all duration-300 group" style={{ backgroundColor: COLORS.PRIMARY, borderColor: COLORS.PRIMARY_LIGHT }}>
              <h4 className="text-2xl font-bold mb-8 text-white pb-4 border-b-2" style={{ borderColor: COLORS.PRIMARY_LIGHT }}>
                Our Impact
              </h4>
              <div className="space-y-8 text-white">
                <div className="group-hover:scale-105 transition-transform">
                  <div className="text-5xl md:text-6xl font-bold mb-2">50,000+</div>
                  <div className="text-sm uppercase tracking-wider font-medium" style={{ color: COLORS.PRIMARY_PALE }}>
                    Lives impacted
                  </div>
                </div>
                <div className="group-hover:scale-105 transition-transform">
                  <div className="text-5xl md:text-6xl font-bold mb-2">10+</div>
                  <div className="text-sm uppercase tracking-wider font-medium" style={{ color: COLORS.PRIMARY_PALE }}>
                    Years of Service
                  </div>
                </div>
                <div className="group-hover:scale-105 transition-transform">
                  <div className="text-5xl md:text-6xl font-bold mb-2">25+</div>
                  <div className="text-sm uppercase tracking-wider font-medium" style={{ color: COLORS.PRIMARY_PALE }}>
                    Regions covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default OurCausesLandingPage;