import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mortgageBrokerLeadFollowUpCaseStudy as caseStudy } from "@/data/caseStudies";

const MortgageBrokerLeadFollowUpCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mortgage Broker Lead Follow-Up Automation Case Study | Dmytro AI</title>
        <meta
          name="description"
          content="Mortgage broker automation case study covering speed-to-lead, stale borrower reactivation, document collection reminders, CRM visibility, and client-management follow-up."
        />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies/mortgage-broker-lead-follow-up-automation" />
        <meta property="og:title" content="Mortgage Broker Lead Follow-Up Automation Case Study" />
        <meta
          property="og:description"
          content="A mortgage broker workflow for faster borrower response, stale lead reactivation, document collection, and cleaner client management."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies/mortgage-broker-lead-follow-up-automation" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": caseStudy.title,
          "description": caseStudy.subtitle,
          "author": { "@id": "https://www.dmytroai.com/#person" },
          "publisher": { "@id": "https://www.dmytroai.com/#business" },
          "mainEntityOfPage": "https://www.dmytroai.com/case-studies/mortgage-broker-lead-follow-up-automation",
          "keywords": ["mortgage broker automation", "mortgage lead follow-up", "document collection automation", "CRM automation"]
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
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold">The End Result</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              The brokerage gets a cleaner client-management rhythm: new inquiries are answered faster, dormant borrowers are reactivated, missing documents are chased automatically, and brokers can see which files need human attention.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {caseStudy.results.map((result) => (
                <div key={result.label} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{result.label}</p>
                  <p className="font-display text-xl font-bold text-foreground">{result.value}</p>
                  {result.sub && <p className="text-sm text-muted-foreground mt-1">{result.sub}</p>}
                </div>
              ))}
            </div>
          </motion.section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <ClipboardCheck className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-bold">Workflow shipped</h2>
              </div>
              <div className="space-y-3">
                {caseStudy.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold mb-5">Tools and systems</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tool) => (
                  <span key={tool} className="rounded-full border border-border/60 px-3 py-1 text-sm text-muted-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Want a mortgage workflow like this?</h2>
              <p className="text-muted-foreground">Book a free strategy call and map the first automation that would remove the most manual follow-up from your brokerage.</p>
            </div>
            <a
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a strategy call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MortgageBrokerLeadFollowUpCaseStudy;
