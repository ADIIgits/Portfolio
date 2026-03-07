import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Utility to parse with logging for debugging
function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data as T;
}

export function useProfile() {
  return useQuery({
    queryKey: [api.profile.get.path],
    queryFn: async () => {
      const res = await fetch(api.profile.get.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();
      return parseWithLogging(api.profile.get.responses[200], data, "profile.get");
    },
  });
}

export function useTechnologies() {
  return useQuery({
    queryKey: [api.technologies.list.path],
    queryFn: async () => {
      const res = await fetch(api.technologies.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch technologies');
      const data = await res.json();
      return parseWithLogging(api.technologies.list.responses[200], data, "technologies.list");
    },
  });
}

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      return parseWithLogging(api.projects.list.responses[200], data, "projects.list");
    },
  });
}

export function useExperiences() {
  return useQuery({
    queryKey: [api.experiences.list.path],
    queryFn: async () => {
      const res = await fetch(api.experiences.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch experiences');
      const data = await res.json();
      return parseWithLogging(api.experiences.list.responses[200], data, "experiences.list");
    },
  });
}
