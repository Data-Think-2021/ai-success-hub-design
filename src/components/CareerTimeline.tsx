import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  { year: "2025", title: "Head of Data and Cloud", org: "NOW GmbH", type: "work" },
  { year: "2024", title: "Data Engineer", org: "NOW GmbH", type: "work" },
  { year: "2023", title: "Consultant AI & Data Analytics", org: "Deloitte", type: "work" },
  { year: "2022", title: "Digital Analyst", org: "Digital Motion GmbH", type: "work" },
  { year: "2020", title: "Wissenschaftliche Mitarbeiterin", org: "Julius Kühn-Institut", type: "work" },
  { year: "2018-2020", title: "M.Sc. Projektmanagement & Data Science", org: "HTW Berlin", type: "edu" },
];

const CareerTimeline = () => {
  return (
    <section id="career" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
        >
          Beruflicher Werdegang
        </motion.h2>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border shrink-0">
                  {item.type === "edu" ? (
                    <GraduationCap size={18} className="text-primary" />
                  ) : (
                    <Briefcase size={18} className="text-primary" />
                  )}
                </div>
                <div className="card-surface rounded-lg p-5 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-bold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
