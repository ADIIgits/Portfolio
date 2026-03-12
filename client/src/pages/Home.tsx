import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useProfile, useTechnologies, useProjects, useExperiences } from "@/hooks/use-portfolio";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";
import { competitiveProgramming } from "@/data/competitiveProgramming";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const { data: profile } = useProfile();
  const { data: technologies } = useTechnologies();
  const { data: projects } = useProjects();
  const { data: experiences } = useExperiences();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <Loader key="loader" />
      </AnimatePresence>
    );
  }

  if (!profile || !technologies || !projects || !experiences) {
    return <div className="min-h-screen flex items-center justify-center text-white/50">Error loading portfolio data.</div>;
  }

  return (
    <div className="bg-background min-h-screen relative selection:bg-accent/30 selection:text-white">
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="fixed inset-0 bg-grid-white pointer-events-none z-[-1]" />

      <Navbar profile={profile} />

      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Tech technologies={technologies} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Education education={education} />
        <CompetitiveProgramming data={competitiveProgramming} />
        <Certificates certificates={certificates} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}
