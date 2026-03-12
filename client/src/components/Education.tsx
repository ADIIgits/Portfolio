import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import type { EducationItem } from "@/types";

export function Education({ education }: { education: EducationItem[] }) {
  return (
    <section id="education" className="py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-white/20 font-mono text-xl sm:text-2xl">05.</span>
          Education
        </motion.h2>

        <div className="relative border-l border-white/10 ml-4 sm:ml-0">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.12 }}
              className="mb-16 ml-8 sm:ml-12 relative"
            >
              <div className="absolute -left-[41px] sm:-left-[57px] top-1 h-4 w-4 rounded-full bg-background border-2 border-accent" />

              <div className="glass p-8 sm:p-10 rounded-[2rem] hover:border-white/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-2xl mt-0.5 shrink-0">
                      <GraduationCap size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{edu.institution}</h3>
                      <p className="text-accent font-medium">{edu.degree}</p>
                      {edu.location && (
                        <p className="flex items-center gap-1.5 text-sm text-white/40 mt-1">
                          <MapPin size={12} />
                          {edu.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <span className="text-sm font-mono text-white/40 tracking-wider">
                      {edu.start} — {edu.end}
                    </span>
                    {edu.cgpa && (
                      <span className="text-sm font-semibold text-accent">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="text-sm font-semibold text-accent">
                        {edu.percentage}
                      </span>
                    )}
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-6">
                    {edu.highlights.map((hl, i) => (
                      <p key={i} className="flex gap-3 text-white/60 font-light text-sm leading-relaxed">
                        <span className="text-accent mt-1 opacity-50 shrink-0">▹</span>
                        <span>{hl}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
