"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScroll() {
  useEffect(() => {
    // Smooth scroll setup with lenis-like effect
    gsap.config({
      force3D: true,
    });

    // 1. INTRO SECTION - Fade in from center with scale
    const introSection = document.querySelector("#intro");
    if (introSection) {
      gsap.fromTo(
        introSection,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introSection,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 2. EXPERIENCE SECTION - Slide from left with rotation
    const experienceSection = document.querySelector("#experience");
    if (experienceSection) {
      gsap.fromTo(
        experienceSection,
        {
          opacity: 0,
          x: -200,
          rotateY: -15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: experienceSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 3. WORK SECTION - Slide from right with blur effect
    const workSection = document.querySelector("#work");
    if (workSection) {
      gsap.fromTo(
        workSection,
        {
          opacity: 0,
          x: 200,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: workSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 4. SKILLS SECTION - Zoom in with circular reveal
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      gsap.fromTo(
        skillsSection,
        {
          opacity: 0,
          scale: 0.8,
          rotateZ: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          duration: 1.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 5. THOUGHTS SECTION - Slide up with wave effect
    const thoughtsSection = document.querySelector("#thoughts");
    if (thoughtsSection) {
      gsap.fromTo(
        thoughtsSection,
        {
          opacity: 0,
          y: 150,
          skewY: 3,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: thoughtsSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // 6. CONNECT SECTION - Fade in with elastic bounce
    const connectSection = document.querySelector("#connect");
    if (connectSection) {
      gsap.fromTo(
        connectSection,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: connectSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate cards with stagger (Thoughts cards)
    const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate items (experience, jobs) with alternating directions
    const items = gsap.utils.toArray<HTMLElement>("[data-gsap-item]");
    items.forEach((item, index) => {
      const fromLeft = index % 2 === 0;
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: fromLeft ? -100 : 100,
          rotateY: fromLeft ? -10 : 10,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.9,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect for headings with different animations per section
    const headings = gsap.utils.toArray<HTMLElement>("[data-gsap-heading]");
    headings.forEach((heading, index) => {
      const animations = [
        // Fade + slide up
        { opacity: 0, y: 60 },
        // Fade + slide from left
        { opacity: 0, x: -60 },
        // Fade + scale
        { opacity: 0, scale: 0.8 },
        // Fade + slide from right
        { opacity: 0, x: 60 },
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
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none reverse",
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
