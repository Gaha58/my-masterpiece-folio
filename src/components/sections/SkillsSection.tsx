import { useState } from "react";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "React Native", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Three.js", level: 75, color: "from-yellow-400 to-yellow-600" }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 93, color: "from-green-400 to-green-600" },
        { name: "Python", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "PostgreSQL", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
        { name: "GraphQL", level: 82, color: "from-pink-400 to-pink-600" },
        { name: "Docker", level: 87, color: "from-blue-500 to-blue-700" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Vercel", level: 95, color: "from-gray-400 to-gray-600" },
        { name: "Firebase", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Kubernetes", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "CI/CD", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Terraform", level: 70, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      skills: [
        { name: "OpenAI API", level: 92, color: "from-emerald-400 to-emerald-600" },
        { name: "LangChain", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "TensorFlow", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Hugging Face", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Vector Databases", level: 85, color: "from-red-400 to-red-600" },
        { name: "RAG Systems", level: 90, color: "from-pink-400 to-pink-600" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading mb-6">Skills & Expertise</h2>
          <p className="portfolio-text max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in cutting-edge technologies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground shadow-primary'
                  : 'portfolio-button-secondary'
              }`}
            >
              {skillCategories[category as keyof typeof skillCategories].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="portfolio-card group hover:shadow-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skill-fill 1.5s ease-out ${index * 0.1}s forwards`
                      }}
                    ></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className={`absolute top-0 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-50 blur-sm transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `skill-fill 1.5s ease-out ${index * 0.1}s forwards`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="portfolio-subheading mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub", "Figma", "Adobe Creative Suite", "REST APIs", "WebSockets",
              "Redis", "Elasticsearch", "Stripe", "Auth0", "Supabase", "Prisma",
              "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary/30 text-secondary-foreground border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};