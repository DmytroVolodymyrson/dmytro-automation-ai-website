// Site configuration for mutable homepage copy.
// Values marked [LOCKED] must not be changed without approval.

export const siteConfig = {
  hero: {
    // [LOCKED] Primary headline. Do not modify.
    headline: "Automate boring work.",
    // [LOCKED] Subheadline. Do not modify.
    headlineSub: "Focus on growth.",
    subtitle:
      "I help businesses save 10+ hours weekly and generate 300%+ ROI by building AI systems that automate repetitive work and let teams focus on what matters.",
    ctaText: "Book a Free Strategy Call",
    badge: "AI Automation Expert",
    stats: [
      { label: "Save 10+ hrs/week" },
      { label: "Scale without hiring" },
    ],
  },

  navbar: {
    ctaText: "Book a Call",
  },

  about: {
    badge: "The Person Behind the Automation",
    heading:
      "I started coding at 16. Now I build AI systems that run businesses.",
    paragraphs: [
      "I'm Dmytro. I grew up in Ukraine and wrote my first line of code at 16. After 7 years building software, I found my thing: using AI to automate the repetitive work that slows businesses down.",
      "Every automation I build starts with one question: what's eating up your time? From there, I design systems that handle it, so you can spend your hours on the work that actually grows your business.",
    ],
    stats: [
      { value: "7+", label: "Years building software" },
      { value: "50+", label: "Automations built" },
      { value: "$100K+", label: "Saved for clients annually" },
      { value: "1000+", label: "Hours Saved" },
    ],
  },

  services: {
    heading: "What I Do",
    subtitle: "I build AI-powered systems that free up hours every week by:",
    subheading: "What This Looks Like",
    benefits: [
      "Automating repetitive tasks",
      "Optimizing operations and workflows",
      "Eliminating bottlenecks that slow business growth",
    ],
    items: [
      {
        title: "AI-Powered Lead Generation",
        description:
          "Automate lead capture and follow-ups to never miss an opportunity",
      },
      {
        title: "AI Chatbots & Voice Agents",
        description:
          "Answer calls and messages instantly so you're always available to customers",
      },
      {
        title: "Social Media Content Automation",
        description:
          "Stay consistent online and grow your audience without daily effort",
      },
      {
        title: "Database Reactivation",
        description:
          "Turn your old leads and past customers into booked appointments with no new ad spend",
      },
      {
        title: "Automated Reporting",
        description:
          "Track performance in real-time to make better decisions faster",
      },
      {
        title: "Custom Solutions",
        description:
          "Tailored automation built specifically for your business needs",
      },
    ],
  },

  proofStrip: {
    heading: "Recent work. Clear results.",
    subtitle: "Three examples of what good automation changes.",
    cards: [
      {
        label: "Restaurant",
        metric: "100% of after-hours calls answered",
        supportLine:
          "A 24/7 voice agent now captures reservation demand that used to be missed.",
        slug: "/case-studies/paris-cafe-voice-agent",
      },
      {
        label: "Info Business",
        metric: "50+ qualified leads/day",
        supportLine:
          "Manual Instagram prospecting was replaced by an automated pipeline at $0.29 per lead.",
        slug: "/case-studies/instagram-lead-generation",
      },
      {
        label: "E-commerce",
        metric: "3x follow-up capacity",
        supportLine:
          "CRM automation organized 5,600+ leads without adding headcount.",
        slug: "/case-studies/ecommerce-crm-automation",
      },
    ],
  },

  results: {
    heading: "Real Results for Real Businesses",
    subtitle: "Here's what happens when you automate the right processes",
    caseStudiesHeading: "Client Success Stories",
    caseStudiesSubtitle: "See how automation transformed these businesses",
    stats: [
      { metric: "10+", unit: "hrs/week", description: "Time saved on average per client" },
      { metric: "80%", unit: "reduction", description: "in manual work" },
      { metric: "3x", unit: "capacity", description: "without hiring more staff" },
      { metric: "300%+", unit: "ROI", description: "typical ROI in year one" },
    ],
    caseStudies: [
      {
        industry: "Restaurant",
        challenge:
          "Missing reservations from after-hours calls and staff overwhelmed with phone bookings",
        solution:
          "Built 24/7 AI voice receptionist handling calls, managing reservations, and routing complex inquiries",
        slug: "/case-studies/paris-cafe-voice-agent",
        keyResult: "15 hrs/week saved",
      },
      {
        industry: "Info Business",
        challenge:
          "Manually searching Instagram Reels for fitness creators, copy-pasting to Notion. Hours of work for a handful of leads",
        solution:
          "Built a fully automated n8n + AI pipeline that discovers, qualifies, and delivers creator leads daily with zero manual work",
        slug: "/case-studies/instagram-lead-generation",
        keyResult: "50+ leads/day at $0.29/lead",
      },
      {
        industry: "E-commerce",
        challenge:
          "5,600+ leads sitting in spreadsheets with no systematic follow-up",
        solution:
          "Built full Supabase CRM + n8n automated email sequences for all lead pools",
        slug: "/case-studies/ecommerce-crm-automation",
        keyResult: "3x team capacity increase",
      },
    ],
  },

  testimonials: {
    heading: "What Clients Are Saying",
    subtitle:
      "Don't just take my word for it, hear from businesses that have transformed their operations",
    items: [
      {
        name: "Andrey Belke",
        role: "Founder, WheelsFeels.com",
        quote:
          "We were losing so many hot leads from our website because we couldn't follow up fast enough. Dmytro built us an AI-powered email system that sends personalized follow-ups automatically. Now every lead gets a tailored response within minutes, and our conversion rate has skyrocketed.",
        rating: 5,
        image: "/images/testimonials/wheelsfeels-testimonial.webp",
      },
      {
        name: "Mario",
        role: "Owner, Paris Cafe NYC",
        quote:
          "Dmytro built us an AI voice receptionist that handles reservations and inquiries perfectly, plus an outbound system that brings in new customers.",
        rating: 5,
      },
      {
        name: "Jennifer Torres",
        role: "Operations Manager, TechFlow Solutions",
        quote:
          "Our team was spending over 15 hours every week on manual data entry and report generation. Dmytro automated our entire workflow from client data processing to automated reports. The time savings have been incredible.",
        rating: 5,
      },
    ],
  },

  faq: {
    heading: "Common Questions",
    subtitle:
      "Straight answers about working with an AI automation consultant",
    items: [
      {
        question: "What kind of businesses do you work with?",
        answer:
          "Small businesses with 1-20 employees that have repetitive work eating up their time or money. That could be lead follow-up, client onboarding, reporting, scheduling, content, or anything else that runs on the same steps every time. I've worked with HVAC companies, restaurants, real estate agents, mortgage brokers, e-commerce brands, law firms, and more. If it's manual and repeatable, it can be automated.",
      },
      {
        question: "How long does it take to build an AI automation system?",
        answer:
          "Most builds go from first call to live in 1-3 weeks. A basic lead follow-up workflow is typically 5-7 days. A full AI voice agent with booking integration takes 2-3 weeks. Complex CRM builds with multiple integrations run 4-6 weeks. I scope everything on the discovery call so there are no surprises.",
      },
      {
        question: "What does AI automation cost for a small business?",
        answer:
          "One-time builds range from $1,500 to $8,000 depending on complexity. Monthly retainers start at $500/month. Most clients see ROI within 30 days. One recovered deal usually covers the cost of the entire build.",
      },
      {
        question: "What kind of ROI can I expect?",
        answer:
          "Most clients break even within the first month. A restaurant I worked with went from missing every after-hours call to capturing 100% of them. One recovered reservation night paid for the whole build. An info business I built for went from manual lead searching to 50+ qualified leads per day at $0.29 each. On the discovery call I'll run the numbers with you based on your deal size and lead volume.",
      },
      {
        question: "Do I need a developer or technical team to use this?",
        answer:
          "No. I build the system, document how it works, and hand you a dashboard you can manage without touching code. When something needs updating, I handle it. You run your business. The automation runs in the background.",
      },
      {
        question: "What happens if something breaks after you build it?",
        answer:
          "Every build includes a 30-day support window. For ongoing maintenance, I offer monthly retainer plans that cover monitoring, fixes, and unlimited tweaks. I'm the one who built it, so when something breaks, I know exactly where to look.",
      },
    ],
  },

  booking: {
    badge: "Low-pressure first call",
    heading: "Book a 30-minute strategy call",
    subtitle:
      "A focused 30-minute conversation to look at where automation could save time, tighten follow-up, or remove repetitive work in your business.",
    details: [
      {
        title: "What this call is",
        description:
          "A short working session where we look at your current workflow and identify the best place to automate first.",
      },
      {
        title: "Who it's for",
        description:
          "Business owners with repeat admin work, missed follow-up, slow response times, or too many manual handoffs.",
      },
      {
        title: "What happens next",
        description:
          "If there's a clear fit, I'll outline the best first move, rough scope, and next steps. If not, you'll still leave with a practical direction.",
      },
    ],
    reassurance:
      "No hard sell. No vague AI buzzwords. Just a clear look at what is actually worth automating first.",
    benefits: [
      "Find the bottleneck",
      "See the best next move",
      "Leave with a plan",
    ],
  },
} as const;
