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
    <article
      className="group relative p-6 sm:p-8 border border-border/50 rounded-2xl 
      bg-card/20 backdrop-blur-lg 
      transition-all duration-500 cursor-pointer
      hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] 
      hover:border-primary/60 hover:-translate-y-1"
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative space-y-4">
        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-primary font-mono tracking-wide">
          <span>{t.date}</span>
          <span>{t.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
          {t.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {t.excerpt}
        </p>

        {/* Read more link */}
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
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
