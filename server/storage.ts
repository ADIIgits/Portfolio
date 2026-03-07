import { db } from "./db";
import {
  profiles,
  technologies,
  projects,
  experiences,
  type Profile,
  type Technology,
  type Project,
  type Experience
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getTechnologies(): Promise<Technology[]>;
  getProjects(): Promise<Project[]>;
  getExperiences(): Promise<Experience[]>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const allProfiles = await db.select().from(profiles).limit(1);
    return allProfiles[0];
  }

  async getTechnologies(): Promise<Technology[]> {
    return await db.select().from(technologies);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences);
  }
}

export const storage = new DatabaseStorage();
