"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SOCIALS = [
  { name: "GitHub", handle: "@atik-hridoy", url: "https://github.com/Atik-hridoy", icon: <FaGithub /> },
  { name: "LinkedIn", handle: "atik-hridoy", url: "https://linkedin.com/in/md-atikuzzaman-riday-5678aa179/", icon: <FaLinkedin /> },
  { name: "Facebook", handle: "@atik_hridoy", url: "https://www.facebook.com/atik.hridoy.001", icon: <FaFacebook /> },
];

export function ConnectSection() {
  return (
    <section
      id="connect"
      data-observe="section"
      className="py-20 sm:py-32 opacity-0"
    >
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's <span className="font-semibold">Connect</span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Open to new opportunities, collaborations, and discussions about{" "}
              <span className="text-primary font-medium">mobile development</span> and{" "}
              <span className="text-primary font-medium">app architecture</span>.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:atik.hridoy.00@gmail.com"
                className="group flex items-center gap-3 text-lg sm:text-xl font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="underline decoration-dashed underline-offset-4 group-hover:decoration-solid">
                  atik.hridoy.00@gmail.com
                </span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-primary font-mono tracking-widest">
            ELSEWHERE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOCIALS.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="group p-5 border border-border/50 rounded-2xl bg-white/5 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] flex items-center gap-4"
              >
                <div className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div className="flex flex-col">
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {social.handle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
