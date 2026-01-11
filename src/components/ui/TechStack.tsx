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
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-1 text-xs text-muted-foreground border border-border/30 rounded hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm whitespace-nowrap"
          title={t}
        >
          <TechIcon tech={t} className="w-3 h-3" />
          <span>{t}</span>
        </span>
      ))}
    </div>
  );
};
