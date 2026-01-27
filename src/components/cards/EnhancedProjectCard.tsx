"use client";

import { useRef, useState, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { TechPill } from "@/components/pills/TechPill";
import { motion } from "framer-motion";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered
          ? `perspective(1000px) rotateX(${(mousePosition.y - 50) / 20}deg) rotateY(${(mousePosition.x - 50) / 20}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Animated background glow */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-2xl"
        style={{
          background: job.gradient,
        }}
      />

      {/* Main card */}
      <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-zinc-700 h-full flex flex-col">
        {/* Spotlight effect */}
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.1), transparent 40%)`,
              width: "100%",
              height: "100%",
            }}
          />
        )}

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

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
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

          {/* Expandable Image Cards */}
          {job.images && job.images.length > 0 && (
            <div className="relative mb-4 h-[300px] rounded-xl overflow-hidden">
              <div className="flex gap-2 w-full h-full">
                {job.images.map((img, idx) => {
                  const isExpanded = expandedImageId === idx;
                  
                  return (
                    <motion.div
                      key={idx}
                      className="relative h-full overflow-hidden rounded-xl cursor-pointer border border-zinc-800"
                      initial={{ flex: isExpanded ? 3 : 1 }}
                      animate={{ flex: isExpanded ? 3 : 1 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => setExpandedImageId(idx)}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={img}
                          alt={`${job.role} screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Overlay on non-expanded */}
                      {!isExpanded && (
                        <motion.div
                          className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      )}

                      {/* Image number indicator */}
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{idx + 1}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer with animated line */}
          <div className="relative pt-4 border-t border-zinc-800 mt-auto">
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
  );
}
