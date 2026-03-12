import { motion } from "framer-motion";
import type { Profile } from "@/types";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-32 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-foreground/20 font-mono text-xl sm:text-2xl">01.</span>
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="glass p-8 sm:p-10 rounded-3xl text-lg sm:text-xl text-foreground/75 leading-relaxed font-light space-y-6">
                {profile.about.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="glass p-8 rounded-3xl flex flex-col gap-4">
                <div className="text-sm text-foreground/40 uppercase tracking-widest">Connect</div>
                <a href={`mailto:${profile.email}`} className="text-lg hover:text-accent transition-colors break-all">
                  {profile.email}
                </a>
              </div>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-8 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-foreground/[0.04] transition-colors"
                >
                  <span className="font-medium group-hover:text-accent transition-colors">Resume</span>
                  <span className="text-2xl font-light transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
