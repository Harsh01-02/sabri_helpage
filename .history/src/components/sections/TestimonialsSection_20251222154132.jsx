import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { COLORS } from '../../constants/config';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Mental Health Expert',
      // avatar: '👩‍⚕️',
      message: 'Working with Sabri Helpage has been incredibly rewarding. Their dedication to mental health awareness in rural areas is truly making a difference in people\'s lives.',
      // rating: 5
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      role: 'Corporate Volunteer',
      // avatar: '👨‍💼',
      message: 'The internship program provided me with hands-on experience in social work. The team is passionate and the impact is real. Highly recommended!',
      // rating: 5
    },
    {
      id: 3,
      name: 'Sunita Devi',
      role: 'Beneficiary',
      // avatar: '👵',
      message: 'The elderly care program has been a blessing for me. The regular health check-ups and companionship have improved my quality of life significantly.',
      // rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>What People Say</h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#f8f9fa] p-7 rounded-xl shadow-md border-l-4 hover:shadow-lg transition-all duration-200"
              style={{ borderColor: COLORS.PRIMARY }}
            >
              <p className="mb-5 text-base leading-relaxed font-medium" style={{ color: COLORS.TEXT_DARK }}>{testimonial.message}</p>
              <div>
                <h4 className="font-semibold text-lg" style={{ color: COLORS.PRIMARY }}>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
