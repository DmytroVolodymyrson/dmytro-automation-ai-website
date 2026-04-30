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
  { label: "What does a consultant do?", href: "/what-does-an-ai-automation-consultant-do" },
  { label: "Consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
  { label: "Automation cost breakdown", href: "/ai-automation-cost-small-business" },
];

const faqItems = [
  {
    question: "What do these case studies prove?",
    answer:
      "They show three concrete categories of automation work Dmytro AI has already shipped: after-hours phone handling and booking flow, CRM cleanup plus lead follow-up, and qualification plus routing for inbound inquiries. If you want evidence before paying for a consultant or choosing a workflow, this is the proof layer.",
  },
  {
    question: "Which case study should I read first for my business?",
    answer:
      "If missed calls or booking gaps are the problem, start with Paris Cafe. If your CRM is messy or leads are going stale, start with the e-commerce CRM automation build. If your team is drowning in inbound inquiries, start with the Instagram lead-generation system. Then compare those proof assets with the consultant overview, pricing guide, and best-first-automation page.",
  },
  {
    question: "Should I read the case studies or the guides hub first?",
    answer:
      "Start with the case studies if you need proof that the workflow already works in a real business. Start with the guides hub if you already believe automation is worth doing and need to decide which workflow, cost range, or implementation path fits your business. The best reading order for most buyers is proof first, then the guides hub, then the consultant and pricing pages if expert help is on the table.",
  },
  {
    question: "Can these examples apply outside the exact same industry?",
    answer:
      "Yes — the value is in the workflow pattern, not just the industry label. A restaurant phone-coverage case study can still help a home-service business thinking about AI appointment setting, and an e-commerce CRM cleanup can still help a service business evaluating lead follow-up, reactivation, and segmentation systems.",
  },
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
  name: "AI Automation Case Studies for Small & Service Businesses",
  description:
    "Three documented AI automation case studies for small and service businesses by Dmytro AI: a restaurant voice agent for after-hours booking, an e-commerce CRM that cut manual follow-up by 80%, and an Instagram lead-generation pipeline with automated qualification.",
  url: "https://www.dmytroai.com/case-studies",
  isPartOf: {
    "@type": "WebSite",
    name: "Dmytro AI",
    url: "https://www.dmytroai.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
        <title>AI Automation Case Studies for Small & Service Businesses | Dmytro AI</title>
        <meta name="description" content="Three documented AI automation case studies for small and service businesses: a restaurant voice agent for after-hours booking, an e-commerce CRM that cut manual follow-up by 80%, and an Instagram lead-generation pipeline. Each shows the problem, the system built, and the measurable result." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies" />
        <meta property="og:title" content="AI Automation Case Studies for Small & Service Businesses" />
        <meta property="og:description" content="Documented AI automation builds for small and service businesses. Real systems, real problems, measurable outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies" />
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              AI Automation Case Studies for Small &amp; Service Businesses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Documented AI automation builds for small and service businesses — each with the problem, the system shipped, and the measurable outcome. Start here if you want proof before choosing a workflow, platform, or consultant.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Dmytro AI publishes three documented case studies: a <Link to="/case-studies/paris-cafe-voice-agent" className="text-primary hover:underline">restaurant voice-agent</Link> that handles after-hours calls and books tables automatically, an <Link to="/case-studies/ecommerce-crm-automation" className="text-primary hover:underline">e-commerce CRM automation</Link> that recovered stale leads and cut manual follow-up by 80%, and an <Link to="/case-studies/instagram-lead-generation" className="text-primary hover:underline">Instagram lead-generation pipeline</Link> that qualifies and routes inbound inquiries without human triage. Each includes the problem, the system built, and the measurable outcome. Use them to evaluate <Link to="/ai-automation-consultant-pricing-small-business" className="text-primary hover:underline">consultant pricing</Link>, <Link to="/ai-automation-cost-small-business" className="text-primary hover:underline">automation costs</Link>, <Link to="/what-does-an-ai-automation-consultant-do" className="text-primary hover:underline">what a consultant actually delivers</Link>, and which <Link to="/best-ai-automation-for-service-businesses" className="text-primary hover:underline">automation to build first</Link>. If you want the broader decision library around these proof assets, continue into the full <Link to="/guides" className="text-primary hover:underline">guides hub</Link>.
            </p>
          </motion.div>

          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 md:p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-3">
                Good fit for this hub
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Start with these case studies if you need proof before you decide
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>• You want evidence that the workflow already worked in a real business, not just a theory page.</li>
                <li>• You are comparing phone coverage, lead follow-up, qualification, or CRM cleanup and want measurable outcomes first.</li>
                <li>• You need a fast path into the strongest supporting pages after reading the proof.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/best-ai-automation-for-service-businesses" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                  Best first automations <ArrowRight className="w-3 h-3" />
                </Link>
                <Link to="/ai-automation-consultant-small-business" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                  Consultant fit guide <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 md:p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-3">
                Better starting points if not
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Skip this hub first if your real question is workflow choice, fit, or pricing
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>• If you already believe automation works and just need to choose the right first project, start with the decision guide instead.</li>
                <li>• If you need breadth across workflows, industries, and comparisons, go to the guides hub.</li>
                <li>• If the real question is whether to hire help and what it costs, jump straight to the consultant and pricing pages.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/guides" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                  Full guides hub <ArrowRight className="w-3 h-3" />
                </Link>
                <Link to="/ai-automation-consultant-pricing-small-business" className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                  Consultant pricing <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
                After the proof
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Where to go once you've seen the results
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                If these examples made the value of automation feel real, the next step is choosing the right first workflow, deciding whether you need consultant help, and narrowing down the guide that fits your bottleneck. These case studies now route directly into the consultant overview, the best-first-automation guide, the lead-follow-up workflow page, and the full guides hub so the next read matches the question you still need answered.
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

          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-8 mb-10 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              Buyer questions this proof hub answers
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What can you actually learn from these case studies?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-card"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
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
