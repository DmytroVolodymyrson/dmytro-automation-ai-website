import { motion } from "framer-motion";
import { ArrowRightCircle, BriefcaseBusiness, CheckCircle2, ClipboardList, SearchCheck } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { useTrackSection } from "@/hooks/useTrackSection";
import { capture } from "@/lib/posthog";

const detailIcons = [SearchCheck, BriefcaseBusiness, ClipboardList] as const;

const BookingSection = () => {
  const sectionRef = useTrackSection("booking");
  const { booking } = siteConfig;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="section-padding relative bg-secondary/30 overflow-hidden">
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

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-4">
            {booking.badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {booking.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {booking.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid gap-4 lg:grid-cols-3 max-w-5xl mx-auto mb-6"
        >
          {booking.details.map((detail, index) => {
            const Icon = detailIcons[index] ?? SearchCheck;

            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{detail.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-cyan-500/10 px-5 py-4 lg:px-6 lg:py-5 shadow-card">
            <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed text-center">
              {booking.reassurance}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {booking.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-4"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="booking-widget"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            capture("booking_widget_viewed", { source: "scroll" });
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card px-6 pt-6 lg:pt-0 pb-6 rounded-2xl shadow-card border border-border/50 overflow-hidden max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium mb-4 lg:hidden">
            <ArrowRightCircle className="w-4 h-4 text-primary" />
            Pick a time that works for you below
          </div>
          <iframe
            src="https://api.leadconnectorhq.com/widget/bookings/dmytro-automation"
            className="lg:-mt-5"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "550px" }}
            loading="eager"
            scrolling="no"
            id="dmytro-automation-booking"
            title="Book a Strategy Call"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
