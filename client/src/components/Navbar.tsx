import { motion, useScroll, useTransform } from "framer-motion";
import type { Profile } from "@/types";

interface NavbarProps {
  profile?: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <nav className="glass-panel px-6 py-3 rounded-full flex items-center gap-8">
        <span className="text-sm font-semibold tracking-wider mr-4">
          {profile?.name.split(' ')[0] || "DEV"}
        </span>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Work</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
      </nav>
    </motion.header>
  );
}
