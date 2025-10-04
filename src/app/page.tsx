"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { CodeRain } from "@/components/code-rain";
import { useThemeClass } from "@/hooks/useThemeClass";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { GlowCursor } from "@/components/GlowCursor";
import { SectionDotsNav } from "@/components/SectionDotsNav";
import { FooterControls } from "@/components/FooterControls";
import { IntroSection } from "@/components/sections/IntroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ThoughtsSection } from "@/components/sections/ThoughtsSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");

  useThemeClass(isDark);
  const { x, y } = useCursorGlow();

  const sections = useMemo(() => ["intro", "experience", "work", "thoughts", "connect"], []);
  useSectionObserver({
    onEnter: setActiveSection,
  });

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <GlowCursor x={x} y={y} />

      <SectionDotsNav sections={sections} activeId={activeSection} onJump={scrollToSection} />

      <main className="max-w-4xl mx-auto relative z-10">
        <IntroSection />
        <ExperienceSection />
        <WorkSection />
        <ThoughtsSection />
        <ConnectSection />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
