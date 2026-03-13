import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/types";

// ── Replace with your portrait image URL ──
const heroImageUrl = "https://i.pinimg.com/736x/24/84/11/2484110f21890b98d2a492567d817493.jpg";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const socialLinks = profile.socialLinks as Record<string, string>;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 overflow-hidden">

      {/* ── Cinematic portrait background ── */}
      {heroImageUrl && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">

          {/* Layer 1 — Sharp portrait (right side, tight mask so it appears early) */}
          <img
            src={heroImageUrl}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-right hero-portrait-sharp"
          />

          {/* Layer 2 — Blurred copy (left side only, fades out toward centre) */}
          {/* Creates graduated blur: heavy left → none by 55% */}
          <img
            src={heroImageUrl}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-right hero-portrait-blur"
            style={{
              filter: "blur(14px)",
              transform: "scale(1.04)", /* prevent blurred edges from bleeding */
            }}
          />

          {/* Layer 3 — Narrow background-colour gradient for the far-left edge */}
          {/* Keeps text area clean without a long smoky fade */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 14%, transparent 48%)"
            }}
          />

          {/* Layer 4 — Bottom page-blend */}
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{
              background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)"
            }}
          />
        </div>
      )}

      {/* ── Hero content — unchanged ── */}
      <div className="max-w-5xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-accent" />
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
          className="text-xl sm:text-2xl text-foreground/60 max-w-2xl font-light leading-relaxed"
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
            className="px-8 py-4 dark:bg-white dark:text-black bg-foreground text-background rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Work
          </button>

          <div className="flex items-center gap-4 ml-4">
            {socialLinks?.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-foreground/10 transition-colors">
                <Github size={20} />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-foreground/10 transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="p-3 glass rounded-full hover:bg-foreground/10 transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator — unchanged ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-foreground/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
