import { motion } from "framer-motion";
import { Trophy, ExternalLink, Star } from "lucide-react";
import type { CompetitiveProgramming as CPType } from "@/types";

const platformColors: Record<string, string> = {
  LeetCode: "text-yellow-400",
  HackerRank: "text-green-400",
  Codeforces: "text-blue-400",
  Kaggle: "text-cyan-400",
};

const platformBg: Record<string, string> = {
  LeetCode: "bg-yellow-400/10 border-yellow-400/20",
  HackerRank: "bg-green-400/10 border-green-400/20",
  Codeforces: "bg-blue-400/10 border-blue-400/20",
  Kaggle: "bg-cyan-400/10 border-cyan-400/20",
};

export function CompetitiveProgramming({ data }: { data: CPType }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="competitive" className="py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-white/20 font-mono text-xl sm:text-2xl">06.</span>
          Competitive Programming
        </motion.h2>

        {/* Platform Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {data.platforms.map((p) => (
            <motion.a
              key={p.id}
              variants={item}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`glass rounded-[1.5rem] p-6 group hover:-translate-y-1 transition-all duration-300 border ${platformBg[p.name] ?? "border-white/10"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-lg font-bold ${platformColors[p.name] ?? "text-white"}`}>
                  {p.name}
                </span>
                <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <p className="text-2xl font-bold mb-1">{p.rating}</p>
              <p className="text-sm text-white/40 font-mono mb-3">{p.rank}</p>
              <p className="text-xs text-white/30">{p.stats}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Hackathons */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-white/70"
          >
            Hackathons
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.hackathons.map((hack, idx) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-[1.5rem] overflow-hidden group"
              >
                <div className="relative h-40 overflow-hidden bg-white/5">
                  <img
                    src={hack.image}
                    alt={hack.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      {hack.result}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-base mb-1 group-hover:text-accent transition-colors">
                    {hack.name}
                  </h4>
                  <p className="text-sm text-white/50 mb-2">{hack.role}</p>
                  <p className="text-xs font-mono text-white/30">{hack.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-white/70"
          >
            Achievements
          </motion.h3>
          <div className="space-y-4">
            {data.achievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.08 }}
                className="glass p-6 sm:p-8 rounded-[1.5rem] flex items-start gap-5 hover:border-white/20 transition-colors"
              >
                <div className="p-3 bg-accent/10 rounded-2xl shrink-0">
                  <Trophy size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-base">{ach.title}</h4>
                    <span className="text-xs font-mono text-white/30 shrink-0">{ach.year}</span>
                  </div>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
