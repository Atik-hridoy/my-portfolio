"use client";

import { useEffect, useRef } from "react";

type Options = {
  onEnter: (id: string) => void;
  threshold?: number;
  rootMargin?: string;
};

export function useSectionObserver({ onEnter, threshold = 0.3, rootMargin = "0px 0px -20% 0px" }: Options) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            node.classList.add("animate-fade-in-up");
            const id = node.getAttribute("id");
            if (id) onEnter(id);
          }
        });
      },
      { threshold, rootMargin }
    );

    const sections = document.querySelectorAll<HTMLElement>("[data-observe='section']");
    sections.forEach(s => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, [onEnter, threshold, rootMargin]);
}
