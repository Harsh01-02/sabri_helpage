

import React from 'react';

const newspaperArticles = [
  {
    date: '24th May, 2024',
    source: 'Prajavani',
    label: 'Newspaper Article',
  },
  {
    date: '8th March, 2025',
    source: 'The Belgaum Today',
    label: 'Newspaper Article',
  },
  {
    date: '12th May, 2024',
    source: 'Kanina Ajjana',
    label: 'Newspaper Article',
  },
];

const digitalPublications = [
  {
    date: '30th March, 2025',
    source: 'Sabri Peer Award 2024 | Honors Basha Shri Church Malato',
    type: 'video',
  },
  {
    date: '30th December, 2024',
    source: 'VOV',
    type: 'pdf',
  },
];

const PublicationsPage = ({ onNavigate = () => {} }) => {
  return (
    <section className="py-16 bg-bg-light-gray min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg px-4 sm:px-8 md:px-16 py-12 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">Glimpse of a Sabri Helpage's Impact</h1>
          <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-10 font-normal">Publications</h2>
        </div>

        {/* Newspaper Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
          {newspaperArticles.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-200 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-full h-52 md:h-56 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-lg font-semibold mb-4">
                {item.label}
              </div>
              <div className="text-sm text-gray-500 mb-1">{item.date}</div>
              <div className="text-base text-gray-700 font-medium">{item.source}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full shadow transition mb-2">All Media</button>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl text-center text-primary font-bold mb-8 mt-4">Digital Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Publication */}
            <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col items-center">
              <div className="w-full h-44 md:h-72 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-4 relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                  <div className="w-0 h-0 border-l-[28px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2"></div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-1">{digitalPublications[0].date}</div>
              <div className="text-base text-gray-700 font-medium text-center">{digitalPublications[0].source}</div>
            </div>

            {/* PDF Publication */}
            <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col items-center">
              <div className="w-full h-44 md:h-72 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-end justify-between mb-4 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded text-xs font-bold z-10">PDF</div>
                <div className="flex-1 w-full flex items-center justify-center text-gray-400 text-sm px-4">Document preview<br/>Content appears here...</div>
              </div>
              <div className="text-sm text-gray-500 mb-1">{digitalPublications[1].date}</div>
              <div className="text-base text-gray-700 font-medium text-center">{digitalPublications[1].source}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;