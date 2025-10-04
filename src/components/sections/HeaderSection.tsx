import { RefObject } from "react"

interface HeaderSectionProps {
  innerRef: (el: HTMLElement | null) => void
  activeSection: string
  mousePosition: { x: number; y: number }
  toggleTheme: () => void
  isDark: boolean
}

export function HeaderSection({ innerRef, activeSection, mousePosition, toggleTheme, isDark }: HeaderSectionProps) {
  return (
    <header
      id="intro"
      ref={innerRef}
      className="min-h-screen flex items-center"
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-primary font-mono tracking-wider">PORTFOLIO / 2025</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight
              text-transparent bg-clip-text bg-gradient-to-r
              from-[#06b6d4] via-[#a855f7] to-[#ef4444]">
              Atik<br />Hridoy
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              App Developer crafting{' '}
              <span className="text-primary font-medium">next-generation mobile experiences</span> with elegant
              code, intuitive interfaces, and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                Available for work
              </div>
              <div>Your Location</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-sm text-primary font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-foreground font-medium">Mobile App Developer</div>
              <div className="text-muted-foreground">@ Your Company</div>
              <div className="text-xs text-muted-foreground">2022 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-primary font-mono">TECH STACK</div>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'TypeScript'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs border border-primary/30 rounded-full hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
