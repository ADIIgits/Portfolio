import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { db } from "./db";
import { profiles, technologies, projects, experiences } from "@shared/schema";
import { eq } from "drizzle-orm";

async function seedDatabase() {
  // Check if profile exists
  const profile = await storage.getProfile();
  if (!profile) {
    await db.insert(profiles).values({
      name: "Alex Developer",
      title: "Full Stack Engineer",
      tagline: "Building digital experiences with cinematic precision.",
      about: "I am a passionate software engineer who bridges the gap between design and engineering. I specialize in building immersive, high-performance web applications using modern web technologies.",
      email: "hello@alexdeveloper.com",
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
    });

    await db.insert(technologies).values([
      { name: "React", category: "Frontend", icon: "react" },
      { name: "TypeScript", category: "Languages", icon: "typescript" },
      { name: "Node.js", category: "Backend", icon: "nodedotjs" },
      { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },
      { name: "PostgreSQL", category: "Database", icon: "postgresql" },
      { name: "Framer Motion", category: "Frontend", icon: "framer" }
    ]);

    await db.insert(projects).values([
      {
        title: "Aura E-Commerce",
        description: "A premium e-commerce platform with cinematic 3D product viewing and seamless checkout.",
        techStack: ["Next.js", "Three.js", "Tailwind", "Stripe"],
        githubLink: "https://github.com",
        liveLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        featured: true
      },
      {
        title: "Nexus Dashboard",
        description: "A high-performance financial dashboard with real-time data streaming and advanced analytics.",
        techStack: ["React", "D3.js", "WebSockets", "Node.js"],
        githubLink: "https://github.com",
        liveLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
        featured: true
      },
      {
        title: "Luminary App",
        description: "A productivity tool with immersive focus modes and a minimalist frosted glass interface.",
        techStack: ["TypeScript", "React", "Framer Motion"],
        githubLink: "https://github.com",
        liveLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop",
        featured: false
      }
    ]);

    await db.insert(experiences).values([
      {
        company: "TechNova",
        role: "Senior Full Stack Engineer",
        startDate: "2021",
        endDate: "Present",
        description: "Led the development of a next-generation SaaS platform, improving performance by 40%."
      },
      {
        company: "Creative Digital",
        role: "Frontend Developer",
        startDate: "2018",
        endDate: "2021",
        description: "Built award-winning cinematic marketing websites for top-tier clients."
      }
    ]);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the database
  seedDatabase().catch(console.error);

  app.get(api.profile.get.path, async (req, res) => {
    const profile = await storage.getProfile();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  });

  app.get(api.technologies.list.path, async (req, res) => {
    const technologies = await storage.getTechnologies();
    res.json(technologies);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.experiences.list.path, async (req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  return httpServer;
}
