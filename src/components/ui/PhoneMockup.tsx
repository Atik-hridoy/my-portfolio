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

    if (isVisible) {
      gsap.fromTo(
        phoneRef.current,
        {
          scale: 0,
          rotateY: -90,
          opacity: 0,
          x: 100,
        },
        {
          scale: 1,
          rotateY: 0,
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
    } else {
      gsap.to(phoneRef.current, {
        scale: 0,
        rotateY: 90,
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: "back.in(1.7)",
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={phoneRef}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:block pointer-events-none"
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
        <div className="relative w-[220px] h-[440px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-2.5 shadow-2xl border-[3px] border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-3xl z-10" />

          {/* Screen */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-950 to-black rounded-[2rem] overflow-hidden">
            {/* Screen glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 animate-pulse`} />

            {/* App content placeholder */}
            <div className="relative w-full h-full p-4 flex flex-col items-center justify-center">
              {/* Status bar */}
              <div className="absolute top-6 left-0 right-0 px-6 flex justify-between text-white text-[10px]">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-2.5 border border-white/50 rounded-sm" />
                  <div className="w-0.5 h-2.5 bg-white/50 rounded-sm" />
                </div>
              </div>

              {/* App preview */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4 mt-6">
                {/* App icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} shadow-lg flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">
                    {projectName.charAt(0)}
                  </span>
                </div>

                {/* App name */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-sm mb-1.5">
                    {projectName}
                  </h3>
                  <div className="flex gap-0.5 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Mock UI elements */}
                <div className="w-full space-y-2 px-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-lg bg-gradient-to-r ${color} opacity-30 animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Side buttons */}
          <div className="absolute -left-0.5 top-20 w-0.5 h-10 bg-gray-700 rounded-l" />
          <div className="absolute -left-0.5 top-32 w-0.5 h-12 bg-gray-700 rounded-l" />
          <div className="absolute -right-0.5 top-28 w-0.5 h-12 bg-gray-700 rounded-r" />
        </div>

        {/* Phone shadow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
          <div className={`w-full h-full bg-gradient-to-br ${color} rounded-[2.5rem]`} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 -z-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full animate-float"
              style={{
                background: ["#06b6d4", "#3b82f6", "#8b5cf6"][i % 3],
                top: `${20 + Math.random() * 60}%`,
                left: `${-20 + Math.random() * 140}%`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: `0 0 8px ${["#06b6d4", "#3b82f6", "#8b5cf6"][i % 3]}`,
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
