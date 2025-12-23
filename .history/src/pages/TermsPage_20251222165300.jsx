import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';

const TermsPage = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Intellectual Property Rights',
      content: 'Unless otherwise stated, Sabri Helpage owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this content from the website purely for personal non-commercial use, subject to restrictions set in these terms and conditions.'
    },
    {
      title: 'User Content',
      content: 'In these terms of use, "User Content" shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying User Content, you grant Sabri Helpage a non-exclusive, worldwide irrevocable license to reproduce, adapt, modify, and distribute it.'
    },
    {
      title: 'Donations and Payments',
      content: 'All donations are non-refundable except in cases of processing errors. Donations are made voluntarily and in no way constitute a contract for services. Your donation supports our programs and initiatives.'
    },
    {
      title: 'Disclaimer',
      content: 'The information on this website is provided on an "as is" basis. Sabri Helpage makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations of Liability',
      content: 'In no event shall Sabri Helpage or its suppliers be liable for any damages including, without limitation, direct, indirect, special, consequential, or incidental damages arising out of the use or inability to use the materials on this website.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'
    },
    {
      title: 'Changes to Terms',
      content: 'Sabri Helpage reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader
        title="Terms of Use"
        subtitle="Please read these terms and conditions carefully before using our website"
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Welcome to Sabri Helpage
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              These terms and conditions outline the rules and regulations for the use of our website.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Terms of Use Details</h3>
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

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h3 className="text-xl font-bold mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Need Help?
          </h3>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4 font-medium">
              Email: info@sabrihelpagenpo.org<br />
              Phone: +91 XXXXXXXXXX
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;