import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Zap,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { marketingAgencyOutboundVideoCaseStudy as caseStudy } from "@/data/caseStudies";

const MarketingAgencyOutboundVideoCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Outbound Video Automation for a Marketing Agency | Case Study | Dmytro AI</title>
        <meta name="description" content="How a marketing agency replaced manual video production with a CRM-driven pipeline, $9,000/month saved and capacity for thousands of personalized outbound videos per day." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies/marketing-agency-outbound-video-automation" />
        <meta property="og:title" content="AI Outbound Video Automation for a Marketing Agency | Case Study" />
        <meta property="og:description" content="CRM-driven personalized video pipeline. $9,000/month saved. 4,000-5,000 videos/day capacity." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies/marketing-agency-outbound-video-automation" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "AI Outbound Video Automation for a Marketing Agency",
          "description": "How a marketing agency replaced manual video production with a CRM-driven pipeline and saved $9,000/month on outreach production.",
          "author": { "@id": "https://www.dmytroai.com/#person" },
          "publisher": { "@id": "https://www.dmytroai.com/#business" },
          "mainEntityOfPage": "https://www.dmytroai.com/case-studies/marketing-agency-outbound-video-automation",
          "keywords": ["outbound video automation", "marketing agency", "AI video", "CRM automation", "personalized outreach"]
        })}</script>
      </Helmet>
      <Navbar />

      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container-tight space-y-10 md:space-y-14">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              {caseStudy.industry}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {caseStudy.subtitle}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 flex flex-col text-center min-h-[120px]"
              >
                <p className="text-sm font-semibold text-accent uppercase tracking-wide">{metric.label}</p>
                <div className="flex-1 flex items-center justify-center">
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">{metric.value}</p>
                </div>
              </div>
            ))}
          </motion.section>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {caseStudy.outcomeNote}
            </p>
          </div>

          <section className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border/60">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="bg-red-500/5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border/60"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">The Challenge</h2>
              </div>
              <div className="space-y-4">
                {caseStudy.challenge.map((item, i) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-400">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-emerald-500/5 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">The Solution</h2>
              </div>
              <div className="space-y-4">
                {caseStudy.solution.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">How It Works</h2>
              <div className="flex flex-wrap items-center gap-3">
                {caseStudy.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-foreground">
                      {step}
                    </div>
                    {index < caseStudy.flow.length - 1 ? (
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border/60 pt-8">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <Wrench className="w-4 h-4 text-accent" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Results</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {caseStudy.results.map((result) => (
                  <div key={result.label} className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-center">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">{result.label}</p>
                    <p className="font-display text-xl font-bold text-foreground">{result.value}</p>
                    {result.sub && (
                      <p className="text-xs text-muted-foreground mt-1">{result.sub}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border/60 pt-6">
              <h3 className="font-display text-lg font-bold mb-3">Metric basis</h3>
              <ul className="space-y-2">
                {caseStudy.metricBasis.map((basis) => (
                  <li key={basis} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">-</span>
                    {basis}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 space-y-5"
          >
            <div className="space-y-3 max-w-3xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold">Could this apply to your business?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If your outbound workflow depends on personalized content production that scales linearly with prospect count, the same CRM-to-delivery pattern can reduce cost and accelerate campaigns. Start with these related pages.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                {
                  title: "AI automation consultant",
                  description: "Overview of what an automation consultant delivers and how to evaluate fit.",
                  href: "/ai-automation-consultant-small-business",
                },
                {
                  title: "Best first automations for service businesses",
                  description: "Compare common starting points: lead follow-up, phone handling, CRM cleanup, outbound.",
                  href: "/best-ai-automation-for-service-businesses",
                },
                {
                  title: "AI lead follow-up for service businesses",
                  description: "How automated follow-up works and when it pays for itself.",
                  href: "/ai-lead-follow-up-for-service-businesses",
                },
                {
                  title: "All case studies",
                  description: "See the full proof library: voice agents, CRM automation, lead qualification.",
                  href: "/case-studies",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-2xl border border-border/60 bg-background/70 p-5 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{link.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{link.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="booking-widget"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Book a free strategy call to see how automation can transform your business
            </p>
            <div className="bg-card px-6 pt-6 lg:pt-0 pb-6 rounded-2xl shadow-card border border-border/50 overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/dmytro-automation"
                className="lg:-mt-5"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
                loading="lazy"
                scrolling="no"
                id="dmytro-automation-booking-cs"
                title="Book a Strategy Call"
              />
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingAgencyOutboundVideoCaseStudy;
