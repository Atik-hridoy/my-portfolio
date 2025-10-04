// Update TechPill.tsx
"use client";
import { memo } from "react";
import {
  SiReact,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
  "React Native": SiReact,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Flutter: SiFlutter,
  Firebase: SiFirebase,
  TypeScript: SiTypescript,
};

const GRADIENTS: Record<string, string> = {
  "React Native": "from-blue-500 to-cyan-400",
  Swift: "from-orange-500 to-pink-500",
  Kotlin: "from-purple-500 to-blue-500",
  Flutter: "from-blue-400 to-cyan-300",
  Firebase: "from-yellow-500 to-orange-500",
  TypeScript: "from-blue-600 to-blue-400",
};

// In TechPill.tsx
export const TechPill = memo(function TechPill({ label }: { label: string }) {
    const Icon = ICON_MAP[label];
    const gradient = GRADIENTS[label] || "from-primary to-primary/80";
  
    return (
      <span
        className={`
          group relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium
          border border-border/30 rounded-full
          bg-card/40 backdrop-blur-sm
          text-foreground
          transition-all duration-300
          overflow-hidden
        `}
      >
        {/* Gradient background that shows on hover */}
        <span 
          className={`
            absolute inset-0 bg-gradient-to-r ${gradient} 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300
          `}
        />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {Icon && <Icon className="w-3.5 h-3.5" />}
          <span>{label}</span>
        </span>
      </span>
    );
  });