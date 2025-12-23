
import React, { useEffect } from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';

import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const PrivacyPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('privacy'));
  useEffect(() => {
    if (pageData) {
      console.log('Privacy page data:', pageData);
    }
  }, [pageData]);
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly such as your name, email, phone number, and donation information. We also automatically collect certain information when you visit our website.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process donations, send important notices, and respond to your inquiries and requests.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information. We may share information with trusted third parties who assist us in operating our website and conducting our business.'
    },
    {
      title: 'Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, and destruction.'
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about this Privacy Policy, please contact us at privacy@sabrihelpage.org or call our office for more information.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Privacy Policy" subtitle="How we protect and use your information" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Your privacy is important to us
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              This policy explains how we handle your data and protect your privacy.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Privacy Policy Details</h3>
          <div className="space-y-8 text-gray-700">
            {sections.map((section, index) => (
              <div key={index} className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
                <div className="py-4 mr-4">
                  <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{section.title}</h4>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
