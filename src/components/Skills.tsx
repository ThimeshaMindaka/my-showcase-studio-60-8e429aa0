import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, Database, Layout, Settings, Shield, Zap } from "lucide-react";

export const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["Microsoft Azure", "Microsoft 365 Admin", "Exchange Portal", "Intune", "Defender 365"]
    },
    {
      icon: Database,
      title: "ERP & Business Systems",
      skills: ["Axpert ERP", "ZOHO Suite", "Zimbra", "SharePoint", "SAP"]
    },
    {
      icon: Zap,
      title: "Automation & Analytics",
      skills: ["Power BI", "Power Apps", "Power Automate", "Copilot Agents", "PRTG Monitoring"]
    },
    {
      icon: Settings,
      title: "Project Management",
      skills: ["Jira", "MS Project", "Agile Methodologies", "Workflow Analysis", "Process Re-engineering"]
    },
    {
      icon: Layout,
      title: "Development",
      skills: ["HTML/CSS", "PHP", "WordPress", "Git", "Apache", "cPanel"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      skills: ["ISO 27001", "Microsoft Defender", "Entra ID", "MFA Implementation", "Security Policies"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive technical and business analysis capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
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
