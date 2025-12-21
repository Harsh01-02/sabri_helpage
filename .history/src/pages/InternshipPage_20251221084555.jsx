import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';

const InternshipPage = ({ onNavigate }) => {
  const internships = [
    { 
      id: 1, 
      title: 'Program Coordinator', 
      location: 'Delhi', 
      duration: '3 months', 
      stipend: '₹8,000',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 2, 
      title: 'Social Media Intern', 
      location: 'Remote', 
      duration: '3 months', 
      stipend: '₹6,000',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 3, 
      title: 'Research Intern', 
      location: 'Bangalore', 
      duration: '6 months', 
      stipend: '₹10,000',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const [email, setEmail] = useState('');
  const [applied, setApplied] = useState(false);

  const handleApply = (role) => {
    if (!email) return alert('Please enter your email to apply.');
    console.log('Applied for', role, 'from', email);
    setApplied(true);
    setEmail('');
    setTimeout(() => setApplied(false), 3000);
  };

  return (
    <section className="py-0 md:py-24" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader 
        title="Internship Opportunities" 
        subtitle="Hands-on roles for students and early-career professionals"
      />
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {internships.map(i => (
            <div key={i.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: COLORS.PRIMARY, color: '#fff', fontSize: '2rem' }}></div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{i.title}</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p className="text-sm">{i.location}</p>
                <p className="text-sm">{i.duration}</p>
                <p className="text-sm font-medium">{i.stipend}</p>
              </div>
              <button onClick={() => handleApply(i.title)} className="px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: COLORS.PRIMARY }}>Apply</button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: COLORS.PRIMARY }}>Ready to Join Us?</h2>
            <p className="text-gray-600">Select a role above and enter your email to start your application</p>
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
                          className="px-6 py-3 text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
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
      </div>
    </section>
  );
};

export default InternshipPage;
