// If you need IMAGE_URLS elsewhere, use module.exports or export default as needed
const IMAGE_URLS = {
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
  // 1. HOME
  {
    slug: "home",
    title: "Home",
    metaDescription: "Sabri Helpage - Serving society for more than a decade through mental health support, elderly care, and girl child education.",
    updatedAt: "2025-12-20T10:30:00.000Z",
    sections: [
      {
        type: "hero",
        headline: "Serving society for more than a decade.",
        subhead: "सर्वे भवन्तु सुखिनः",
        subheadTranslation: "May all be happy",
        backgroundImage: "/HeroSection.jpg",
        cta: [
          {
            label: "Read More",
            targetSlug: "about",
            variant: "primary"
          },
          {
            label: "Support Us",
            targetSlug: "donate",
            variant: "secondary"
          }
        ]
      },
      {
        type: "what-we-stand-for",
        title: "What We Stand For",
        subtitle: "Our core values and focus areas",
        items: [
          {
            image: "/websiteLogo.jpg",
            caption: "Compassion & Community"
          },
          {
            image: "/girlChildEducation.jpg",
            caption: "Girl Child Education"
          },
          {
            image: "/MentalHealth.jpg",
            caption: "Mental Health Awareness"
          }
        ]
      },
      {
        type: "stats",
        title: "Our Impact in Numbers",
        subtitle: "Making a Difference, One Life at a Time",
        items: [
          {
            label: "Lives Impacted",
            value: "50K+"
          },
          {
            label: "Years of Service",
            {
              type: "hero",
              headline: "Serving society for more than a decade.",
              subhead: "सर्वे भवन्तु सुखिनः",
              subheadTranslation: "May all be happy",
              backgroundImage: "/HeroSection.jpg",
              cta: [
                {
                  label: "Read More",
                  targetSlug: "about",
                  variant: "primary"
                },
                {
                  label: "Support Us",
                  targetSlug: "donate",
                  variant: "secondary"
                }
              ]
            },
            {
              type: "what-we-stand-for",
              title: "What We Stand For",
              subtitle: "Our core values and focus areas",
              items: [
                {
                  image: "/websiteLogo.jpg",
                  caption: "Compassion & Community"
                },
                {
                  image: "/girlChildEducation.jpg",
                  caption: "Girl Child Education"
                },
                {
                  image: "/MentalHealth.jpg",
                  caption: "Mental Health Awareness"
                }
              ]
            },
            {
              type: "stats",
              title: "Our Impact in Numbers",
              subtitle: "Making a Difference, One Life at a Time",
              items: [
                {
                  label: "Lives Impacted",
                  value: "50K+"
                },
                {
                  label: "Years of Service",
                  value: "12+"
                },
                {
                  label: "Active Volunteers",
                  value: "200+"
                }
              ]
            },
            route: "girl-education",
            stats: "800+ girls"
          }
        ]
      },
      {
        type: "supporters",
        title: "Our Supporters",
        subtitle: "Proud partners in creating positive change",
        items: [
          { name: "Google", logo: "/logos/google.png" },
          { name: "Microsoft", logo: "/logos/microsoft.png" },
          { name: "Tata Trusts", logo: "/logos/tata.png" },
          { name: "Reliance Foundation", logo: "/logos/reliance.png" },
          { name: "HDFC Bank", logo: "/logos/hdfc.png" }
        ]
      },
      {
        type: "testimonials",
        title: "Voices of Impact",
        subtitle: "Stories from those whose lives we've touched",
        displayComponent: "TestimonialsSection"
      },
      {
        type: "stories",
        title: "Our Stories",
        subtitle: "Recent impact and community initiatives",
        ctaLabel: "Read All",
        ctaSlug: "stories",
        items: [
          {
            title: "Legal Aid Camp for Rural Women",
            date: "Nov 1, 2025",
            image: "/event1.jpg",
            snippet: "Sabri Helpage successfully organized a free legal aid and counseling camp in rural Bihar.",
            slug: "legal-aid-camp-2025",
            category: "Legal Aid",
            author: "Sabri Team"
          },
          {
            title: "Food Distribution Drive in Slums",
            date: "Oct 15, 2025",
            image: "/event2.jpg",
            snippet: "A week-long food and ration distribution drive helped feed 5,000 families.",
            slug: "food-distribution-drive",
            category: "Community Service",
            author: "Sabri Team"
          },
          {
            title: "New Water Filtration Project",
            date: "Sep 28, 2025",
            image: "/event3.jpg",
            snippet: "Launched a sustainable water filtration system providing clean drinking water.",
            slug: "water-filtration-project",
            category: "Infrastructure",
            author: "Sabri Team"
          }
        ]
      }
    ]
  },


  // 2. ABOUT
  {
    slug: "about",
    title: "About Us",
    sections: [
      {
        type: "welcome",
        headline: "Welcome to Sabri Helpage",
        description: "Empowering communities through compassion and action."
      },
      {
        type: "mission",
        text: "Founded 2013. Mental health, elderly care, girl education."
      },
      {
        type: "impact-quote",
        quote: "Dedicated to making society more knowledgeable, emotionally strong, and welcoming, one life at a time.",
        attribution: "Sabri Helpage Mission"
      },
      {
        type: "team",
        members: [
          {
            name: "Aarti BR Singh",
            role: "Founder",
            image: "/images/team/aarti.jpg",
            description: "Visionary leader and founder of Sabri Helpage."
          },
          {
            name: "Yash Guptaa",
            role: "Philanthropist",
            image: "/images/team/yash.jpg",
            description: "Young philanthropist supporting vulnerable communities."
          }
        ]
      },
      {
        type: "supporters",
        supporters: ["Google", "Microsoft", "Tata Trusts"]
      }
    ]
  },

  // 3. OUR CAUSES
  {
    slug: "our-causes",
    title: "Our Causes",
    sections: [
      {
        type: "mental-health",
        badge: "Awareness",
        title: "Mental Health Awareness",
        subtitle: "Breaking the silence",
        paragraphs: [
          "Mental health remains a taboo subject in many Indian households. Sabri Helpage is dedicated to de-stigmatizing mental illness through awareness campaigns and counseling support.",
          "We organize workshops to help young people recognize the signs of depression and anxiety, fostering a generation that is not afraid to ask for help."
        ],
        ctaText: "Read More",
        ctaRoute: "mental-health"
      },
      {
        type: "elderly-care",
        badge: "Core Focus",
        title: "Elderly Care & Dignity",
        description: "We support abandoned seniors with medical camps, legal aid, and essential supplies, ensuring safety, dignity, and access to care.",
        points: [
          "Legal & Medical Support for seniors to claim their rights and receive geriatric care.",
          "Community programs combating loneliness and promoting active, healthy living."
        ],
        ctaText: "Read More",
        ctaRoute: "elderly-care"
      },
      {
        type: "girl-education",
        badge: "Empowerment",
        title: "Girl Child & Education",
        description: "Our focus is on street girls—the most invisible demographic in urban India. Education is the tool to break the cycle of poverty.",
        cards: [
          {
            title: "Hygiene & Dignity",
            body: "Menstrual hygiene kits and health education for adolescent girls."
          },
          {
            title: "Vocational Skills",
            body: "Beyond literacy, we provide skills to secure safe, dignified employment."
          }
        ],
        ctaText: "Read More",
        ctaRoute: "girl-education"
      },
      {
        type: "sociofare-awards",
        title: "The SocioFare Awards",
        description: "A unique initiative by Sabri Helpage to shine a spotlight on excellence in social welfare. Celebrate those who dedicate their lives to helping others.",
        ctaText: "Nominate a Changemaker"
      },
      {
        type: "impact-stats",
        title: "Our Impact",
        items: [
          { value: "50,000+", label: "Lives impacted" },
          { value: "10+", label: "Years of Service" },
          { value: "25+", label: "Regions covered" }
        ]
      }
    ]
  },

  // 4. GALLERY
  {
    slug: "gallery",
    title: "Gallery",
    sections: [
      {
        type: "category-filter",
        categories: ["All", "Community", "Elderly Care", "Education", "Volunteers", "Health"]
      },
      {
        type: "images",
        items: [
          { url: "/images/gallery/community-outreach.jpg", caption: "Community Outreach" },
          { url: "/images/gallery/elderly-care.jpg", caption: "Elderly Care" },
          { url: "/images/gallery/education.jpg", caption: "Girl Education" },
          { url: "/images/gallery/mental-health.jpg", caption: "Mental Health Workshop" }
        ]
      }
    ]
  },

  // 5. SOCIOFARE
  {
    slug: "sociofare",
    title: "SocioFare Awards",
    sections: [
      {
        type: "intro",
        text: "Honoring those who serve society."
      },
      {
        type: "awards-events",
        items: [
          { 
            title: "Award Ceremony #1", 
            date: "MAR 2025",
            image: "/images/sociofare/ceremony-1.jpg"
          },
          { 
            title: "Award Ceremony #2", 
            date: "MAR 2025",
            image: "/images/sociofare/ceremony-2.jpg"
          }
        ]
      }
    ]
  },

  // 6. ILC
  {
  slug: "ilc",
  sections: [
    // sections[0] - Welcome Section
    {
      type: "welcome",
      title: "Welcome to Sabri Social Impact Club!",
      paragraphs: [
        "SSIC is the vision of Sabri Helpage to create a caring and socially responsible community where businesses and nonprofits work together to make a difference in society that lasts.",
        "The Sabri Social Impact Club wants to see a future where people work together to help weak communities, give youth power, support girls, and make India's environmental and social welfare system stronger."
      ]
    },
    
    // sections[1] - Mission Banner
    {
      type: "mission-banner",
      quote: "To create a thriving ecosystem that connects people and organisations that care about social welfare and making a difference.",
      attribution: "SSIC Mission Statement"
    },
    
    // sections[2] - Mission List
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

  // 7. DONATE
  {
    slug: "donate",
    title: "Donate",
    sections: [
      {
        type: "form",
        headline: "Support Our Mission",
        tagline: "80G tax-exempt (50% deduction)",
        amounts: [500, 1000, 2500, 5000, 10000],
        frequencies: ["one-time", "monthly"],
        programs: [
          { id: "mental-health", label: "Mental Health" },
          { id: "elderly-care", label: "Elderly Care" },
          { id: "girl-education", label: "Girl Education" },
          { id: "general", label: "Where Needed" }
        ],
        fields: [
          { name: "name", label: "Name", required: true },
          { name: "email", label: "Email", required: true },
          { name: "phone", label: "Phone", required: true }
        ]
      },
      {
        type: "impact",
        examples: [
          "₹500 = 1 counseling session",
          "₹1,000 = 1 elder's medicine/month"
        ]
      },
      {
        type: "faq",
        items: [
          { 
            question: "Is my donation tax-deductible?", 
            answer: "Yes! 80G registered. 50% tax deduction."
          }
        ]
      }
    ]
  },

  // 8. CONTACT
  {
    slug: "contact",
    title: "Contact",
    sections: [
      {
        type: "info",
        email: "contact@sabrihelpage.org",
        phone: "+91 [Phone]",
        address: "[Address], [City], India",
        hours: "Mon-Sat: 9-6"
      },
      {
        type: "form",
        fields: [
          { name: "name", label: "Name", required: true },
          { name: "email", label: "Email", required: true },
          { name: "subject", label: "Subject", options: ["General", "Volunteer", "Donation"] },
          { name: "message", label: "Message", required: true }
        ]
      }
    ]
  },

  // 9. PRIVACY
  {
    slug: "privacy",
    title: "Privacy Policy",
    sections: [
      {
        type: "legal",
        updated: "Jan 2024",
        sections: [
          { title: "Collection", content: "Name, email, phone, donation details, PAN." },
          { title: "Use", content: "Process donations, send receipts. Never sell data." },
          { title: "Security", content: "SSL encryption, secure storage." },
          { title: "Rights", content: "Contact: privacy@sabrihelpage.org" }
        ]
      }
    ]
  },

  // 10. TERMS
  {
    slug: "terms",
    title: "Terms of Use",
    sections: [
      {
        type: "legal",
        updated: "Jan 2024",
        sections: [
          { title: "Acceptance", content: "Using site = agreement to terms." },
          { title: "Donations", content: "Voluntary, non-refundable. 80G eligible." },
          { title: "Content", content: "Personal use OK, no commercial use." },
          { title: "Law", content: "Indian law. Contact: legal@sabrihelpage.org" }
        ]
      }
    ]
  }
];

module.exports = pages;