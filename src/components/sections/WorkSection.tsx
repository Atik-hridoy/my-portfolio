"use client";

import { JobItem } from "../items/JobItem";

const JOBS = [
    {
        year: "2025",
        role: "Dating App",
        company: "Kindered App",
        description: "Developed a modern dating application with a beautiful UI, real-time features, and smooth animations using Flutter and GetX state management. Implemented user authentication, profile management, and location-based matching.",
        tech: ["Flutter", "Dart","Firebase", "Google Maps API"],
        repo: "https://github.com/Atik-hridoy/kindered_app"
    },
  {
    year: "2025",
    role: "Hpayy Shopping",
    company: "Elecktro E-commerce",
    description: "Developed a cross-platform e-commerce app with product catalog, shopping cart, and user profile features. Implemented responsive design with dark/light theme support and multi-language localization.",
    tech: ["Flutter", "Dart", ],
    repo: "https://github.com/Atik-hridoy/elecktro-ecommerce"
  },
  {
    year: "2022",
    role: "Vendor App",
    company: "ElectroNic Seller",
    description: "Developed a Flutter-based electronics marketplace app with product listings, search functionality, and user authentication.",
    tech: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/Atik-hridoy/electroNic_seller"
  },
  
];

export function WorkSection() {
  return (
    <section id="work" data-observe="section" data-gsap-section className="min-h-screen py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            data-gsap-heading
            className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Selected <span className="font-semibold">Projects</span>
          </h2>
          <div
            data-gsap-heading
            className="text-sm text-muted-foreground font-mono"
          >
            2020 — 2025
          </div>
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
