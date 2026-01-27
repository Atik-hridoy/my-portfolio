"use client";

import { useEffect, useRef } from "react";

type Options = {
  onEnter: (id: string) => void;
  threshold?: number;
  rootMargin?: string;
};

export function useSectionObserver({ 
  onEnter, 
  threshold = 0.5, 
  rootMargin = "-20% 0px -20% 0px" 
}: Options) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll-based detection for active section
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-observe='section']");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let closestSection: HTMLElement | null = null;
      let minDistance = Infinity;

      sections.forEach((section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionMiddle = sectionTop + rect.height / 2;
        const distance = Math.abs(scrollPosition - sectionMiddle);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection !== null) {
        const sectionElement = closestSection as HTMLElement;
        const id = sectionElement.getAttribute("id");
        if (id) {
          onEnter(id);
        }
      }
    };

    // IntersectionObserver for animations
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            node.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin }
    );

    const sections = document.querySelectorAll<HTMLElement>("[data-observe='section']");
    sections.forEach(s => observerRef.current?.observe(s));

    // Use scroll event for active section detection
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onEnter, threshold, rootMargin]);
}
