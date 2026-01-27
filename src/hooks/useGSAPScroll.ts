"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScroll() {
  useEffect(() => {
    // Detect mobile device
    const isMobile = window.innerWidth < 768;
    
    // Optimize for mobile performance
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // Mobile-optimized animations (simpler, faster)
    if (isMobile) {
      // Simple fade-in for all sections on mobile
      const sections = gsap.utils.toArray<HTMLElement>("[data-observe='section']");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true, // Only animate once for better performance
            },
          }
        );
      });

      // Simple fade for cards on mobile
      const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Simple fade for headings on mobile
      const headings = gsap.utils.toArray<HTMLElement>("[data-gsap-heading]");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    // Desktop animations (more complex, smoother)
    // 1. INTRO SECTION
    const introSection = document.querySelector("#intro");
    if (introSection) {
      gsap.fromTo(
        introSection,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introSection,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // 2. EXPERIENCE SECTION
    const experienceSection = document.querySelector("#experience");
    if (experienceSection) {
      gsap.fromTo(
        experienceSection,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: experienceSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // 3. WORK SECTION
    const workSection = document.querySelector("#work");
    if (workSection) {
      gsap.fromTo(
        workSection,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: workSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // 4. SKILLS SECTION
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      gsap.fromTo(
        skillsSection,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // 5. THOUGHTS SECTION
    const thoughtsSection = document.querySelector("#thoughts");
    if (thoughtsSection) {
      gsap.fromTo(
        thoughtsSection,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: thoughtsSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // 6. CONNECT SECTION
    const connectSection = document.querySelector("#connect");
    if (connectSection) {
      gsap.fromTo(
        connectSection,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: connectSection,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Cards with stagger
    const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    // Items with alternating directions
    const items = gsap.utils.toArray<HTMLElement>("[data-gsap-item]");
    items.forEach((item, index) => {
      const fromLeft = index % 2 === 0;
      gsap.fromTo(
        item,
        { opacity: 0, x: fromLeft ? -40 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    // Headings
    const headings = gsap.utils.toArray<HTMLElement>("[data-gsap-heading]");
    headings.forEach((heading, index) => {
      const animations = [
        { opacity: 0, y: 30 },
        { opacity: 0, x: -30 },
        { opacity: 0, scale: 0.95 },
        { opacity: 0, x: 30 },
      ];

      const fromVars = animations[index % animations.length];

      gsap.fromTo(
        heading,
        fromVars,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
