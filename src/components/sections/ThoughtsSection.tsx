"use client";

import { useState } from "react";
import { ThoughtCard } from "../cards/ThoughtCard";
import { ThoughtModal } from "../modals/ThoughtModal";

const THOUGHTS = [
  {
    title: "Scaling PostgreSQL to Power 800 Million ChatGPT Users",
    excerpt:
      "How OpenAI scaled PostgreSQL to handle millions of QPS with a single-primary architecture and nearly 50 read replicas.",
    date: "Jan 2025",
    readTime: "15 min",
    content: `For years, PostgreSQL has been one of the most critical, under-the-hood data systems powering core products like ChatGPT and OpenAI's API. As our user base grows rapidly, the demands on our databases have increased exponentially, too. Over the past year, our PostgreSQL load has grown by more than 10x, and it continues to rise quickly.

Our efforts to advance our production infrastructure to sustain this growth revealed a new insight: PostgreSQL can be scaled to reliably support much larger read-heavy workloads than many previously thought possible. The system (initially created by a team of scientists at University of California, Berkeley) has enabled us to support massive global traffic with a single primary Azure PostgreSQL flexible server instance and nearly 50 read replicas spread over multiple regions globally.

**Cracks in Our Initial Design**

After the launch of ChatGPT, traffic grew at an unprecedented rate. To support it, we rapidly implemented extensive optimizations at both the application and PostgreSQL database layers, scaled up by increasing the instance size, and scaled out by adding more read replicas. This architecture has served us well for a long time.

It may sound surprising that a single-primary architecture can meet the demands of OpenAI's scale; however, making this work in practice isn't simple. We've seen several SEVs caused by Postgres overload, and they often follow the same pattern: an upstream issue causes a sudden spike in database load, such as widespread cache misses from a caching-layer failure, a surge of expensive multi-way joins saturating CPU, or a write storm from a new feature launch.

**Key Optimizations**

1. **Reducing Load on the Primary**: We minimize load on the primary as much as possible—both reads and writes—to ensure it has sufficient capacity to handle write spikes. Read traffic is offloaded to replicas wherever possible.

2. **Query Optimization**: We continuously optimize PostgreSQL queries to ensure they're efficient and avoid common OLTP anti-patterns. For example, we once identified an extremely costly query that joined 12 tables, where spikes in this query were responsible for past high-severity SEVs.

3. **Connection Pooling**: We deployed PgBouncer as a proxy layer to pool database connections. Running it in statement or transaction pooling mode allows us to efficiently reuse connections, greatly reducing the number of active client connections.

4. **Caching**: To reduce read pressure on PostgreSQL, we use a caching layer to serve most of the read traffic. We implement a cache locking mechanism so that only a single reader that misses on a particular key fetches the data from PostgreSQL.

5. **Workload Isolation**: To mitigate the "noisy neighbor" problem, we isolate workloads onto dedicated instances to ensure that sudden spikes in resource-intensive requests don't impact other traffic.

**Results**

This effort demonstrates that with the right design and optimizations, Azure PostgreSQL can be scaled to handle the largest production workloads. PostgreSQL handles millions of QPS for read-heavy workloads, powering OpenAI's most critical products like ChatGPT and the API platform. We added nearly 50 read replicas, while keeping replication lag near zero, maintained low-latency reads across geo-distributed regions, and built sufficient capacity headroom to support future growth.

We consistently deliver low double-digit millisecond p99 client-side latency and five-nines availability in production. Over the past 12 months, we've had only one SEV-0 PostgreSQL incident.

*Article by Bohan Zhang, Member of the Technical Staff at OpenAI*

**Read the full article**: [https://openai.com/index/scaling-postgresql/](https://openai.com/index/scaling-postgresql/)`,
  },
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
