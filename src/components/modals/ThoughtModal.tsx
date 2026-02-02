"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Thought = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
};

type ThoughtModalProps = {
  thought: Thought | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ThoughtModal({ thought, isOpen, onClose }: ThoughtModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      // Animate overlay
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate modal
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      });
    }
  };

  if (!isOpen || !thought) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card/98 border border-border/50 rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300 group"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-primary font-mono tracking-wide">
              <span>{thought.date}</span>
              <span>•</span>
              <span>{thought.readTime}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {thought.title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {thought.excerpt}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Article content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              {thought.content ||
                `Mobile app development has evolved significantly over the past few years. 
                With the rise of cross-platform frameworks and improved native tooling, 
                developers now have more choices than ever when building mobile applications.
                
                In this article, we'll explore the key considerations when choosing between 
                different mobile development approaches, including performance implications, 
                developer experience, and long-term maintainability.
                
                Whether you're building a simple utility app or a complex enterprise solution, 
                understanding these trade-offs is crucial for making informed technical decisions 
                that align with your project goals and team capabilities.
                
                Let's dive into the details and examine what makes each approach unique, 
                along with real-world examples and performance benchmarks from production applications.`}
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Key Takeaways
            </h3>

            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Choose the right framework based on your team's expertise and
                  project requirements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Performance optimization should be considered from day one,
                  not as an afterthought
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  User experience is paramount - technical choices should
                  support this goal
                </span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="text-sm text-foreground/80 italic">
                "The best mobile app is one that users don't have to think
                about - it just works, feels natural, and gets out of their
                way."
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Written by Atik Hridoy
              </div>
              <div className="flex gap-3">
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <svg
                    className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <svg
                    className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
