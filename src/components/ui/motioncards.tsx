"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionCardsProps {
  children: ReactNode;
  interval?: number;
  className?: string;
}

interface MotionCardContentProps {
  children: ReactNode;
  className?: string;
}

export function MotionCardContent({ children, className }: MotionCardContentProps) {
  return <div className={className}>{children}</div>;
}

export default function MotionCards({ children, interval = 2000, className }: MotionCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % childrenArray.length);
    }, interval);

    return () => clearInterval(timer);
  }, [childrenArray.length, interval]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full"
        >
          {childrenArray[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {childrenArray.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "transition-all duration-300 rounded-full",
              currentIndex === idx
                ? "w-6 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                : "w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-500"
            )}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
