import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { COLORS } from '../constants/config';
import PageHeader from '../components/layout/PageHeader';
import PageSection from '../components/layout/PageSection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const OurCausesLandingPage = ({ onNavigate }) => {
  const [cfg, setCfg] = useState(null);

  useEffect(() => {
    let mounted = true;
    api
      .getConfig()
      .then((res) => {
        const data = res?.data || res;
        if (mounted) setCfg(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const texts = cfg?.texts;
  const getText = (key, fallback) =>
    (texts && typeof texts.get === 'function' && texts.get(key)) || fallback;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title={getText('ourCausesTitle', 'Our Causes')}
        subtitle={getText(
          'ourCausesSubtitle',
          'Three focused missions driving our impact across communities'
        )}
        eyebrow={getText('ourCausesEyebrow', 'What We Do')}
        variant="primary"
      />

      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl shadow-lg p-8 md:p-10 text-center" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="mb-6 flex justify-center"><Badge>Awareness</Badge></div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: COLORS.PRIMARY_DARK }}>
              {getText('causeMentalTitle', 'Mental Health Awareness')}
            </h2>
            <p className="font-medium italic mb-6" style={{ color: COLORS.PRIMARY }}>
              {getText('causeMentalSubtitle', '“Breaking the silence”')}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {getText(
                'causeMentalBody',
                'Mental health remains a taboo subject in many Indian households. Sabri Helpage is dedicated to de-stigmatizing mental illness through awareness campaigns and counseling support.'
              )}
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {getText(
                'causeMentalBody2',
                'We organize workshops to help young people recognize the signs of depression and anxiety, fostering a generation that is not afraid to ask for help.'
              )}
            </p>
            <Button variant="outline" onClick={() => onNavigate?.('mental-health')}>
              Read More
            </Button>
          </div>
        </div>
      </PageSection>

      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl shadow-lg p-8 md:p-10 text-center" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="mb-6 flex justify-center"><Badge tone="primary">Core Focus</Badge></div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.PRIMARY_DARK }}>
              {getText('causeElderlyTitle', 'Elderly Care & Dignity')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {getText(
                'causeElderlyBody',
                'We support abandoned seniors with medical camps, legal aid, and essential supplies, ensuring safety, dignity, and access to care.'
              )}
            </p>
            <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="mt-2 min-w-[6px] h-[6px] rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></span>
                <span className="text-gray-700">
                  {getText(
                    'causeElderlyPoint1',
                    'Legal & Medical Support for seniors to claim their rights and receive geriatric care.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 min-w-[6px] h-[6px] rounded-full" style={{ backgroundColor: COLORS.PRIMARY }}></span>
                <span className="text-gray-700">
                  {getText(
                    'causeElderlyPoint2',
                    'Community programs combating loneliness and promoting active, healthy living.'
                  )}
                </span>
              </li>
            </ul>
            <Button variant="outline" onClick={() => onNavigate?.('elderly-care')}>
              Read More
            </Button>
          </div>
        </div>
      </PageSection>

      <PageSection bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl shadow-lg p-8 md:p-10 text-center" style={{ backgroundColor: COLORS.PRIMARY_PALE }}>
            <div className="mb-6 flex justify-center"><Badge>Empowerment</Badge></div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.PRIMARY_DARK }}>
              Girl Child
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We think that every girl, no matter what her situation is, should have access to education, respect, and the chance to dream without limits. We work with compassion and dedication to make sure that girls in need get the basic help they need to build a better and safer future.
            </p>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.PRIMARY }}>
              Our Main Goals for Girls in Need
            </h3>
            <div className="text-left max-w-2xl mx-auto mb-8">
              <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.PRIMARY_DARK }}>
                Helping Girls Get an Education
              </h4>
              <p className="text-base text-gray-700 mb-6">
                At the centre of our mission is education. Sabri Helpage makes sure that girls in need get regular help with their schoolwork, the things they need for school, and advice that gives them the confidence to keep studying. We help them move towards a life full of opportunities and independence by giving them a stronger educational base.
              </p>
              <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.PRIMARY_DARK }}>
                Help with sanitary pads every month
              </h4>
              <p className="text-base text-gray-700 mb-6">
                We give girls sanitary pads every month to make sure they are comfortable, clean, and able to go to school. We know that many girls have trouble with their periods. This program helps them take care of their health with respect and keeps them from missing out on learning because they don't have the right tools.
              </p>
            </div>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Sabri Helpage is shaping a hopeful and empowered future for girls in need through these focused programs. They give girls the support, stability, and encouragement they need to rise and thrive.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2">
            <div className="text-white rounded-2xl p-8" style={{ backgroundColor: COLORS.PRIMARY_DARK }}>
              <h2 className="text-3xl font-bold mb-4">The SocioFare Awards</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.PRIMARY_PALE }}>
                A unique initiative by Sabri Helpage to shine a spotlight on excellence in social welfare. Celebrate those who dedicate their lives to helping others.
              </p>
              <Button variant="primary">Nominate a Changemaker</Button>
            </div>
          </div>
          <div>
            <div className="p-8 rounded-xl border" style={{ backgroundColor: COLORS.PRIMARY, borderColor: COLORS.PRIMARY_LIGHT }}>
              <h4 className="text-xl font-bold mb-6 text-white border-b pb-4" style={{ borderColor: COLORS.PRIMARY_LIGHT }}>Our Impact</h4>
              <div className="space-y-6 text-white">
                <div>
                  <div className="text-4xl font-bold mb-1">50,000+</div>
                  <div className="text-sm uppercase tracking-wide" style={{ color: COLORS.PRIMARY_PALE }}>Lives impacted</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-sm uppercase tracking-wide" style={{ color: COLORS.PRIMARY_PALE }}>Years of Service</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">25+</div>
                  <div className="text-sm uppercase tracking-wide" style={{ color: COLORS.PRIMARY_PALE }}>Regions covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default OurCausesLandingPage;
