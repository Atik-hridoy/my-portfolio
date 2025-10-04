"use client";

import { memo } from "react";

type Props = {
  sections: string[];
  activeId: string;
  onJump: (id: string) => void;
};

export const SectionDotsNav = memo(function SectionDotsNav({ sections, activeId, onJump }: Props) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onJump(section)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeId === section
                ? "bg-primary shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                : "bg-muted-foreground/30 hover:bg-primary/50"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
});
