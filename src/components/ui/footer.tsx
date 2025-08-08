import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="portfolio-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Promise Gaha</div>
            <p className="text-muted-foreground">
              Systems Engineer & Tech Innovator
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>© 2025 Made </span>
              {/* <Heart size={16} className="text-red-500 animate-pulse" /> */}
              <span>by Promise Gaha</span>
            </p>
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};