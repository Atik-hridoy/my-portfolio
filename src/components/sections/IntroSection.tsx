"use client";

import Link from "next/link";
import { TechPill } from "../pills/TechPill";
import { SiReact,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

export function IntroSection() {
  const skills = [
    { label: "React Native", Icon: SiReact },
    { label: "Swift", Icon: SiSwift },
    { label: "Kotlin", Icon: SiKotlin },
    { label: "Flutter", Icon: SiFlutter },
    { label: "Firebase", Icon: SiFirebase },
    { label: "TypeScript", Icon: SiTypescript },
  ];

  return (
    <header
      id="intro"
      data-observe="section"
      className="min-h-[90vh] flex items-center justify-center py-12"
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full max-w-7xl mx-auto px-4 text-center sm:text-left">
        {/* Left side */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8 mx-auto sm:mx-0 w-full">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-primary font-mono">PORTFOLIO / 2025</div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight
               text-transparent bg-clip-text bg-gradient-to-r
               from-[#06b6d4] via-[#a855f7] to-[#ef4444]"
            >
              <div className="inline-block">
                <TypeAnimation
                  sequence={[
                    'Atik',
                    2000,
                    'Atik',
                    1000,
                    'Mobile',
                    1000,
                    'Flutter',
                    1000,
                    'Atik',
                    1000
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
                <br />
                <TypeAnimation
                  sequence={[
                    500,
                    'Hridoy',
                    2000,
                    'Hridoy',
                    500,
                    'Developer',
                    1000,
                    'Expert',
                    1000,
                    'Hridoy',
                    1000
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              App Developer crafting{" "}
              <span className="text-primary font-medium">
                next-generation mobile experiences
              </span>{" "}
              with elegant code, intuitive interfaces, and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_RGBA(6,182,212,0.8)]"></div>
                Available for work
              </div>
              <div>Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-sm text-primary font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-foreground font-medium">Mobile App Developer</div>
              <div className="text-muted-foreground">@ SparkTech</div>
              <div className="text-xs text-muted-foreground">2025 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-primary font-mono">TECH STACK</div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {skills.map(({ label, Icon }) => (
                <div key={label} className="px-3 py-1.5 rounded-full bg-muted text-sm flex items-center gap-1.5">
                  {Icon && <Icon className="w-4 h-4" />}
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
