import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import type { Profile } from "@/types";

interface NavbarProps {
  profile?: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <nav className="glassmorph px-6 py-3 rounded-full flex items-center gap-6">
        <span className="text-sm font-semibold tracking-wider mr-2 text-foreground">
          {profile?.name.split(' ')[0] || "DEV"}
        </span>
        <div className="flex items-center gap-5 text-sm text-foreground/60">
          <button onClick={() => scrollTo('about')} className="hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-foreground transition-colors">Work</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-foreground transition-colors">Experience</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-foreground transition-colors">Contact</button>
        </div>
        <div className="w-px h-4 bg-foreground/10 mx-1" />
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground/60 hover:text-foreground"
        >
          {theme === "dark"
            ? <Sun size={15} />
            : <Moon size={15} />
          }
        </button>
      </nav>
    </motion.header>
  );
}
