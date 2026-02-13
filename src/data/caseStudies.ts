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
