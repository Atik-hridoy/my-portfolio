"use client";

import { useState } from "react";
import { ThoughtCard } from "../cards/ThoughtCard";
import { ThoughtModal } from "../modals/ThoughtModal";

const THOUGHTS = [
  {
    title: "State Management in Flutter: GetX vs Riverpod vs Bloc",
    excerpt:
      "A comprehensive comparison of Flutter's most popular state management solutions with real-world examples.",
    date: "Jan 2025",
    readTime: "12 min",
    content: `State management is one of the most crucial decisions when building a Flutter app. The choice you make will affect your app's architecture, testability, and maintainability for years to come.

**GetX: The All-in-One Solution**

GetX has gained massive popularity due to its simplicity and minimal boilerplate. It provides state management, dependency injection, and route management in one package. The reactive programming model with .obs variables makes it incredibly easy to get started.

However, GetX's magic comes with trade-offs. The heavy use of global state and service locators can make testing challenging. The framework's opinionated nature means you're locked into the GetX way of doing things.

**Riverpod: The Modern Approach**

Riverpod is Provider's successor, designed to fix its limitations. It offers compile-time safety, better testability, and no BuildContext dependency. The provider pattern is more explicit and easier to reason about.

Riverpod shines in large applications where maintainability matters. The learning curve is steeper, but the benefits in code quality and testing are worth it. Code generation with riverpod_generator further reduces boilerplate.

**Bloc: The Enterprise Choice**

Bloc (Business Logic Component) follows a clear separation of concerns with events, states, and blocs. It's predictable, testable, and scales well for large teams. The pattern is familiar to developers coming from Redux or similar architectures.

The main drawback is verbosity. Simple features require more code compared to GetX or Riverpod. However, this explicitness makes the codebase easier to understand and maintain in the long run.

**My Recommendation**

For small to medium apps with tight deadlines: **GetX**
For apps prioritizing testability and maintainability: **Riverpod**
For large enterprise applications with multiple teams: **Bloc**

The best choice depends on your team's experience, project requirements, and long-term maintenance plans. Don't follow trends—choose what fits your needs.`,
  },
  {
    title: "React Hooks: Beyond useState and useEffect",
    excerpt:
      "Advanced React hooks patterns that will level up your component architecture.",
    date: "Jan 2025",
    readTime: "10 min",
    content: `Most React developers are comfortable with useState and useEffect, but React's hooks API offers much more. Understanding advanced hooks can dramatically improve your code quality and performance.

**useCallback and useMemo: Performance Optimization**

These hooks are often misunderstood. useCallback memoizes functions, preventing unnecessary re-renders of child components. useMemo memoizes computed values, avoiding expensive calculations on every render.

The key is knowing when to use them. Don't optimize prematurely—profile first, then optimize. Overusing these hooks can actually hurt performance due to the overhead of memoization.

**useReducer: Complex State Logic**

When useState becomes unwieldy with multiple related state variables, useReducer provides a cleaner solution. It's perfect for complex state transitions and when the next state depends on the previous one.

Think of useReducer as a mini Redux inside your component. It makes state updates more predictable and easier to test. Combine it with useContext for a lightweight global state solution.

**Custom Hooks: Reusable Logic**

The real power of hooks lies in creating custom ones. Extract common logic into custom hooks to keep components clean and focused. A well-designed custom hook is reusable, testable, and composable.

Examples include useDebounce, useLocalStorage, useMediaQuery, and useIntersectionObserver. These patterns appear in almost every React application.

**useRef: Beyond DOM References**

useRef isn't just for accessing DOM elements. It's perfect for storing mutable values that don't trigger re-renders. Use it for timers, previous values, or any data that needs to persist across renders without causing updates.

**Best Practices**

1. Keep hooks at the top level—never inside conditions or loops
2. Name custom hooks with "use" prefix
3. Extract complex logic into custom hooks
4. Use ESLint's hooks plugin to catch mistakes
5. Test custom hooks with @testing-library/react-hooks

Mastering these patterns will make you a more effective React developer and lead to cleaner, more maintainable code.`,
  },
  {
    title: "Flutter Performance: 60fps on Every Device",
    excerpt:
      "Proven techniques to achieve buttery-smooth animations and eliminate jank in Flutter apps.",
    date: "Dec 2024",
    readTime: "15 min",
    content: `Performance is what separates good Flutter apps from great ones. Users expect smooth 60fps animations, instant responses, and no lag. Here's how to deliver that experience consistently.

**Understanding the Flutter Pipeline**

Flutter's rendering pipeline has three main phases: Build, Layout, and Paint. Understanding where bottlenecks occur is crucial for optimization. Use the Flutter DevTools performance overlay to identify jank.

**Widget Rebuilds: The Silent Killer**

Unnecessary widget rebuilds are the most common performance issue. Use const constructors wherever possible—they're free performance wins. Break large widgets into smaller ones and use keys strategically.

The widget tree should be as shallow as possible. Deep nesting increases rebuild costs. Consider using ListView.builder for long lists instead of Column with many children.

**Image Optimization**

Images are often the biggest performance drain. Use cached_network_image for remote images, implement proper image caching, and resize images to display dimensions. Never load full-resolution images when thumbnails suffice.

For icons, prefer vector graphics (SVG) over raster images. They scale perfectly and have tiny file sizes. The flutter_svg package makes this easy.

**Animations Done Right**

Use AnimatedBuilder or AnimatedWidget to limit rebuilds to only the animating widgets. Avoid animating expensive operations like opacity on large widget trees—use FadeTransition instead.

For complex animations, consider using CustomPainter with RepaintBoundary. This isolates repaints to specific areas, preventing full-screen redraws.

**State Management Impact**

Your state management choice affects performance. Avoid global rebuilds—update only affected widgets. Provider's Consumer and Selector widgets help with this. Riverpod's watch and select methods offer even finer control.

**Lazy Loading and Pagination**

Never load all data at once. Implement pagination for lists, lazy load images, and defer expensive operations until needed. The user should see content immediately, with details loading progressively.

**Platform-Specific Optimizations**

iOS and Android have different performance characteristics. Test on both platforms, especially on older devices. Use platform channels sparingly—they have overhead. Batch platform calls when possible.

**Measuring Success**

Use Flutter DevTools to profile your app. Look for:
- Frame rendering time (should be under 16ms for 60fps)
- Memory usage and leaks
- Network requests and their timing
- Widget rebuild counts

Set performance budgets and monitor them in CI/CD. Regression testing should include performance metrics, not just functionality.

**The Result**

Following these practices, you can build Flutter apps that feel native and responsive on any device. Performance isn't an afterthought—it's a feature that users notice and appreciate.`,
  },
  {
    title: "Building Offline-First Mobile Apps with Flutter",
    excerpt:
      "Complete guide to implementing robust offline functionality using Hive, Drift, and sync strategies.",
    date: "Dec 2024",
    readTime: "13 min",
    content: `Offline-first architecture is no longer optional—it's expected. Users want apps that work everywhere: on planes, in tunnels, or with poor connectivity. Here's how to build truly offline-first Flutter apps.

**Why Offline-First Matters**

Traditional apps fail gracefully when offline. Offline-first apps work gracefully when online. This mindset shift changes everything. Your app should function fully offline, syncing changes when connectivity returns.

**Choosing the Right Database**

Flutter offers several local database options:

**Hive**: Lightweight, fast, and pure Dart. Perfect for simple key-value storage and small to medium datasets. No native dependencies make it easy to set up.

**Drift (formerly Moor)**: Full-featured SQL database with type-safe queries. Best for complex relational data and when you need SQL's power. Excellent for large datasets.

**Isar**: The newest option, offering NoSQL flexibility with SQL-like queries. Extremely fast and supports complex queries. Great middle ground between Hive and Drift.

**Sync Strategies**

The hardest part of offline-first is syncing. Here are proven patterns:

**1. Last-Write-Wins**: Simple but can lose data. Use only when conflicts are rare and data loss is acceptable.

**2. Operational Transformation**: Complex but handles concurrent edits well. Used by Google Docs and similar collaborative tools.

**3. Conflict Resolution UI**: Let users resolve conflicts manually. Most reliable but requires good UX design.

**4. Timestamp-Based Merging**: Track modification times and merge based on recency. Works well for most CRUD operations.

**Implementation Pattern**

Create a repository layer that abstracts data sources. The repository checks local cache first, then network. All writes go to local storage immediately, then queue for sync.

Use a sync queue to track pending changes. When online, process the queue in order. Handle failures gracefully—retry with exponential backoff.

**Handling Edge Cases**

What if the user modifies data offline, then someone else modifies it online? Your sync logic must handle this. Options include:
- Reject the offline change (frustrating)
- Overwrite the online change (data loss)
- Merge changes (complex but best UX)
- Ask the user (safest)

**Network Detection**

Don't just check connectivity—verify actual internet access. A device can be connected to WiFi without internet. Use connectivity_plus with actual API calls to confirm.

**Testing Offline Functionality**

Test thoroughly in offline mode. Use Flutter's integration tests with mocked network responses. Test sync conflicts, interrupted syncs, and edge cases.

**Best Practices**

1. Store everything locally first
2. Sync in the background
3. Show sync status clearly
4. Handle conflicts gracefully
5. Test on real devices with real network conditions
6. Implement retry logic with exponential backoff
7. Batch sync operations for efficiency

Building offline-first is more work upfront but creates superior user experiences. Your users will thank you when your app works flawlessly on their morning commute.`,
  },
  {
    title: "React Server Components: The Future of React",
    excerpt:
      "Understanding RSC, when to use them, and how they change React development forever.",
    date: "Nov 2024",
    readTime: "11 min",
    content: `React Server Components (RSC) represent the biggest shift in React since hooks. They fundamentally change how we think about React applications, blurring the line between server and client.

**What Are Server Components?**

Server Components render on the server and send HTML to the client. Unlike SSR, they don't hydrate—they're truly server-only. This means zero JavaScript sent to the client for these components.

The benefits are massive: smaller bundle sizes, direct database access, better security, and improved performance. But they come with new mental models and constraints.

**Server vs Client Components**

Not everything should be a Server Component. Interactive elements, hooks, and browser APIs require Client Components. The key is choosing the right component type for each use case.

Server Components are perfect for:
- Data fetching
- Accessing backend resources
- Keeping sensitive data on server
- Reducing client bundle size

Client Components are needed for:
- Interactivity (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (localStorage, window)
- Third-party libraries using hooks

**The Composition Pattern**

You can nest Client Components inside Server Components, but not vice versa. This creates a new composition pattern: Server Components fetch data and pass it to Client Components as props.

This pattern encourages better separation of concerns. Data fetching logic stays on the server, while UI logic lives in client components.

**Streaming and Suspense**

RSC works beautifully with Suspense for streaming HTML. Send the shell immediately, then stream in content as it loads. Users see something instantly, with details appearing progressively.

This creates perceived performance improvements even when actual load times are similar. The app feels faster because users see content sooner.

**Data Fetching Revolution**

With RSC, you can fetch data directly in components using async/await. No more useEffect with loading states. No more prop drilling. Just clean, straightforward code.

\`\`\`tsx
async function UserProfile({ userId }) {
  const user = await db.user.findUnique({ where: { id: userId } });
  return <div>{user.name}</div>;
}
\`\`\`

This is only possible because the component runs on the server with direct database access.

**Caching and Revalidation**

Next.js 13+ provides powerful caching for Server Components. Data fetches are cached by default, with options for revalidation. This gives you the benefits of static generation with the flexibility of dynamic rendering.

**Migration Strategy**

Don't rewrite everything at once. Start with new features as Server Components. Gradually migrate existing components, starting with leaf nodes. Keep interactive components as Client Components.

**The Future**

RSC is still evolving, but the direction is clear. React is moving toward a model where the server does more, and the client does less. This aligns with web fundamentals while maintaining React's developer experience.

Frameworks like Next.js, Remix, and Gatsby are all adopting RSC. It's not a question of if, but when you'll need to understand them.

**Getting Started**

The best way to learn RSC is by building with them. Start a Next.js 14+ project and experiment. The mental model takes time to internalize, but the benefits are worth it.

React Server Components aren't just a new feature—they're a new paradigm. Understanding them now will make you a better React developer for years to come.`,
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
