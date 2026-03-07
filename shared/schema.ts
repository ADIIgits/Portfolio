import { pgTable, text, serial, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  tagline: text("tagline").notNull(),
  about: text("about").notNull(),
  email: text("email").notNull(),
  socialLinks: jsonb("social_links").notNull(), // e.g., { github: string, linkedin: string, twitter: string }
  resumeUrl: text("resume_url"),
});

export const technologies = pgTable("technologies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // e.g., 'Frontend', 'Backend', 'Tools'
  icon: text("icon").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: jsonb("tech_stack").notNull(), // array of strings
  githubLink: text("github_link"),
  liveLink: text("live_link"),
  image: text("image").notNull(),
  featured: boolean("featured").default(false),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  description: text("description").notNull(),
});

export const insertProfileSchema = createInsertSchema(profiles).omit({ id: true });
export const insertTechnologySchema = createInsertSchema(technologies).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });

export type Profile = typeof profiles.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;

export type Technology = typeof technologies.$inferSelect;
export type InsertTechnology = z.infer<typeof insertTechnologySchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
