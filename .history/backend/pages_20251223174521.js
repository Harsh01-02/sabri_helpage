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
  // 1. HOME
{
  slug: "home",
  title: "Home",
  sections: [
    {
      type: "hero",
      headline: "Bringing Hope to the Hopeless",
      backgroundImage: "/images/hero.jpg",
      button1Text: "Read More",
      button2Text: "Support Us",
      sanskritText: "सर्वे भवन्तु सुखिनः",
      englishTranslation: "May all be happy"
    },
    {
      type: "what_we_stand_for",
      badge: "What We Stand For",
      heading: "Shaping Lives Through Compassionate Action.",
      description:
        "At Sabri Helpage, our mission is to make a positive and lasting impact on the lives of marginalized people globally.",
      mainImage: "/images/what-we-stand-for-1.jpg",
      topRightImage: "/images/what-we-stand-for-2.jpg",
      bottomRightImage: "/images/what-we-stand-for-3.jpg",
      buttonText: "View More"
    },
    {
      type: "stats",
      badge: "Our Milestones",
      heading: "We've Accomplished Most During This Span.",
      items: [
        { value: "10K+", label: "Lives Impacted" },
        { value: "50+", label: "Projects Completed" },
        { value: "15+", label: "Years of Service" }
      ]
    },
    {
      type: "video",
      youtubeVideoId: "csNcS9X49dQ",
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
          image: "/images/education.jpg",
          description:
            "Dedicated to providing resources and advocacy for education initiatives."
        },
        {
          title: "Healthcare",
          image: "/images/healthcare.jpg",
          description:
            "Dedicated to improving healthcare access and mental health support."
        },
        {
          title: "Women Empowerment",
          image: "/images/women.jpg",
          description:
            "Focused on empowering women through skills and opportunities."
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
          image: "/images/testimonial-1.jpg",
          rating: 5
        },
        {
          name: "Priya Sharma",
          role: "Volunteer",
          content:
            "Working with this organization has been incredibly rewarding.",
          image: "/images/testimonial-2.jpg",
          rating: 5
        },
        {
          name: "Dr. Amit Verma",
          role: "Partner Organization",
          content:
            "The dedication and impact of Sabri Helpage is truly remarkable.",
          image: "/images/testimonial-3.jpg",
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
          image: "/images/news-legal.jpg",
          snippet:
            "Sabri Helpage organized a free legal aid camp in rural Bihar.",
          category: "Legal Aid"
        },
        {
          id: 2,
          title: "Food Distribution Drive in Slums",
          date: "Oct 15, 2025",
          image: "/images/news-food.jpg",
          snippet:
            "A week-long food distribution drive fed 5,000 families.",
          category: "Food Security"
        },
        {
          id: 3,
          title: "New Water Filtration Project",
          date: "Sep 28, 2025",
          image: "/images/news-water.jpg",
          snippet:
            "Launched a clean water project for underserved areas.",
          category: "Water & Sanitation"
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
// 6. ILC
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
}
,

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

export default pages;
