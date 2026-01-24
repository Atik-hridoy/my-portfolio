"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RadialSocialsProps {
  children: React.ReactNode;
  animationDelay?: number;
  expandDuration?: number;
  className?: string;
  containerClassName?: string;
}

interface RadialCircularProps {
  children: React.ReactNode;
  radius: number;
  duration?: number;
  startAngle?: number;
  circleLineClassName?: string;
}

interface RadialIconProps {
  icon: React.ReactNode;
  angle?: number;
  label?: string;
  percentage?: number;
}

const RadialSocialsContext = React.createContext<{
  isExpanded: boolean;
  animationDelay: number;
  expandDuration: number;
}>({ isExpanded: false, animationDelay: 150, expandDuration: 800 });

export function RadialSocials({
  children,
  animationDelay = 150,
  expandDuration = 800,
  className = "",
  containerClassName = "",
}: RadialSocialsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  return (
    <RadialSocialsContext.Provider value={{ isExpanded, animationDelay, expandDuration }}>
      <div className={`relative ${containerClassName}`}>
        <div className={`relative ${className}`}>{children}</div>
      </div>
    </RadialSocialsContext.Provider>
  );
}

export function RadialSocialsContent({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full h-full">{children}</div>;
}

export function RadialCircular({
  children,
  radius,
  duration = 20,
  startAngle = 0,
  circleLineClassName = "",
}: RadialCircularProps) {
  const { isExpanded, expandDuration } = React.useContext(RadialSocialsContext);
  const childrenArray = React.Children.toArray(children);
  const angleStep = 360 / childrenArray.length;

  return (
    <>
      {/* Optional circle line */}
      {circleLineClassName && (
        <div
          className={`absolute rounded-full border ${circleLineClassName}`}
          style={{
            width: radius * 2,
            height: radius * 2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Icons */}
      {childrenArray.map((child, index) => {
        const angle = startAngle + index * angleStep;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={
              isExpanded
                ? { x, y, opacity: 1, scale: 1 }
                : { x: 0, y: 0, opacity: 0, scale: 0 }
            }
            transition={{
              duration: expandDuration / 1000,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {child}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

export function RadialIcon({ icon, angle, label, percentage }: RadialIconProps) {
  return (
    <div className="group relative">
      <div className="w-12 h-12 rounded-full bg-background border-2 border-border hover:border-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <div className="text-foreground group-hover:text-primary transition-colors">
          {icon}
        </div>
      </div>
      {percentage !== undefined && (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-md">
          {percentage}
        </div>
      )}
      {label && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          <span className="text-xs font-medium text-muted-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-border shadow-lg">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
