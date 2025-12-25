import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Sabri Helpage?',
    answer: 'Sabri Helpage is a non-profit organization dedicated to serving the elderly, women, and children through various welfare programs and initiatives.'
  },
  {
    question: 'How can I volunteer with Sabri Helpage?',
    answer: 'You can volunteer by filling out the volunteer form on our website or contacting us directly through the Contact page. We welcome passionate individuals from all backgrounds.'
  },
  {
    question: 'How are donations used?',
    answer: 'Donations are used to fund our programs, provide resources to beneficiaries, and support operational costs. We ensure transparency and regular reporting to all donors.'
  },
  {
    question: 'Can I get a donation receipt?',
    answer: 'Yes, all donors receive a receipt via email. If you do not receive one, please contact us at info@sabrihelpage.org.'
  },
  {
    question: 'How do I contact Sabri Helpage?',
    answer: 'You can reach us via the Contact page, email (info@sabrihelpage.org), or phone (+91 99999 99999).'
  },
  {
    question: 'What programs do you offer?',
    answer: 'We offer programs in elderly care, mental health, girl child education, food security, and more. Visit our Programs page for details.'
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes, all donations to Sabri Helpage are eligible for tax benefits under Section 80G of the Income Tax Act.'
  },
  {
    question: 'How can my company partner with Sabri Helpage?',
    answer: 'We welcome CSR partnerships and collaborations. Please visit our CSR page or contact us for partnership opportunities.'
  },
  {
    question: 'How can I stay updated on your work?',
    answer: 'Subscribe to our newsletter or follow us on social media for the latest updates, stories, and impact reports.'
  },
  {
    question: 'Where are you located?',
    answer: 'Our main office is in Darbhanga, Bihar, India, but we operate programs across multiple regions.'
  }
];
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

  return (
    <section className="py-16 md:py-24 bg-bg-light-gray min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to the most common questions about Sabri Helpage, our programs, donations, and how you can get involved.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
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
          {/* Contact details removed as requested */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Can't find your answer? <a href="/contact" className="text-primary underline font-semibold">Contact us</a> and we'll be happy to help.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
