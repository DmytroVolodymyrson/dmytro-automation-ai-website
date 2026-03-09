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
  {
    slug: "ecommerce-crm-automation",
    title: "Full CRM & Lead Follow-Up Automation for an Auto Parts Brand",
    industry: "E-commerce",
    description:
      "Built a complete CRM and automated follow-up system from scratch. 5,600+ leads organized, segmented, and enrolled in personalized email sequences — with zero manual work after setup.",
    keyResult: "3x more leads handled, same team",
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

export const ecommerceCRMCaseStudy = {
  title: "Full CRM & Lead Follow-Up Automation for an Auto Parts Brand",
  subtitle:
    "How a US e-commerce brand went from manually chasing 5,600 leads to an automated system that follows up with every single one",
  industry: "E-commerce",
  challenge: [
    "The business had accumulated over 5,600 leads across three years of operation. None of them had received systematic follow-up. Every inquiry that didn't convert immediately just sat in a spreadsheet.",
    "Their team was spending hours each week manually emailing leads one by one — and still only reaching a fraction of them. High-intent leads from recent inquiries were getting the same treatment as contacts from two years ago.",
    "There was no visibility into what was working. No tracking, no segmentation, no reporting. Just a growing pile of missed opportunities.",
  ],
  solution: [
    "Built a Supabase CRM that centralized all 5,600+ leads and segmented them into three pools based on source, recency, and engagement history. Each pool gets different follow-up logic.",
    "Designed and deployed n8n workflows that automatically enroll new leads into personalized email sequences the moment they hit the CRM. Multi-account sending keeps deliverability high and volume manageable.",
    "Connected the system to Slack so the sales team gets real-time alerts on high-intent leads, replies, and daily performance reports — without logging into any dashboard.",
    "Built Google Sheets reporting that tracks every lead's status, email opens, and stage in the funnel. The owner sees exactly where each lead is without touching the system.",
  ],
  metrics: [
    { label: "Leads Organized & Enrolled", value: "5,600+" },
    { label: "Follow-Up Response Time", value: "Manual → Instant" },
    { label: "Team Capacity Increase", value: "3x" },
  ],
  techStack: ["n8n", "Supabase", "GoHighLevel", "Slack", "Google Sheets"],
  flow: ["Lead Enters CRM", "Auto-Segment", "Personalized Email Sequence", "Team Alert on Reply"],
  results: [
    { label: "Leads Systematically Followed Up", value: "100%", sub: "" },
    { label: "Response Time", value: "Instant", sub: "" },
    { label: "Conversion Rate Lift", value: "+185%", sub: "" },
  ],
} as const;
