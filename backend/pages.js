// Default YouTube video ID for homepage video section
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your actual video ID

export const IMAGE_URLS = {
  HERO: '/HeroSection.jpg',
  WHAT_WE_STAND_FOR_1: '/websiteLogo.jpg',
  WHAT_WE_STAND_FOR_2: '/girlChildEducation.jpg',
  WHAT_WE_STAND_FOR_3: '/MentalHealth.jpg',
  MENTAL_HEALTH: '/MentalHealth.jpg',
  ELDERLY_CARE: '/elderlyCareImg.jpg',
  GIRL_EDUCATION: '/girlChildEducation.jpg',
  NEWS_1_LEGAL: '/event1.jpg',
  NEWS_2_FOOD: '/event2.jpg',
  NEWS_3_WATER: '/WaterFilteration.jpg',
  CHILDREN_HAPPY: '/event3.jpg',
  KIDS_LEARNING: '/event4.jpg',
  COMMUNITY_SUPPORT: '/event5.jpg',
  AWARDS_BACKGROUND: '/event6.jpg',
  VIDEO_THUMBNAIL: '/event7.jpg'
};

const pages = [
  // ============================================================
  // 1. HOME PAGE
  // ============================================================
  {
    slug: "home",
    title: "Home",
    sections: [
      {
        type: "hero",
        headline: "Bringing Hope to the Hopeless",
        backgroundImage: IMAGE_URLS.HERO,
        button1Text: "Read More",
        button2Text: "Support Us",
        sanskritText: "सर्वे भवन्तु सुखिनः",
        englishTranslation: "May all be happy"
      },
      {
        type: "what_we_stand_for",
        badge: "What We Stand For",
        heading: "Shaping Lives Through <br/> Compassionate Action.",
        description:
          "At Sabri Helpage, our mission is to make a positive and lasting impact on the lives of marginalized people globally. We believe in a world where compassion translates into tangible change.",
        mainImage: IMAGE_URLS.WHAT_WE_STAND_FOR_1,
        topRightImage: IMAGE_URLS.WHAT_WE_STAND_FOR_2,
        bottomRightImage: IMAGE_URLS.WHAT_WE_STAND_FOR_3,
        buttonText: "View More"
      },
      {
        type: "stats",
        badge: "Our Milestones",
        heading: "We've Accomplished Most During This Span.",
        backgroundColor: "#B5574A",
        darkBackgroundColor: "#8B3E35",
        items: [
          { value: "10K+", label: "Lives Impacted" },
          { value: "50+", label: "Projects Completed" },
          { value: "15+", label: "Years of Service" }
        ]
      },
      {
        type: "video",
        youtubeVideoId: YOUTUBE_VIDEO_ID,
        videoTitle: "MLSM College, Darbhanga",
        channelBadge: "Watch Our Stories",
        channelLinkText: "Visit YouTube Channel",
        channelUrl: "https://www.youtube.com/@sabrihelpage167"
      },
      {
        type: "causes",
        heading: "Our Core Causes",
        items: [
          {
            title: "Education",
            image: IMAGE_URLS.GIRL_EDUCATION,
            description: "Dedicated to providing resources, support, and advocacy for education initiatives across the country.",
            route: "education"
          },
          {
            title: "Healthcare",
            image: IMAGE_URLS.MENTAL_HEALTH,
            description: "Dedicated to providing resources, support, and advocacy for healthcare initiatives across the country.",
            route: "healthcare"
          },
          {
            title: "Women Empowerment",
            image: IMAGE_URLS.ELDERLY_CARE,
            description: "Dedicated to providing resources, support, and advocacy for women empowerment initiatives across the country.",
            route: "women"
          }
        ]
      },
      {
        type: "supporters",
        badge: "Our Supporters",
        supporters: [
          "Google",
          "Microsoft",
          "Tata Trusts",
          "Reliance Foundation",
          "HDFC Bank"
        ]
      },
      {
        type: "testimonials",
        badge: "What People Say",
        heading: "Testimonials",
        items: [
          {
            name: "Rajesh Kumar",
            role: "Beneficiary",
            content:
              "Sabri Helpage changed my life. Their support helped me get back on my feet.",
            image: IMAGE_URLS.TESTIMONIAL_1,
            rating: 5
          },
          {
            name: "Priya Sharma",
            role: "Volunteer",
            content:
              "Working with this organization has been incredibly rewarding. I'm proud to be part of this mission.",
            image: IMAGE_URLS.TESTIMONIAL_2,
            rating: 5
          },
          {
            name: "Dr. Amit Verma",
            role: "Partner Organization",
            content:
              "The dedication and impact of Sabri Helpage is truly remarkable. They are making real change.",
            image: IMAGE_URLS.TESTIMONIAL_3,
            rating: 5
          }
        ]
      },
      {
        type: "stories",
        heading: "Our Stories",
        viewAllText: "Read All",
        mobileViewAllText: "Read All Stories",
        items: [
          {
            id: 1,
            title: "Legal Aid Camp for Rural Women",
            date: "Nov 1, 2025",
            image: IMAGE_URLS.NEWS_1_LEGAL,
            snippet:
              "Sabri Helpage successfully organized a free legal aid and counseling camp in rural Bihar.",
            category: "Legal Aid"
          },
          {
            id: 2,
            title: "Food Distribution Drive in Slums",
            date: "Oct 15, 2025",
            image: IMAGE_URLS.NEWS_2_FOOD,
            snippet:
              "A week-long food and ration distribution drive helped feed 5,000 families.",
            category: "Food Security"
          },
          {
            id: 3,
            title: "New Water Filtration Project",
            date: "Sep 28, 2025",
            image: IMAGE_URLS.NEWS_3_WATER,
            snippet:
              "Launched a sustainable water filtration system providing clean drinking water.",
            category: "Water & Sanitation"
          }
        ]
      }
    ]
  },

  // ============================================================
  // 2. ABOUT US PAGE
  // ============================================================
  {
    slug: "about",
    title: "About Us",
    sections: [
      {
        type: "header",
        title: "About Us",
        subtitle: "Empowering communities through compassion and action"
      },
      {
        type: "welcome",
        heading: "Welcome to Sabri Helpage",
        paragraphs: [
          "Sabri Helpage was founded in 2013 and is based in Kolkata, India. Our mission is to bring dignity, care, and emotional support to communities that are often ignored. Over time, we have grown into a comprehensive social initiative focusing on mental health awareness, elderly care, and girl child education.",
          "We work at the grassroots level, helping families in need across hard-to-reach villages where access to information and support is limited. Through counseling camps, emotional well-being programs, elderly support initiatives, and educational empowerment programs, we strive to create lasting change in the communities we serve."
        ]
      },
      {
        type: "mission_banner",
        quote: "Dedicated to making society more knowledgeable, emotionally strong, and welcoming, one life at a time.",
        attribution: "— Sabri Helpage Mission"
      },
      {
        type: "governing_body",
        heading: "Governing Body",
        members: [
          {
            name: "Aarti BR Singh",
            image: "/images/about/aarti.jpg",
            bio: "Aarti BR Singh, the visionary Founder of Sabri Helpage, is a caring social leader whose work has changed the lives of many people in India. She started Sabri Helpage in 2013 because she cared deeply about the well-being of her community. She believes in the power of education and emotional support to change lives and has made it her mission to make these available to everyone."
          },
          {
            name: "Yash Guptaa",
            image: "/images/about/yash.jpg",
            bio: "Yash Guptaa is a young philanthropist who makes a difference in the world. His work for the greater good shows both compassion and purpose. He believes strongly in giving back to society, so he has worked to support causes that make a real difference in the lives of vulnerable communities over time."
          },
          {
            name: "Prerna Guptaa",
            image: "/images/about/prerna.jpg",
            bio: "Prerna Guptaa is a kind-hearted person who helps others because she cares about them and wants to make the world a better place. She is very aware of the problems that vulnerable communities face and has dedicated herself to supporting programs that promote dignity, opportunity, and mental health."
          }
        ]
      }
    ]
  },

  // ============================================================
  // 3. OUR CAUSES PAGE
  // ============================================================
  {
    slug: "causes",
    title: "Our Causes",
    sections: [
      {
        type: "header",
        title: "Our Causes",
        subtitle: "Three focused missions driving our impact across communities",
        eyebrow: "What We Do"
      },
      {
        type: "cause_card",
        badge: "Awareness",
        title: "Mental Health Awareness",
        subtitle: "\"Breaking the silence\"",
        paragraphs: [
          "Mental health remains a taboo subject in many Indian households. Sabri Helpage is dedicated to de-stigmatizing mental illness through awareness campaigns and counseling support.",
          "We organize workshops to help young people recognize the signs of depression and anxiety, fostering a generation that is not afraid to ask for help."
        ],
        buttonText: "Read More",
        buttonRoute: "mental-health"
      },
      {
        type: "cause_card",
        badge: "Core Focus",
        badgeTone: "primary",
        title: "Elderly Care & Dignity",
        description: "We support abandoned seniors with medical camps, legal aid, and essential supplies, ensuring safety, dignity, and access to care.",
        bulletPoints: [
          "Legal & Medical Support for seniors to claim their rights and receive geriatric care.",
          "Community programs combating loneliness and promoting active, healthy living."
        ],
        buttonText: "Read More",
        buttonRoute: "elderly-care"
      },
      {
        type: "cause_card",
        badge: "Empowerment",
        title: "Girl Child & Education",
        description: "Our focus is on street girls—the most invisible demographic in urban India. Education is the tool to break the cycle of poverty.",
        cards: [
          {
            title: "Hygiene & Dignity",
            description: "Menstrual hygiene kits and health education for adolescent girls."
          },
          {
            title: "Vocational Skills",
            description: "Beyond literacy, we provide skills to secure safe, dignified employment."
          }
        ],
        buttonText: "Read More",
        buttonRoute: "girl-education"
      }
    ]
  },

  // ============================================================
  // 4. SOCIOFARE AWARDS PAGE
  // ============================================================
  {
    slug: "sociofare",
    title: "SocioFare Awards",
    sections: [
      {
        type: "header",
        title: "SocioFare Awards",
        subtitle: "Celebrating the unsung heroes of our community"
      },
      {
        type: "intro_cards",
        cards: [
          {
            heading: "Dedication & Impact",
            paragraphs: [
              "Sabri Helpage is honored to dedicate the SocioFare Awards to those whose unwavering commitment, compassion, and service have made a profound and lasting impact on our society.",
              "These distinguished individuals work quietly and selflessly, driven by a deep sense of purpose."
            ]
          },
          {
            heading: "Inspiration & Unity",
            paragraphs: [
              "Through their remarkable contributions, they exemplify the highest ideals of community service and inspire us all to strive for a better, kinder world.",
              "Their actions foster resilience and unity, reminding us that true progress is achieved through collective hope and dedicated service to others."
            ]
          }
        ]
      },
      {
        type: "mission_cards",
        items: [
          {
            icon: "shield",
            title: "Our Mission",
            description: "The SocioFare is a movement dedicated to recognizing and celebrating selfless individuals who devote their lives to the service of others."
          },
          {
            icon: "users",
            title: "Join Us",
            description: "Be part of this celebration of real-life heroes who illuminate the path for others through their compassion and service."
          }
        ]
      }
    ]
  },

  // ============================================================
  // 5. SABRI SOCIAL IMPACT CLUB (ILC) PAGE
  // ============================================================
  {
    slug: "ilc",
    title: "Sabri Social Impact Club",
    sections: [
      {
        type: "welcome",
        title: "Welcome to Sabri Social Impact Club!",
        paragraphs: [
          "SSIC is the vision of Sabri Helpage to create a caring and socially responsible community where businesses and nonprofits work together to make a difference in society that lasts.",
          "The Sabri Social Impact Club wants to see a future where people work together to help weak communities, give youth power, support girls, and make India's environmental and social welfare system stronger."
        ]
      },
      {
        type: "mission-banner",
        quote: "To create a thriving ecosystem that connects people and organisations that care about social welfare and making a difference.",
        attribution: "SSIC Mission Statement"
      },
      {
        type: "mission-list",
        title: "Our Mission",
        items: [
          "To create a thriving ecosystem that connects people and organisations that care about social welfare and making a difference.",
          "To promote solutions based on research and new ways of doing things that deal with important social problems in a way that has a lasting, large-scale effect.",
          "To help businesses and non-profits share information, work together, and build their skills so that social development efforts are stronger and more unified.",
          "To encourage people to act in a socially responsible way through structured programs, partnerships, and initiatives that make communities stronger.",
          "To create a welcoming space where people can share their thoughts, resources, and chances to make society stronger, healthier, and more caring."
        ]
      }
    ]
  },

  // ============================================================
  // 6. ELDERLY CARE PAGE
  // ============================================================
  {
    slug: "elderly-care",
    title: "Elderly Care",
    sections: [
      {
        type: "header",
        title: "Elderly Care",
        subtitle: "Dignity, Comfort, and Support for Seniors"
      },
      {
        type: "hero_image",
        image: IMAGE_URLS.ELDERLY_CARE,
        alt: "Elderly Care"
      },
      {
        type: "content",
        heading: "Elderly Care at Sabri Helpage",
        introduction: "Sabri Helpage is a caring support system for older people, reaching out to those who are often ignored and unheard. Every older person deserves care, respect, and emotional security. We work hard to improve the quality of life for these people, ensuring age never gets in the way of health, comfort, or hope.",
        subheading: "Our Key Services",
        services: [
          "Full Eye Care: Exams, early detection, and surgery support for seniors",
          "Medication Help: Access to essential medicines for chronic illnesses",
          "Nourishing Food Programs: Balanced nutrition for strength and health"
        ]
      },
      {
        type: "cta_box",
        heading: "Support Our Elders",
        description: "Your donation helps us provide essential care, medication, and companionship.",
        buttonText: "Donate Now",
        buttonRoute: "donate"
      }
    ]
  },

  // ============================================================
  // 7. GIRL CHILD EDUCATION PAGE
  // ============================================================
  {
    slug: "girl-education",
    title: "Girl Child Education",
    sections: [
      {
        type: "header",
        title: "Girl Child Education",
        subtitle: "Education and Empowerment"
      },
      {
        type: "hero_image",
        image: IMAGE_URLS.GIRL_EDUCATION,
        alt: "Girl Child Empowerment"
      },
      {
        type: "content",
        heading: "Girl Child Education at Sabri Helpage",
        introduction: "Sabri Helpage is committed to helping young girls who are having problems with their social, economic, or emotional lives. We believe every girl deserves access to education, respect, and the chance to dream without limits.",
        subheading: "Our Main Goals",
        goals: [
          "Helping girls get an education",
          "Monthly sanitary pad support"
        ]
      },
      {
        type: "cta_box",
        heading: "Sponsor a Girl's Future",
        description: "Your support helps us provide education, dignity, and hope to girls in need.",
        buttonText: "Sponsor Now",
        buttonRoute: "donate"
      }
    ]
  },

  // ============================================================
  // 8. MENTAL HEALTH PAGE
  // ============================================================
  {
    slug: "mental-health",
    title: "Mental Health",
    sections: [
      {
        type: "header",
        title: "Mental Health",
        subtitle: "Awareness, Support, and Care"
      },
      {
        type: "hero_image",
        image: IMAGE_URLS.MENTAL_HEALTH,
        alt: "Mental Health Support"
      },
      {
        type: "content",
        heading: "Why Mental Health Matters",
        introduction: "Sabri Helpage works to break the stigma around mental health through counseling, awareness, and support groups. We believe in a society where everyone feels safe asking for help, being themselves, and growing with dignity and strength.",
        sections: [
          {
            subheading: "Our Focus",
            points: [
              "Awareness campaigns and open conversations",
              "College student mental health programs",
              "Support networks and safe spaces"
            ]
          },
          {
            subheading: "How We Help",
            points: [
              "Workshops and talks to dispel myths and encourage emotional health",
              "Structured programs in colleges for early screening and support",
              "Personalized help and podcast conversations to build resilience"
            ]
          }
        ]
      },
      {
        type: "cta_box",
        heading: "Need Confidential Support?",
        description: "You are not alone. Reach out to our dedicated team today.",
        buttonText: "Contact Our Team",
        buttonType: "email",
        buttonRoute: "mailto:info@sabrihelpage.org"
      }
    ]
  },

  // ============================================================
  // 9. PRIVACY POLICY PAGE
  // ============================================================
  {
    slug: "privacy",
    title: "Privacy Policy",
    sections: [
      {
        type: "header",
        title: "Privacy Policy",
        subtitle: "How we protect and use your information"
      },
      {
        type: "welcome",
        heading: "Your privacy is important to us",
        description: "This policy explains how we handle your data and protect your privacy."
      },
      {
        type: "policy_sections",
        heading: "Privacy Policy Details",
        items: [
          {
            title: "Information We Collect",
            content: "We collect information you provide directly such as your name, email, phone number, and donation information. We also automatically collect certain information when you visit our website."
          },
          {
            title: "How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, process donations, send important notices, and respond to your inquiries and requests."
          },
          {
            title: "Information Sharing",
            content: "We do not sell, trade, or rent your personal information. We may share information with trusted third parties who assist us in operating our website and conducting our business."
          },
          {
            title: "Security",
            content: "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, and destruction."
          },
          {
            title: "Contact Us",
            content: "If you have questions about this Privacy Policy, please contact us at privacy@sabrihelpage.org or call our office for more information."
          }
        ]
      }
    ]
  },

  // ============================================================
  // 10. TERMS OF USE PAGE
  // ============================================================
  {
    slug: "terms",
    title: "Terms of Use",
    sections: [
      {
        type: "header",
        title: "Terms of Use",
        subtitle: "Please read these terms and conditions carefully before using our website"
      },
      {
        type: "welcome",
        heading: "Welcome to Sabri Helpage",
        description: "These terms and conditions outline the rules and regulations for the use of our website."
      },
      {
        type: "terms_sections",
        heading: "Terms of Use Details",
        items: [
          {
            title: "Acceptance of Terms",
            content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
          },
          {
            title: "Intellectual Property Rights",
            content: "Unless otherwise stated, Sabri Helpage owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this content from the website purely for personal non-commercial use, subject to restrictions set in these terms and conditions."
          },
          {
            title: "User Content",
            content: "In these terms of use, \"User Content\" shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying User Content, you grant Sabri Helpage a non-exclusive, worldwide irrevocable license to reproduce, adapt, modify, and distribute it."
          },
          {
            title: "Donations and Payments",
            content: "All donations are non-refundable except in cases of processing errors. Donations are made voluntarily and in no way constitute a contract for services. Your donation supports our programs and initiatives."
          },
          {
            title: "Disclaimer",
            content: "The information on this website is provided on an \"as is\" basis. Sabri Helpage makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
          },
          {
            title: "Limitations of Liability",
            content: "In no event shall Sabri Helpage or its suppliers be liable for any damages including, without limitation, direct, indirect, special, consequential, or incidental damages arising out of the use or inability to use the materials on this website."
          },
          {
            title: "Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
          },
          {
            title: "Changes to Terms",
            content: "Sabri Helpage reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
          }
        ]
      },
      {
        type: "contact",
        heading: "Need Help?",
        description: "If you have any questions about these Terms, please contact us at:",
        email: "info@sabrihelpagenpo.org",
        phone: "+91 XXXXXXXXXX"
      }
    ]
  },

  // ============================================================
  // 11. GALLERY PAGE
  // ============================================================
  {
    slug: "gallery",
    title: "Our Gallery",
    sections: [
      {
        type: "header",
        title: "Our Gallery",
        subtitle: "A glimpse into our work and impact"
      },
      {
        type: "gallery_grid",
        images: [
          {
            url: "/event1.jpg",
            caption: "Annual Charity Gala"
          },
          {
            url: "/event2.jpg",
            caption: "Community Outreach Program"
          },
          {
            url: "/event3.jpg",
            caption: "Health Camp"
          },
          {
            url: "/event4.jpg",
            caption: "Volunteer Meetup"
          },
          {
            url: "/event5.jpg",
            caption: "Elderly Care Initiative"
          },
          {
            url: "/event6.jpg",
            caption: "Girl Child Education Drive"
          },
          {
            url: "/elderlyCareImg.jpg",
            caption: "Elderly Care"
          },
          {
            url: "/MentalHealth.jpg",
            caption: "Mental Health Workshop"
          },
          {
            url: "/girlChildEducation.jpg",
            caption: "Girl Child Education"
          },
          {
            url: "/WaterFilteration.jpg",
            caption: "Water Filtration Project"
          },
          {
            url: "/events1.jpg",
            caption: "Fundraiser Walkathon"
          },
          {
            url: "/events2.jpg",
            caption: "Awareness Campaign"
          }
        ]
      }
    ]
  },


  // ============================================================
  // 13. EVENTS DETAILED PAGE
  // ============================================================
  {
    slug: "events-detailed",
    title: "Events",
    sections: [
      {
        type: "header",
        title: "Events",
        subtitle: "Join us in making a difference in our community",
        backgroundColor: "#b73d34"
      },
      {
        type: "events_list",
        allEvents: [
          {
            title: "Annual Charity Gala 2025",
            date: "December 31, 2025",
            time: "7:00 PM",
            location: "Grand Hall, City Center",
            category: "Featured",
            description: "Join us for our biggest event of the year, supporting elderly care and community outreach. Enjoy an evening of inspiration, entertainment, and giving back.",
            image: "/events/2025-1.jpg"
          },
          {
            title: "Health Camp 2024",
            date: "August 15, 2024",
            time: "10:00 AM",
            location: "Community Clinic",
            category: "Health",
            description: "A free health camp for seniors, with medical checkups and wellness workshops.",
            image: "/events/2024-2.jpg"
          },
          {
            title: "Fundraiser Walkathon 2023",
            date: "March 10, 2023",
            time: "8:00 AM",
            location: "Central Park",
            category: "Fundraiser",
            description: "Community walkathon to raise funds for elderly support programs.",
            image: "/events/2023-3.jpg"
          },
          {
            title: "Spring Volunteer Meetup",
            date: "April 5, 2026",
            time: "3:00 PM",
            location: "Volunteer Center",
            category: "Volunteer",
            description: "Kick off the new year with our volunteer team and plan upcoming projects.",
            image: "/events/2026-1.jpg"
          },
          {
            title: "Elderly Tech Workshop",
            date: "June 20, 2026",
            time: "11:00 AM",
            location: "Tech Hub",
            category: "Workshop",
            description: "Teaching seniors how to use smartphones and the internet safely.",
            image: "/events/2026-2.jpg"
          }
        ]
      }
    ]
  },

  // ============================================================
  // 14. INTERNSHIP OPPORTUNITIES PAGE
  // ============================================================
  {
    slug: "internship",
    title: "Internship Opportunities",
    sections: [
      {
        type: "header",
        title: "Internship Opportunities",
        subtitle: "Hands-on roles for students and early-career professionals"
      },
      {
        type: "welcome",
        heading: "Join our Internship Program",
        description: "Explore hands-on roles for students and early-career professionals. Select a role below and apply to join our mission."
      },
      {
        type: "internship_roles",
        heading: "Open Internship Roles",
        roles: [
          {
            id: 1,
            title: "Program Coordinator",
            location: "Delhi",
            duration: "3 months",
            stipend: "₹8,000"
          },
          {
            id: 2,
            title: "Social Media Intern",
            location: "Remote",
            duration: "3 months",
            stipend: "₹6,000"
          },
          {
            id: 3,
            title: "Research Intern",
            location: "Bangalore",
            duration: "6 months",
            stipend: "₹10,000"
          }
        ]
      },
      {
        type: "application_section",
        heading: "Ready to Join Us?",
        description: "Enter your email and select a role above to start your application.",
        placeholderText: "Your email address",
        buttonText: "Start Application",
        successMessage: "Thank you! Your application has been received. We'll be in touch soon.",
        disclaimerText: "By applying, you agree to our Privacy Policy and Terms of Service."
      }
    ]
  },

  // ============================================================
  // 15. PUBLICATIONS PAGE
  // ============================================================
  {
    slug: "publications",
    title: "Publications",
    sections: [
      {
        type: "header",
        mainHeading: "Glimpse of a Sabri Helpage's Impact",
        subHeading: "Publications"
      },
      {
        type: "newspaper_articles",
        heading: "Newspaper Articles",
        articles: [
          {
            date: "24th May, 2024",
            source: "Prajavani",
            label: "Newspaper Article"
          },
          {
            date: "8th March, 2025",
            source: "The Belgaum Today",
            label: "Newspaper Article"
          },
          {
            date: "12th May, 2024",
            source: "Kanina Ajjana",
            label: "Newspaper Article"
          }
        ],
        buttonText: "All Media"
      },
      {
        type: "digital_publications",
        heading: "Digital Publications",
        items: [
          {
            date: "30th March, 2025",
            source: "Sabri Peer Award 2024 | Honors Basha Shri Church Malato",
            type: "video"
          },
          {
            date: "30th December, 2024",
            source: "VOV",
            type: "pdf"
          }
        ]
      }
    ]
  },

  // ============================================================
  // 16. FAQ PAGE
  // ============================================================
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    sections: [
      {
        type: "header",
        badge: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Find answers to the most common questions about Sabri Helpage, our programs, donations, and how you can get involved."
      },
      {
        type: "faq_list",
        faqs: [
          {
            question: "What is Sabri Helpage?",
            answer: "Sabri Helpage is a non-profit organization dedicated to serving the elderly, women, and children through various welfare programs and initiatives."
          },
          {
            question: "How can I volunteer with Sabri Helpage?",
            answer: "You can volunteer by filling out the volunteer form on our website or contacting us directly through the Contact page. We welcome passionate individuals from all backgrounds."
          },
          {
            question: "How are donations used?",
            answer: "Donations are used to fund our programs, provide resources to beneficiaries, and support operational costs. We ensure transparency and regular reporting to all donors."
          },
          {
            question: "Can I get a donation receipt?",
            answer: "Yes, all donors receive a receipt via email. If you do not receive one, please contact us at info@sabrihelpage.org."
          },
          {
            question: "How do I contact Sabri Helpage?",
            answer: "You can reach us via the Contact page, email (info@sabrihelpage.org), or phone (+91 99999 99999)."
          },
          {
            question: "What programs do you offer?",
            answer: "We offer programs in elderly care, mental health, girl child education, food security, and more. Visit our Programs page for details."
          },
          {
            question: "Is my donation tax-deductible?",
            answer: "Yes, all donations to Sabri Helpage are eligible for tax benefits under Section 80G of the Income Tax Act."
          },
          {
            question: "How can my company partner with Sabri Helpage?",
            answer: "We welcome CSR partnerships and collaborations. Please visit our CSR page or contact us for partnership opportunities."
          },
          {
            question: "How can I stay updated on your work?",
            answer: "Subscribe to our newsletter or follow us on social media for the latest updates, stories, and impact reports."
          },
          {
            question: "Where are you located?",
            answer: "Our main office is in Darbhanga, Bihar, India, but we operate programs across multiple regions."
          }
        ],
        footerText: "Can't find your answer?",
        contactLinkText: "Contact us",
        contactLinkSuffix: "and we'll be happy to help."
      }
    ]
  },

  // ============================================================
  // 17. CSR SUMMIT PAGE
  // ============================================================
  {
    slug: "csr-summit",
    title: "Annual CSR & ESG Summit 2025",
    sections: [
      {
        type: "hero_banner",
        title: "Annual CSR & ESG Summit 2025",
        subtitle: "A gathering of corporate leaders, non-profit pioneers, and social innovators.",
        date: "March 20-21, 2025",
        location: "New Delhi Convention Center"
      },
      {
        type: "about_cards",
        cards: [
          {
            heading: "About the Summit",
            description: "The Annual CSR & ESG Summit brings together corporate CSR teams, sustainability leaders, and community organizations to share best practices, forge partnerships, and scale impact."
          },
          {
            heading: "Who Should Attend",
            list: [
              "CSR & Sustainability Leaders",
              "Social Enterprise Founders",
              "NGO Program Heads",
              "Policy Makers & Researchers"
            ]
          }
        ]
      },
      {
        type: "summit_highlights",
        heading: "Summit Highlights",
        highlights: [
          {
            icon: "star",
            label: "Expert Keynotes"
          },
          {
            icon: "users",
            label: "Interactive Workshops"
          },
          {
            icon: "network",
            label: "Partnership Marketplace"
          }
        ]
      },
      {
        type: "registration_cta",
        heading: "Register Now",
        description: "Seats are limited — register early to secure your spot and benefit from early-bird pricing.",
        buttonText: "Register for Summit"
      }
    ]
  },

  // ============================================================
  // 18. DONATE PAGE
  // ============================================================
  {
    slug: "donate",
    title: "Donate",
    sections: [
      {
        type: "hero_section",
        title: "Transform Lives, Empower Communities",
        subtitle: "Join us in building a compassionate world where every elderly person can thrive with dignity.",
        stats: [
          {
            icon: "users",
            value: "50K+",
            label: "Lives Touched"
          },
          {
            icon: "map",
            value: "25",
            label: "Regions Served"
          },
          {
            icon: "clock",
            value: "10+",
            label: "Years of Service"
          }
        ]
      },
      {
        type: "donation_form",
        heading: "Sabri Helpage Donation",
        donationOptions: [5000, 15000, 25000],
        customAmountPlaceholder: "₹ Other Amount (Min ₹ 100)",
        supportCategoryLabel: "I offer my support for",
        supportCategories: [
          "Elderly Care",
          "Education",
          "Mental Health",
          "General Fund"
        ],
        loginButtonLabel: "Login",
        loginButtonSubtext: "For Regular Donors",
        frequencyOptions: [
          { value: "one-time", label: "One-time" },
          { value: "recurring", label: "Monthly Recurring" }
        ],
        nextButtonText: "Next",
        taxNote: "All Donations to Sabri Helpage are tax exempted."
      },
      {
        type: "focus_areas",
        heading: "Our Focus Areas",
        description: "We're committed to creating sustainable change across critical sectors that impact the most vulnerable members of society.",
        areas: [
          {
            icon: "heart",
            title: "Mental Health",
            subtitle: "Ensuring mental health and healthcare."
          },
          {
            icon: "users",
            title: "Elderly Care",
            subtitle: "Dignity and support for senior citizens."
          },
          {
            icon: "book",
            title: "Girl Child Education",
            subtitle: "Education and girl child empowerment."
          }
        ]
      },
      {
        type: "impact_section",
        heading: "Your Support Creates Impact",
        description: "When you donate, you're not just giving money. You're providing education, healthcare, protection, and hope to those who need it most. Every rupee is a step towards a more equitable world.",
        trustBadges: [
          "100% Transparent",
          "Verified NGO",
          "Direct Impact"
        ],
        summaryNote: "We ensure that your donation reaches those who need it most, with complete transparency and accountability."
      },
      {
        type: "donor_details_form",
        heading: "Donor Details",
        description: "Please provide your details for tax receipt generation and confirmation.",
        citizenshipOptions: [
          { value: "indian", label: "Indian Citizens" },
          { value: "foreign", label: "Foreign Citizens/OCI" }
        ],
        fields: [
          { id: "first-name", label: "First Name", type: "text", required: true },
          { id: "last-name", label: "Last Name", type: "text", required: true },
          { id: "email", label: "Email", type: "email", required: true },
          { id: "mobile", label: "Mobile Number", type: "tel", required: true },
          { id: "dob", label: "Date of Birth", type: "date", required: false },
          { id: "pan", label: "PAN Number", type: "text", required: true, showIf: "indian" },
          { id: "address", label: "Street Address", type: "text", required: true },
          { id: "zip", label: "Zip/Postal Code", type: "text", required: true },
          { id: "city", label: "City", type: "text", required: true },
          { id: "province", label: "State/Province", type: "text", required: true }
        ],
        existingDonorQuestion: "Are you an existing donor?",
        disclaimer: "By sharing your details, you agree to receive tax receipt, stories and updates via mobile, WhatsApp, landline, email, and post.",
        backButtonText: "Back to Amount",
        submitButtonText: "Pay",
        submitButtonSuffix: "Now"
      }
    ]
  },

  // ============================================================
  // 19. CONTACT PAGE
  // ============================================================
  {
    slug: "contact",
    title: "Contact Us",
    sections: [
      {
        type: "header",
        title: "Contact Us",
        subtitle: "Get in touch with us",
        variant: "primary"
      },
      {
        type: "contact_form",
        heading: "Send us a Message",
        description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        fields: [
          {
            name: "name",
            placeholder: "Your Name *",
            type: "text",
            required: true
          },
          {
            name: "email",
            placeholder: "Your Email *",
            type: "email",
            required: true
          },
          {
            name: "subject",
            placeholder: "Subject",
            type: "text",
            required: false
          },
          {
            name: "message",
            placeholder: "Your Message *",
            type: "textarea",
            rows: 5,
            required: true
          }
        ],
        submitButtonText: "Send Message ✉",
        loadingText: "Sending…",
        successMessage: "Thank you for your message! We'll get back to you soon.",
        errorMessage: "Failed to send message. Please try again."
      },
      {
        type: "contact_info",
        heading: "Get in Touch",
        cards: [
          {
            icon: "map",
            title: "Address",
            content: "7 B, Mysore Road, Rashbehari Avenue,\nKolkata - 700026",
            linkText: "Open in Google Maps",
            linkUrl: "https://www.google.com/maps/search/?api=1&query=7+B+Mysore+Road+Rashbehari+Avenue+Kolkata+700026"
          },
          {
            icon: "email",
            title: "Email",
            content: "info@sabrihelpage.org",
            linkText: "Send Email",
            linkUrl: "mailto:info@sabrihelpage.org"
          },
          {
            icon: "mobile",
            title: "Mobile",
            content: "+91 9874021457",
            linkText: "Call Now",
            linkUrl: "tel:+919874021457"
          },
          {
            icon: "phone",
            title: "Telephone",
            content: "033 4601 3886",
            linkText: "Call Now",
            linkUrl: "tel:03346013886"
          }
        ]
      }
    ]
  },

  // ============================================================
  // 20. AWARDS & RECOGNITION PAGE
  // ============================================================
  {
    slug: "awards",
    title: "Awards & Recognition",
    sections: [
      {
        type: "header",
        title: "Awards & Recognition",
        subtitle: "Celebrating our journey and honors"
      },
      {
        type: "awards_gallery",
        autoScrollInterval: 3000,
        images: [
          {
            src: "/awards/award1.jpg",
            date: "March 2023",
            caption: "Award 1"
          },
          {
            src: "/awards/award2.jpg",
            date: "August 2022",
            caption: "Award 2"
          },
          {
            src: "/awards/award3.jpg",
            date: "December 2021",
            caption: "Award 3"
          },
          {
            src: "/awards/award4.jpg",
            date: "July 2020",
            caption: "Award 4"
          }
        ]
      }
    ]
  }
];

export default pages;