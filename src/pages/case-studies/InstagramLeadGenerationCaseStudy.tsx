import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { instagramReelsScraperCaseStudy as caseStudy } from "@/data/caseStudies";

const InstagramReelsScraperCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(
        "script[src=\"https://link.msgsndr.com/js/form_embed.js\"]",
      );
      if (s) {
        document.body.removeChild(s);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">The End Result</h2>
            <p className="text-muted-foreground mb-6">
              A constantly growing database of qualified creator leads, enriched with AI scoring and ready for outreach.
            </p>
            <div className="overflow-hidden rounded-xl border border-border/60">
              <img
                src="/images/toufic-leads-spreadsheet.png"
                alt="Qualified leads spreadsheet with creator data"
                className="w-full"
              />
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
                    <CircleDollarSign className="w-4 h-4 text-accent" />
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
            className="max-w-lg mx-auto"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">What The Client Says</h2>
              <div className="overflow-hidden rounded-2xl">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-[9/16] object-cover bg-black/80"
                >
                  <source src="/videos/testimonial-toufic-fares.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-5">
                <p className="font-display text-xl font-bold text-foreground">Toufic Fares</p>
                <p className="text-sm md:text-base text-muted-foreground">Info Business</p>
              </div>
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

export default InstagramReelsScraperCaseStudy;
