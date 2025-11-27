import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Target, label: "Projects Delivered", value: "15+" },
    { icon: Award, label: "Certifications", value: "CTFL" },
    { icon: GraduationCap, label: "Education", value: "MBA (Pursuing)" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transforming business challenges into innovative digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeInUp}>
            <Card className="p-8 bg-gradient-card shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A highly driven and accomplished Systems Engineer, Business Analyst, and Project Management 
                professional known for spearheading complex initiatives and elevating operational efficiency 
                across diverse environments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in people management, strategic planning, and analytical problem-solving, 
                I excel at aligning technical capabilities with business objectives to deliver impactful, 
                sustainable outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in maintaining rigorous quality standards, optimizing budgets, and implementing 
                automation strategies, I consistently contribute measurable value and long-term stability to 
                organizational goals.
              </p>
            </Card>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center bg-gradient-card shadow-elegant hover:shadow-glow transition-shadow duration-300">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
