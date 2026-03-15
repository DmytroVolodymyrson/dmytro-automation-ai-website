import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { useTrackSection } from "@/hooks/useTrackSection";
import { capture } from "@/lib/posthog";

const BookingSection = () => {
  const sectionRef = useTrackSection("booking");
  const { booking } = siteConfig;

  useEffect(() => {
    // Load the external script for the booking widget immediately
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {booking.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {booking.subtitle}
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {booking.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          id="booking-widget"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            capture("booking_widget_viewed", { source: "scroll" });
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card px-6 pt-6 lg:pt-0 pb-6 rounded-2xl shadow-card border border-border/50 overflow-hidden"
        >
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
