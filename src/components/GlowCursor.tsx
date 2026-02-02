"use client";

import { memo, useEffect, useState } from "react";

type Props = { x: number; y: number };

const SIZE = 384; // 96*4 (w-96 h-96 in px default ~ 24rem ≈ 384px)

export const GlowCursor = memo(function GlowCursor({ x, y }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Disable on mobile for performance
  if (isMobile) return null;

  return (
    <div
      className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)",
        left: x - SIZE / 2,
        top: y - SIZE / 2,
        filter: "blur(50px)",
      }}
    />
  );
});
