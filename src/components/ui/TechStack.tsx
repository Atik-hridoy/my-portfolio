import { FaReact, FaApple } from 'react-icons/fa';
import { SiDart, SiFirebase, SiFlutter, SiGooglemaps, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandKotlin } from 'react-icons/tb';

type TechIconProps = {
  tech: string;
  className?: string;
};

export const TechIcon = ({ tech, className = '' }: TechIconProps) => {
  const iconMap: Record<string, React.ReactNode> = {
    flutter: <SiFlutter className={className} />,
    dart: <SiDart className={className} />,
    firebase: <SiFirebase className={className} />,
    'google maps api': <SiGooglemaps className={className} />,
    getx: <span className={className} style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>GetX</span>,
    swift: <FaApple className={className} />,
    'swiftui': <FaApple className={className} />,
    'core data': <FaApple className={className} />,
    'react': <FaReact className={className} />,
    'next.js': <SiNextdotjs className={className} />,
    'typescript': <SiTypescript className={className} />,
    'tailwindcss': <SiTailwindcss className={className} />,
    'kotlin': <TbBrandKotlin className={className} />,
  };

  const icon = iconMap[tech.toLowerCase()];
  return icon || <span className={className}>{tech}</span>;
};

type TechStackProps = {
  tech: string[];
  className?: string;
};

export const TechStack = ({ tech, className = '' }: TechStackProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((t, index) => (
        <div 
          key={t}
          className="relative group/tech"
          style={{
            '--delay': `${index * 0.1}s`,
          } as React.CSSProperties}
        >
          <span
            className="px-2 py-1 text-xs text-muted-foreground border border-border/30 rounded group-hover/tech:border-primary/50 group-hover/tech:text-primary transition-all duration-300 flex items-center gap-1.5 relative z-10 bg-background/80 backdrop-blur-sm"
            title={t}
          >
            <TechIcon tech={t} className="w-3 h-3" />
            <span>{t}</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 -z-0" 
                style={{
                  animation: 'wave 1.5s ease-in-out infinite',
                  animationDelay: `calc(var(--delay) + 0.1s)`,
                  transform: 'translateY(0) translateZ(0)'
                }}
          />
        </div>
      ))}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-3px) scaleY(0.9);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};
