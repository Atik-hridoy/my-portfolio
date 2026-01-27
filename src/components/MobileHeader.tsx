"use client";

import { motion } from "framer-motion";

type Props = {
  activeSection: string;
  onJump: (id: string) => void;
};

// Map sections to letters spelling "HRIDOY"
const SECTION_LETTERS: Record<string, string> = {
  intro: "H",
  experience: "R",
  work: "I",
  skills: "D",
  thoughts: "O",
  connect: "Y",
};

export function MobileHeader({ activeSection, onJump }: Props) {
  const sections = ["intro", "experience", "work", "skills", "thoughts", "connect"];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 lg:hidden pointer-events-none">
      {/* HRIDOY Letters Navigation */}
      <div className="flex items-center justify-center gap-2 pointer-events-auto">
        {sections.map((section) => {
          const letter = SECTION_LETTERS[section];
          const isActive = activeSection === section;

          return (
            <button
              key={section}
              onClick={() => onJump(section)}
              className="relative group"
              aria-label={`Navigate to ${section}`}
            >
              {/* Letter Circle */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 scale-110"
                    : "bg-zinc-900/80 backdrop-blur-sm text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800/50"
                }`}
              >
                {letter}
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
