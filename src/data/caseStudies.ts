export type CaseStudySummary = {
  slug: string;
  title: string;
  industry: string;
  description: string;
  keyResult: string;
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "instagram-lead-generation",
    title: "Automated Instagram Lead Generation System",
    industry: "Info Business",
    description:
      "Built a fully automated n8n pipeline that discovers, enriches, and qualifies creator leads from Instagram Reels with zero manual work.",
    keyResult: "30+ qualified leads/day",
  },
  {
    slug: "paris-cafe-voice-agent",
    title: "24/7 AI Voice Receptionist for a NYC Restaurant",
    industry: "Restaurant",
    description:
      "Deployed a VAPI-powered AI voice agent that answers every after-hours call, routes inquiries, and triggers instant follow-up. Freed up 15+ hours a week for management.",
    keyResult: "15 hrs/week freed for management",
  },
];

export const instagramReelsScraperCaseStudy = {
  title: "Automated Instagram Lead Generation System",
  subtitle:
    "How I built an automated pipeline that delivers 50+ qualified leads daily for an info business",
  industry: "Info Business",
  challenge: [
    "The client was manually searching Instagram Reels for fitness creators, opening each profile, and copy-pasting lead details into a spreadsheet.",
    "This process took hours of work every day and produced only a handful of usable leads.",
    "Discovery quality kept shrinking after repeated outreach to the same creators, and reply rates sat around 10-15%.",
  ],
  solution: [
    "Designed a fully automated lead generation system using n8n that runs daily with zero manual input.",
    "The system discovers new creators across Instagram, enriches their profiles with follower counts and engagement data, then scores each lead using AI.",
    "Built-in deduplication ensures no creator is contacted twice, while smart rotation keeps the discovery pool fresh.",
    "All qualified leads are automatically delivered to a clean, organized spreadsheet ready for outreach.",
  ],
  metrics: [
    { label: "Key Result #1", value: "50+ qualified leads a day" },
    { label: "Key Result #2", value: "$0.29 per lead" },
    { label: "Key Result #3", value: "Zero effort after setup" },
  ],
  techStack: [
    "n8n (self-hosted)",
    "Apify (Instagram scrapers)",
    "Google Sheets",
    "AI Lead Qualification",
  ],
  flow: [
    "Discover Creators",
    "Enrich Profiles",
    "AI Qualification",
    "Deliver to CRM",
  ],
} as const;

export const parisCafeVoiceAgentCaseStudy = {
  title: "24/7 AI Voice Receptionist for a NYC Restaurant",
  subtitle:
    "How The Paris Café stopped losing reservations after hours and freed up 15 hours of management time every week",
  industry: "Restaurant",
  challenge: [
    "The Paris Café in New York was missing every call that came in after hours. Zero after-hours calls were answered, costing the restaurant dozens of potential reservations each week.",
    "Website inquiry follow-up took hours. The manager had to manually check form submissions and call people back between running the floor.",
    "Routine phone calls (reservation confirmations, hours of operation, menu questions) were consuming roughly 15 hours of management time every week.",
  ],
  solution: [
    "Built a 24/7 AI voice receptionist using VAPI that answers every inbound call with a natural, on-brand voice. It handles reservations, FAQs, and routes complex requests to the right person.",
    "Connected the voice agent to n8n workflows that trigger instant follow-up for web leads. Every online inquiry now gets a response in under 60 seconds, day or night.",
    "Integrated with GoHighLevel CRM so every call and web inquiry is logged, tagged, and tracked automatically. The owner gets full visibility with zero manual data entry.",

  ],
  metrics: [
    { label: "After-Hours Calls Answered", value: "0% → 100%" },
    { label: "Web Lead Response Time", value: "Hours → 60 seconds" },
    { label: "Manager Time Freed", value: "~15 hrs/week" },
  ],
  techStack: ["VAPI", "n8n", "GoHighLevel CRM"],
  flow: ["Inbound Call", "AI Voice Agent", "Route & Respond", "Log to CRM"],
  results: [
    { label: "After-Hours Calls Answered", value: "0% → 100%", sub: "" },
    { label: "Web Lead Response Time", value: "Hours → 60s", sub: "" },
    { label: "Management Time Freed", value: "~15 hrs/week", sub: "" },
  ],
} as const;
