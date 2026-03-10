import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Entfalte dein volles Potential!
          </h2>
          <p className="text-muted-foreground mb-8">
            Buche jetzt dein kostenloses Erstgespräch — deine Fragen, meine Impulse — für mehr Klarheit auf deinem Weg in Data & KI.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://www.datathinker.de/book-call" target="_blank" rel="noopener noreferrer">
              Kostenloses Erstgespräch buchen
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
