"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { CodeRain } from "@/components/code-rain"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <CodeRain />

      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          filter: "blur(60px)",
        }}
      />

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section
                  ? "bg-primary shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
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
                  App Developer crafting{" "}
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
                  {["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "TypeScript"].map((skill) => (
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

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">
                Selected <span className="text-primary">Work</span>
              </h2>
              <div className="text-sm text-muted-foreground font-mono">2020 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2024",
                  role: "Senior Mobile Developer",
                  company: "Tech Startup",
                  description: "Leading mobile architecture for iOS and Android apps with 500K+ active users.",
                  tech: ["React Native", "TypeScript", "Redux"],
                },
                {
                  year: "2023",
                  role: "iOS Developer",
                  company: "E-commerce Platform",
                  description: "Built native shopping experiences with seamless checkout and real-time inventory.",
                  tech: ["Swift", "SwiftUI", "Core Data"],
                },
                {
                  year: "2022",
                  role: "Mobile App Developer",
                  company: "Social Media App",
                  description: "Developed cross-platform features for content sharing and user engagement.",
                  tech: ["Flutter", "Dart", "Firebase"],
                },
                {
                  year: "2020",
                  role: "Junior Android Developer",
                  company: "Fitness App",
                  description: "Created workout tracking features and integrated wearable device APIs.",
                  tech: ["Kotlin", "Jetpack Compose", "Room"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-primary/50 transition-all duration-500 rounded-lg hover:bg-card/20 hover:px-6"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-primary transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-primary transition-colors duration-300">
                        {job.role}
                      </h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground border border-border/30 rounded group-hover:border-primary/50 group-hover:text-primary transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Recent <span className="text-primary">Thoughts</span>
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Building Offline-First Mobile Apps",
                  excerpt: "Strategies for creating resilient mobile experiences that work without connectivity.",
                  date: "Jan 2025",
                  readTime: "7 min",
                },
                {
                  title: "React Native vs Flutter in 2025",
                  excerpt: "A practical comparison based on real-world projects and performance benchmarks.",
                  date: "Dec 2024",
                  readTime: "10 min",
                },
                {
                  title: "Mobile App Performance Optimization",
                  excerpt: "Techniques for reducing app size, improving load times, and optimizing animations.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Push Notifications Done Right",
                  excerpt: "Best practices for implementing engaging notifications without annoying users.",
                  date: "Oct 2024",
                  readTime: "5 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] cursor-pointer bg-card/20 backdrop-blur-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-primary font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => {
          sectionsRef.current[3] = el;
        }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">
                Let's <span className="text-primary">Connect</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Open to new opportunities, collaborations, and discussions about mobile development and app
                  architecture.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:your.email@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">your.email@example.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-primary font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@yourhandle", url: "#" },
                  { name: "LinkedIn", handle: "yourname", url: "#" },
                  { name: "Twitter", handle: "@yourhandle", url: "#" },
                  { name: "Dev.to", handle: "@yourhandle", url: "#" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] bg-card/20 backdrop-blur-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js and v0</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 bg-card/20 backdrop-blur-sm"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 bg-card/20 backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
