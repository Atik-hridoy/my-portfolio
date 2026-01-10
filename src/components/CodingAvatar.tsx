"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CODE_LINES = [
  "const developer = {",
  "  name: 'Atik Hridoy',",
  "  role: 'Mobile Developer',",
  "  skills: [",
  "    'Flutter',",
  "    'React Native',",
  "    'Firebase',",
  "    'TypeScript'",
  "  ],",
  "  passion: 'Building Apps',",
  "  status: 'Available ✓'",
  "};",
  "",
  "// Creating magic...",
  "function buildTheFuture() {",
  "  return code + creativity;",
  "}",
];

export function CodingAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(".avatar-head", {
      y: -2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".avatar-eye", {
      scaleY: 0.1,
      duration: 0.15,
      repeat: -1,
      repeatDelay: 4,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(containerRef.current, {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".particle", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    gsap.to(".glass-board", {
      opacity: 0.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".glass-glow", {
      opacity: 0.7,
      scale: 1.02,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".holo-line", {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) {
      const resetTimer = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const line = CODE_LINES[currentLine];

    if (currentChar < line.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedCode((prev) => {
          const newCode = [...prev];
          if (!newCode[currentLine]) {
            newCode[currentLine] = "";
          }
          newCode[currentLine] = line.substring(0, currentChar + 1);
          return newCode;
        });
        setCurrentChar((prev) => prev + 1);

        const handElement = document.querySelector(".writing-hand");
        if (handElement) {
          const charPosition = currentChar * 4.5;
          const lineOffset = currentLine * 14;

          gsap.to(handElement, {
            x: charPosition,
            y: lineOffset - 45,
            duration: 0.08,
            ease: "power1.out",
          });
        }
      }, 80);

      return () => clearTimeout(typingTimer);
    } else {
      const nextLineTimer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);

        const handElement = document.querySelector(".writing-hand");
        if (handElement) {
          gsap.to(handElement, {
            x: 0,
            y: (currentLine + 1) * 14 - 45,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      }, 200);

      return () => clearTimeout(nextLineTimer);
    }
  }, [currentChar, currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-20 right-20 z-30 hidden xl:block"
    >
      <div className="relative">
        <div className="absolute -inset-16 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full animate-pulse" />

        <svg
          width="320"
          height="360"
          viewBox="0 0 320 360"
          className="relative z-10 drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="100%" stopColor="#c89968" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f0f0f" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glassBlur">
              <feGaussianBlur stdDeviation="1" />
            </filter>
          </defs>

          {/* Holographic Glass Board */}
          <g transform="translate(160, 120)">
            <rect
              className="glass-board"
              x="-100"
              y="-60"
              width="200"
              height="220"
              fill="url(#glassGrad)"
              stroke="#06b6d4"
              strokeWidth="1.5"
              rx="12"
              opacity="0.25"
              filter="url(#glassBlur)"
            />

            <rect
              className="glass-glow"
              x="-98"
              y="-58"
              width="196"
              height="216"
              fill="none"
              stroke="url(#glassGrad)"
              strokeWidth="0.5"
              rx="11"
              opacity="0.6"
            />

            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                className="holo-line"
                x1="-90"
                y1={-50 + i * 30}
                x2="90"
                y2={-50 + i * 30}
                stroke={["#06b6d4", "#3b82f6", "#8b5cf6"][i % 3]}
                strokeWidth="0.3"
                opacity="0.3"
                strokeDasharray="180"
                strokeDashoffset="180"
              />
            ))}

            {displayedCode.map((line, index) => {
              const colors = ["#06b6d4", "#3b82f6", "#8b5cf6", "#10b981"];
              const color = colors[index % colors.length];
              return (
                <text
                  key={index}
                  x="-90"
                  y={-45 + index * 14}
                  fill={color}
                  fontSize="8"
                  fontFamily="'Courier New', monospace"
                  fontWeight="500"
                  opacity="0.95"
                  filter="url(#glow)"
                >
                  {line}
                  {index === currentLine && showCursor && (
                    <tspan fill={color} opacity="1" fontWeight="bold">
                      |
                    </tspan>
                  )}
                </text>
              );
            })}

            <circle cx="-90" cy="-50" r="2" fill="#06b6d4" opacity="0.8" />
            <circle cx="90" cy="-50" r="2" fill="#3b82f6" opacity="0.8" />
            <circle cx="-90" cy="150" r="2" fill="#8b5cf6" opacity="0.8" />
            <circle cx="90" cy="150" r="2" fill="#10b981" opacity="0.8" />

            <path
              d="M -95 -55 L -85 -55 M -95 -55 L -95 -45"
              stroke="#06b6d4"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
            <path
              d="M 95 -55 L 85 -55 M 95 -55 L 95 -45"
              stroke="#06b6d4"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
            <path
              d="M -95 155 L -85 155 M -95 155 L -95 145"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
            <path
              d="M 95 155 L 85 155 M 95 155 L 95 145"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
          </g>

          {/* Modern Avatar */}
          <g transform="translate(160, 220)">
            <ellipse
              cx="0"
              cy="35"
              rx="45"
              ry="50"
              fill="url(#shirtGrad)"
              stroke="#374151"
              strokeWidth="1"
            />

            <rect x="-10" y="0" width="20" height="18" fill="url(#skinGrad)" rx="4" />

            <g className="avatar-head">
              <ellipse
                cx="0"
                cy="-20"
                rx="32"
                ry="38"
                fill="url(#skinGrad)"
                stroke="#c89968"
                strokeWidth="0.5"
              />

              <ellipse cx="0" cy="-42" rx="34" ry="24" fill="url(#hairGrad)" />
              <path
                d="M -30 -30 Q -25 -50 0 -54 Q 25 -50 30 -30"
                fill="url(#hairGrad)"
              />
              <circle cx="-15" cy="-45" r="4" fill="#0a0a0a" opacity="0.8" />
              <circle cx="0" cy="-48" r="4" fill="#0a0a0a" opacity="0.8" />
              <circle cx="15" cy="-45" r="4" fill="#0a0a0a" opacity="0.8" />
              <circle cx="-8" cy="-42" r="3" fill="#0a0a0a" opacity="0.7" />
              <circle cx="8" cy="-42" r="3" fill="#0a0a0a" opacity="0.7" />

              <ellipse cx="-30" cy="-20" rx="5" ry="8" fill="#c89968" />
              <ellipse cx="30" cy="-20" rx="5" ry="8" fill="#c89968" />

              <circle
                cx="-12"
                cy="-22"
                r="10"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity="0.9"
              />
              <circle
                cx="12"
                cy="-22"
                r="10"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity="0.9"
              />
              <line
                x1="-2"
                y1="-22"
                x2="2"
                y2="-22"
                stroke="#06b6d4"
                strokeWidth="2"
              />
              <circle cx="-12" cy="-22" r="10" fill="#fff" opacity="0.1" />
              <circle cx="12" cy="-22" r="10" fill="#fff" opacity="0.1" />

              <ellipse
                className="avatar-eye"
                cx="-12"
                cy="-22"
                rx="3.5"
                ry="4"
                fill="#1a1a1a"
              />
              <ellipse
                className="avatar-eye"
                cx="12"
                cy="-22"
                rx="3.5"
                ry="4"
                fill="#1a1a1a"
              />

              <circle cx="-11" cy="-23" r="1.5" fill="#fff" opacity="0.9" />
              <circle cx="13" cy="-23" r="1.5" fill="#fff" opacity="0.9" />

              <path
                d="M 0 -15 L 0 -8 M -2 -8 L 2 -8"
                stroke="#b8845a"
                strokeWidth="1.5"
                opacity="0.6"
                strokeLinecap="round"
              />

              <path
                d="M -10 -2 Q 0 2 10 -2"
                fill="none"
                stroke="#8b6f47"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            <g className="writing-hand">
              <path
                d="M 35 30 Q 60 15 85 -25"
                fill="none"
                stroke="url(#shirtGrad)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <ellipse
                cx="88"
                cy="-28"
                rx="8"
                ry="10"
                fill="url(#skinGrad)"
                stroke="#c89968"
                strokeWidth="0.5"
                transform="rotate(-25 88 -28)"
              />

              <path
                d="M 90 -30 L 98 -35"
                stroke="url(#skinGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <line
                x1="98"
                y1="-35"
                x2="108"
                y2="-42"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
              />
              <circle
                cx="108"
                cy="-42"
                r="3"
                fill="#06b6d4"
                opacity="0.9"
                filter="url(#glow)"
              />
              <circle
                cx="108"
                cy="-42"
                r="6"
                fill="#06b6d4"
                opacity="0.3"
                filter="url(#glow)"
              />
            </g>

            <path
              d="M -35 30 Q -50 40 -55 65"
              fill="none"
              stroke="url(#shirtGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <ellipse
              cx="-55"
              cy="68"
              rx="8"
              ry="10"
              fill="url(#skinGrad)"
              stroke="#c89968"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 3}px`,
                height: `${3 + Math.random() * 3}px`,
                background: ["#06b6d4", "#3b82f6", "#8b5cf6", "#10b981"][i % 4],
                top: `${25 + Math.random() * 50}%`,
                left: `${40 + Math.random() * 40}%`,
                opacity: 0.4 + Math.random() * 0.4,
                boxShadow: `0 0 ${8 + Math.random() * 8}px ${
                  ["#06b6d4", "#3b82f6", "#8b5cf6", "#10b981"][i % 4]
                }`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 right-0 w-40 h-40 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${i * 16}%`,
                width: "100%",
                animation: `scan ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-15px) translateX(10px);
            }
          }
          @keyframes scan {
            0%,
            100% {
              opacity: 0.2;
              transform: translateX(0);
            }
            50% {
              opacity: 0.6;
              transform: translateX(20px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
