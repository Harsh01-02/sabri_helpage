
import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { COLORS } from '../constants/config';
import { usePagesStore } from '../stores/pageInformationSlice';

const InternshipPage = () => {
  const pageData = usePagesStore((state) => state.getPageBySlug('internship'));
  const [email, setEmail] = useState('');
  const [applied, setApplied] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // Extract sections
  const headerSection = pageData?.sections?.find(s => s.type === 'header');
  const welcomeSection = pageData?.sections?.find(s => s.type === 'welcome');
  const rolesSection = pageData?.sections?.find(s => s.type === 'internship_roles');
  const applicationSection = pageData?.sections?.find(s => s.type === 'application_section');
  const internships = rolesSection?.roles || [];

  const handleApply = (role) => {
    if (!email) return alert('Please enter your email to apply.');
    setApplied(true);
    setSelectedRole(role.title);
    setEmail('');
    setTimeout(() => setApplied(false), 3000);
  };

  if (!pageData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG_LIGHT_GRAY }}>
      <PageHeader
        title={headerSection?.title || pageData.title || 'Internship Opportunities'}
        subtitle={headerSection?.subtitle || 'Hands-on roles for students and early-career professionals'}
      />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        {welcomeSection && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center font-sans mb-16" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
            <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-center" style={{ color: COLORS.PRIMARY }}>
              {welcomeSection.heading}
            </h2>
            <div className="h-1 w-16 mb-8 rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></div>
            <div className="w-full rounded-xl mb-4" style={{ background: 'linear-gradient(90deg, #ffe4ef1a 0%, #fff 100%)' }}>
              <p className="text-base text-gray-700 text-center leading-relaxed py-4">
                {welcomeSection.description}
              </p>
            </div>
          </div>
        )}

        {/* Internship Roles Section */}
        {rolesSection && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
            <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.PRIMARY }}>{rolesSection.heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {internships.map(i => (
                <div key={i.id} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{i.title}</h4>
                  <div className="space-y-1 text-gray-600 mb-4 text-center">
                    <p className="text-sm">{i.location}</p>
                    <p className="text-sm">{i.duration}</p>
                    <p className="text-sm font-medium">{i.stipend}</p>
                  </div>
                  <button onClick={() => handleApply(i)} className="px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: COLORS.PRIMARY }}>Apply</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Application Section */}
        {applicationSection && (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.PRIMARY }}>{applicationSection.heading}</h3>
              <p className="text-gray-600">{applicationSection.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder={applicationSection.placeholderText || 'Your email address'}
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
                {applicationSection.buttonText || 'Start Application'}
              </button>
            </div>
            {applied && (
              <div className="mt-6 text-green-600 text-center font-semibold">
                {applicationSection.successMessage || "Thank you! Your application has been received. We'll be in touch soon."}
              </div>
            )}
            <div className="mt-4 text-xs text-gray-500 text-center">
              {applicationSection.disclaimerText || 'By applying, you agree to our Privacy Policy and Terms of Service.'}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default InternshipPage;
