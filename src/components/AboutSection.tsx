import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap } from "lucide-react";

const stats = [
  { value: "7", label: "Years of development experience" },
  { value: "23", label: "Years old" },
  { value: "10+", label: "Hours saved per client weekly" },
  { value: "\u{1F1FA}\u{1F1E6} \u2192 \u{1F1E8}\u{1F1E6}", label: "Ukraine to Canada" },
];

const AboutSection = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Cyan glow blob behind photo area */}
      <div className="absolute top-1/3 right-1/6 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div>
            {/* Badge */}
            <div
              ref={badgeRef}
              className={`animate-on-scroll ${badgeVisible ? "is-visible" : ""}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                The Person Behind the Automation
              </div>
            </div>

            {/* Heading */}
            <div
              ref={headingRef}
              className={`animate-on-scroll ${headingVisible ? "is-visible" : ""}`}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 tracking-tight">
                I started building software at 16. Seven years later, I build AI systems that run businesses.
              </h2>
            </div>

            {/* Photo - shown here on mobile, hidden on lg */}
            <div
              ref={photoRef}
              className={`lg:hidden mb-8 animate-on-scroll ${photoVisible ? "is-visible" : ""}`}
            >
              <PhotoBlock />
            </div>

            {/* Paragraphs */}
            <div
              ref={textRef}
              className={`space-y-5 animate-on-scroll ${textVisible ? "is-visible" : ""}`}
            >
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I'm Dmytro. I grew up in Ukraine, started coding when I was 16, and moved to Canada three years ago. I've spent the last 7 years obsessed with one question: how do you make technology actually useful for people who don't have time to think about technology?
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                That question led me to AI automation. I saw business owners drowning in repetitive work. Copying data between spreadsheets. Chasing leads manually. Spending hours on tasks a well-built system could handle in seconds. So I started building those systems.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Today I use tools like n8n, Claude, and custom integrations to build automation that saves my clients 10+ hours every week. When you work with me, you work with me directly. No account managers, no handoffs, no layers. I'm a one-person operation because I believe the person who understands your problem should be the same person who builds the solution.
              </p>
            </div>
          </div>

          {/* Right - Photo (desktop only) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className={`animate-on-scroll ${photoVisible ? "is-visible" : ""}`}>
              <PhotoBlock />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card p-4 lg:p-6 rounded-xl shadow-card border border-border/50 text-center animate-on-scroll-scale stagger-${index + 1} ${statsVisible ? "is-visible" : ""}`}
            >
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhotoBlock = () => (
  <div className="relative">
    {/* Gradient glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-3xl opacity-40 scale-110" />

    {/* Photo with rectangular frame */}
    <picture>
      <source
        type="image/webp"
        srcSet="/images/headshot-280.webp 280w, /images/headshot-384.webp 384w, /images/headshot-448.webp 448w, /images/headshot-896.webp 896w"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 448px"
      />
      <img
        src="/images/headshot-448.png"
        alt="Dmytro - AI Automation Expert"
        width={448}
        height={448}
        loading="lazy"
        decoding="async"
        className="relative w-full max-w-md mx-auto lg:w-[28rem] lg:h-[28rem] rounded-2xl object-cover shadow-2xl border-4 border-background"
        style={{ objectPosition: "center 10%" }}
      />
    </picture>

    {/* Decorative corner elements */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-2xl -z-10" />
    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-2xl -z-10" />
  </div>
);

export default AboutSection;
