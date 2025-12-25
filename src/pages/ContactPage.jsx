import React, { useState } from 'react';

import { COLORS } from '../constants/config';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const ContactPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('contact'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Contact page data:', pageData);
    }
  }, [pageData]);

  // --- Contact form state and handlers ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setFormStatus({ loading: false, success: false, error: data.message || 'Failed to send message.' });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us"
        variant="primary"
      />

      <Section>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
              Send us a Message
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition" style={{ borderColor: COLORS.PRIMARY_PALE }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition" style={{ borderColor: COLORS.PRIMARY_PALE }}
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition" style={{ borderColor: COLORS.PRIMARY_PALE }}
              />

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows="5"
                  className="w-full p-4 border-2 rounded-lg focus:outline-none text-sm bg-[#FDFCFA] transition resize-none" style={{ borderColor: COLORS.PRIMARY_PALE }}
                ></textarea>
                <span className="absolute bottom-4 right-4 text-gray-400 text-xl">✎</span>
              </div>

              <div className="text-center pt-2">
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="disabled:opacity-60 text-white px-10 py-4 rounded-lg font-bold text-base transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    style={{ backgroundColor: COLORS.PRIMARY }}
                  >
                    {formStatus.loading ? 'Sending…' : 'Send Message ✉'}
                  </button>
                  {formStatus.success && (
                    <div className="text-sm text-green-600">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  {formStatus.error && (
                    <div className="text-sm text-red-600">
                      {formStatus.error}
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
              Get in Touch
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff' }}>
                <svg className="w-8 h-8" style={{ color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h4 className="font-bold mb-3 text-lg" style={{ color: COLORS.PRIMARY }}>Address</h4>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">7 B, Mysore Road, Rashbehari Avenue,<br />Kolkata - 700026</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7+B+Mysore+Road+Rashbehari+Avenue+Kolkata+700026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold transition" style={{ color: COLORS.PRIMARY }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open in Google Maps
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff' }}>
                <svg className="w-8 h-8" style={{ color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="font-bold mb-3 text-lg" style={{ color: COLORS.PRIMARY }}>Email</h4>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">info@sabrihelpage.org</p>
              <a href="mailto:info@sabrihelpage.org" className="inline-flex items-center text-sm font-semibold transition" style={{ color: COLORS.PRIMARY }}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                Send Email
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff' }}>
                <svg className="w-8 h-8" style={{ color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.042 11.042 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" /></svg>
              </div>
              <h4 className="font-bold mb-3 text-lg" style={{ color: COLORS.PRIMARY }}>Mobile</h4>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">+91 9874021457</p>
              <a href="tel:+919874021457" className="inline-flex items-center text-sm font-semibold transition" style={{ color: COLORS.PRIMARY }}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.042 11.042 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" /></svg>
                Call Now
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff' }}>
                <svg className="w-8 h-8" style={{ color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l-2.048 1.024a11.042 11.042 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" /></svg>
              </div>
              <h4 className="font-bold mb-3 text-lg" style={{ color: COLORS.PRIMARY }}>Telephone</h4>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">033 4601 3886</p>
              <a href="tel:03346013886" className="inline-flex items-center text-sm font-semibold transition" style={{ color: COLORS.PRIMARY }}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l-2.048 1.024a11.042 11.042 0 010 1.986l-2.048 1.024a1 1 0 00-.502.756l-1.498 4.493a1 1 0 00-.948.684H5a2 2 0 01-2-2V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;