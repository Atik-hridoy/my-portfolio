"use client";

import { memo } from "react";

type Props = { x: number; y: number };

const SIZE = 384; // 96*4 (w-96 h-96 in px default ~ 24rem ≈ 384px)

export const GlowCursor = memo(function GlowCursor({ x, y }: Props) {
  return (
    <div
      className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)",
        left: x - SIZE / 2,
        top: y - SIZE / 2,
        filter: "blur(60px)",
      }}
    />
  );
});
