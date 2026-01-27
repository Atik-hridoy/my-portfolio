"use client";

import { memo } from "react";

type Props = {
  sections: string[];
  activeId: string;
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

export const SectionDotsNav = memo(function SectionDotsNav({
  sections,
  activeId,
  onJump,
}: Props) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => {
          const letter = SECTION_LETTERS[section] || section.charAt(0).toUpperCase();
          const isActive = activeId === section;

          return (
            <button
              key={section}
              onClick={() => onJump(section)}
              className="group relative"
              aria-label={`Navigate to ${section}`}
            >
              {/* Letter */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  isActive
                    ? "bg-primary text-background shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-110"
                    : "bg-muted-foreground/20 text-muted-foreground hover:bg-primary/50 hover:text-background"
                }`}
              >
                {letter}
              </div>

              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-background/90 backdrop-blur-sm border border-border px-3 py-1 rounded text-xs whitespace-nowrap">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
});
