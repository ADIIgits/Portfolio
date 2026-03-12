import { motion } from "framer-motion";
import type { Technology } from "@/types";

export function Tech({ technologies }: { technologies: Technology[] }) {
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 border-t border-foreground/5 bg-foreground/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-foreground/20 font-mono text-xl sm:text-2xl">02.</span>
          Capabilities
        </motion.h2>

        <div className="space-y-16">
          {Object.entries(grouped).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl text-foreground/50 mb-6 font-light">{category}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-4"
              >
                {techs.map((tech) => (
                  <motion.div
                    key={tech.id}
                    variants={item}
                    className="glass px-5 py-3 rounded-2xl flex items-center gap-3 hover:bg-foreground/[0.06] hover:scale-105 transition-all cursor-default"
                  >
                    <span className="text-xl grayscale opacity-70">{tech.icon}</span>
                    <span className="font-medium text-sm tracking-wide">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
