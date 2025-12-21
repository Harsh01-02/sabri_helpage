
import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';

const InternshipPage = () => {
  const internships = [
    { id: 1, title: 'Program Coordinator', location: 'Delhi', duration: '3 months', stipend: '₹8,000' },
    { id: 2, title: 'Social Media Intern', location: 'Remote', duration: '3 months', stipend: '₹6,000' },
    { id: 3, title: 'Research Intern', location: 'Bangalore', duration: '6 months', stipend: '₹10,000' }
  ];
  const [email, setEmail] = useState('');
  const [applied, setApplied] = useState(false);

  const handleApply = (role) => {
    if (!email) return alert('Please enter your email to apply.');
    setApplied(true);
    setEmail('');
    setTimeout(() => setApplied(false), 3000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader title="Internship Opportunities" subtitle="Hands-on roles for students and early-career professionals" />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
            Join our Internship Program
          </h2>
          <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
          <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
            <p className="text-base text-gray-700 text-center leading-relaxed py-4">
              Explore hands-on roles for students and early-career professionals. Select a role below and apply to join our mission.
            </p>
          </div>
        </div>

        {/* Internship Roles Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>Open Internship Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {internships.map(i => (
              <div key={i.id} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff', fontSize: '2rem' }}>
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{i.title}</h4>
                <div className="space-y-1 text-gray-600 mb-4 text-center">
                  <p className="text-sm">{i.location}</p>
                  <p className="text-sm">{i.duration}</p>
                  <p className="text-sm font-medium">{i.stipend}</p>
                </div>
                <button onClick={() => handleApply(i.title)} className="px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: COLORS.PRIMARY }}>Apply</button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.PRIMARY }}>Ready to Join Us?</h3>
            <p className="text-gray-600">Enter your email and select a role above to start your application.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              onClick={() => {
                if (!email) return alert('Please enter your email address');
                alert('Please select a role to apply for using the "Apply" buttons above.');
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
            >
              Start Application
            </button>
          </div>
          {applied && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-center">
              <p>Thank you! Your application has been received. We'll be in touch soon.</p>
            </div>
          )}
          <p className="text-sm text-gray-500 mt-4 text-center">
            By applying, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InternshipPage;
