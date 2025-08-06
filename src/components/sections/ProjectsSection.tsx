import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import ecommerceProject from "@/assets/project-ecommerce.jpg";
import aiProject from "@/assets/project-ai.jpg";
import mobileProject from "@/assets/project-mobile.jpg";

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Web App",
      description: "A comprehensive e-commerce solution with advanced features including real-time inventory management, AI-powered recommendations, and seamless payment processing.",
      image: ecommerceProject,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      features: [
        "Real-time inventory tracking",
        "AI-powered product recommendations", 
        "Advanced search and filtering",
        "Multi-vendor marketplace",
        "Analytics dashboard",
        "Mobile-responsive design"
      ],
      github: "https://github.com/alexmorgan/ecommerce-platform",
      live: "https://ecommerce-demo.alexmorgan.dev",
      metrics: {
        users: "10K+",
        performance: "98%",
        uptime: "99.9%"
      }
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      category: "AI/ML Application",
      description: "An intelligent analytics platform that leverages machine learning to provide actionable insights from complex datasets with real-time visualization and predictive modeling.",
      image: aiProject,
      technologies: ["Python", "React", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
      features: [
        "Machine learning models",
        "Real-time data processing",
        "Interactive visualizations",
        "Predictive analytics",
        "Custom reporting",
        "API integrations"
      ],
      github: "https://github.com/alexmorgan/ai-analytics",
      live: "https://analytics-demo.alexmorgan.dev",
      metrics: {
        accuracy: "94%",
        processing: "< 100ms",
        insights: "500+"
      }
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      category: "Mobile Application",
      description: "A secure and intuitive mobile banking application with biometric authentication, real-time transactions, and advanced financial management tools.",
      image: mobileProject,
      technologies: ["React Native", "Node.js", "MongoDB", "Auth0", "Plaid", "AWS"],
      features: [
        "Biometric authentication",
        "Real-time transactions",
        "Budget tracking",
        "Investment portfolio",
        "Bill management",
        "Financial insights"
      ],
      github: "https://github.com/alexmorgan/fintech-app",
      live: "https://fintech-demo.alexmorgan.dev",
      metrics: {
        downloads: "25K+",
        rating: "4.8/5",
        security: "Bank-grade"
      }
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="portfolio-section bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading mb-6">Featured Projects</h2>
          <p className="portfolio-text max-w-3xl mx-auto">
            A showcase of innovative solutions that demonstrate my expertise in 
            building scalable, user-centric applications across various industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-portfolio-glow">
              <img 
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Links Overlay */}
              <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {currentProject.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  Project {activeProject + 1} of {projects.length}
                </span>
              </div>
              
              <h3 className="portfolio-subheading">{currentProject.title}</h3>
              <p className="portfolio-text">{currentProject.description}</p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-primary text-primary-foreground shadow-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(currentProject.metrics).map(([key, value]) => (
                <div key={key} className="text-center portfolio-card">
                  <div className="text-lg font-bold text-gradient mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-primary"
              >
                View Live Demo
              </a>
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-secondary"
              >
                View Source
              </a>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject 
                  ? 'bg-gradient-primary scale-125' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};