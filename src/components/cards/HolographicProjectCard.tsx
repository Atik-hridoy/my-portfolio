"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

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

type HolographicProjectCardProps = {
  job: Job;
  index: number;
};

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  ENTER_TRANSITION_MS: 180,
};

const clamp = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

export function HolographicProjectCard({ job, index }: HolographicProjectCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo(() => {
    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`,
      };

      for (const [k, v] of Object.entries(properties)) {
        wrap.style.setProperty(k, v as string);
      }
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      },
    };
  }, []);

  const getOffsets = (evt: React.PointerEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');

      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };

    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [tiltEngine]);

  const nextImage = () => {
    if (!job.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % job.images!.length);
  };

  const prevImage = () => {
    if (!job.images) return;
    setCurrentImageIndex((prev) => (prev === 0 ? job.images!.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div
        ref={wrapRef}
        className="holo-card-wrapper"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
      <div className="holo-behind" style={{ '--behind-glow-color': job.gradient } as React.CSSProperties} />
      
      <div
        ref={shellRef}
        className="holo-card-shell"
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <section className="holo-card">
          <div className="holo-inside" />
          <div className="holo-shine" />
          <div className="holo-glare" />
          
          <div className="holo-content">
            {/* Project Info */}
            <div className="holo-details">
              <div className="flex items-center gap-2 mb-3">
                <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}>
                  {job.year}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
              <p className="text-zinc-400 text-sm mb-4">{job.company}</p>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{job.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={job.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn"
                  style={{ pointerEvents: 'auto' }}
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </a>
                {job.images && job.images.length > 0 && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="holo-btn"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Preview
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

      {/* Image Preview Modal */}
      {isModalOpen && job.images && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
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
