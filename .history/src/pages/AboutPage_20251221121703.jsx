import React from 'react';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';

const AboutPage = ({ onNavigate }) => {
  const teamMembers = [
    {
      name: 'Aarti BR Singh',
      role: 'Founder',
      description: 'Visionary leader and driving force behind Sabri Helpage, dedicated to social welfare and community development.',
      image: '/images/team/aarti.jpg'
    },
    {
      name: 'Md. Naushad',
      role: 'Co-Founder',
      description: 'Passionate about community service and expanding the reach of our programs to underserved areas.',
      image: '/images/team/naushad.jpg'
    },
    {
      name: 'Siraj Khan',
      role: 'Treasurer',
      description: 'Ensuring financial integrity and effective resource allocation for maximum community impact.',
      image: '/images/team/siraj.jpg'
    }
  ];

  const aboutContent = {
    sections: [
      { text: 'Sabri Helpage was founded in 2013 and is based in Kolkata, India. Our mission is to bring dignity, care, and emotional support to communities that are often ignored. Over time, we have grown into a comprehensive social initiative focusing on mental health awareness, elderly care, and girl child education.' },
      { text: 'We work at the grassroots level, helping families in need across hard-to-reach villages where access to information and support is limited. Through counseling camps, emotional well-being programs, elderly support initiatives, and educational empowerment programs, we strive to create lasting change in the communities we serve.' }
    ],
    governingBody: [
      {
        name: 'Aarti BR Singh',
        paragraphs: [
          'Aarti BR Singh, the visionary Founder of Sabri Helpage, is a caring social leader whose work has changed the lives of many people in India. She started Sabri Helpage in 2013 because she cared deeply about the well-being of her community.',
          'Aarti is known for her hands-on approach, often working directly with communities to understand their needs and find solutions. She believes in the power of education and emotional support to change lives and has made it her mission to make these available to everyone.'
        ]
      },
      {
        name: 'Md. Naushad',
        paragraphs: [
          'Md. Naushad is the Co-Founder and a key figure at Sabri Helpage. His journey in social work is deeply personal, driven by his own experiences and a strong desire to help those in need.',
          'With a background in community organization and social work, Naushad brings valuable expertise in program implementation and community engagement.'
        ]
      },
      {
        name: 'Siraj Khan',
        paragraphs: [
          'Siraj Khan serves as the Treasurer of Sabri Helpage, bringing financial expertise and strategic planning to the organization.',
          'His careful financial oversight has allowed Sabri Helpage to maintain transparency and accountability in all its operations.'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title="About Us"
        subtitle="Empowering communities through compassion and action"
        variant="primary"
      />

      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.PRIMARY_DARK }}>About</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6 whitespace-pre-line">
Sabri Helpage was founded in 2013 and is based in Kolkata, India. Its simple goal is to bring dignity, care, and emotional support to communities that are often ignored. Over time, it has become a caring social project that focuses on three main areas: mental health, caring for the elderly, and educating girls.

Sabri Helpage works at the grassroots level, helping families in need and villages that are hard to reach where there isn't much information or help. Sabri Helpage keeps making a difference by running counselling camps, programs for emotional well-being, help for seniors, and programs that promote education and empowerment for young girls.

What started as a sincere effort has now become a dependable source of support for many. Sabri Helpage is dedicated to making society more knowledgeable, emotionally strong, and welcoming, one life at a time.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: COLORS.PRIMARY_DARK }}>Governing Body</h2>
            <div className="space-y-12">
              <div className="bg-white rounded-xl shadow p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
                  Aarti BR Singh
                </h3>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
Aarti BR Singh, the visionary Founder of Sabri Helpage, is a caring social leader whose work has changed the lives of many people in India. She started Sabri Helpage in 2013 because she cared deeply about the well-being of her community. She believed that everyone, no matter their age, background, or situation, deserves emotional support, respect, and hope.

Aarti's journey has been fuelled by her concern for three important areas that society often ignores: mental health, elderly care, and girl child education.  Sabri Helpage has become a trusted and respected initiative under her leadership. It helps vulnerable communities, especially in areas that don't get enough attention and don't have easy access to services.

Her caring attitude, hands-on work, and ability to connect with people from all walks of life have helped shape the organization's identity. People know Aarti BR Singh for her commitment to making society more emotionally strong and welcoming. Her work continues to inspire many people who want to make a difference in the world.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
                  Yash Guptaa
                </h3>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
Yash Guptaa is a young philanthropist who makes a difference in the world. His work for the greater good shows both compassion and purpose. He believes strongly in giving back to society, so he has worked to support causes that make a real difference in the lives of vulnerable communities over time.

Yash's giving is based on feeling for others, taking responsibility, and taking action. He thinks that real service isn't just giving money; it's also understanding the real problems on the ground and working towards long-term solutions. His focus extends across mental health awareness, education for underprivileged children, elderly support, and welfare initiatives that uplift marginalized groups.

With a forward-looking mindset, Yash Guptaa actively collaborates with organizations and social changemakers to amplify impact. His commitment to humanitarian work reflects his core values - kindness, integrity, and the desire to build a more compassionate society. He continues to inspire others to join the journey of meaningful service by volunteering, supporting community programs, or speaking out for social causes.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
                  Prerna Guptaa
                </h3>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
Prerna Guptaa is a kind-hearted person who helps others because she cares about them and wants to make the world a better place. She is very aware of the problems that vulnerable communities face and has dedicated herself to supporting programs that promote dignity, opportunity, and mental health.

Prerna's charitable work is more than just giving money; it's thoughtful, open to everyone, and based on real human connection. She thinks that the best way to make a difference is to understand what people have been through and meet their needs with care and respect. She supports education for girls, women's health, mental health, and community development. This shows that she believes that people who are empowered make societies that are empowered.

Prerna Guptaa is known for being down-to-earth and strong. She always supports important causes by giving advice, resources, and hands-on help. Her presence gives people peace of mind and motivates them to do good deeds and be responsible members of society.

She continues to improve people's lives and help make society more aware, welcoming, and caring through her kind leadership and deep commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default AboutPage;
