import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
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
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none"
    >
      {/* --- DESKTOP NAVBAR --- */}
      <nav className="hidden md:flex glassmorph px-6 py-3 rounded-full items-center gap-6 pointer-events-auto">
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
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </nav>

      {/* --- MOBILE NAVBAR --- */}
      <div className="md:hidden flex justify-between items-start w-full max-w-7xl mx-auto pointer-events-auto" ref={menuRef}>
        {/* Logo / Name */}
        <div className="glassmorph px-5 py-3 rounded-full flex items-center">
          <span className="text-sm font-semibold tracking-wider text-foreground">
            {profile?.name.split(' ')[0] || "DEV"}
          </span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex flex-col items-end gap-3 relative">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="glassmorph p-3 rounded-full text-foreground/80 hover:text-foreground flex items-center justify-center transition-transform active:scale-95"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="glassmorph p-3 rounded-full text-foreground/80 hover:text-foreground flex items-center justify-center transition-transform active:scale-95"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Slide-in Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glassmorph p-2 rounded-2xl flex flex-col w-48 shadow-lg overflow-hidden absolute top-[110%] right-0"
              >
                <button 
                  onClick={() => scrollTo('about')} 
                  className="px-4 py-3 text-sm font-medium hover:bg-foreground/5 text-foreground/80 hover:text-foreground text-left transition-colors rounded-xl w-full"
                >
                  About
                </button>
                <div className="w-[90%] h-px bg-foreground/10 mx-auto" />
                <button 
                  onClick={() => scrollTo('projects')} 
                  className="px-4 py-3 text-sm font-medium hover:bg-foreground/5 text-foreground/80 hover:text-foreground text-left transition-colors rounded-xl w-full"
                >
                  Work
                </button>
                <div className="w-[90%] h-px bg-foreground/10 mx-auto" />
                <button 
                  onClick={() => scrollTo('experience')} 
                  className="px-4 py-3 text-sm font-medium hover:bg-foreground/5 text-foreground/80 hover:text-foreground text-left transition-colors rounded-xl w-full"
                >
                  Experience
                </button>
                <div className="w-[90%] h-px bg-foreground/10 mx-auto" />
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="px-4 py-3 text-sm font-medium hover:bg-foreground/5 text-foreground/80 hover:text-foreground text-left transition-colors rounded-xl w-full"
                >
                  Contact
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
