"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };

export function useCursorGlow() {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
      frame.current && cancelAnimationFrame(frame.current);
      frame.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [onMouseMove]);

  return pos;
}
