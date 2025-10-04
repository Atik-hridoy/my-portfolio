"use client";

import { JobItem } from "../items/JobItem";

const JOBS = [
    {
        year: "2025",
        role: "Dating App",
        company: "Kindered App",
        description: "Developed a modern dating application with a beautiful UI, real-time features, and smooth animations using Flutter and GetX state management. Implemented user authentication, profile management, and location-based matching.",
        tech: ["Flutter", "Dart", "GetX", "Firebase", "Google Maps API"],
        repo: "https://github.com/Atik-hridoy/kindered_app"
    },
  {
    year: "2023",
    role: "iOS Developer",
    company: "E-commerce Platform",
    description: "Built native shopping experiences with seamless checkout and real-time inventory.",
    tech: ["Swift", "SwiftUI", "Core Data"],
  },
  {
    year: "2022",
    role: "Mobile App Developer",
    company: "Social Media App",
    description: "Developed cross-platform features for content sharing and user engagement.",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    year: "2020",
    role: "Junior Android Developer",
    company: "Fitness App",
    description: "Created workout tracking features and integrated wearable device APIs.",
    tech: ["Kotlin", "Jetpack Compose", "Room"],
  },
];

export function WorkSection() {
  return (
    <section id="work" data-observe="section" className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <div className="text-sm text-muted-foreground font-mono">2020 — 2025</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {JOBS.map((job) => (
            <JobItem key={`${job.year}-${job.role}`} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
