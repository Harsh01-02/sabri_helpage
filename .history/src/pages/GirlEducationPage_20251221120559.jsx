import React from 'react';
import { COLORS } from '../constants/config';

const GirlEducationPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{ color: COLORS.PRIMARY_DARK, letterSpacing: '0.01em', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
          Girl Child
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8" style={{ border: `2px solid ${COLORS.PRIMARY_PALE}` }}>
          <p className="text-lg md:text-xl mb-6 font-sans" style={{ color: COLORS.PRIMARY }}>
            Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We think that every girl, no matter what her situation is, should have access to education, respect, and the chance to dream without limits. We work with compassion and dedication to make sure that girls in need get the basic help they need to build a better and safer future.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-8 text-center" style={{ color: COLORS.PRIMARY }}>
            Our Main Goals for Girls in Need
          </h2>
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.PRIMARY_DARK }}>Helping Girls Get an Education</h3>
              <p className="text-base text-gray-800 font-sans">
                At the centre of our mission is education. Sabri Helpage makes sure that girls in need get regular help with their schoolwork, the things they need for school, and advice that gives them the confidence to keep studying. We help them move towards a life full of opportunities and independence by giving them a stronger educational base.
              </p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.PRIMARY_DARK }}>Help with sanitary pads every month</h3>
              <p className="text-base text-gray-800 font-sans">
                We give girls sanitary pads every month to make sure they are comfortable, clean, and able to go to school. We know that many girls have trouble with their periods. This program helps them take care of their health with respect and keeps them from missing out on learning because they don't have the right tools.
              </p>
            </div>
          </div>
          <p className="text-lg md:text-xl mt-10 font-sans text-center" style={{ color: COLORS.PRIMARY_DARK }}>
            Sabri Helpage is shaping a hopeful and empowered future for girls in need through these focused programs. They give girls the support, stability, and encouragement they need to rise and thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GirlEducationPage;
                  {block.label || 'Sponsor Now'}
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      </div>
    </section>
  );
};

export default GirlEducationPage;