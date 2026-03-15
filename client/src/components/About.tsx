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

          <div className="flex flex-col gap-6">
            {/* Top Main Card (Text + Image) */}
            <div className="glass rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-1 items-center h-full">
                {/* Left: Text Content (3/5 width) */}
                <div className="lg:col-span-4 text-lg sm:text-lg text-foreground/80 leading-relaxed font-light space-y-6 flex flex-col justify-center px-10 sm:px-12 py-4">
                  {profile.about.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                
                {/* Right: Portrait Image (2/5 width) */}
                <div className="lg:col-span-3 relative h-64 sm:h-80 lg:h-[500px] w-full rounded-r-2xl overflow-hidden shadow-lg object-center">
                  <img 
                    src={profile.imageUrl || "https://i.pinimg.com/736x/2e/74/e7/2e74e77c8d797c3f3b991ee2f08d0f66.jpg"} 
                    alt="Portrait" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Connect Card */}
              <div className="glass p-8 rounded-[2rem] flex flex-col justify-center gap-2">
                <span className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">Connect</span>
                <a href={`mailto:${profile.email}`} className="text-sm sm:text-base font-medium hover:text-accent transition-colors truncate">
                  {profile.email}
                </a>
              </div>

              {/* Resume Card */}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:bg-foreground/[0.04] transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg group-hover:text-accent transition-colors">Resume</span>
                  <span className="text-2xl font-light transform group-hover:translate-x-2 transition-transform">→</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
