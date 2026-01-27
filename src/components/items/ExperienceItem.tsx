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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector - Hidden on mobile */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />
      
      {/* Timeline dot - Hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute left-0 top-8 w-3 h-3 -ml-[5px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 z-10"
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          boxShadow: isHovered
            ? [
                "0 0 0 0 rgba(6, 182, 212, 0.7)",
                "0 0 0 10px rgba(6, 182, 212, 0)",
                "0 0 0 0 rgba(6, 182, 212, 0)",
              ]
            : "0 0 0 0 rgba(6, 182, 212, 0)",
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Card */}
      <div
        className="sm:ml-8 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700" />

        {/* Main card */}
        <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 sm:p-6 transition-all duration-500 group-hover:border-zinc-700 group-hover:shadow-2xl">
          {/* Spotlight effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          </div>

          {/* Header */}
          <div className="relative flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
            <div className="flex-1 w-full">
              {/* Year badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
                <span className="text-xs font-medium text-cyan-400">{year}</span>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                {role}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-medium flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {company}
              </p>
            </div>

            {/* Expand/Collapse button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2.5 sm:p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-700 hover:border-cyan-500 transition-all duration-300 active:scale-95"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Responsibilities */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2.5 sm:space-y-2">
                {responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 sm:gap-3 text-zinc-300 text-sm group/item"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="leading-relaxed">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technologies
              </h4>
              <TechStack tech={tech} />
            </div>
          </motion.div>

          {/* Animated bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Spacing for next item */}
      {!isLast && <div className="h-6 sm:h-8" />}
    </motion.div>
  );
}
