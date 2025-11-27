import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Email Platform Migration: Zimbra to Microsoft O365",
      category: "System Engineering",
      description: "Led end-to-end migration of email platforms, including DNS and domain configuration, licensing setup, and secure data transfer of ~3.5 TB. Coordinated MFA rollout and conducted user training sessions.",
      impact: ["Migrated 3.5 TB of data", "Zero downtime", "Enhanced security with MFA"],
      tags: ["Microsoft 365", "Migration", "DNS", "Security"]
    },
    {
      title: "Production Tracking System",
      category: "Project Coordination",
      description: "Developed and deployed a real-time production tracking system for garment manufacturing, enabling management to monitor live sewing progress and output.",
      impact: ["Real-time visibility", "Improved decision-making", "Enhanced efficiency"],
      tags: ["Real-time Systems", "Manufacturing", "Data Analytics"]
    },
    {
      title: "Warehouse Management System",
      category: "Business Analysis",
      description: "Conducted gap analysis, led feasibility study, defined project scope, and developed solution architecture to align system capabilities with organizational logistics goals.",
      impact: ["Optimized logistics", "Reduced errors", "Improved tracking"],
      tags: ["ERP", "Logistics", "Process Design"]
    },
    {
      title: "ISO 27001 Compliance Implementation",
      category: "Security",
      description: "Developed and implemented infrastructure and information security processes to align with ISO 27001:2022 compliance criteria.",
      impact: ["Achieved certification", "Enhanced security posture", "Audit readiness"],
      tags: ["ISO 27001", "Compliance", "Security"]
    },
    {
      title: "Pattern Pulse: Design Change Management",
      category: "Power Apps Development",
      description: "Designed and developed an internal application to track design team's reworks and unapproved change requests with approval workflows and analytics.",
      impact: ["Reduced rework cycles", "Data-driven insights", "Time savings"],
      tags: ["Power Apps", "Workflow Automation", "Analytics"]
    },
    {
      title: "Packing List Digitalization",
      category: "Process Automation",
      description: "Digitized manual packing list creation process by implementing a scan-based automated system, enhancing shipment accuracy and operational efficiency.",
      impact: ["Eliminated manual errors", "Faster processing", "Better accuracy"],
      tags: ["Automation", "Logistics", "Digitalization"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Delivering measurable impact through innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3 bg-accent/20 text-accent-foreground">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
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
