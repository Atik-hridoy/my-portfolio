"use client";

import { ExperienceItem } from "@/components/items/ExperienceItem";

const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Jinior Mobile Developer",
    company: "SparkTech Agency",
    description: "Developing and maintaining mobile applications for various clients, focusing on performance and user experience.",
    responsibilities: [
      "Built and shipped 10+ mobile applications to production",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces",
      "Reduced app launch time by 35% through performance optimization"
    ],
    tech: ["Flutter", "Dart", "GetX", "Firebase", ]
  },
 
];


export function ExperienceSection() {
  return (
    <section id="experience" data-observe="section" className="min-h-[70vh] py-12 sm:py-16 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="text-sm text-muted-foreground font-mono">2020 — Present</div>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem 
                key={`${exp.year}-${exp.role}`} 
                experience={exp} 
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
