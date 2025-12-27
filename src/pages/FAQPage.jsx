import React, { useState } from 'react';

// ...existing code...
import { usePagesStore } from '../stores/pageInformationSlice';

const FAQPage = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const pageData = usePagesStore((state) => state.getPageBySlug('faq'));
  React.useEffect(() => {
    if (pageData) {
      console.log('FAQ page data:', pageData);
    }
  }, [pageData]);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Extract sections
  const headerSection = pageData?.sections?.find(s => s.type === 'header');
  const faqSection = pageData?.sections?.find(s => s.type === 'faq_list');

  return (
    <section className="py-16 md:py-24 bg-bg-light-gray min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">{headerSection?.badge || 'FAQ'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow">{headerSection?.title || 'Frequently Asked Questions'}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{headerSection?.subtitle || 'Find answers to the most common questions about Sabri Helpage, our programs, donations, and how you can get involved.'}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="space-y-6">
            {faqSection?.faqs?.map((faq, idx) => (
              <div key={idx} className={`rounded-xl border shadow-sm transition-all duration-300 ${openIndex === idx ? 'border-primary bg-primary/10' : 'border-gray-200 bg-pink-50'}`}>
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold text-primary px-6 py-4 focus:outline-none"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span>{faq.question}</span>
                  <span className={`ml-4 text-2xl font-bold transition-transform duration-300 ${openIndex === idx ? 'rotate-45 text-primary-dark' : 'text-gray-400'}`}>{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            {faqSection?.footerText || "Can't find your answer?"} <a href="/contact" className="text-primary underline font-semibold">{faqSection?.contactLinkText || 'Contact us'}</a> {faqSection?.contactLinkSuffix || "and we'll be happy to help."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
