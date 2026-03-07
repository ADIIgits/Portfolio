import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import type { Profile } from "@/types";

export function Contact({ profile }: { profile: Profile }) {
  const socialLinks = profile.socialLinks as Record<string, string>;

  return (
    <section id="contact" className="py-32 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <span className="text-white/20 font-mono text-xl sm:text-2xl">05.</span>
              Get In Touch
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="glass p-8 sm:p-12 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
              
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="break-all">{profile.email}</span>
              </a>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold mb-6">Follow</h3>
              <div className="flex items-center gap-4">
                {socialLinks?.github && (
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-accent/20 transition-colors group"
                  >
                    <Github size={24} className="group-hover:text-accent transition-colors" />
                  </a>
                )}
                {socialLinks?.linkedin && (
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-accent/20 transition-colors group"
                  >
                    <Linkedin size={24} className="group-hover:text-accent transition-colors" />
                  </a>
                )}
                {socialLinks?.twitter && (
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-accent/20 transition-colors group"
                  >
                    <svg className="w-6 h-6 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
