import { Code, Coffee, Lightbulb, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Analyzing Impilo EHR data,creating visualizatiions,writing FHIR translations, enhancing data pipeline"
    },
    {
      icon: Target,
      title: "3 Projects Delivered",
      description: "startups applications"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focused",
      description: "Always exploring cutting-edge technologies and methodologies"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    }
  ];

  return (
    <section id="about" className="portfolio-section bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="portfolio-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="portfolio-heading">About Me</h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="portfolio-text text-xl">
                I'm a passionate Systems Engineer who thrives on creating innovative 
                digital solutions that make a real impact. With a strong foundation in 
                modern technologies and a keen eye for user experience, I transform 
                complex ideas into elegant, scalable applications.
              </p>

              <p className="portfolio-text">
                My journey in technology began with curiosity and has evolved into a 
                mission to push the boundaries of what's possible. I have hands on  experience in 
                React, Node.js, MYSQL,Python,Java,FHIR and Data Engineering, always staying 
                ahead of the curve to deliver cutting-edge solutions.
              </p>

              <p className="portfolio-text">
                When I'm not coding, you'll find me exploring the latest tech trends, 
                contributing to open-source projects, or mentoring the next generation 
                of developers. I believe in the power of technology to solve real-world 
                problems and create meaningful experiences.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="portfolio-card group hover:shadow-accent"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-portfolio-glow">
                <img 
                  src={profilePhoto}
                  alt="Promise Gaha"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-colors duration-500"></div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center portfolio-card">
                <div className="text-3xl font-bold text-gradient mb-1">3</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center portfolio-card">
                <div className="text-3xl font-bold text-gradient mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center portfolio-card">
                <div className="text-3xl font-bold text-gradient mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};