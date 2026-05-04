import {
  Users,
  Phone,
  Share2,
  BarChart3,
  RefreshCw,
  Settings,
  CheckCircle2
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTrackSection } from "@/hooks/useTrackSection";
import { siteConfig } from "@/config/siteConfig";

const serviceIcons = [Users, Phone, Share2, RefreshCw, BarChart3, Settings];

const ServicesSection = () => {
  const sectionRef = useTrackSection("services");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: subheaderRef, isVisible: subheaderVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const { services } = siteConfig;

  return (
    <section ref={sectionRef} className="py-8 md:py-12 lg:py-16 bg-secondary/30">
      <div className="container-tight">
        {/* What I Do */}
        <div
          ref={headerRef}
          className={`text-center mb-6 lg:mb-8 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {services.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {services.subtitle}
          </p>
        </div>

        <div
          ref={benefitsRef}
          className={`flex flex-wrap justify-center gap-4 mb-8 lg:mb-12 animate-on-scroll ${benefitsVisible ? "is-visible" : ""}`}
        >
          {services.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm animate-on-scroll-scale stagger-${index + 1} ${benefitsVisible ? "is-visible" : ""}`}
            >
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div
          ref={subheaderRef}
          className={`text-center mb-8 lg:mb-12 animate-on-scroll ${subheaderVisible ? "is-visible" : ""}`}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {services.subheading}
          </h3>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={index}
                className={`group bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30 animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
