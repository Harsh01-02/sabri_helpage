
import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import { usePagesStore } from '../stores/pageInformationSlice';

const AboutPage = ({ onNavigate }) => {
  const pageData = usePagesStore((state)=>state.getPageBySlug("about")) // this line gets the data for home page from the global store
  React.useEffect(() => {
    if (pageData) {
      console.log("about page data:", pageData); // currently just printing this data hence its visible on console
}})
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title={pageData?.title || "About Us"} subtitle={pageData?.sections?.find(s => s.type === "header")?.subtitle || "Empowering communities through compassion and action"} />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {pageData?.sections?.map((section, idx) => {
          if (section.type === "welcome") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
                  {section.heading}
                </h2>
                <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
                <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="text-base text-gray-700 text-center leading-relaxed py-4">{p}</p>
                  ))}
                </div>
              </div>
            );
          }
          if (section.type === "mission_banner") {
            return (
              <div key={idx} className="w-full py-12 px-6 text-center shadow-inner relative overflow-hidden rounded-2xl mb-16" style={{ backgroundColor: COLORS.PRIMARY }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white rounded-2xl"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                  <p className="text-2xl md:text-3xl text-white font-serif italic leading-normal">
                    {section.quote}
                  </p>
                  <p className="mt-4 font-semibold tracking-wider uppercase text-sm text-white" style={{ color: COLORS.PRIMARY_PALE }}>
                    {section.attribution}
                  </p>
                </div>
              </div>
            );
          }
          if (section.type === "governing_body") {
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
                <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>{section.heading}</h3>
                <div className="space-y-8 text-gray-700">
                  {section.members?.map((member, i) => (
                    <div key={i} className="flex gap-3 items-start w-full rounded-xl" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
                      <span className="font-bold text-lg mt-4 ml-4" style={{ color: COLORS.PRIMARY }}>›</span>
                      <div className="py-4 mr-4 flex flex-col items-center">
                        <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{member.name}</h4>
                        <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                        <p className="leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  ))}
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

export default AboutPage;
