"use client";
import { memo } from "react";
import { TechStack } from "../ui/TechStack";

type Job = {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  repo?: string;
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
          <div className="text-muted-foreground">
            {job.repo ? (
              <a 
                href={job.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300 flex items-center gap-1"
              >
                {job.company}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              job.company
            )}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
      </div>

      <div className="lg:col-span-4 lg:justify-end mt-2 lg:mt-0">
        <TechStack tech={job.tech} className="justify-end" />
      </div>
    </div>
  );
});