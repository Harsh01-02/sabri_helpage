
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const OurCausesLandingPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state)=>state.getPageBySlug("ourcauseslanding")) // this line gets the data for home page from the global store
  React.useEffect(() => {
    if (pageData) {
      console.log("ILC page data:", pageData); 
  }})
  const getText = (key, fallback) => (texts && typeof texts.get === 'function' && texts.get(key)) || fallback;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader
        title={getText('ourCausesTitle', 'Our Causes')}
        subtitle={getText('ourCausesSubtitle', 'Three focused missions driving our impact across communities')}
        eyebrow={getText('ourCausesEyebrow', 'What We Do')}
      />

      {/* Mental Health Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <div className="mb-6 flex justify-center"><Badge>Awareness</Badge></div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            {getText('causeMentalTitle', 'Mental Health Awareness')}
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <p className="font-medium italic mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
            {getText('causeMentalSubtitle', '“Breaking the silence”')}
          </p>
          <p className="text-base text-gray-700 text-center leading-relaxed py-4">
            {getText('causeMentalBody', 'Mental health remains a taboo subject in many Indian households. Sabri Helpage is dedicated to de-stigmatizing mental illness through awareness campaigns and counseling support.')}
          </p>
          <p className="text-base text-gray-700 text-center leading-relaxed py-4">
            {getText('causeMentalBody2', 'We organize workshops to help young people recognize the signs of depression and anxiety, fostering a generation that is not afraid to ask for help.')}
          </p>
          <Button variant="outline" onClick={() => onNavigate?.('mental-health')}>
            Read More
          </Button>
        </div>

        {/* Elderly Care Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <div className="mb-6 flex justify-center"><Badge tone="primary">Core Focus</Badge></div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            {getText('causeElderlyTitle', 'Elderly Care & Dignity')}
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <p className="text-base text-gray-700 text-center leading-relaxed py-4">
            {getText('causeElderlyBody', 'We support abandoned seniors with medical camps, legal aid, and essential supplies, ensuring safety, dignity, and access to care.')}
          </p>
          <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="mt-2 min-w-[6px] h-[6px] rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></span>
              <span className="text-gray-700">
                {getText('causeElderlyPoint1', 'Legal & Medical Support for seniors to claim their rights and receive geriatric care.')}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 min-w-[6px] h-[6px] rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></span>
              <span className="text-gray-700">
                {getText('causeElderlyPoint2', 'Community programs combating loneliness and promoting active, healthy living.')}
              </span>
            </li>
          </ul>
          <Button variant="outline" onClick={() => onNavigate?.('elderly-care')}>
            Read More
          </Button>
        </div>

        {/* Girl Child & Education Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <div className="mb-6 flex justify-center"><Badge>Empowerment</Badge></div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            {getText('causeGirlTitle', 'Girl Child & Education')}
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <p className="text-base text-gray-700 text-center leading-relaxed py-4">
            {getText('causeGirlBody', 'Our focus is on street girls—the most invisible demographic in urban India. Education is the tool to break the cycle of poverty.')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full">
            <div className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: COLORS.PRIMARY_PALE }}>
              <h4 className="font-bold mb-2" style={{ color: COLORS.PRIMARY }}>
                {getText('causeGirlCard1Title', 'Hygiene & Dignity')}
              </h4>
              <p className="text-sm text-gray-600">
                {getText('causeGirlCard1Body', 'Menstrual hygiene kits and health education for adolescent girls.')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm" style={{ borderColor: COLORS.PRIMARY_PALE }}>
              <h4 className="font-bold mb-2" style={{ color: COLORS.PRIMARY }}>
                {getText('causeGirlCard2Title', 'Vocational Skills')}
              </h4>
              <p className="text-sm text-gray-600">
                {getText('causeGirlCard2Body', 'Beyond literacy, we provide skills to secure safe, dignified employment.')}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={() => onNavigate?.('girl-education')}>
            Read More
          </Button>
        </div>
      </main>
    </div>
  );
};

export default OurCausesLandingPage;
