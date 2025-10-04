"use client";

import { ThoughtCard } from "../cards/ThoughtCard";

const THOUGHTS = [
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
];

export function ThoughtsSection() {
  return (
    <section id="thoughts" data-observe="section" className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">
          Recent <span className="text-primary">Thoughts</span>
        </h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {THOUGHTS.map((t) => (
            <ThoughtCard key={t.title} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
