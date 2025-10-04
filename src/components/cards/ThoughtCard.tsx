"use client";
import { memo } from "react";

type Thought = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const ThoughtCard = memo(function ThoughtCard({ t }: { t: Thought }) {
  return (
    <article className="group p-6 sm:p-8 border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] cursor-pointer bg-card/20 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-primary font-mono">
          <span>{t.date}</span>
          <span>{t.readTime}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-medium group-hover:text-primary transition-colors duration-300">
          {t.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{t.excerpt}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
          <span>Read more</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
});
