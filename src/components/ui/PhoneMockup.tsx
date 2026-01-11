"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type PhoneMockupProps = {
  color: string;
  projectName: string;
  techStack: string[];
  images?: string[];
  isVisible: boolean;
};

export function PhoneMockup({ color, projectName, techStack, images, isVisible }: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    
    // Reset image index when project changes
    setCurrentImageIndex(0);
  }, [projectName, color]);

  // Auto-slide images
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

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
          transform: "rotateY(-8deg) rotateX(5deg)",
        }}
      >
        {/* Phone frame with metallic edges */}
        <div className="relative w-[200px] h-[400px] rounded-[2.2rem] p-[2px]"
          style={{
            background: "linear-gradient(135deg, #4a5568 0%, #1a202c 50%, #2d3748 100%)",
            boxShadow: `
              0 30px 80px rgba(0, 0, 0, 0.9),
              0 15px 40px rgba(0, 0, 0, 0.7),
              0 5px 15px rgba(0, 0, 0, 0.5),
              inset 0 1px 3px rgba(255, 255, 255, 0.3),
              inset 0 -1px 3px rgba(0, 0, 0, 0.8)
            `,
            transform: "translateZ(20px)",
          }}
        >
          {/* Inner frame */}
          <div className="relative w-full h-full bg-black rounded-[2rem] p-2"
            style={{
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.9)",
            }}
          >
          {/* Notch with metallic shine */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-3xl z-10"
            style={{
              boxShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                inset 0 1px 1px rgba(255, 255, 255, 0.1)
              `,
            }}
          />

          {/* Screen */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-950 to-black rounded-[1.8rem] overflow-hidden"
            style={{
              boxShadow: `
                inset 0 2px 8px rgba(0, 0, 0, 0.8),
                inset 0 0 2px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            {/* Screen glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 animate-pulse`} />

            {/* App content placeholder */}
            <div className="phone-content relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-black">
              {images && images.length > 0 ? (
                /* Display project images carousel */
                <div className="relative w-full h-full">
                  {images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt={`${projectName} ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Image indicators */}
                  {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? 'bg-white w-4'
                              : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Colorful fallback screen when no images */
                <div className="relative w-full h-full overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 animate-pulse`} />
                  
                  {/* Floating shapes */}
                  <div className="absolute inset-0">
                    <div className={`absolute top-10 left-5 w-20 h-20 rounded-full bg-gradient-to-br ${color} opacity-40 blur-xl animate-float`} />
                    <div className={`absolute bottom-20 right-8 w-16 h-16 rounded-full bg-gradient-to-br ${color} opacity-30 blur-lg animate-float`} style={{ animationDelay: '0.5s' }} />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl animate-pulse`} />
                  </div>

                  {/* Status bar */}
                  <div className="absolute top-5 left-0 right-0 px-5 flex justify-between text-white text-[9px] z-10">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2 border border-white/70 rounded-sm" />
                      <div className="w-0.5 h-2 bg-white/70 rounded-sm" />
                    </div>
                  </div>

                  {/* App preview */}
                  <div className="relative flex-1 flex flex-col items-center justify-center space-y-4 mt-5 z-10">
                    {/* Large app icon with glow */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} blur-2xl opacity-60 animate-pulse`} />
                      <div className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center border border-white/30">
                        <span className="text-3xl font-bold text-white drop-shadow-lg">
                          {projectName.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* App name with glow */}
                    <div className="text-center space-y-2">
                      <h3 className="text-white font-bold text-sm drop-shadow-lg">
                        {projectName}
                      </h3>
                      <div className="flex gap-0.5 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 text-yellow-300 drop-shadow-md"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Glassmorphic UI cards */}
                    <div className="w-full space-y-2 px-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded-full z-10" />
                </div>
              )}
            </div>

            {/* Screen reflection - glass effect */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)",
              }}
            />
          </div>

          {/* Side buttons with metallic shine */}
          <div className="absolute -left-[3px] top-16 w-[3px] h-8 rounded-l"
            style={{
              background: "linear-gradient(to right, #2d3748, #4a5568, #2d3748)",
              boxShadow: "-2px 0 4px rgba(0, 0, 0, 0.8), inset 0 0 2px rgba(255, 255, 255, 0.2)",
              transform: "translateZ(2px)",
            }}
          />
          <div className="absolute -left-[3px] top-28 w-[3px] h-10 rounded-l"
            style={{
              background: "linear-gradient(to right, #2d3748, #4a5568, #2d3748)",
              boxShadow: "-2px 0 4px rgba(0, 0, 0, 0.8), inset 0 0 2px rgba(255, 255, 255, 0.2)",
              transform: "translateZ(2px)",
            }}
          />
          <div className="absolute -right-[3px] top-24 w-[3px] h-10 rounded-r"
            style={{
              background: "linear-gradient(to left, #2d3748, #4a5568, #2d3748)",
              boxShadow: "2px 0 4px rgba(0, 0, 0, 0.8), inset 0 0 2px rgba(255, 255, 255, 0.2)",
              transform: "translateZ(2px)",
            }}
          />
        </div>
        </div>

        {/* Dramatic shadow - multiple layers */}
        <div className="absolute inset-0 -z-10"
          style={{
            filter: "blur(50px)",
            opacity: 0.8,
            transform: "translateZ(-30px) translateY(30px) scale(0.9)",
          }}
        >
          <div className="w-full h-full bg-black rounded-[2.2rem]" />
        </div>

        {/* Colored glow shadow */}
        <div className="absolute inset-0 -z-20"
          style={{
            filter: "blur(60px)",
            opacity: 0.4,
            transform: "translateZ(-40px) translateY(40px) scale(0.85)",
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${color} rounded-[2.2rem]`} />
        </div>

        {/* Ground shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-12 -z-30"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)",
            filter: "blur(15px)",
            transform: "translateZ(-50px) translateY(40px)",
          }}
        />

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
