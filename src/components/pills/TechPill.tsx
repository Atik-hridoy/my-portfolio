"use client";
import { memo, useState } from "react";
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
  "React Native": "from-blue-500 via-cyan-400 to-teal-400",
  Swift: "from-orange-500 via-pink-500 to-rose-400",
  Kotlin: "from-purple-500 via-indigo-500 to-blue-400",
  Flutter: "from-blue-400 via-cyan-300 to-teal-300",
  Firebase: "from-yellow-500 via-orange-500 to-red-400",
  TypeScript: "from-blue-600 via-blue-500 to-blue-400",
};

export const TechPill = memo(function TechPill({ label }: { label: string }) {
  const Icon = ICON_MAP[label];
  const gradient = GRADIENTS[label] || "from-primary to-primary/80";

  // Mouse tilt effect
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse x inside pill
    const y = e.clientY - rect.top; // mouse y inside pill
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setTiltY(((x - centerX) / centerX) * 5); // max 5deg
    setTiltX(-((y - centerY) / centerY) * 5);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <span
      className={`
        group relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium
        border border-border/30 rounded-full
        bg-card/40 backdrop-blur-sm
        text-foreground
        transition-all duration-300 transform
        hover:scale-105 hover:shadow-lg hover:shadow-${gradient.replace(
          / /g,
          "/"
        )}/50
        active:scale-95
        overflow-hidden
      `}
      style={{
        transform: `perspective(200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient shimmer */}
      <span
        className={`
          absolute inset-0 bg-gradient-to-r ${gradient} 
          bg-[length:300%_auto] animate-gradient
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
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
