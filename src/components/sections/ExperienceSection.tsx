import { Building2, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "ZIM-TTECH",
      position: "Data Engineer",
      location: "14, NATAL ROAD",
      duration: "2024 - Present",
      type: "Contact",
      achievements: [
        "Collaborated on data pipeline development projects that streamlined data collection and processing within the organization. I utilized Java and Python to carry out various coding tasks, which enhanced the functionality and efficiency of existing data workflows.",
        "Performed data analytics using Apache Hive, MySQL and Data Grip, where I created complex views within the data warehouse to support evidence-based decision-making. I also developed interactive data visualizations using Power BI, which provided stakeholders with clear and actionable insights. My work involved writing translators to translate data into the FHIR (Fast Healthcare Interoperability Resources) format to improve data exchange and interoperability across health systems.",
        "Designed and implemented Data Quality Assessment (DQA) SQL queries for the Electronic Health Record (EHR) system deployed across over 700 health facilities. This integration of patient data and HIV test results led to a 30% reduction in data analysis turnaround time and ensured timely reporting to key stakeholders. I conducted in-depth exploratory data analysis (EDA) on patient records and HIV test results to uncover trends and anomalies, which contributed to the improvement in overall program performance."
      ],
      technologies: ["React", "Spring-boot", "MYSQL", "Docker", "PostgreSQL", "Kubernetes", "Apache Hive","MongoDB", "FHIR", "Power BI","GIt", "Python", "Java" ]
    },
    {
      company: "Nestle ZIMbabwe.",
      position: "Data Capture",
      location: "Harare",
      duration: "2022",
      type: "Contract",
      achievements: [
        "Successfully captured and consolidated data on Nestlé Zimbabwe coffee machines across the country. This included information on working machines, non-functional units, available repair parts, and machines requiring maintenance",
        "created pivot tables to perform data analysis and generate insights from the captured information, helping to inform operational decisions."
      ],
      technologies: ["Advanced Excel", "Google Sheets", "Data Analysis","Python"]
    },
    {
      company: "Head Hunters International Consulting Company",
      position: "Data Capture",
      location: "Harare",
      duration: "2023",
      type: "Contract",
      achievements: [
        "Contracted as a data capturer by Head Hunters International Consulting Company to input and organize survey data collected from ZESA Holdings",
        "accurately capturing large volumes of data to support the analysis and reporting of survey results"
      ],
      technologies: ["Advaced Excel", " Python", "Data Analysis"]
    },
    {
      company: "Pesornal Projects",
      position: "Independent Contractor",
      location: "Harare ",
      duration: "2022 - Present",
      type: "Freelance",
      achievements: [
        "Completed 5 projects for for personal growth with frontend and backend development, including a personal portfolio website, EHER system, and a data visualization dashboard, Book registration system",
      ],
      technologies: ["Spring-boot", "React", "MySQL", "Node.js", "Python", "HTML", "Tailwind CSS", "Vite.js", "JavaScript","Git", "Docker"]
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