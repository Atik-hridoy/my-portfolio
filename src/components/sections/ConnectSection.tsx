"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { SiWhatsapp, SiTelegram } from "react-icons/si";
import { SectionBackground } from "@/components/SectionBackground";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@atik-hridoy",
    url: "https://github.com/Atik-hridoy",
    icon: FaGithub,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "LinkedIn",
    handle: "atik-hridoy",
    url: "https://linkedin.com/in/md-atikuzzaman-riday-5678aa179/",
    icon: FaLinkedin,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Facebook",
    handle: "@atik_hridoy",
    url: "https://www.facebook.com/atik.hridoy.001",
    icon: FaFacebook,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "WhatsApp",
    handle: "+880 1521-438809",
    url: "https://wa.me/8801521438809",
    icon: SiWhatsapp,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Telegram",
    handle: "@atik_hridoy",
    url: "https://t.me/atik_hridoy",
    icon: SiTelegram,
    color: "from-cyan-400 to-blue-500",
  },
];

export function ConnectSection() {
  return (
    <section
      id="connect"
      data-observe="section"
      data-gsap-section
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      <SectionBackground variant="connect" />
      <div className="relative space-y-12 z-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2
            data-gsap-heading
            className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent"
          >
            Let's <span className="font-semibold">Connect</span>
          </h2>
          <p
            data-gsap-heading
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Open to collaborations and discussions about mobile development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Email CTA */}
          <div className="group relative p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute inset-[1px] rounded-2xl bg-background/95 backdrop-blur-xl" />

            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-primary tracking-widest">
                  GET IN TOUCH
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dhaka, Bangladesh • Available for work
                </p>
              </div>

              <Link
                href="mailto:atik.hridoy.00@gmail.com"
                className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
                  text-white font-semibold text-sm
                  hover:shadow-lg hover:shadow-cyan-500/50
                  transition-all duration-300 w-full sm:w-auto"
              >
                <FaEnvelope className="w-4 h-4" />
                atik.hridoy.00@gmail.com
              </Link>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-primary tracking-widest text-center lg:text-left">
              FIND ME ELSEWHERE
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-[1px] rounded-xl bg-background/95 backdrop-blur-xl" />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="text-2xl text-foreground group-hover:scale-110 transition-transform duration-300">
                        <Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground truncate">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono truncate">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
