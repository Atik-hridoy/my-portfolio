"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CodingAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Head bobbing
    gsap.to(".avatar-head", {
      y: -2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Blinking
    gsap.to(".avatar-eye", {
      scaleY: 0.1,
      duration: 0.15,
      repeat: -1,
      repeatDelay: 4,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Typing animation
    const typingTl = gsap.timeline({ repeat: -1 });
    typingTl
      .to(".hand-left", { y: 3, duration: 0.2, ease: "power1.out" })
      .to(".hand-left", { y: 0, duration: 0.2, ease: "power1.in" })
      .to(".hand-right", { y: 3, duration: 0.2, ease: "power1.out" }, "-=0.15")
      .to(".hand-right", { y: 0, duration: 0.2, ease: "power1.in" })
      .to(".hand-left", { y: 3, duration: 0.2, ease: "power1.out" }, "-=0.1")
      .to(".hand-left", { y: 0, duration: 0.2, ease: "power1.in" });

    // Screen glow
    gsap.to(".screen-glow", {
      opacity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Code lines
    const codeLines = containerRef.current.querySelectorAll(".code-line");
    gsap.fromTo(
      codeLines,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.8,
        repeat: -1,
        repeatDelay: 3,
        ease: "power2.out",
      }
    );

    // Floating
    gsap.to(containerRef.current, {
      y: -8,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Coffee steam
    gsap.to(".steam", {
      y: -15,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.5,
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-12 right-12 z-30 hidden lg:block"
    >
      <div className="relative">
        <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />

        <svg
          width="180"
          height="200"
          viewBox="0 0 180 200"
          className="relative z-10 drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          <rect x="20" y="150" width="140" height="8" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="2" />
          <rect x="70" y="120" width="40" height="35" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="4" />
          <ellipse cx="90" cy="110" rx="22" ry="28" fill="url(#shirtGrad)" stroke="#2563eb" strokeWidth="1" />
          <rect x="85" y="80" width="10" height="8" fill="url(#skinGrad)" rx="2" />

          <g className="avatar-head">
            <ellipse cx="90" cy="60" rx="24" ry="28" fill="url(#skinGrad)" stroke="#f59e0b" strokeWidth="1" />
            <ellipse cx="90" cy="45" rx="25" ry="18" fill="url(#hairGrad)" />
            <path d="M 65 50 Q 70 35 90 32 Q 110 35 115 50" fill="url(#hairGrad)" />
            <ellipse cx="68" cy="60" rx="4" ry="6" fill="#f59e0b" />
            <ellipse cx="112" cy="60" rx="4" ry="6" fill="#f59e0b" />
            <rect x="72" y="56" width="14" height="11" fill="none" stroke="#06b6d4" strokeWidth="1.5" rx="3" opacity="0.9" />
            <rect x="94" y="56" width="14" height="11" fill="none" stroke="#06b6d4" strokeWidth="1.5" rx="3" opacity="0.9" />
            <line x1="86" y1="61" x2="94" y2="61" stroke="#06b6d4" strokeWidth="1.5" />
            <ellipse className="avatar-eye" cx="79" cy="61" rx="2.5" ry="3" fill="#0f172a" />
            <ellipse className="avatar-eye" cx="101" cy="61" rx="2.5" ry="3" fill="#0f172a" />
            <circle cx="80" cy="60" r="1" fill="#fff" opacity="0.8" />
            <circle cx="102" cy="60" r="1" fill="#fff" opacity="0.8" />
            <line x1="90" y1="65" x2="90" y2="70" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
            <path d="M 82 75 Q 90 78 98 75" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          <path d="M 70 100 Q 60 110 55 130" fill="none" stroke="url(#shirtGrad)" strokeWidth="8" strokeLinecap="round" />
          <ellipse className="hand-left" cx="55" cy="135" rx="6" ry="8" fill="url(#skinGrad)" stroke="#f59e0b" strokeWidth="0.5" />
          <path d="M 110 100 Q 120 110 125 130" fill="none" stroke="url(#shirtGrad)" strokeWidth="8" strokeLinecap="round" />
          <ellipse className="hand-right" cx="125" cy="135" rx="6" ry="8" fill="url(#skinGrad)" stroke="#f59e0b" strokeWidth="0.5" />
          <rect x="40" y="145" width="100" height="5" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="2" />
          <rect x="50" y="120" width="80" height="25" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="2" />
          <rect className="screen-glow" x="54" y="124" width="72" height="17" fill="url(#screenGrad)" opacity="0.4" rx="1" />
          <line x1="58" y1="128" x2="75" y2="128" stroke="#06b6d4" strokeWidth="1" opacity="0.8" />
          <line x1="58" y1="132" x2="85" y2="132" stroke="#3b82f6" strokeWidth="1" opacity="0.8" />
          <line x1="58" y1="136" x2="70" y2="136" stroke="#a855f7" strokeWidth="1" opacity="0.8" />
          <rect x="145" y="140" width="12" height="15" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1" rx="1" />
          <ellipse cx="151" cy="140" rx="6" ry="2" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1" />
          <path className="steam" d="M 148 135 Q 147 130 148 125" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
          <path className="steam" d="M 151 135 Q 152 130 151 125" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
          <path className="steam" d="M 154 135 Q 155 130 154 125" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
        </svg>

        <div className="absolute -left-32 top-20 space-y-2 pointer-events-none">
          <div className="code-line text-xs font-mono text-cyan-400 opacity-0">
            <span className="text-purple-400">const</span> dev = <span className="text-green-400">"Atik"</span>;
          </div>
          <div className="code-line text-xs font-mono text-blue-400 opacity-0">
            <span className="text-pink-400">function</span> <span className="text-yellow-400">code</span>() {"{"}
          </div>
          <div className="code-line text-xs font-mono text-purple-400 opacity-0">
            &nbsp;&nbsp;<span className="text-cyan-400">return</span> <span className="text-green-400">"magic"</span>;
          </div>
          <div className="code-line text-xs font-mono text-cyan-400 opacity-0">
            {"}"}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: ["#06b6d4", "#3b82f6", "#a855f7"][i % 3],
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `ping 3s cubic-bezier(0, 0, 0.2, 1) infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
