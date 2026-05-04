import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProofStripSection = () => {
  const { proofStrip } = siteConfig;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-6 md:py-8 lg:py-10 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight relative z-10">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-6 lg:mb-8 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
            {proofStrip.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {proofStrip.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid gap-3 lg:grid-cols-3">
          {proofStrip.cards.map((card, index) => {
            return (
              <Link
                key={card.slug}
                to={card.slug}
                className={`group rounded-2xl border border-border/60 bg-card/80 p-5 lg:p-6 hover:border-primary/30 transition-colors duration-300 animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/90 mb-3">
                  {card.label}
                </p>
                <p className="font-display text-2xl sm:text-[1.8rem] font-bold leading-tight text-foreground mb-2">
                  {card.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.supportLine}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary/80 group-hover:text-primary transition-colors">
                  Case study
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
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
