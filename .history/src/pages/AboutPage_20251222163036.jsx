
import React, { useEffect } from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';

const AboutPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('about'));
  useEffect(() => {
    if (pageData) {
      console.log('About page data:', pageData);
    }
  }, [pageData]);
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="About Us" subtitle="Empowering communities through compassion and action" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Welcome to <span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Sabri Helpage</span>
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              Sabri Helpage was founded in 2013 and is based in Kolkata, India. Our mission is to bring dignity, care, and emotional support to communities that are often ignored. Over time, we have grown into a comprehensive social initiative focusing on mental health awareness, elderly care, and girl child education.
            </p>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              We work at the grassroots level, helping families in need across hard-to-reach villages where access to information and support is limited. Through counseling camps, emotional well-being programs, elderly support initiatives, and educational empowerment programs, we strive to create lasting change in the communities we serve.
            </p>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">
              "Dedicated to making society more knowledgeable, emotionally strong, and welcoming, one life at a time."
            </p>
            <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
              — Sabri Helpage Mission
            </p>
          </div>
        </div>

        {/* Governing Body Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Governing Body</h3>
          <div className="space-y-8 text-gray-700">
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <div className="py-4 mr-4">
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>Aarti BR Singh</h4>
                <p className="leading-relaxed">Aarti BR Singh, the visionary Founder of Sabri Helpage, is a caring social leader whose work has changed the lives of many people in India. She started Sabri Helpage in 2013 because she cared deeply about the well-being of her community. She believes in the power of education and emotional support to change lives and has made it her mission to make these available to everyone.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <div className="py-4 mr-4">
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>Yash Guptaa</h4>
                <p className="leading-relaxed">Yash Guptaa is a young philanthropist who makes a difference in the world. His work for the greater good shows both compassion and purpose. He believes strongly in giving back to society, so he has worked to support causes that make a real difference in the lives of vulnerable communities over time.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
              <div className="py-4 mr-4">
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>Prerna Guptaa</h4>
                <p className="leading-relaxed">Prerna Guptaa is a kind-hearted person who helps others because she cares about them and wants to make the world a better place. She is very aware of the problems that vulnerable communities face and has dedicated herself to supporting programs that promote dignity, opportunity, and mental health.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
