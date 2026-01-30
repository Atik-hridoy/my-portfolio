"use client";

import {
  SiReact,
  SiPython,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import DecryptedText from "@/components/DecryptedText";
import { SectionBackground } from "@/components/SectionBackground";

export function IntroSection() {
  const skills = [
    { label: "React Native", Icon: SiReact },
    { label: "Python", Icon: SiPython },
    { label: "Kotlin", Icon: SiKotlin },
    { label: "Flutter", Icon: SiFlutter },
    { label: "Firebase", Icon: SiFirebase },
    { label: "TypeScript", Icon: SiTypescript },
  ];

  return (
    <header
      id="intro"
      data-observe="section"
      data-gsap-section
      className="min-h-[90vh] flex items-center justify-center py-12 relative"
    >
      <SectionBackground variant="intro" />

      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full max-w-7xl mx-auto px-4 text-center sm:text-left relative z-10">
        {/* Left side */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8 mx-auto sm:mx-0 w-full flex flex-col justify-center">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-primary font-mono">
              PORTFOLIO / 2025
            </div>

            <h1 className="tracking-tight">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ef4444] animate-gradient bg-[length:200%_auto]">
                <span className="font-bold text-5xl sm:text-6xl lg:text-7xl">
                  <DecryptedText
                    text="Atik Hridoy"
                    animateOn="view"
                    sequential
                    speed={100}
                    maxIterations={15}
                    revealDirection="start"
                  />
                </span>
                <br />
                <span className="inline-block min-w-[250px] sm:min-w-[350px] lg:min-w-[400px] font-light text-3xl sm:text-4xl lg:text-5xl">
                  <TypeAnimation
                    sequence={["Flutter Developer", 2000, "App Creator", 2000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-prose">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I'm a passionate App Developer crafting{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent opacity-80 font-medium">
                next-generation mobile experiences
              </span>{" "}
              with clean code, intuitive interfaces, and modern technologies. I
              build apps that are fast, functional, and enjoyable to use across
              iOS, Android, and cross-platform solutions.
            </p>

            {/* Location & Availability */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_RGBA(6,182,212,0.8)]"></div>
                Available for work
              </div>
              <div>Dhaka, Bangladesh</div>
            </div>

            {/* CV Download Button */}
            <div className="pt-2">
              <a
                href="/Atikuzzaman_Riday_resume.pdf"
                download="Atikuzzaman_Riday_CV.pdf"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
                  text-white font-medium text-sm
                  hover:shadow-lg hover:shadow-cyan-500/50
                  transition-all duration-300
                  overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-2 flex flex-col self-center space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          {/* Currently */}
          <div className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-sm text-primary font-mono">CURRENTLY</div>
            <div className="space-y-1">
              <div className="text-foreground font-medium">
                Mobile App Developer
              </div>
              <div className="text-muted-foreground">@ SparkTech</div>
              <div className="text-xs text-muted-foreground">
                2025 — Present
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <div className="text-sm text-primary font-mono">TECH STACK</div>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="px-3 py-1.5 rounded-full text-sm font-medium 
                    bg-gradient-to-r from-[#06b6d4]/10 via-[#a855f7]/10 to-[#ef4444]/10
                    border border-[#06b6d4]/20 text-foreground/80
                    hover:from-[#06b6d4]/20 hover:via-[#a855f7]/20 hover:to-[#ef4444]/20
                    transition-all duration-200 flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
