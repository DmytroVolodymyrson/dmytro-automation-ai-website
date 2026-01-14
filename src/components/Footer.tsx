import { Zap } from "lucide-react";

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
            <p className="text-primary-foreground/60 text-xs mt-1">
              Helping businesses automate, scale, and thrive.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
