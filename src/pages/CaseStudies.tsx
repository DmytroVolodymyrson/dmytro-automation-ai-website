import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const proofRoutes = [
  {
    caseStudy: "Paris Cafe voice agent",
    caseStudyHref: "/case-studies/paris-cafe-voice-agent",
    summary:
      "Best proof asset for after-hours call coverage, appointment-setting, and restaurant phone workflows.",
    relatedPages: [
      { label: "AI appointment setter", href: "/ai-appointment-setter" },
      { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
      { label: "Restaurant automation guides", href: "/ai-automation-for-restaurants" },
    ],
  },
  {
    caseStudy: "E-commerce CRM automation",
    caseStudyHref: "/case-studies/ecommerce-crm-automation",
    summary:
      "Strongest proof for lead follow-up, CRM cleanup, segmentation, and reactivation systems that scale without more headcount.",
    relatedPages: [
      { label: "AI automation consultant", href: "/ai-automation-consultant-small-business" },
      { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
      { label: "All automation guides", href: "/guides" },
    ],
  },
  {
    caseStudy: "Instagram lead generation",
    caseStudyHref: "/case-studies/instagram-lead-generation",
    summary:
      "Useful proof for automated qualification, enrichment, and pipeline design when the question is how to handle more inbound or outbound opportunities with the same team.",
    relatedPages: [
      { label: "AI automation consultant", href: "/ai-automation-consultant-small-business" },
      { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
      { label: "n8n vs Zapier", href: "/n8n-vs-zapier-small-business" },
    ],
  },
];

const relatedGuideLinks = [
  { label: "AI automation consultant", href: "/ai-automation-consultant-small-business" },
  { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
  { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
  { label: "AI appointment setter", href: "/ai-appointment-setter" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: caseStudies.map((caseStudy, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: caseStudy.title,
    url: `https://www.dmytroai.com/case-studies/${caseStudy.slug}`,
    description: caseStudy.description,
  })),
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies — AI Automation Results for Real Businesses",
  description:
    "Proof library for Dmytro AI covering restaurant voice agents, automated lead generation, and CRM follow-up systems.",
  url: "https://www.dmytroai.com/case-studies",
  isPartOf: {
    "@type": "WebSite",
    name: "Dmytro AI",
    url: "https://www.dmytroai.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dmytroai.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://www.dmytroai.com/case-studies",
    },
  ],
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Case Studies — AI Automation Results for Real Businesses | Dmytro AI</title>
        <meta name="description" content="Real AI automation case studies: restaurant voice agent, Instagram lead generation pipeline, e-commerce CRM automation. Specific problems, specific results." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies" />
        <meta property="og:title" content="Case Studies — AI Automation Results for Real Businesses" />
        <meta property="og:description" content="See how AI automation drives measurable growth for small businesses. Real systems, real numbers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies" />
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-24 md:pt-28 section-padding">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mb-10 md:mb-14"
          >
            <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-3">
              Case Studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Proven Automation Outcomes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real systems built for real businesses. Start here if you want proof before choosing a workflow, platform, or consultant path.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-8 mb-10 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              What this proof library is for
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Which case study should you read first?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl">
              If you are deciding whether Dmytro's work is relevant to your business, start with the proof asset that matches your bottleneck: Paris Cafe for phone coverage and booking flow, the e-commerce CRM build for lead follow-up and reactivation, and Instagram lead generation for automated qualification and routing.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedGuideLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-background transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="inline-block ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 md:p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                Connect proof to the priority pages
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Use these case studies to support the discovered-not-indexed hubs
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                These proof assets now route directly into the pages Google has already discovered but still needs stronger context for: the consultant overview, the best-first-automation guide, the lead-follow-up workflow page, and the main guides hub.
              </p>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 md:p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                Fastest reading order
              </p>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Need proof before hiring?</span> Read the consultant overview, then the e-commerce CRM case study.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Losing bookings or calls?</span> Read the appointment-setter page, then the Paris Cafe case study.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Unsure what to automate first?</span> Read the best-first-automation guide, then compare all three case studies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {proofRoutes.map((route, index) => (
              <motion.div
                key={route.caseStudyHref}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-card"
              >
                <Link to={route.caseStudyHref} className="group block mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {route.caseStudy}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {route.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-3">
                    Read case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                    Pair it with
                  </p>
                  <div className="space-y-3">
                    {route.relatedPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-background transition-colors"
                      >
                        <span>{page.label}</span>
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
