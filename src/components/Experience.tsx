import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const experiences = [
    {
      title: "Associate Engineer - ERP Implementation & IT Support",
      company: "Guston Ltd",
      location: "SL | Myanmar | Bangladesh",
      period: "2023 - Present",
      description: [
        "Lead business processes to improve operational time and enhance efficiency by diversifying to digitalized solutions",
        "Conduct workflow analysis, solution planning, and process re-engineering from a business-analyst perspective",
        "Coordinate end-to-end solution development, implementation, and continuous improvement",
        "Experienced with Microsoft Ecosystem, ZOHO, Zimbra, and Axpert ERP",
      ],
      skills: ["Microsoft 365", "Power BI", "Azure", "Jira", "ERP Implementation"]
    },
    {
      title: "Intern – Full Stack Developer",
      company: "Sri Lanka Ports Authority",
      location: "Sri Lanka",
      period: "2022 - 2023",
      description: [
        "Developed custom WordPress themes and plugins with PHP",
        "Implemented front-end and back-end solutions using HTML, CSS, and PHP",
        "Managed deployment on Apache servers via cPanel",
        "Collaborated with cross-functional teams to create business documents and UI mockups",
      ],
      skills: ["HTML/CSS", "PHP", "WordPress", "Git", "Apache"]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Driving digital transformation across international operations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
