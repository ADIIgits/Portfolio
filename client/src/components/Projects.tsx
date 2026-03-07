import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { ProjectsListResponse } from "@shared/routes";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: ProjectsListResponse[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const techStack = project.techStack as string[];

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="glass rounded-[2rem] overflow-hidden group relative flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center z-10 relative">
        <div className="text-accent text-sm font-mono tracking-widest mb-4">
          Featured Project
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 group-hover:text-glow transition-all">
          {project.title}
        </h3>
        <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {techStack?.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <ExternalLink size={16} /> Live Site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-white/60">
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden bg-white/5">
        {/* Using a subtle pattern or image overlay. For stock, using unsplash architectural/abstract */}
        {/* abstract geometric tech dark unsplash image */}
        <img 
          src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 to-transparent" />
      </div>
    </motion.div>
  );
}

export function Projects({ projects }: { projects: ProjectsListResponse }) {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-white/20 font-mono text-xl sm:text-2xl">03.</span>
          Selected Work
        </motion.h2>

        <div className="space-y-24">
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {others.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h3 className="text-2xl font-bold mb-10 text-center">Other Noteworthy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map(project => (
                <a 
                  key={project.id}
                  href={project.liveLink || project.githubLink || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-8 rounded-[2rem] group hover:-translate-y-2 transition-all block"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/20 transition-colors">
                      <Github size={24} className="group-hover:text-accent transition-colors" />
                    </div>
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-sm text-white/50 mb-6 line-clamp-3 font-light">{project.description}</p>
                  <div className="flex gap-3 text-xs text-white/40 font-mono mt-auto flex-wrap">
                    {(project.techStack as string[])?.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
