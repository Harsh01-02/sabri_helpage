
import React from 'react';
import { IMAGE_URLS, COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const GirlEducationPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('girl-education'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Girl Child Education page data:', pageData);
    }
  }, [pageData]);
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData?.title || "Girl Child Education"} subtitle={pageData?.sections?.find(s => s.type === "header")?.subtitle || "Education and Empowerment"} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {pageData?.sections?.map((section, idx) => {
          if (section.type === "hero_image") {
            return (
              <div key={idx} className="mb-8">
                <img
                  src={section.image}
                  alt={section.alt || "Girl Child Empowerment"}
                  className="w-full aspect-[16/7] min-h-[200px] object-cover rounded-xl shadow"
                  onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x600?text=Girl+Child+Support'; }}
                />
              </div>
            );
          }
          if (section.type === "content") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                  {section.introduction}
                </p>
                <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.PRIMARY }}>
                  {section.subheading}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
                  {section.goals?.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
            );
          }
          if (section.type === "cta_box") {
            return (
              <div key={idx} className="bg-orange-100 rounded-xl p-6 text-center mt-8">
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.ACCENT_ORANGE }}>
                  {section.heading}
                </h4>
                <p className="text-gray-700 mb-2">{section.description}</p>
                <a
                  href={section.buttonRoute}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition duration-300 shadow hover:bg-gray-100"
                >
                  {section.buttonText}
                </a>
              </div>
            );
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default GirlEducationPage;