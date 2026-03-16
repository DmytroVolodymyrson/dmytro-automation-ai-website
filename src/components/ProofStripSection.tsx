import { ArrowRight, Bot, Clock3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap = {
  Bot,
  Clock3,
  TrendingUp,
} as const;

const ProofStripSection = () => {
  const { proofStrip } = siteConfig;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-6 md:py-8 lg:py-10 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-tight relative z-10">
        <div
          ref={headerRef}
          className={`flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-6 lg:mb-8 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
              {proofStrip.badge}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
              {proofStrip.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {proofStrip.subtitle}
            </p>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm lg:text-right">
            {proofStrip.relevanceNote}
          </p>
        </div>

        <div ref={gridRef} className="grid gap-4 lg:grid-cols-3">
          {proofStrip.cards.map((card, index) => {
            const Icon = iconMap[card.icon];

            return (
              <Link
                key={card.title}
                to={card.slug}
                className={`group rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 lg:p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-1">
                      Proof point
                    </p>
                    <p className="font-display text-xl font-bold text-foreground">
                      {card.metric}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {card.metricNote}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors pt-1">
                    View case study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProofStripSection;
