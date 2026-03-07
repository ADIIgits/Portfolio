import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ProfileResponse } from "@shared/routes";

interface HeroProps {
  profile: ProfileResponse;
}

export function Hero({ profile }: HeroProps) {
  const socialLinks = profile.socialLinks as Record<string, string>;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-accent"></span>
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">
            {profile.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-glow"
        >
          {profile.name}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Work
          </button>
          
          <div className="flex items-center gap-4 ml-4">
            {socialLinks?.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
