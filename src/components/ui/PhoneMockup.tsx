"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type PhoneMockupProps = {
  color: string;
  projectName: string;
  isVisible: boolean;
};

export function PhoneMockup({ color, projectName, isVisible }: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    // Initial animation on mount
    gsap.fromTo(
      phoneRef.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  // Animate content change
  useEffect(() => {
    if (!phoneRef.current) return;

    const content = phoneRef.current.querySelector('.phone-content');
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [projectName, color]);

  return (
    <div
      ref={phoneRef}
      className="w-full flex justify-center pointer-events-none"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Phone frame */}
        <div className="relative w-[200px] h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-[2.2rem] p-2 shadow-2xl border-[3px] border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-3xl z-10" />

          {/* Screen */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-950 to-black rounded-[1.8rem] overflow-hidden">
            {/* Screen glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 animate-pulse`} />

            {/* App content placeholder */}
            <div className="phone-content relative w-full h-full p-3 flex flex-col items-center justify-center">
              {/* Status bar */}
              <div className="absolute top-5 left-0 right-0 px-5 flex justify-between text-white text-[9px]">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2 border border-white/50 rounded-sm" />
                  <div className="w-0.5 h-2 bg-white/50 rounded-sm" />
                </div>
              </div>

              {/* App preview */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-3 mt-5">
                {/* App icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} shadow-lg flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">
                    {projectName.charAt(0)}
                  </span>
                </div>

                {/* App name */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-xs mb-1">
                    {projectName}
                  </h3>
                  <div className="flex gap-0.5 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-2.5 h-2.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Mock UI elements */}
                <div className="w-full space-y-1.5 px-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-10 rounded-lg bg-gradient-to-r ${color} opacity-30 animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white/30 rounded-full" />
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Side buttons */}
          <div className="absolute -left-0.5 top-16 w-0.5 h-8 bg-gray-700 rounded-l" />
          <div className="absolute -left-0.5 top-28 w-0.5 h-10 bg-gray-700 rounded-l" />
          <div className="absolute -right-0.5 top-24 w-0.5 h-10 bg-gray-700 rounded-r" />
        </div>

        {/* Phone shadow */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-40">
          <div className={`w-full h-full bg-gradient-to-br ${color} rounded-[2.2rem]`} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 -z-5">
          {[
            { top: 74.9, left: 0.18, color: "#06b6d4", delay: 0 },
            { top: 48.5, left: 63.8, color: "#3b82f6", delay: 0.3 },
            { top: 57.2, left: 58.7, color: "#8b5cf6", delay: 0.6 },
            { top: 40.7, left: 92, color: "#06b6d4", delay: 0.9 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                background: particle.color,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                boxShadow: `0 0 6px ${particle.color}`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
