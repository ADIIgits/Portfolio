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

export interface EducationItem {
  id: number;
  institution: string;
  location?: string;
  degree: string;
  cgpa?: string;
  percentage?: string;
  start: string;
  end: string;
  highlights?: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

export interface CPPlatform {
  id: number;
  name: string;
  username: string;
  stats: string;
  rating: string;
  rank: string;
  link: string;
}

export interface CPAchievement {
  id: number;
  title: string;
  description: string;
  year: string;
}

export interface CPHackathon {
  id: number;
  name: string;
  role: string;
  result: string;
  year: string;
  image: string;
}

export interface CompetitiveProgramming {
  platforms: CPPlatform[];
  achievements: CPAchievement[];
  hackathons: CPHackathon[];
}
