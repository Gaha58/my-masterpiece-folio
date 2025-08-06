import { Building2, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechForward Solutions",
      position: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Implemented AI-powered features that increased user engagement by 40%",
        "Mentored team of 5 junior developers and established code review processes",
        "Reduced application load times by 60% through optimization initiatives"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"]
    },
    {
      company: "StartupVenture Inc.",
      position: "Full-Stack Developer",
      location: "Remote",
      duration: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Built the entire MVP from scratch, scaling from 0 to 10K users",
        "Designed and implemented real-time messaging system using WebSockets",
        "Integrated payment processing with Stripe, handling $500K+ in transactions",
        "Established CI/CD pipelines reducing deployment time by 80%"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Stripe", "Socket.io", "Heroku"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "New York, NY",
      duration: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Developed responsive websites for 20+ clients across various industries",
        "Improved website performance scores by average of 35% through optimization",
        "Collaborated with design team to ensure pixel-perfect implementation",
        "Introduced modern development workflows and component libraries"
      ],
      technologies: ["React", "Sass", "WordPress", "Figma", "Git", "Webpack"]
    },
    {
      company: "Freelance Developer",
      position: "Independent Contractor",
      location: "Global",
      duration: "2018 - 2019",
      type: "Freelance",
      achievements: [
        "Completed 15+ projects for clients ranging from startups to SMBs",
        "Specialized in e-commerce solutions using Shopify and WooCommerce",
        "Maintained 100% client satisfaction rating on freelancing platforms",
        "Generated $75K+ in revenue through various digital solutions"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Shopify", "WooCommerce", "CSS"]
    }
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading mb-6">Professional Experience</h2>
          <p className="portfolio-text max-w-3xl mx-auto">
            A journey of continuous growth, innovation, and delivering exceptional 
            results across diverse projects and challenging environments.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-primary pulse-glow"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="portfolio-card hover:shadow-accent group">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          exp.type === 'Freelance' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.position}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Building2 size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-secondary/30 text-secondary-foreground border border-border/50 hover:border-primary/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="portfolio-card inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects that push boundaries 
              and create meaningful impact. Let's build something amazing together.
            </p>
            <button className="portfolio-button-primary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};