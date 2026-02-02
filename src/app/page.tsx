"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { useThemeClass } from "@/hooks/useThemeClass";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useGSAPScroll } from "@/hooks/useGSAPScroll";
import { GlowCursor } from "@/components/GlowCursor";
import { SectionDotsNav } from "@/components/SectionDotsNav";
import { FooterControls } from "@/components/FooterControls";
import { Logo } from "@/components/Logo";
import { Loader } from "@/components/Loader";
import { MobileHeader } from "@/components/MobileHeader";

import { IntroSection } from "@/components/sections/IntroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ThoughtsSection } from "@/components/sections/ThoughtsSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useThemeClass(isDark);
  const { x, y } = useCursorGlow();
  useGSAPScroll();

  const sections = useMemo(() => ["intro", "experience", "work", "skills", "thoughts", "connect"], []);
  useSectionObserver({
    onEnter: setActiveSection,
  });

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <GlowCursor x={x} y={y} />
      <Logo />
      
      {/* Mobile Header - shows on scroll with HRIDOY letters */}
      <MobileHeader activeSection={activeSection} onJump={scrollToSection} />

      <SectionDotsNav sections={sections} activeId={activeSection} onJump={scrollToSection} />

      <main className="max-w-5xl mx-auto relative z-10 overflow-visible">
        <IntroSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <ThoughtsSection />
        <ConnectSection />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      
      <div className="fixed bottom-6 right-6 z-20">
        <FooterControls isDark={isDark} onToggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
