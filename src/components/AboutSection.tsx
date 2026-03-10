import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Xia He-Bleinagel</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als Head of Data and Cloud bei NOW GmbH leite ich Datenstrategie, Teams und AWS-Infrastruktur. 
              Mein Weg führte mich über Deloitte, verschiedene Start-ups und eine Karrierepause als Vollzeit-Mama 
              bis hin zur Data-Leaderin.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Heute helfe ich anderen, den Einstieg und Aufstieg in Data, Cloud und KI zu meistern — 
              mit praxisnahem Mentoring, das auf echten Erfahrungen basiert. Ich glaube daran, dass jeder 
              im Zeitalter der KI erfolgreich sein kann, wenn man den richtigen Weg und die richtige Unterstützung findet.
            </p>
            <Button variant="hero" asChild>
              <a href="https://www.datathinker.de/book-call" target="_blank" rel="noopener noreferrer">
                Mehr über mich
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={aboutPhoto}
                alt="Xia He-Bleinagel"
                className="rounded-lg w-full max-w-md object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-primary/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
