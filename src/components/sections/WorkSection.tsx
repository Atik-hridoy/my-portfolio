"use client";

import { useState, useRef, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { EnhancedProjectCard } from "@/components/cards/EnhancedProjectCard";
import { SectionBackground } from "@/components/SectionBackground";

type Job = {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  repo: string;
  color: string;
  gradient: string;
  images?: string[];
};

const JOBS: Job[] = [
  {
    year: "2025",
    role: "Art Exhibition",
    company: "Digital Art Gallery",
    description:
      "An elegant Flutter application for showcasing and exploring digital art exhibitions. Features smooth animations, intuitive navigation, and a beautiful gallery interface for art enthusiasts.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/Atik-hridoy/Art_Exhibition",
    color: "from-amber-400 via-orange-400 to-red-400",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    images: [
      "/projects/tasaneeArt/Launch Screens.png",
      "/projects/tasaneeArt/Login.png",
      "/projects/tasaneeArt/Sign up.png",
      "/projects/tasaneeArt/Personal Information.png",
      "/projects/tasaneeArt/Collector Details.png",
      "/projects/tasaneeArt/saved.png",
    ],
  },
  {
    year: "2025",
    role: "Gift Moment",
    company: "Premium Gifting App",
    description:
      "A premium, aesthetically driven Flutter application for modern gifting experiences. Features glassmorphism design, dynamic gradients, advanced chat system with voice messages, gift cards, and occasion-based browsing.",
    tech: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/Atik-hridoy/gift-moment",
    color: "from-pink-400 via-rose-300 to-orange-200",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    images: [
      "/projects/dateing_app/Screenshot 2026-01-27 011722.png",
      "/projects/dateing_app/Screenshot 2026-01-27 011743.png",
      "/projects/dateing_app/Screenshot 2026-01-27 011811.png",
      "/projects/dateing_app/Screenshot 2026-01-27 011826.png",
      "/projects/dateing_app/Screenshot 2026-01-27 011841.png",
    ],
  },
  {
    year: "2025",
    role: "Happyy Shopping",
    company: "Elecktro E-commerce",
    description:
      "Developed a cross-platform e-commerce app with product catalog, shopping cart, and user profile features. Implemented responsive design with dark/light theme support and multi-language localization.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/Atik-hridoy/elecktro-ecommerce",
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    images: [
      "/projects/happy_sopping/Spatch.jpg",
      "/projects/happy_sopping/Spatchn.jpg",
      "/projects/happy_sopping/Home.jpg",
      "/projects/happy_sopping/Homee.jpg",
      "/projects/happy_sopping/Categories.jpg",
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
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    images: [
      "/projects/vendor/Screenshot 2026-01-27 103322.png",
      "/projects/vendor/Screenshot 2026-01-27 103828.png",
      "/projects/vendor/Screenshot 2026-01-27 103848.png",
    ],
  },
];

type ProjectCardProps = {
  job: Job;
  index: number;
};

function ProjectCard({ job, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const nextImage = () => {
    if (!job.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % job.images!.length);
  };

  const prevImage = () => {
    if (!job.images) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? job.images!.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Reset image index when hover starts
  useEffect(() => {
    if (isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full"
        style={{
          animationDelay: `${index * 100}ms`,
          perspective: '1000px',
        }}
      >
        {/* Animated background glow */}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-2xl"
          style={{
            background: job.gradient,
          }}
        />

        {/* Flip Container */}
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered && job.images && job.images.length > 0 ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side - Original Card */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-zinc-700 h-full flex flex-col">
              {/* Spotlight effect */}
              <div
                className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`,
                  width: "100%",
                  height: "100%",
                }}
              />

          <div className="relative p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}
                  >
                    {job.year}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {job.role}
                </h3>

                <p className="text-zinc-400 text-sm font-medium flex items-center gap-1.5">
                  <FaCode className="w-3.5 h-3.5" />
                  {job.company}
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href={job.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 group/icon"
                >
                  <FaGithub className="w-4 h-4 text-zinc-400 group-hover/icon:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed mb-4 text-sm">
              {job.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-4 ">
              {job.tech.map((tech, i) => (
                <div
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-300 hover:bg-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
                  style={{
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Footer with animated line */}
            <div className="relative pt-4 border-t border-zinc-800 grow">
              <div
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-500 ease-out"
                style={{
                  width: isHovered ? "100%" : "0%",
                  background: job.gradient,
                }}
              />

              <a
                href={job.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors group/link"
              >
                View Project
                <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back Side - Image Carousel */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="relative bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl overflow-hidden h-full flex flex-col">
          {/* Image Display */}
          <div className="relative flex-1 p-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-800">
              {job.images && job.images.length > 0 && (
                <Image
                  src={job.images[currentImageIndex]}
                  alt={`${job.role} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              )}
              
              {/* Navigation Arrows */}
              {job.images && job.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 hover:bg-black/80 transition-all z-10"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 hover:bg-black/80 transition-all z-10"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {job.images && job.images.length > 0 && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-zinc-700">
                  <span className="text-sm text-white font-medium">
                    {currentImageIndex + 1} / {job.images.length}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="p-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                <p className="text-sm text-zinc-400">{job.company}</p>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}>
                {job.year}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {job.images && job.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {job.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`relative flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx
                        ? 'border-cyan-500 ring-2 ring-cyan-500/50'
                        : 'border-zinc-700 hover:border-zinc-600 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* Full Screen Modal (Optional - Click to expand) */}
      {isExpanded && job.images && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors z-10"
            >
              <FaTimes className="w-5 h-5 text-zinc-400" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
              <p className="text-zinc-400">{job.company}</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main Image Display */}
              <div className="relative aspect-[9/16] max-h-[60vh] mx-auto rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src={job.images[currentImageIndex]}
                  alt={`${job.role} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              {job.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800/90 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 shadow-xl backdrop-blur-sm group"
                  >
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800/90 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 shadow-xl backdrop-blur-sm group"
                  >
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-zinc-800/90 backdrop-blur-sm border border-zinc-700">
                <span className="text-sm text-zinc-300 font-medium">
                  {currentImageIndex + 1} / {job.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {job.images.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {job.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === idx
                        ? 'border-cyan-500 ring-2 ring-cyan-500/50'
                        : 'border-zinc-700 hover:border-zinc-600 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const years = ["all", ...new Set(JOBS.map((job) => job.year))];

  const filteredJobs =
    activeFilter === "all"
      ? JOBS
      : JOBS.filter((job) => job.year === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          Math.max(
            (windowHeight - rect.top) / (windowHeight + sectionHeight),
            0
          ),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track carousel scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || filteredJobs.length === 0) return;

    const handleCarouselScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = window.innerWidth * 0.85 + 16; // 85vw + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(index, filteredJobs.length - 1));
    };

    carousel.addEventListener('scroll', handleCarouselScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleCarouselScroll);
  }, [filteredJobs]);

  return (
    <section
      id="work"
      data-observe="section"
      data-gsap-section
      className="py-20 sm:py-24 relative overflow-hidden "
    >
      <SectionBackground variant="work" />
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `scale(${1 + scrollProgress * 0.2})`,
            opacity: scrollProgress * 0.6,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            transform: `scale(${1 + scrollProgress * 0.2})`,
            opacity: scrollProgress * 0.6,
          }}
        />
      </div>

      <div className="relative space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col gap-4 px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                  Selected
                </span>
                <br />
                <span className="text-zinc-800 dark:text-white">Projects</span>
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-2xl">
                Mobile applications built with modern technologies and design
                principles.
              </p>
            </div>

            <div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
              2020 — 2025
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveFilter(year)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === year
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/20"
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 border border-zinc-700"
                }`}
              >
                {year === "all" ? "All Projects" : year}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid - 2 columns on desktop, swipeable carousel on mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 px-12">
          {filteredJobs.map((job, index) => (
            <EnhancedProjectCard
              key={`${job.year}-${job.role}`}
              job={job}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden relative">
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-scroll snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollPaddingLeft: '1rem',
            }}
          >
            {filteredJobs.map((job, index) => (
              <div 
                key={`${job.year}-${job.role}`}
                className="flex-shrink-0 w-[85vw] snap-center first:ml-4 last:mr-4"
              >
                <EnhancedProjectCard
                  job={job}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredJobs.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCardIndex === idx
                    ? 'w-8 bg-cyan-500'
                    : 'w-2 bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
