import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Shared section wrapper                                             */
/* ------------------------------------------------------------------ */
const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.45 }}
    className={`section-padding ${className}`}
  >
    <div className="container-tight">{children}</div>
  </motion.section>
);

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface CardItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface ComparisonRow {
  label: string;
  values: string[];
}

export interface WhenOption {
  icon: LucideIcon;
  heading: string;
  items: string[];
  highlighted?: boolean;
}

export interface CaseStudyRef {
  industry: string;
  headline: string;
  body: string;
  link: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface EvalColumn {
  icon: LucideIcon;
  heading: string;
  items: string[];
  variant: "green" | "neutral";
}

/* Discriminated union for flexible sections */
export type PageSection =
  | {
      type: "cards";
      title: string;
      subtitle: string;
      items: CardItem[];
    }
  | {
      type: "table";
      title: string;
      subtitle: string;
      headers: string[];
      rows: ComparisonRow[];
    }
  | {
      type: "when-to-use";
      title: string;
      subtitle: string;
      options: WhenOption[];
    }
  | {
      type: "considerations";
      title: string;
      subtitle: string;
      items: CardItem[];
    }
  | {
      type: "case-studies";
      title: string;
      subtitle: string;
      studies: CaseStudyRef[];
      links: RelatedLink[];
    }
  | {
      type: "evaluation";
      title: string;
      subtitle: string;
      columns: EvalColumn[];
    }
  | {
      type: "prose";
      title: string;
      subtitle: string;
      blocks: { heading: string; body: string }[];
    };

export interface DecisionPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  h1: string;
  heroIntro: string;
  heroSubtext?: string;
  sections: PageSection[];
  faqItems: FaqItem[];
  faqSubtitle: string;
  ctaHeading: string;
  ctaText: string;
  ctaSubtext?: string;
  relatedLinks?: RelatedLink[];
}

/* ------------------------------------------------------------------ */
/*  Section renderers                                                  */
/* ------------------------------------------------------------------ */
const CardsSection = ({ section }: { section: Extract<PageSection, { type: "cards" }> }) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className="grid gap-6 md:grid-cols-3">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card"
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  </>
);

const TableSection = ({ section }: { section: Extract<PageSection, { type: "table" }> }) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse max-w-4xl">
        <thead>
          <tr className="border-b border-border/60">
            <th className="py-3 pr-4 font-semibold text-foreground" />
            {section.headers.map((h) => (
              <th key={h} className="py-3 px-4 font-semibold text-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {section.rows.map((row, i) => (
            <tr key={i} className="border-b border-border/30">
              <td className="py-3 pr-4 font-medium text-foreground">
                {row.label}
              </td>
              {row.values.map((v, j) => (
                <td key={j} className="py-3 px-4">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const WhenToUseSection = ({
  section,
}: {
  section: Extract<PageSection, { type: "when-to-use" }>;
}) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className={`grid gap-6 md:grid-cols-${Math.min(section.options.length, 3)} max-w-5xl`}>
      {section.options.map((opt) => (
        <div
          key={opt.heading}
          className={`rounded-2xl p-6 ${
            opt.highlighted
              ? "border border-primary/20 bg-primary/5"
              : "border border-border/60 bg-card/80"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <opt.icon
              className={`w-5 h-5 ${
                opt.highlighted ? "text-primary" : "text-muted-foreground"
              }`}
            />
            {opt.heading}
          </h3>
          <ul className="space-y-3">
            {opt.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    opt.highlighted
                      ? "text-accent"
                      : "text-muted-foreground/60"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

const ConsiderationsSection = ({
  section,
}: {
  section: Extract<PageSection, { type: "considerations" }>;
}) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          className="flex gap-4 rounded-2xl border border-border/60 bg-background/60 p-5"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.body}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

const CaseStudiesSection = ({
  section,
}: {
  section: Extract<PageSection, { type: "case-studies" }>;
}) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className="grid gap-6 md:grid-cols-3">
      {section.studies.map((cs, i) => (
        <motion.div
          key={cs.industry}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card flex flex-col"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
            {cs.industry}
          </span>
          <h3 className="text-lg font-bold text-foreground mb-3">
            {cs.headline}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {cs.body}
          </p>
          <Link
            to={cs.link}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            Read the full case study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ))}
    </div>
    {section.links.length > 0 && (
      <div className="mt-8 flex flex-wrap gap-4">
        {section.links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            {link.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ))}
      </div>
    )}
  </>
);

const EvaluationSection = ({
  section,
}: {
  section: Extract<PageSection, { type: "evaluation" }>;
}) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className={`grid gap-6 md:grid-cols-${Math.min(section.columns.length, 2)} max-w-4xl`}>
      {section.columns.map((col) => (
        <div
          key={col.heading}
          className={`rounded-2xl p-6 ${
            col.variant === "green"
              ? "border border-primary/20 bg-primary/5"
              : "border border-border/60 bg-card/80"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <col.icon
              className={`w-5 h-5 ${
                col.variant === "green"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            />
            {col.heading}
          </h3>
          <ul className="space-y-3">
            {col.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    col.variant === "green"
                      ? "text-accent"
                      : "text-muted-foreground/60"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

const ProseSection = ({
  section,
}: {
  section: Extract<PageSection, { type: "prose" }>;
}) => (
  <>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
      {section.title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
      {section.subtitle}
    </p>
    <div className="max-w-3xl space-y-8">
      {section.blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {block.heading}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{block.body}</p>
        </motion.div>
      ))}
    </div>
  </>
);

function renderSection(section: PageSection) {
  switch (section.type) {
    case "cards":
      return <CardsSection section={section} />;
    case "table":
      return <TableSection section={section} />;
    case "when-to-use":
      return <WhenToUseSection section={section} />;
    case "considerations":
      return <ConsiderationsSection section={section} />;
    case "case-studies":
      return <CaseStudiesSection section={section} />;
    case "evaluation":
      return <EvaluationSection section={section} />;
    case "prose":
      return <ProseSection section={section} />;
  }
}

/* ------------------------------------------------------------------ */
/*  Scroll helper                                                      */
/* ------------------------------------------------------------------ */
const scrollToBooking = () => {
  const el = document.getElementById("booking-widget");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/* ================================================================== */
/*  TEMPLATE COMPONENT                                                 */
/* ================================================================== */
const DecisionPageTemplate = ({ data }: { data: DecisionPageData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BadgeIcon = data.badgeIcon;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.dmytroai.com/${data.slug}`}
        />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.dmytroai.com/${data.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.h1,
            description: data.metaDescription,
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: `https://www.dmytroai.com/${data.slug}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 md:pt-28">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-background pb-16 md:pb-24">
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                <BadgeIcon className="w-4 h-4" />
                {data.badgeText}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                {data.h1}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {data.heroIntro}
              </p>
              {data.heroSubtext && (
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {data.heroSubtext}
                </p>
              )}
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a 30-Minute Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── Dynamic sections ────────────────────────────────────── */}
        {data.sections.map((section, i) => (
          <Section
            key={i}
            className={i % 2 === 0 ? "bg-secondary/30" : ""}
          >
            {renderSection(section)}
          </Section>
        ))}

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <Section
          className={
            data.sections.length % 2 === 0 ? "bg-secondary/30" : ""
          }
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            {data.faqSubtitle}
          </p>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {data.faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-border/60 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-card/80 transition-colors"
                >
                  <span className="font-semibold text-base md:text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pt-4 pb-5 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Final CTA / Booking ────────────────────────────────── */}
        <section className="relative bg-background overflow-hidden pt-8 pb-12 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28">
          <div className="absolute inset-0 opacity-[0.015]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: "38px 38px",
              }}
            />
          </div>
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                {data.ctaHeading}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                {data.ctaText}
              </p>
              {data.ctaSubtext && (
                <p className="text-sm text-muted-foreground">
                  {data.ctaSubtext}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8"
            >
              {[
                { icon: Clock, text: "30-minute focused call" },
                {
                  icon: CheckCircle2,
                  text: "Honest assessment of your options",
                },
                {
                  icon: ArrowRight,
                  text: "Leave with a plan, not a pitch",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-5 py-4"
                >
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              id="booking-widget"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card px-4 sm:px-5 lg:px-6 pt-6 lg:pt-0 pb-6 rounded-2xl shadow-card border border-border/50 overflow-hidden max-w-6xl xl:max-w-[76rem] mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium mb-4 lg:hidden">
                <ArrowRight className="w-4 h-4 text-primary" />
                Pick a time that works for you below
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/dmytro-automation"
                className="lg:-mt-5"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "550px",
                }}
                loading="eager"
                scrolling="no"
                id="dmytro-automation-booking"
                title="Book a 30-Minute Call"
              />
            </motion.div>

            {data.relatedLinks && data.relatedLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DecisionPageTemplate;
