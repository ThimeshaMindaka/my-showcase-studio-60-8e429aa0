import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mindakakt@gmail.com",
      link: "mailto:mindakakt@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 705 594 892",
      link: "tel:+94705594892"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajagiriya, Sri Lanka",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "thimesha-weliwita",
      link: "http://www.linkedin.com/in/thimesha-weliwita"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Let's discuss how I can help drive your digital transformation initiatives
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">Ready to collaborate?</h3>
                  <p className="text-muted-foreground">
                    Available for consulting, project coordination, and full-time opportunities
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:mindakakt@gmail.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open('http://www.linkedin.com/in/thimesha-weliwita', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            © 2024 Thimesha M. Weliwita. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
