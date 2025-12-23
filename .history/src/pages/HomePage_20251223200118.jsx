import React from 'react';
import ResponsiveImage from '../components/shared/ResponsiveImage';
import YoutubeEmbed from '../components/shared/YoutubeEmbed';
import SectionTitle from '../components/shared/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { usePagesStore } from '../stores/pageInformationSlice';

const HomePage = ({ onNavigate }) => {
  const pageData = usePagesStore((state) => state.getPageBySlug('home'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Home page data:', pageData);
    }
  }, [pageData]);

  if (!pageData) return <div>Loading...</div>;

  return (
    <>
      {pageData.sections.map((section, idx) => {
        switch (section.type) {
          case 'hero':
            return (
              <section key={idx} className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                  <ResponsiveImage
                    src={section.backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-70"
                    fallbackText="Hero+Image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-primary">
                    {section.headline}
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-white px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg bg-primary"
                    >
                      {section.button1Text}
                    </button>
                    <button
                      onClick={() => onNavigate('donate')}
                      className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 hover:bg-gray-100 shadow-lg border-2 border-white"
                    >
                      {section.button2Text}
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full py-3 text-center group cursor-default z-20 transition-all duration-300 bg-primary">
                  <span className="text-white text-xl md:text-2xl font-medium block group-hover:hidden tracking-wide">
                    {section.sanskritText}
                  </span>
                  <span className="text-white text-xl md:text-2xl font-medium hidden group-hover:block tracking-wide">
                    {section.englishTranslation}
                  </span>
                </div>
              </section>
            );
          case 'what_we_stand_for':
            return (
              <section key={idx} className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] hidden lg:block">
                      <div className="absolute left-0 top-10 w-[60%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 transform hover:scale-[1.02] transition duration-500">
                        <ResponsiveImage src={section.mainImage} className="w-full h-full object-cover" fallbackText="Main+Pic" />
                      </div>
                      <div className="absolute right-0 top-0 w-[35%] h-[45%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 transform hover:scale-[1.02] transition duration-500">
                        <ResponsiveImage src={section.topRightImage} className="w-full h-full object-cover" fallbackText="Top+Right" />
                      </div>
                      <div className="absolute right-4 bottom-0 w-[45%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 transform hover:scale-[1.02] transition duration-500">
                        <ResponsiveImage src={section.bottomRightImage} className="w-full h-full object-cover" fallbackText="Bot+Right" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest mb-3 text-primary">{section.badge}</p>
                      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-primary">
                        {section.heading}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="flex space-x-6">
                        <button
                          onClick={() => onNavigate('gallery')}
                          className="text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1 bg-primary"
                        >
                          {section.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          case 'stats':
            return (
              <section key={idx} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col h-full">
                      <div className="p-12 md:p-16 rounded-3xl shadow-2xl h-full flex flex-col justify-between bg-[#B5574A]">
                        <div>
                          <p className="text-[13px] font-bold uppercase tracking-widest text-white/90 mb-6">
                            {section.badge}
                          </p>
                          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white leading-[1.2]">
                            {section.heading}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
                          {(section.items || []).map((stat, idx) => (
                            <div key={idx} className="bg-[#8B3E35] p-7 rounded-2xl text-center transition-all duration-300 hover:bg-[#7A3529]">
                              <span className="block text-[2.75rem] md:text-[3.2rem] font-bold text-white leading-none">{stat.value}</span>
                              <span className="block text-[11px] font-bold text-white uppercase tracking-wide mt-3">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Video section will be rendered separately */}
                  </div>
                </div>
              </section>
            );
          case 'video':
            return (
              <section key={idx} className="py-0 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-4 rounded-3xl shadow-xl transform transition-all hover:shadow-2xl">
                      <div className="relative w-full overflow-hidden rounded-2xl aspect-video bg-black">
                        <YoutubeEmbed videoId={section.youtubeVideoId} title={section.videoTitle} />
                      </div>
                    </div>
                    <a
                      href={section.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-red-600">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{section.channelBadge}</span>
                          <span className="text-[17px] font-bold text-gray-900">{section.channelLinkText}</span>
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:translate-x-1 transition-all">
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            );
          case 'causes':
            return (
              <section key={idx} className="py-20 bg-bg-light-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SectionTitle className="mb-16 text-primary">{section.heading}</SectionTitle>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(section.items || []).map((cause, idx) => (
                      <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
                        <div className="h-56 relative">
                          <ResponsiveImage src={cause.image} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{cause.title}</h3>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                            {cause.description}
                          </p>
                          <div className="flex gap-3">
                            <button
                              onClick={() => onNavigate(cause.route || 'about')}
                              className="flex-1 py-2 rounded-full font-bold transition text-sm border-2 border-primary text-primary bg-transparent"
                            >
                              Read More
                            </button>
                            <button
                              onClick={() => onNavigate('donate')}
                              className="flex-1 text-white py-2 rounded-full font-bold transition text-sm bg-primary"
                            >
                              Donate
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case 'supporters':
            return (
              <section key={idx} className="py-12 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">{section.badge}</p>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition duration-500">
                    {(section.supporters || []).map((s, i) => (
                      <span key={i} className="text-xl md:text-2xl font-bold text-gray-600">{s}</span>
                    ))}
                  </div>
                </div>
              </section>
            );
          case 'testimonials':
            return (
              <section key={idx} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SectionTitle className="text-center text-primary">{section.heading}</SectionTitle>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {(section.items || []).map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
                        <ResponsiveImage src={item.image} className="w-20 h-20 rounded-full mb-4 object-cover" />
                        <h4 className="text-lg font-bold text-primary mb-1">{item.name}</h4>
                        <span className="text-xs text-gray-500 mb-2">{item.role}</span>
                        <p className="text-gray-700 mb-4">{item.content}</p>
                        <div className="flex gap-1 justify-center">
                          {Array.from({ length: item.rating }).map((_, idx) => (
                            <span key={idx} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case 'stories':
            return (
              <section key={idx} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-center mb-12">
                    <SectionTitle className="text-center text-primary">{section.heading}</SectionTitle>
                    <button
                      onClick={() => onNavigate('stories')}
                      className="hidden md:flex absolute right-0 items-center font-bold text-primary"
                    >
                      {section.viewAllText} <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {(section.items || []).map((story) => (
                      <div key={story.id} className="group cursor-pointer" onClick={() => onNavigate('blog')}>
                        <div className="overflow-hidden rounded-2xl mb-4 shadow-md">
                          <ResponsiveImage
                            src={story.image}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                          />
                        </div>
                        <span className="font-semibold text-sm uppercase tracking-wider text-primary">{story.date}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2 transition text-text-dark">{story.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{story.snippet}</p>
                        <button className="mt-4 text-sm font-bold underline decoration-2 underline-offset-4 text-text-dark decoration-primary">Read Story</button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 text-center md:hidden">
                    <button
                      onClick={() => onNavigate('stories')}
                      className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-bold"
                    >
                      {section.mobileViewAllText}
                    </button>
                  </div>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default HomePage;