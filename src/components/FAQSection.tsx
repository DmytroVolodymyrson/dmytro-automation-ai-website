import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTrackSection } from "@/hooks/useTrackSection";
import { capture } from "@/lib/posthog";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useTrackSection("faq");
  const { faq } = siteConfig;

  const toggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      capture("faq_opened", {
        question_index: index,
        question_text: faq.items[index].question,
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-background pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {faq.heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {faq.subtitle}
          </p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className="border border-border/60 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-base md:text-lg">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
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
      </div>
    </section>
  );
};

export default FAQSection;
