import { motion } from "framer-motion";
import { Lightbulb, Target, Award } from "lucide-react";

const props = [
  {
    icon: Lightbulb,
    title: "Praxisnah",
    description: "Echte Erfahrung aus Konzern, Mittelstand und Start-up — von Data Engineering bis Cloud-Strategie und KI-Anwendungen.",
  },
  {
    icon: Target,
    title: "Passgenau",
    description: "Individuelles Mentoring, KI Kickstart Sprints und Coaching — abgestimmt auf deine Ziele und dein aktuelles Level.",
  },
  {
    icon: Award,
    title: "Zertifiziert",
    description: "AWS-zertifiziert, M.Sc. in Data Science, jahrelange Praxis in Datenarchitektur, ML und Cloud-Infrastruktur.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 relative -mt-24 z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-surface rounded-lg p-8"
            >
              <prop.icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading font-bold text-lg mb-2">{prop.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
