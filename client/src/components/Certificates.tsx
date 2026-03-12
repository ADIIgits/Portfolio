import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import type { Certificate } from "@/types";

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-[1.5rem] group hover:-translate-y-1.5 transition-all duration-300 block overflow-hidden"
    >
      <div className="relative w-full h-44 overflow-hidden bg-foreground/5">
        <img
          src={cert.image}
          alt={cert.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
            {cert.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 bg-black/50 backdrop-blur rounded-full">
            <ExternalLink size={14} className="text-white" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <Award size={18} className="text-accent mt-0.5 shrink-0" />
          <h3 className="text-base font-bold leading-snug group-hover:text-accent transition-colors line-clamp-2">
            {cert.title}
          </h3>
        </div>
        <p className="text-sm text-foreground/50 font-light mb-3 line-clamp-1">{cert.issuer}</p>
        <p className="text-xs font-mono text-foreground/30 tracking-wider">{cert.date}</p>
      </div>
    </motion.a>
  );
}

export function Certificates({ certificates }: { certificates: Certificate[] }) {
  return (
    <section id="certificates" className="py-32 px-4 sm:px-8 lg:px-16 bg-foreground/[0.01] border-t border-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-6 flex items-center gap-4"
        >
          <span className="text-foreground/20 font-mono text-xl sm:text-2xl">07.</span>
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/40 font-light mb-16 text-lg"
        >
          Verified credentials from industry-leading platforms
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
