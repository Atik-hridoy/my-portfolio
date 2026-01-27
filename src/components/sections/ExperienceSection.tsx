"use client";

import { ExperienceItem } from "@/components/items/ExperienceItem";

const EXPERIENCES = [
  {
    year: "JUN 2025 - Present",
    role: "Flutter Developer (Junior)",
    company: "SparkTech Agency",
    description: "Developing and maintaining production-ready cross-platform apps using Flutter & Dart following clean architecture.",
    responsibilities: [
      "Translating Figma/Adobe XD designs into pixel-perfect, responsive UIs with Material & Cupertino widgets",
      "Implementing state management using GetX, Provider and reactive programming",
      "Handling asynchronous data using FutureBuilder, StreamBuilder, async/await, and robust error handling",
      "Integrating REST APIs with JSON parsing, authentication flows, and offline caching",
      "Optimizing widget tree performance, minimizing rebuilds, and leveraging const constructors",
      "Developing custom reusable widgets, themes, and component libraries for consistent UX",
      "Collaborating with backend teams and using Git workflows, pull requests, CI/CD pipelines"
    ],
    tech: ["Flutter", "Dart", "Firebase", ]
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" data-observe="section" data-gsap-section className="min-h-[70vh] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              data-gsap-heading
              className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Work <span className="font-semibold">Experience</span>
            </h2>
            <div
              data-gsap-heading
              className="text-sm text-muted-foreground font-mono"
            >
              JUN 2025 — Present
            </div>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem 
                key={`${exp.year}-${exp.role}`} 
                experience={exp} 
                isLast={index === EXPERIENCES.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
