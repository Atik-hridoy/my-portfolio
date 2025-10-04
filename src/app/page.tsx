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
import { WorkSection } from "@/components/sections/WorkSection";
import { ThoughtsSection } from "@/components/sections/ThoughtsSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");

  useThemeClass(isDark);
  const { x, y } = useCursorGlow();

  const sections = useMemo(() => ["intro", "work", "thoughts", "connect"], []);
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
      <CodeRain />

      <GlowCursor x={x} y={y} />

      <SectionDotsNav sections={sections} activeId={activeSection} onJump={scrollToSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <IntroSection />
        <WorkSection />
        <ThoughtsSection />
        <ConnectSection />

        <footer className="py-12 sm:py-16 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js and v0</div>
            </div>
            <FooterControls isDark={isDark} onToggleTheme={toggleTheme} />
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
