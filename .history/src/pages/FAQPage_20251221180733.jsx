
import React, { useState } from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const FAQPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('faq'));
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  const faqSection = pageData.sections?.find(section => section.type === 'faq');
  const faqs = faqSection?.items || [];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.BG_FAQ || '#FFF8F0' }}>
      <PageHeader title={pageData.title || 'Frequently Asked Questions'} subtitle={pageData.meta?.description || 'Find answers to common questions about our organization and programs'} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className={index !== faqs.length - 1 ? 'border-b border-gray-200' : ''}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 md:px-8 md:py-6 flex items-center justify-between hover:bg-gray-50 transition duration-200 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {expandedIndex === index ? (
                  <svg className="h-6 w-6 text-[#FF7A42] flex-shrink-0 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" /></svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-400 flex-shrink-0 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" /></svg>
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 md:px-8 md:py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
