"use client";

import { memo } from "react";

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export const FooterControls = memo(function FooterControls({ isDark, onToggleTheme }: Props) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onToggleTheme}
        className="group p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 bg-card/20 backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <button className="group p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 bg-card/20 backdrop-blur-sm">
        <svg
          className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  );
});
