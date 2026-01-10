"use client";

import { useState } from "react";
import { ThoughtCard } from "../cards/ThoughtCard";
import { ThoughtModal } from "../modals/ThoughtModal";

const THOUGHTS = [
  {
    title: "Building Offline-First Mobile Apps",
    excerpt:
      "Strategies for creating resilient mobile experiences that work without connectivity.",
    date: "Jan 2025",
    readTime: "7 min",
    content: `Building offline-first mobile applications is crucial in today's world where connectivity can be unreliable. This approach ensures your app remains functional even when users lose their internet connection.

The key principles include local data persistence, smart synchronization strategies, and graceful degradation of features. By implementing these patterns, you create a more resilient user experience that builds trust and reliability.

Modern frameworks like Flutter and React Native provide excellent tools for offline-first development, including local databases, caching mechanisms, and background sync capabilities. Understanding how to leverage these tools effectively is essential for creating production-ready mobile applications.`,
  },
  {
    title: "React Native vs Flutter in 2025",
    excerpt:
      "A practical comparison based on real-world projects and performance benchmarks.",
    date: "Dec 2024",
    readTime: "10 min",
    content: `The debate between React Native and Flutter continues in 2025, but both frameworks have matured significantly. Each has its strengths and ideal use cases.

React Native excels when you have a strong JavaScript/TypeScript team and want to share code with web applications. Its ecosystem is vast, and integration with existing React codebases is seamless.

Flutter, on the other hand, offers superior performance out of the box and a more consistent UI across platforms. Its widget-based architecture and hot reload capabilities make development incredibly fast. The choice ultimately depends on your team's expertise and project requirements.`,
  },
  {
    title: "Mobile App Performance Optimization",
    excerpt:
      "Techniques for reducing app size, improving load times, and optimizing animations.",
    date: "Nov 2024",
    readTime: "8 min",
    content: `Performance optimization is not just about making your app faster—it's about creating a smooth, responsive experience that users love. Start by measuring: use profiling tools to identify bottlenecks before optimizing.

Key areas to focus on include image optimization, lazy loading, efficient state management, and minimizing unnecessary re-renders. For animations, use native drivers whenever possible and keep frame rates at 60fps.

Bundle size matters too. Code splitting, tree shaking, and removing unused dependencies can significantly reduce your app's footprint. Remember: every kilobyte counts, especially for users on slower networks or older devices.`,
  },
  {
    title: "Push Notifications Done Right",
    excerpt:
      "Best practices for implementing engaging notifications without annoying users.",
    date: "Oct 2024",
    readTime: "5 min",
    content: `Push notifications are powerful but easily misused. The key is relevance and timing. Users should feel that notifications add value rather than interrupt their day.

Implement smart notification preferences, allowing users to customize what they receive. Use rich notifications with images and actions when appropriate. Always provide a clear way to opt-out.

Technical implementation should include proper token management, handling notification permissions gracefully, and testing across different device states. A well-implemented notification system can significantly boost engagement without annoying your users.`,
  },
];

export function ThoughtsSection() {
  const [selectedThought, setSelectedThought] = useState<
    (typeof THOUGHTS)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThoughtClick = (thought: (typeof THOUGHTS)[0]) => {
    setSelectedThought(thought);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedThought(null), 300);
  };
  return (
    <section
      id="thoughts"
      data-observe="section"
      data-gsap-section
      className="relative min-h-screen py-20 sm:py-32"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative space-y-12 sm:space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2
            data-gsap-heading
            className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Recent <span className="font-semibold">Thoughts</span>
          </h2>
          <p
            data-gsap-heading
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Insights, deep dives, and learnings from my journey in mobile and
            app development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {THOUGHTS.map((t) => (
            <ThoughtCard
              key={t.title}
              t={t}
              onClick={() => handleThoughtClick(t)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ThoughtModal
        thought={selectedThought}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
