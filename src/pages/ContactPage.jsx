import React, { useState, useEffect } from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const ContactPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('contact'));
  useEffect(() => {
    if (pageData) {
      console.log('Contact page data:', pageData);
    }
  }, [pageData]);

  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ loading: false, success: true, error: null });
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  // Extract sections
  const headerSection = pageData?.sections?.find(s => s.type === 'header');
  const formSection = pageData?.sections?.find(s => s.type === 'contact_form');
  const infoSection = pageData?.sections?.find(s => s.type === 'contact_info');

  return (
    <div>
      <PageHeader
        title={headerSection?.title || 'Contact Us'}
        subtitle={headerSection?.subtitle || 'Get in touch with us'}
        variant={headerSection?.variant || 'primary'}
      />

      <Section>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
              {formSection?.heading || 'Send us a Message'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {formSection?.description || "We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formSection?.fields?.filter(f => f.type !== 'textarea').map(f => (
                  <div key={f.name}>
                    <input
                      type={f.type}
                      name={f.name}
                      value={formData[f.name] || ''}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required={f.required}
                      className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition" style={{ borderColor: COLORS.PRIMARY_PALE }}
                    />
                  </div>
                ))}
              </div>
              {formSection?.fields?.filter(f => f.type === 'textarea').map(f => (
                <div className="relative" key={f.name}>
                  <textarea
                    name={f.name}
                    value={formData[f.name] || ''}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    rows={f.rows || 5}
                    required={f.required}
                    className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition resize-none" style={{ borderColor: COLORS.PRIMARY_PALE }}
                  ></textarea>
                  <span className="absolute bottom-4 right-4 text-gray-400 text-xl">✎</span>
                </div>
              ))}
              <div className="text-center pt-2">
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="disabled:opacity-60 text-white px-10 py-4 rounded-lg font-bold text-base transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    style={{ backgroundColor: COLORS.PRIMARY }}
                  >
                    {formStatus.loading ? (formSection?.loadingText || 'Sending…') : (formSection?.submitButtonText || 'Send Message ✉')}
                  </button>
                  {formStatus.success && (
                    <div className="text-sm text-green-600">
                      {formSection?.successMessage || "Thank you for your message! We'll get back to you soon."}
                    </div>
                  )}
                  {formStatus.error && (
                    <div className="text-sm text-red-600">
                      {formStatus.error || formSection?.errorMessage}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold" style={{ color: COLORS.PRIMARY }}>
              {infoSection?.heading || 'Get in Touch'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoSection?.cards?.map(card => (
              <div key={card.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <h4 className="font-bold mb-3 text-lg" style={{ color: COLORS.PRIMARY }}>{card.title}</h4>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{card.content}</p>
                <a href={card.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold transition" style={{ color: COLORS.PRIMARY }}>
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;
