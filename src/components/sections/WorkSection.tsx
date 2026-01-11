"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { JobItem } from "../items/JobItem";
import { PhoneMockup } from "../ui/PhoneMockup";

const JOBS = [
  {
    year: "2025",
    role: "Gift Moment",
    company: "Premium Gifting App",
    description:
      "A premium, aesthetically driven Flutter application for modern gifting experiences. Features glassmorphism design, dynamic gradients, advanced chat system with voice messages, gift cards, and occasion-based browsing. Built with flutter_screenutil for responsive layouts.",
    tech: ["Flutter", "Dart", "Firebase", ],
    repo: "https://github.com/Atik-hridoy/gift-moment",
    color: "from-pink-400 via-rose-300 to-orange-200",
    images: [
      "/projects/gift_moment/1.png",
      "/projects/gift_moment/2.png",
      "/projects/gift_moment/3.png",
      "/projects/gift_moment/4.png",
    ],
  },
  {
    year: "2025",
    role: "Dating App",
    company: "Kindered App",
    description:
      "Developed a modern dating application with a beautiful UI, real-time features, and smooth animations using Flutter and GetX state management. Implemented user authentication, profile management, and location-based matching.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    repo: "https://github.com/Atik-hridoy/kindered_app",
    color: "from-pink-500 via-rose-500 to-red-500",
    images: [
      "/projects/dating-app-1.png",
      "/projects/dating-app-2.png",
      "/projects/dating-app-3.png",
    ],
  },
  {
    year: "2025",
    role: "Hpayy Shopping",
    company: "Elecktro E-commerce",
    description:
      "Developed a cross-platform e-commerce app with product catalog, shopping cart, and user profile features. Implemented responsive design with dark/light theme support and multi-language localization.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/Atik-hridoy/elecktro-ecommerce",
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    images: [
      "/projects/hpayy-shopping-1.png",
      "/projects/hpayy-shopping-2.png",
      "/projects/hpayy-shopping-3.png",
    ],
  },
  {
    year: "2022",
    role: "Vendor App",
    company: "ElectroNic Seller",
    description:
      "Developed a Flutter-based electronics marketplace app with product listings, search functionality, and user authentication.",
    tech: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/Atik-hridoy/electroNic_seller",
    color: "from-purple-500 via-violet-500 to-fuchsia-500",
    images: [
      "/projects/vendor-app-1.png",
      "/projects/vendor-app-2.png",
      "/projects/vendor-app-3.png",
    ],
  },
];

export function WorkSection() {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [showPhone, setShowPhone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Observe section visibility
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowPhone(true);
          } else {
            setShowPhone(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // Animate phone appearance with flying effect
  useEffect(() => {
    if (!phoneRef.current) return;

    if (showPhone) {
      // Flying in from right - like paper plane
      gsap.fromTo(
        phoneRef.current,
        {
          scale: 0.3,
          opacity: 0,
          x: 200,
          y: -100,
          rotation: 45,
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    } else {
      // Flying out to right - like paper plane leaving
      gsap.to(phoneRef.current, {
        scale: 0.3,
        opacity: 0,
        x: 200,
        y: 100,
        rotation: -45,
        duration: 0.8,
        ease: "power2.in",
      });
    }
  }, [showPhone]);

  const handleProjectInView = (index: number) => {
    setActiveProject(index);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      data-observe="section"
      data-gsap-section
      className="min-h-screen py-20 sm:py-32 relative"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            data-gsap-heading
            className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Selected <span className="font-semibold">Projects</span>
          </h2>
          <div
            data-gsap-heading
            className="text-sm text-muted-foreground font-mono"
          >
            2020 — 2025
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {JOBS.map((job, index) => (
            <JobItem
              key={`${job.year}-${job.role}`}
              job={job}
              index={index}
              onHover={handleProjectInView}
            />
          ))}
        </div>
      </div>

      {/* Phone mockup - fixed position, always rendered */}
      <div
        ref={phoneRef}
        className="hidden xl:block fixed -right-64 top-1/2 -translate-y-1/2 z-20"
        style={{ opacity: 0, transform: "scale(0)" }}
      >
        <PhoneMockup
          color={JOBS[activeProject].color}
          projectName={JOBS[activeProject].role}
          techStack={JOBS[activeProject].tech}
          images={JOBS[activeProject].images}
          isVisible={showPhone}
        />
      </div>
    </section>
  );
}
