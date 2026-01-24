import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Dmytro Automation AI</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Dmytro Automation AI. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
              <p className="text-primary-foreground/60 text-xs">
                Helping businesses automate, scale, and thrive.
              </p>
              <Link
                to="/privacy"
                className="text-primary-foreground/60 text-xs hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 text-xs hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
