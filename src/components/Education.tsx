import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export const Education = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const education = [
    {
      degree: "MBA in Management of Technology",
      institution: "University of Moratuwa",
      period: "2026 (Currently Pursuing)",
      description: "Deepening expertise in project management, data analytics, digital transformation, and innovation leadership",
      icon: GraduationCap,
      status: "In Progress"
    },
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      period: "2020 - 2024",
      description: "Developed a solid foundation in technology and systems engineering, supporting effective problem-solving and technical decision-making",
      icon: BookOpen,
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Certified Tester Foundation Level (CTFL)",
      issuer: "ISTQB® - International Software Testing Qualifications Board",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                    <edu.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant={edu.status === "In Progress" ? "default" : "secondary"} className="bg-primary/10 text-primary">
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp}>
          <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
