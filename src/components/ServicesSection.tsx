import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Zap, BookOpen } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "1:1 Mentoring",
    description: "Persönliches Mentoring für deinen individuellen Karriereweg in Data, Cloud und KI. Gemeinsam entwickeln wir deinen Fahrplan und bauen Selbstvertrauen auf.",
    link: "https://datathinker.de",
  },
  {
    icon: Zap,
    title: "KI Kickstart Sprint",
    description: "Intensiver Sprint, um KI-Tools und -Methoden schnell in deinen Arbeitsalltag zu integrieren. Praxisnah, kompakt und sofort umsetzbar.",
    link: "https://datathinker.de",
  },
  {
    icon: BookOpen,
    title: "Blog & Ressourcen",
    description: "Kostenlose Artikel, Guides und Tipps rund um Data Engineering, Cloud-Architektur und den Karriereeinstieg in die Datenwelt.",
    link: "https://datathinker.de",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Dein Weg zum <span className="text-gradient">Erfolg</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wähle die Methode, die am besten zu dir passt — ob individuell, intensiv oder selbstgesteuert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-surface rounded-lg p-8 flex flex-col group hover:border-primary/30 border border-transparent transition-all duration-300"
            >
              <service.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
              <Button variant="heroOutline" size="sm" asChild>
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  Mehr erfahren
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
