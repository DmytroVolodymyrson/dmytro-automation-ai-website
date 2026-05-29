export type WorkflowType =
  | "Revenue & Outbound"
  | "Lead Follow-Up & CRM"
  | "Phone & Appointment Handling"
  | "Lead Qualification & Enrichment";

export type ProofStatus = "verified" | "modeled" | "needs-confirmation";

export type CaseStudySummary = {
  slug: string;
  title: string;
  industry: string;
  workflowType: WorkflowType;
  description: string;
  challenge: string;
  solution: string;
  keyResult: string;
  proofStatus: ProofStatus;
  featured?: boolean;
  homepageRank?: number;
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "marketing-agency-outbound-video-automation",
    title: "AI Outbound Video Automation for a Marketing Agency",
    industry: "Marketing Agency",
    workflowType: "Revenue & Outbound",
    description:
      "Built a CRM-driven video generation pipeline that replaces manual production with automated personalized outbound videos at scale.",
    challenge:
      "Agency needed high-volume personalized videos for outreach without manual production costs scaling linearly",
    solution:
      "CRM-driven video generation pipeline with personalized scripts, automated processing, delivery links, and CRM writeback",
    keyResult: "Projected $9,000/month savings",
    proofStatus: "modeled",
    featured: true,
    homepageRank: 1,
  },
  {
    slug: "ecommerce-crm-automation",
    title: "Full CRM & Lead Follow-Up Automation for an Auto Parts Brand",
    industry: "E-commerce",
    workflowType: "Lead Follow-Up & CRM",
    description:
      "Built a complete CRM and automated follow-up system from scratch. 5,600+ leads organized, segmented, and enrolled in personalized email sequences. Zero manual work after setup.",
    challenge:
      "5,600+ leads sitting in spreadsheets with no systematic follow-up",
    solution:
      "Built full Supabase CRM + n8n automated email sequences for all lead pools",
    keyResult: "5,600+ leads organized, 3x capacity",
    proofStatus: "verified",
    featured: true,
    homepageRank: 2,
  },
  {
    slug: "paris-cafe-voice-agent",
    title: "24/7 AI Voice Receptionist for a NYC Restaurant",
    industry: "Restaurant",
    workflowType: "Phone & Appointment Handling",
    description:
      "Deployed a VAPI-powered AI voice agent that answers every after-hours call, routes inquiries, and triggers instant follow-up. Freed up 15+ hours a week for management.",
    challenge:
      "Missing reservations from after-hours calls and staff overwhelmed with phone bookings",
    solution:
      "Built 24/7 AI voice receptionist handling calls, managing reservations, and routing complex inquiries",
    keyResult: "15 hrs/week freed, 100% after-hours coverage",
    proofStatus: "verified",
    featured: true,
    homepageRank: 3,
  },
  {
    slug: "instagram-lead-generation",
    title: "Automated Instagram Lead Generation System",
    industry: "Info Business",
    workflowType: "Lead Qualification & Enrichment",
    description:
      "Built a fully automated n8n pipeline that discovers, enriches, and qualifies creator leads from Instagram Reels with zero manual work.",
    challenge:
      "Manually searching Instagram Reels for fitness creators, copy-pasting to spreadsheets for hours daily",
    solution:
      "Fully automated n8n + AI pipeline that discovers, qualifies, and delivers creator leads daily",
    keyResult: "50+ leads/day at $0.29/lead",
    proofStatus: "verified",
  },
  {
    slug: "facebook-marketplace-ai-lead-qualification",
    title: "Facebook Marketplace AI Lead Qualification Workflow",
    industry: "Heavy Equipment Sales",
    workflowType: "Lead Qualification & Enrichment",
    description:
      "Built an n8n workflow that enriches Facebook Marketplace equipment listings, classifies seller fit with AI, and sends review-ready leads back to Google Sheets.",
    challenge:
      "90% of scraped Marketplace listings were noise; manual filtering couldn't scale",
    solution:
      "n8n workflow with Apify scraping, AI seller classification, and review-ready Google Sheets handoff",
    keyResult: "13+ hrs/week review time saved",
    proofStatus: "modeled",
  },
];

/** Top 3 case studies for the homepage Results section */
export const homepageCaseStudies = caseStudies
  .filter((cs) => cs.homepageRank !== undefined)
  .sort((a, b) => (a.homepageRank ?? 99) - (b.homepageRank ?? 99))
  .slice(0, 3);

/** Featured case studies for the hub hero */
export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);

/** Case studies grouped by workflow type */
export const caseStudiesByWorkflow = caseStudies.reduce<
  Record<WorkflowType, CaseStudySummary[]>
>(
  (acc, cs) => {
    acc[cs.workflowType].push(cs);
    return acc;
  },
  {
    "Revenue & Outbound": [],
    "Lead Follow-Up & CRM": [],
    "Phone & Appointment Handling": [],
    "Lead Qualification & Enrichment": [],
  },
);

export const marketingAgencyOutboundVideoCaseStudy = {
  title: "AI Outbound Video Automation for a Marketing Agency",
  subtitle:
    "How a marketing agency replaced manual video production with a CRM-driven pipeline and cut projected outreach costs by $9,000/month",
  industry: "Marketing Agency",
  challenge: [
    "The agency relied on manual production for every personalized outbound video. Each campaign required scripting, recording, editing, and uploading individual assets for every prospect.",
    "Production costs scaled linearly with volume. Reaching more prospects meant proportionally more hours and higher contractor spend, making high-volume outreach uneconomical.",
    "Campaign launch timelines stretched because each batch of videos had to pass through a manual pipeline before sales could begin outreach.",
  ],
  solution: [
    "Built a CRM-driven video generation pipeline that pulls prospect data, generates personalized scripts, and automates video assembly and processing without manual intervention.",
    "Connected the output to delivery infrastructure so finished videos are linked, tracked, and written back to the CRM for sales follow-up.",
    "Designed the system for volume: the pipeline handles thousands of personalized videos per day, replacing what previously required a dedicated production team.",
  ],
  metrics: [
    { label: "Projected Monthly Savings", value: "$9,000/mo" },
    { label: "Pipeline Capacity", value: "4,000-5,000 videos/day" },
    { label: "Manual Production Work", value: "Eliminated" },
  ],
  metricBasis: [
    "$9,000/month savings is modeled from the difference between previous manual production costs and automated pipeline operating costs.",
    "4,000-5,000 videos/day is the design-target capacity of the automated pipeline.",
    "Manual production elimination is confirmed for the standard outbound video workflow.",
  ],
  techStack: ["n8n", "CRM Integration", "AI Script Generation", "Video Processing Pipeline"],
  flow: ["CRM Prospect Data", "AI Script Generation", "Automated Video Assembly", "Delivery & CRM Writeback"],
  results: [
    { label: "Projected Savings", value: "$9,000/mo", sub: "modeled from workflow cost data" },
    { label: "Video Capacity", value: "4-5K/day", sub: "automated pipeline design target" },
    { label: "Manual Work", value: "Eliminated", sub: "for standard outbound video workflow" },
  ],
  outcomeNote:
    "Savings are projected from workflow cost modeling, not audited client-reported production data. Client identity is kept anonymous.",
} as const;

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
    "Their team was spending hours each week manually emailing leads one by one, and still only reaching a fraction of them. High-intent leads from recent inquiries were getting the same treatment as contacts from two years ago.",
    "There was no visibility into what was working. No tracking, no segmentation, no reporting. Just a growing pile of missed opportunities.",
  ],
  solution: [
    "Built a Supabase CRM that centralized all 5,600+ leads and segmented them into three pools based on source, recency, and engagement history. Each pool gets a different follow-up sequence.",
    "Deployed n8n workflows that automatically enroll new leads into personalized email sequences the moment they hit the CRM. Multi-account sending keeps deliverability high and daily volume manageable.",
    "Connected the system to Slack so the sales team gets real-time alerts on high-intent leads, new replies, and daily send reports. No dashboard required.",
  ],
  metrics: [
    { label: "Leads Organized & Enrolled", value: "5,600+" },
    { label: "Follow-Up Response Time", value: "Hours → Instant" },
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

export const manuliftMarketplaceLeadQualificationCaseStudy = {
  title: "Facebook Marketplace AI Lead Qualification Workflow",
  subtitle:
    "How a heavy-equipment sales team turned messy Marketplace listings into AI-classified, review-ready leads in Google Sheets",
  industry: "Heavy Equipment Sales",
  challenge: [
    "Only about 10% of scraped Marketplace listings were useful enough for sales review, which meant the team had to filter through a lot of dealers, rentals, duplicates, and low-fit listings before finding real opportunities.",
    "Each listing needed context before someone could decide whether it was worth pursuing: seller type, equipment details, likely fit, and whether the lead looked like a private seller or a commercial dealer.",
    "The manual review process could work at low volume, but it made lead cost and review capacity hard to control as more Marketplace listings were scraped.",
  ],
  solution: [
    "Built an n8n workflow that reads listing rows from Google Sheets, enriches the listing context through Apify/Facebook Marketplace scraping, and prepares each record for AI review.",
    "Used GPT-4o-mini / AI qualification logic to classify each seller as private seller, dealer, rental, uncertain, or disqualified, with structured reasoning attached to the row.",
    "Sent the qualified status and review notes back into Google Sheets so the sales team could focus on the leads most likely to be worth a human follow-up.",
  ],
  metrics: [
    { label: "Cost Per Qualified Lead", value: "8¢" },
    { label: "Manual Review Saved", value: "13+ hrs/week" },
    { label: "Review Capacity", value: "3x" },
  ],
  metricBasis: [
    "8¢ per qualified lead is modeled from $20/week estimated tool cost divided by 250 qualified leads/week.",
    "13+ hours/week saved is modeled from 250 leads/week times the review-time reduction from 4.0 minutes to 0.8 minutes per lead.",
    "3x review capacity is modeled from 250 AI-assisted leads/week versus 80 prior manually reviewed leads/week.",
  ],
  techStack: ["n8n", "Apify", "Facebook Marketplace scraping", "GPT-4o-mini", "Google Sheets"],
  flow: ["Marketplace Listings", "Data Enrichment", "AI Seller Classification", "Review-Ready Lead Sheet"],
  results: [
    { label: "Estimated Cost", value: "8¢ / qualified lead", sub: "modeled from $20/week and 250 qualified leads" },
    { label: "Estimated Time Saved", value: "13+ hrs/week", sub: "manual review reduced from 4.0 to 0.8 min/lead" },
    { label: "Estimated Capacity", value: "3x", sub: "250 vs 80 leads reviewed per week" },
  ],
  outcomeNote:
    "These are modeled portfolio metrics based on workflow assumptions, not audited client-reported production results. Replace with measured client data when available.",
} as const;
