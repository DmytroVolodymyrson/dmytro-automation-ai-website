import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      const wasOpen = isMobileMenuOpen;
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }, wasOpen ? 300 : 0);
    }
  };

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const wasOpen = isMobileMenuOpen;
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, wasOpen ? 300 : 0);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
      }`}
    >
      <div className="container-tight">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground hidden sm:block">
              Dmytro Automation AI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-tight py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={scrollToBooking}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
