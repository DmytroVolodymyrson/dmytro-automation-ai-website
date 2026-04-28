import { ArrowRight, BookOpen, BarChart3, User, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    to: "/guides",
    icon: BookOpen,
    title: "Guides",
    description:
      "Step-by-step breakdowns of the automations that work for small service businesses — lead follow-up, appointment setting, reactivation, and more.",
    cta: "Browse guides",
  },
  {
    to: "/case-studies",
    icon: BarChart3,
    title: "Case Studies",
    description:
      "Real results from real businesses: Paris Cafe went from 0% to 100% after-hours coverage, WheelsFeels saw a 185% conversion lift. See the full numbers.",
    cta: "See results",
  },
  {
    to: "/ai-automation-consultant-small-business",
    icon: User,
    title: "Working with a Consultant",
    description:
      "What an AI automation consultant actually does, what it costs, and how to tell if hiring one makes sense for your business right now.",
    cta: "Learn more",
  },
  {
    to: "/best-ai-automation-for-service-businesses",
    icon: Layers,
    title: "Best First Automations",
    description:
      "Not sure where to start? This page ranks the automations by payoff speed so you can pick the one that fits your team, budget, and workflow.",
    cta: "Find your starting point",
  },
];

const DiscoverySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-8 md:py-12 lg:py-14 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight relative z-10">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-6 lg:mb-8 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
            Start here
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Four places to dig in, depending on where you are in your research.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className={`group rounded-2xl border border-border/60 bg-card/80 p-5 lg:p-6 hover:border-primary/30 transition-colors duration-300 flex flex-col animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary/80 group-hover:text-primary transition-colors">
                  {card.cta}
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

export default DiscoverySection;
