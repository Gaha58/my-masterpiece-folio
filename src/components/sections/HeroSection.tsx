import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Data Scientist",
    "Junior Developer", 
    "Tech Innovator",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="portfolio-container relative z-10">
        <div className="text-center space-y-8 slide-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold">
              <span className="block text-foreground/90">Hi, I'm</span>
              <span className="block text-gradient glow-text">Promise Gaha</span>
            </h1>
            
            {/* Dynamic subtitle */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space-grotesk text-foreground/80">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-delayed">
            Crafting exceptional digital experiences with cutting-edge technologies. 
            Specializing in React, Node.js, AI integration, and scalable cloud solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-delayed" style={{ animationDelay: '0.6s' }}>
            <button className="portfolio-button-primary pulse-glow">
              View My Work
            </button>
            <button className="portfolio-button-secondary">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-delayed" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com/Gaha59" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/30 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-primary"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/promise-gaha-983269289" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/30 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-primary"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="gahapromise@gmail.com"
              className="p-3 rounded-full bg-secondary/30 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-primary"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delayed" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} className="animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};