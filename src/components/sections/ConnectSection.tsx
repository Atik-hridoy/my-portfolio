"use client";

import Link from "next/link";

const SOCIALS = [
  { name: "GitHub", handle: "@yourhandle", url: "#" },
  { name: "LinkedIn", handle: "yourname", url: "#" },
  { name: "Twitter", handle: "@yourhandle", url: "#" },
  { name: "Dev.to", handle: "@yourhandle", url: "#" },
];

export function ConnectSection() {
  return (
    <section id="connect" data-observe="section" className="py-20 sm:py-32 opacity-0">
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
                href="mailto:atik.hridoy.00@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">atik.hridoy.00@gmail.com</span>
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
            {SOCIALS.map((social) => (
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
  );
}
