

import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { usePagesStore } from '../stores/pageInformationSlice';

// ...existing code...


const EventCard = ({ event, featured = false }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 ${featured ? 'md:col-span-2 flex flex-col md:flex-row h-[340px]' : ''}`}
    style={featured ? { minHeight: 320 } : {}}
  >
    <div
      className={`relative ${featured ? 'md:w-2/5 w-full h-64 md:h-full' : 'h-56'} overflow-hidden`}
      style={featured ? { minWidth: 0 } : {}}
    >
      <img
        src={event.image}
        alt={event.title}
        className={`object-cover w-full h-full ${featured ? 'rounded-r-none' : ''}`}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400/fff0ee/222?text=Event+Image'; }}
      />
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-[#b73d34] border border-[#b73d34] shadow-sm">
          {event.category}
        </span>
      </div>
    </div>
    <div className={`p-6 flex flex-col justify-center ${featured ? 'md:w-3/5 w-full' : ''}`}>
      <h3 className={`font-bold mb-3 ${featured ? 'text-2xl text-[#b73d34]' : 'text-xl text-[#b73d34]'}`}>{event.title}</h3>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">{event.description}</p>
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-[#b73d34] font-medium">
          <Calendar size={16} className="text-[#b73d34]" />
          <span>{event.date}</span>
        </div>
        {event.time && (
          <div className="flex items-center gap-2 text-sm text-[#b73d34] font-medium">
            <Clock size={16} className="text-[#b73d34]" />
            <span>{event.time}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-[#b73d34] font-medium">
          <MapPin size={16} className="text-[#b73d34]" />
          <span>{event.location}</span>
        </div>
      </div>
      <button className="w-full px-4 py-2.5 bg-[#b73d34] text-white rounded-md font-medium hover:bg-[#a12e27] transition-colors flex items-center justify-center gap-2">
        Learn More
        <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const EventsPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('events'));
  React.useEffect(() => {
    if (pageData) {
      console.log('Events page data:', pageData);
    }
  }, [pageData]);

  // Extract sections
  const headerSection = pageData?.sections?.find(s => s.type === 'header');
  const eventsSection = pageData?.sections?.find(s => s.type === 'events_list');
  const allEvents = eventsSection?.allEvents || [];

  // Helper to parse date string to Date object
  const parseEventDate = (event) => {
    return new Date(event.date + (event.time ? ' ' + event.time : ''));
  };
  // Sort and categorize events
  const today = new Date();
  let currentEvent = null;
  const upcomingEvents = [];
  const pastEvents = [];
  const sortedEvents = [...allEvents].sort((a, b) => parseEventDate(a) - parseEventDate(b));
  for (let i = 0; i < sortedEvents.length; i++) {
    const eventDate = parseEventDate(sortedEvents[i]);
    if (!currentEvent && eventDate >= today) {
      currentEvent = sortedEvents[i];
    } else if (eventDate > today) {
      upcomingEvents.push(sortedEvents[i]);
    } else if (eventDate < today) {
      pastEvents.unshift(sortedEvents[i]);
    }
  }
  if (!currentEvent && sortedEvents.length > 0) {
    currentEvent = pastEvents.shift();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - dynamic */}
      <div className="w-full flex justify-center pt-12 pb-10">
        <div
          className="rounded-2xl shadow-md border border-gray-200 px-8 py-10 max-w-3xl w-full text-center"
          style={{ background: headerSection?.backgroundColor || '#b73d34' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{headerSection?.title || 'Events'}</h1>
          <p className="text-lg text-white/90">{headerSection?.subtitle || 'Join us in making a difference in our community'}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 md:py-16">
        {/* Current Event at top */}
        {currentEvent && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#b73d34] mb-7 pl-2">Current Event</h2>
            <EventCard event={currentEvent} featured={true} />
          </div>
        )}
        {/* Two Column Layout: Upcoming & Past Events */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold text-[#b73d34] mb-7 pl-2">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.length === 0 && <div className="text-gray-400">No upcoming events.</div>}
              {upcomingEvents.map((event, idx) => (
                <EventCard key={event.title + event.date} event={event} />
              ))}
            </div>
          </div>
          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-bold text-[#b73d34] mb-7 pl-2">Past Events</h2>
            <div className="space-y-8">
              {pastEvents.length === 0 && <div className="text-gray-400">No past events.</div>}
              {pastEvents.map((event, idx) => (
                <EventCard key={event.title + event.date} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
