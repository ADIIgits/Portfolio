import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useProfile, useTechnologies, useProjects, useExperiences } from "@/hooks/use-portfolio";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Fetch all data
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: technologies, isLoading: techLoading } = useTechnologies();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experiences, isLoading: expLoading } = useExperiences();

  const isDataLoading = profileLoading || techLoading || projectsLoading || expLoading;

  useEffect(() => {
    // Artificial minimum delay for the cinematic loader effect
    const timer = setTimeout(() => {
      if (!isDataLoading) setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [isDataLoading]);

  // Handle immediate resolution if data fetches after minimum delay
  useEffect(() => {
    if (!isDataLoading && !loading) {
      setLoading(false);
    }
  }, [isDataLoading, loading]);

  if (loading || isDataLoading) {
    return (
      <AnimatePresence>
        <Loader key="loader" />
      </AnimatePresence>
    );
  }

  // Fallbacks if data somehow fails silently
  if (!profile || !technologies || !projects || !experiences) {
    return <div className="min-h-screen flex items-center justify-center text-white/50">Error loading portfolio data.</div>;
  }

  return (
    <div className="bg-background min-h-screen relative selection:bg-accent/30 selection:text-white">
      {/* Ambient background effects */}
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
        <Contact profile={profile} />
      </main>
    </div>
  );
}
