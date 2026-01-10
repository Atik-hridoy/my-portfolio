"use client";

import { TechStack } from "../ui/TechStack";

type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  responsibilities: string[];
  tech: string[];
};

type ExperienceItemProps = {
  experience: Experience;
  isLast: boolean;
};

export function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  const { year, role, company, description, responsibilities, tech } = experience;

  return (
    <div data-gsap-item className="group relative grid lg:grid-cols-12 gap-4 sm:gap-8">
      {/* Year */}
      <div className="lg:col-span-2">
        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-primary transition-colors duration-500">
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-10 space-y-4">
        {/* Role and Company */}
        <div className="space-y-1">
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
            {role} · {company}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {responsibility}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="pt-2">
          <TechStack tech={tech} />
        </div>

        {/* Divider */}
        {!isLast && (
          <div className="h-px bg-border/50 my-8"></div>
        )}
      </div>
    </div>
  );
}
