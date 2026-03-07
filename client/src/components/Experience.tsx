import { motion } from "framer-motion";
import { ExperiencesListResponse } from "@shared/routes";

export function Experience({ experiences }: { experiences: ExperiencesListResponse }) {
  // Sort by start date roughly (assuming format allows it, or just display as provided)
  return (
    <section id="experience" className="py-32 px-4 sm:px-8 lg:px-16 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-white/20 font-mono text-xl sm:text-2xl">04.</span>
          Where I've Worked
        </motion.h2>

        <div className="relative border-l border-white/10 ml-4 sm:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="mb-16 ml-8 sm:ml-12 relative"
            >
              <div className="absolute -left-[41px] sm:-left-[57px] top-1 h-4 w-4 rounded-full bg-background border-2 border-accent" />
              
              <div className="glass p-8 sm:p-10 rounded-[2rem] hover:border-white/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold">
                    {exp.role} <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <span className="text-sm font-mono text-white/40 tracking-wider">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                
                <div className="text-white/70 font-light leading-relaxed space-y-3">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i} className="flex gap-3">
                      <span className="text-accent mt-1.5 opacity-50">▹</span>
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
