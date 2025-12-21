
import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';

const PrivacyPage = ({ onNavigate }) => {
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
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title="Privacy Policy"
        subtitle="How we protect and use your information"
        variant="primary"
      />
      <PageSection bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Your privacy is important to us. This policy explains how we handle your data.</p>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: COLORS.PRIMARY_DARK }}>{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default PrivacyPage;
