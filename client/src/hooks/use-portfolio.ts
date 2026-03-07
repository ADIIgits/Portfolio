import { profile } from "@/data/profile";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import type { Profile, Technology, Project, Experience } from "@/types";

export function useProfile() {
  return {
    data: profile as Profile,
    isLoading: false,
    error: null,
  };
}

export function useTechnologies() {
  return {
    data: technologies as Technology[],
    isLoading: false,
    error: null,
  };
}

export function useProjects() {
  return {
    data: projects as Project[],
    isLoading: false,
    error: null,
  };
}

export function useExperiences() {
  return {
    data: experiences as Experience[],
    isLoading: false,
    error: null,
  };
}
