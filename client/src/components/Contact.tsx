import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import type { Profile } from "@/types";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="py-32 px-4 sm:px-8 lg:px-16 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 sm:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

          <h2 className="text-sm text-accent font-mono tracking-[0.3em] uppercase mb-6">
            08. What's Next?
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold mb-8 text-glow">
            Get In Touch
          </h3>
          <p className="text-lg text-foreground/60 font-light mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-5 dark:bg-white dark:text-black bg-foreground text-background rounded-full font-medium text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-sm font-mono text-foreground/30 flex flex-col items-center gap-4"
        >
          <div className="flex gap-6">
            {Object.entries(profile.socialLinks as Record<string, string>).map(([network, url]) => (
              <a key={network} href={url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1 capitalize">
                {network} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
          <p>Designed & Built by {profile.name}</p>
        </motion.footer>
      </div>
    </section>
  );
}
