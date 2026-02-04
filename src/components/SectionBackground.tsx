"use client";

type SectionBackgroundProps = {
  variant?: "intro" | "experience" | "work" | "skills" | "thoughts" | "connect";
};

export function SectionBackground({ variant = "intro" }: SectionBackgroundProps) {
  const patterns = {
    intro: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="intro-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4; #3b82f6; #a855f7; #06b6d4" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6; #a855f7; #06b6d4; #3b82f6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7; #06b6d4; #3b82f6; #a855f7" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="intro-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="none" stroke="url(#intro-gradient)" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="url(#intro-gradient)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="url(#intro-gradient)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#intro-pattern)" />
      </svg>
    ),
    experience: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="exp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b">
              <animate attributeName="stop-color" values="#f59e0b; #ec4899; #8b5cf6; #f59e0b" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ec4899">
              <animate attributeName="stop-color" values="#ec4899; #8b5cf6; #f59e0b; #ec4899" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6; #f59e0b; #ec4899; #8b5cf6" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="exp-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0 L80 40 L40 80 Z" fill="none" stroke="url(#exp-gradient)" strokeWidth="1" />
            <circle cx="40" cy="40" r="5" fill="url(#exp-gradient)" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exp-pattern)" />
      </svg>
    ),
    work: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="work-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981; #06b6d4; #3b82f6; #10b981" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4; #3b82f6; #10b981; #06b6d4" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6; #10b981; #06b6d4; #3b82f6" dur="12s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="work-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="30" height="30" fill="none" stroke="url(#work-gradient)" strokeWidth="1" />
            <rect x="60" y="10" width="30" height="30" fill="none" stroke="url(#work-gradient)" strokeWidth="1" />
            <rect x="10" y="60" width="30" height="30" fill="none" stroke="url(#work-gradient)" strokeWidth="1" />
            <rect x="60" y="60" width="30" height="30" fill="none" stroke="url(#work-gradient)" strokeWidth="1" />
            <line x1="40" y1="25" x2="60" y2="25" stroke="url(#work-gradient)" strokeWidth="0.5" />
            <line x1="40" y1="75" x2="60" y2="75" stroke="url(#work-gradient)" strokeWidth="0.5" />
            <line x1="25" y1="40" x2="25" y2="60" stroke="url(#work-gradient)" strokeWidth="0.5" />
            <line x1="75" y1="40" x2="75" y2="60" stroke="url(#work-gradient)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#work-pattern)" />
      </svg>
    ),
    skills: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skills-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7; #ec4899; #f59e0b; #a855f7" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ec4899">
              <animate attributeName="stop-color" values="#ec4899; #f59e0b; #a855f7; #ec4899" dur="9s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#f59e0b">
              <animate attributeName="stop-color" values="#f59e0b; #a855f7; #ec4899; #f59e0b" dur="9s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="skills-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <polygon points="60,10 90,50 60,90 30,50" fill="none" stroke="url(#skills-gradient)" strokeWidth="1" />
            <polygon points="60,30 75,50 60,70 45,50" fill="none" stroke="url(#skills-gradient)" strokeWidth="0.5" />
            <circle cx="60" cy="50" r="3" fill="url(#skills-gradient)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-pattern)" />
      </svg>
    ),
    thoughts: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="thoughts-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6; #06b6d4; #10b981; #3b82f6" dur="11s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4; #10b981; #3b82f6; #06b6d4" dur="11s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981; #3b82f6; #06b6d4; #10b981" dur="11s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="thoughts-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20 50 Q35 30, 50 50 T80 50" fill="none" stroke="url(#thoughts-gradient)" strokeWidth="1" />
            <circle cx="20" cy="50" r="4" fill="url(#thoughts-gradient)" opacity="0.3" />
            <circle cx="50" cy="50" r="4" fill="url(#thoughts-gradient)" opacity="0.3" />
            <circle cx="80" cy="50" r="4" fill="url(#thoughts-gradient)" opacity="0.3" />
            <path d="M50 20 L50 80" stroke="url(#thoughts-gradient)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#thoughts-pattern)" />
      </svg>
    ),
    connect: (
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="connect-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899">
              <animate attributeName="stop-color" values="#ec4899; #a855f7; #06b6d4; #ec4899" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7; #06b6d4; #ec4899; #a855f7" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4; #ec4899; #a855f7; #06b6d4" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="connect-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="3" fill="url(#connect-gradient)" />
            <circle cx="75" cy="25" r="3" fill="url(#connect-gradient)" />
            <circle cx="25" cy="75" r="3" fill="url(#connect-gradient)" />
            <circle cx="75" cy="75" r="3" fill="url(#connect-gradient)" />
            <circle cx="50" cy="50" r="3" fill="url(#connect-gradient)" />
            <line x1="25" y1="25" x2="50" y2="50" stroke="url(#connect-gradient)" strokeWidth="0.5" />
            <line x1="75" y1="25" x2="50" y2="50" stroke="url(#connect-gradient)" strokeWidth="0.5" />
            <line x1="25" y1="75" x2="50" y2="50" stroke="url(#connect-gradient)" strokeWidth="0.5" />
            <line x1="75" y1="75" x2="50" y2="50" stroke="url(#connect-gradient)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#connect-pattern)" />
      </svg>
    ),
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden">
      {patterns[variant]}
    </div>
  );
}
