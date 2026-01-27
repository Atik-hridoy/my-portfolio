"use client";
import { memo } from "react";

type Thought = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
};

type ThoughtCardProps = {
  t: Thought;
  onClick: () => void;
};

export const ThoughtCard = memo(function ThoughtCard({
  t,
  onClick,
}: ThoughtCardProps) {
  return (
    <article
      data-gsap-card
      onClick={onClick}
      className="group relative p-6 sm:p-8 rounded-2xl cursor-pointer overflow-hidden"
    >
      {/* Holographic border effect - Always visible on mobile */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 md:opacity-20 md:group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-background/95 backdrop-blur-xl" />

      {/* Scan line animation - Always visible on mobile */}
      <div className="absolute inset-0 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan" />
      </div>

      {/* Corner accents - Always visible on mobile */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glitch effect overlay - Disabled on mobile for performance */}
      <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen hidden md:block">
        <div className="absolute inset-0 bg-cyan-500/5 animate-glitch-1" />
        <div className="absolute inset-0 bg-purple-500/5 animate-glitch-2" />
      </div>

      <div className="relative space-y-4 z-10">
        {/* Meta with tech styling */}
        <div className="flex items-center justify-between text-xs font-mono tracking-wider">
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
            [{t.date}]
          </span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
            &lt;{t.readTime}/&gt;
          </span>
        </div>

        {/* Title with glow - Always gradient on mobile */}
        <h3 className="text-lg sm:text-xl font-bold leading-snug transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 md:text-foreground md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-400 md:group-hover:via-blue-400 md:group-hover:to-purple-400">
          {t.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {t.excerpt}
        </p>

        {/* Read more with animated arrow */}
        <div className="flex items-center gap-2 text-sm font-mono text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
          <span className="relative">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{'>'}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{'>'}</span>
            <span className="ml-2">ACCESS_DATA</span>
          </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          33% {
            transform: translate(-2px, 2px);
          }
          66% {
            transform: translate(2px, -2px);
          }
        }
        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          33% {
            transform: translate(2px, -2px);
          }
          66% {
            transform: translate(-2px, 2px);
          }
        }
        .animate-scan {
          animation: scan 8s ease-in-out infinite;
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite 0.15s;
        }
      `}</style>
    </article>
  );
});
