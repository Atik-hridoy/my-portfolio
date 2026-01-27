"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TechStack } from "../ui/TechStack";

type Project = {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  repo?: string;
  image?: string;
  color?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !mediaRef.current) return;

    const card = cardRef.current;
    const media = mediaRef.current;

    // 3D hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      gsap.to(media, {
        x: (x - centerX) / 10,
        y: (y - centerY) / 10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(media, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const bgColor = project.color || "from-cyan-500/10 via-blue-500/10 to-purple-500/10";

  return (
    <div
      ref={cardRef}
      data-gsap-card
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="h-full relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
        {/* 3D Media Display */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-background/50 to-background">
          <div
            ref={mediaRef}
            className={`absolute inset-0 bg-gradient-to-br ${bgColor} flex items-center justify-center`}
            style={{ transform: "translateZ(50px)" }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.role}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 3D Placeholder with animated shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Rotating cube wireframe */}
                    <div className="cube-container">
                      <div className="cube">
                        <div className="cube-face front"></div>
                        <div className="cube-face back"></div>
                        <div className="cube-face right"></div>
                        <div className="cube-face left"></div>
                        <div className="cube-face top"></div>
                        <div className="cube-face bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-float"
                      style={{
                        background: ["#06b6d4", "#3b82f6", "#8b5cf6"][i % 3],
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.2}s`,
                        boxShadow: `0 0 10px ${["#06b6d4", "#3b82f6", "#8b5cf6"][i % 3]}`,
                      }}
                    />
                  ))}
                </div>

                {/* Project icon/text */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-20">
                    {project.role.charAt(0)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-muted-foreground">
                  {project.year}
                </span>
                <div className="h-1 w-1 rounded-full bg-primary/50" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.role}
                </h3>
              </div>
              <div className="text-muted-foreground">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 flex items-center gap-1 w-fit"
                  >
                    {project.company}
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  project.company
                )}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <TechStack tech={project.tech} />
        </div>
      </div>

      <style jsx>{`
        .cube-container {
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .cube {
          width: 120px;
          height: 120px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 20s infinite linear;
          margin: 0 auto;
        }

        .cube-face {
          position: absolute;
          width: 120px;
          height: 120px;
          border: 2px solid;
          border-image: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6) 1;
          opacity: 0.3;
          background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
          background-clip: padding-box;
          backdrop-filter: blur(10px);
        }

        .front {
          transform: rotateY(0deg) translateZ(60px);
        }
        .back {
          transform: rotateY(180deg) translateZ(60px);
        }
        .right {
          transform: rotateY(90deg) translateZ(60px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(60px);
        }
        .top {
          transform: rotateX(90deg) translateZ(60px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(60px);
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

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
