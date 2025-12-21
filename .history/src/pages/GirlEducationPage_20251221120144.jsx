import React from 'react';
import { COLORS } from '../constants/config';


const GirlEducationPage = () => {
  return (
    <section className="py-0 bg-white">
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
              <img
                src={require('../constants/config').IMAGE_URLS.GIRL_EDUCATION}
                alt="Girl Child Empowerment"
                className="rounded-xl w-full h-72 md:h-96 object-cover shadow-lg border border-gray-100"
                style={{ background: COLORS.PRIMARY_PALE }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-sans" style={{ letterSpacing: '0.01em' }}>Girl Child</h1>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed font-sans">
                Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We think that every girl, no matter what her situation is, should have access to education, respect, and the chance to dream without limits. We work with compassion and dedication to make sure that girls in need get the basic help they need to build a better and safer future.
              </p>
              <h2 className="text-2xl font-bold mb-4 font-sans" style={{ color: COLORS.PRIMARY }}>
                Our Main Goals for Girls in Need
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 font-sans" style={{ color: COLORS.PRIMARY_DARK }}>
                  Helping Girls Get an Education
                </h3>
                <p className="text-base text-gray-700 mb-6 font-sans">
                  At the centre of our mission is education. Sabri Helpage makes sure that girls in need get regular help with their schoolwork, the things they need for school, and advice that gives them the confidence to keep studying. We help them move towards a life full of opportunities and independence by giving them a stronger educational base.
                </p>
                <h3 className="text-xl font-semibold mb-2 font-sans" style={{ color: COLORS.PRIMARY_DARK }}>
                  Help with sanitary pads every month
                </h3>
                <p className="text-base text-gray-700 mb-6 font-sans">
                  We give girls sanitary pads every month to make sure they are comfortable, clean, and able to go to school. We know that many girls have trouble with their periods. This program helps them take care of their health with respect and keeps them from missing out on learning because they don't have the right tools.
                </p>
              </div>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed font-sans">
                Sabri Helpage is shaping a hopeful and empowered future for girls in need through these focused programs. They give girls the support, stability, and encouragement they need to rise and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GirlEducationPage;