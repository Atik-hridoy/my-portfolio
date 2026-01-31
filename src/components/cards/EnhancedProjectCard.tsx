"use client";

import { useRef, useState, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { TechPill } from "@/components/pills/TechPill";

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

type EnhancedProjectCardProps = {
  job: Job;
  index: number;
};

export function EnhancedProjectCard({ job, index }: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedImageId, setExpandedImageId] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!job.images || job.images.length <= 1) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - next image
        setExpandedImageId((prev) => (prev + 1) % job.images!.length);
      } else {
        // Swiped right - previous image
        setExpandedImageId((prev) => (prev - 1 + job.images!.length) % job.images!.length);
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Simplified background glow */}
      <div
        className="absolute -inset-0.5 opacity-30 md:opacity-0 md:group-hover:opacity-50 blur-lg transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{
          background: job.gradient,
        }}
      />

      {/* Main card */}
      <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 md:hover:border-zinc-700 rounded-2xl overflow-hidden transition-colors duration-300 h-full flex flex-col">

        <div className="relative p-5 sm:p-6 flex flex-col h-full">
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

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-400 md:group-hover:to-purple-500 transition-all duration-300">
                {job.role}
              </h3>

              <p className="text-zinc-400 text-sm font-medium flex items-center gap-1.5">
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
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tech.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>

          {/* Expandable Image Cards - Simplified */}
          {job.images && job.images.length > 0 && (
            <div 
              className="relative mb-4 h-[280px] rounded-xl overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex gap-2 w-full h-full">
                {job.images.map((img, idx) => {
                  const isExpanded = expandedImageId === idx;
                  
                  return (
                    <div
                      key={idx}
                      className="relative h-full overflow-hidden rounded-xl cursor-pointer border border-zinc-800 transition-all duration-300 ease-out"
                      style={{
                        flex: isExpanded ? 3 : 1,
                      }}
                      onMouseEnter={() => setExpandedImageId(idx)}
                      onClick={() => setExpandedImageId(idx)}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={img}
                          alt={`${job.role} screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={75}
                        />
                      </div>

                      {/* Overlay on non-expanded */}
                      {!isExpanded && (
                        <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-200" />
                      )}

                      {/* Image number indicator */}
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{idx + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Swipe indicator for mobile */}
              <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                {job.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      expandedImageId === idx
                        ? 'bg-cyan-500 w-4'
                        : 'bg-zinc-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Footer with animated line */}
          <div className="relative pt-4 border-t border-zinc-800 mt-auto">
            <div
              className="absolute top-0 left-0 h-0.5 transition-all duration-300 ease-out w-full md:w-0 md:group-hover:w-full"
              style={{
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
  );
}
