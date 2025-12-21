
import React, { useState } from 'react';

const YEARS = [2025, 2024, 2023, 2022];
const IMAGES = {
  2025: [
    '/events/2025-1.jpg', '/events/2025-2.jpg', '/events/2025-3.jpg', '/events/2025-4.jpg',
    '/events/2025-5.jpg', '/events/2025-6.jpg', '/events/2025-7.jpg', '/events/2025-8.jpg',
  ],
  2024: [
    '/events/2024-1.jpg', '/events/2024-2.jpg', '/events/2024-3.jpg', '/events/2024-4.jpg',
    '/events/2024-5.jpg', '/events/2024-6.jpg', '/events/2024-7.jpg', '/events/2024-8.jpg',
  ],
  2023: [
    '/events/2023-1.jpg', '/events/2023-2.jpg', '/events/2023-3.jpg', '/events/2023-4.jpg',
    '/events/2023-5.jpg', '/events/2023-6.jpg', '/events/2023-7.jpg', '/events/2023-8.jpg',
  ],
  2022: [
    '/events/2022-1.jpg', '/events/2022-2.jpg', '/events/2022-3.jpg', '/events/2022-4.jpg',
    '/events/2022-5.jpg', '/events/2022-6.jpg', '/events/2022-7.jpg', '/events/2022-8.jpg',
  ],
};

const EventsPage = () => {
  const [year, setYear] = useState(YEARS[0]);
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: COLORS.PRIMARY }}>
          Events
        </h1>
        <div className="flex justify-center gap-4 mb-10">
          {YEARS.map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              style={{
                backgroundColor: year === y ? COLORS.PRIMARY : COLORS.WHITE,
                color: year === y ? COLORS.WHITE : COLORS.PRIMARY,
                border: `1px solid ${COLORS.PRIMARY}`,
                transition: 'background 0.2s, color 0.2s',
              }}
              className={"px-5 py-2 rounded-full font-semibold border transition-colors"}
            >
              {y}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {IMAGES[year].map((img, idx) => (
            <div key={img} className="rounded-xl overflow-hidden shadow border border-gray-100 bg-gray-50">
              <img
                src={img}
                alt={`Event ${idx + 1}`}
                className="w-full h-56 object-cover"
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/600x300?text=Event+Image'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
