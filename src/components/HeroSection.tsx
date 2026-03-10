import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const logos = ["Deloitte", "AWS", "NOW GmbH", "HTW Berlin"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-heading uppercase tracking-[0.2em] text-primary mb-4"
          >
            Data Leader · Mentorin · Speakerin
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            Erfolg in Data, Cloud & KI durch{" "}
            <span className="text-gradient">Lernen und Mentoring</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg"
          >
            Von der Vollzeit-Mama zum Head of Data — jetzt betreue ich andere dabei, Selbstvertrauen, 
            Fähigkeiten und Orientierung aufzubauen, um im Zeitalter der KI erfolgreich zu sein.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.datathinker.de/book-call" target="_blank" rel="noopener noreferrer">
                Kostenloses Erstgespräch buchen
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://datathinker.de" target="_blank" rel="noopener noreferrer">
                Blog lesen
              </a>
            </Button>
          </motion.div>

          {/* Logo bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 flex-wrap"
          >
            {logos.map((logo) => (
              <span key={logo} className="text-sm text-muted-foreground font-heading font-medium opacity-60">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
