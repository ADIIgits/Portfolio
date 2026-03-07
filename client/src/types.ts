export interface Profile {
  id: number;
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  socialLinks: Record<string, string>;
  resumeUrl?: string | null;
}

export interface Technology {
  id: number;
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}
