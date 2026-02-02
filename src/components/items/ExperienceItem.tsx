"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  index: number;
};

export function ExperienceItem({ experience, isLast, index }: ExperienceItemProps) {
  const { year, role, company, description, responsibilities, tech } = experience;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-purple-500/50" />
      
      {/* Timeline dot */}
      <div className="hidden sm:block absolute left-0 top-8 w-3 h-3 -ml-[5px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50" />

      {/* Card */}
      <div className="sm:ml-8 group">
        <div className="relative bg-zinc-900/80 border border-zinc-800/50 rounded-xl p-5 sm:p-6 hover:bg-zinc-900/90 hover:border-zinc-700/50 transition-all duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
            <div className="flex-1">
              {/* Year badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-medium text-zinc-400">{year}</span>
                {year.includes("Present") && (
                  <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-semibold border border-green-500/20">
                    CURRENT
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {role}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-medium flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {company}
              </p>
            </div>

            {/* Expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-700/50 hover:border-cyan-500/30 transition-all duration-200"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              <motion.svg
                className="w-5 h-5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
            {description}
          </p>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Responsibilities */}
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed group/item"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-zinc-800/50">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technologies
              </h4>
              <TechStack tech={tech} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spacing */}
      {!isLast && <div className="h-6 sm:h-8" />}
    </motion.div>
  );
}
