import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import { usePagesStore } from '../stores/pageInformationSlice';

const TermsPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('terms'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Terms page data:', pageData);
    }
  }, [pageData]);
  // ...existing code...

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader
        title={pageData?.title || "Terms of Use"}
        subtitle={pageData?.sections?.find(s => s.type === "header")?.subtitle || "Please read these terms and conditions carefully before using our website"}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {pageData?.sections?.map((section, idx) => {
          if (section.type === "welcome") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.heading}
                </h2>
                <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                  <p className="text-base text-gray-700 text-center leading-relaxed py-4">
                    {section.description}
                  </p>
                </div>
              </div>
            );
          }
          if (section.type === "terms_sections") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
                <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>{section.heading}</h3>
                <div className="space-y-8 text-gray-700">
                  {section.items?.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                      <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
                      <div className="py-4 mr-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{item.title}</h4>
                        <p className="leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (section.type === "contact") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <h3 className="text-xl font-bold mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.heading}
                </h3>
                <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                <div className="w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                  <p className="text-base text-gray-700 text-center leading-relaxed py-4">
                    {section.description}
                  </p>
                  <p className="text-base text-gray-700 text-center leading-relaxed py-4 font-medium">
                    Email: {section.email}<br />
                    Phone: {section.phone}
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default TermsPage;