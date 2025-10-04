"use client";
import { memo } from "react";

type Job = {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
};

export const JobItem = memo(function JobItem({ job }: { job: Job }) {
  return (
    <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-primary/50 transition-all duration-500 rounded-lg hover:bg-card/20 hover:px-6">
      <div className="lg:col-span-2">
        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-primary transition-colors duration-500">
          {job.year}
        </div>
      </div>

      <div className="lg:col-span-6 space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-medium group-hover:text-primary transition-colors duration-300">
            {job.role}
          </h3>
          <div className="text-muted-foreground">{job.company}</div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
      </div>

      <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
        {job.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs text-muted-foreground border border-border/30 rounded group-hover:border-primary/50 group-hover:text-primary transition-all duration-500"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
});
