import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTrackSection } from "@/hooks/useTrackSection";
import { siteConfig } from "@/config/siteConfig";

const TestimonialsSection = () => {
  const sectionRef = useTrackSection("testimonials");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  const { testimonials } = siteConfig;

  return (
    <section ref={sectionRef} className="bg-primary text-primary-foreground relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-16 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-primary-foreground/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-primary-foreground/20 animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
            >
              <Quote className="w-10 h-10 text-primary-foreground/40 mb-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/30"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
