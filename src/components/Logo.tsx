import { useEffect, useState } from "react";

export function Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hidden md:block fixed top-4 right-4 sm:top-6 sm:right-6 z-50 group">
      <div className="relative w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
        
        {/* Main Logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 sm:w-[60px] sm:h-[60px]"
        >
          {/* White Badge - theme aware */}
          <path 
            d="M100 20C120 20 140 30 150 50C170 60 180 80 180 100C180 120 170 140 150 150C140 170 120 180 100 180C80 180 60 170 50 150C30 140 20 120 20 100C20 80 30 60 50 50C60 30 80 20 100 20 Z"
            className="fill-white/20 dark:fill-white/10"
          />
          
          {/* Compass rotating */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="1.6s"
              repeatCount="indefinite"
            />
            
            {/* A shape */}
            <path 
              d="M100 45 L70 145 L85 145 L100 105 L115 145 L130 145 Z"
              fill="#3B82F6"
            />
            
            {/* Cross bar */}
            <rect 
              x="88" 
              y="95" 
              width="24" 
              height="10" 
              rx="5"
              fill="#2563EB"
            />
          </g>
          
          {/* Center dot */}
          <circle cx="100" cy="60" r="7" fill="#111827">
            <animate 
              attributeName="r"
              values="6;9;6"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Android head hint */}
          <circle cx="122" cy="95" r="10" fill="#22C55E"/>
          <line 
            x1="117" 
            y1="85" 
            x2="112" 
            y2="78" 
            stroke="#22C55E" 
            strokeWidth="2"
          />
          <line 
            x1="127" 
            y1="85" 
            x2="132" 
            y2="78" 
            stroke="#22C55E" 
            strokeWidth="2"
          />
        </svg>

        {/* Simple floating particles - hidden on mobile */}
        {mounted && (
          <>
            <div className="hidden sm:block absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
            <div className="hidden sm:block absolute top-6 right-5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="hidden sm:block absolute bottom-5 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="hidden sm:block absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </>
        )}

        {/* Simple hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-orange-500/20 rounded-full blur-xl transition-all duration-500" />
      </div>
      
      {/* Simple Tooltip - hidden on mobile */}
      <div className="hidden sm:block absolute top-full right-0 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-0 translate-y-2">
        <div className="relative px-6 py-3 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 rounded-xl" />
          <span className="relative text-base font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
            Atikuzzaman Hridoy
          </span>
          <div className="absolute -top-1.5 right-6 w-3 h-3 bg-zinc-900 border-l border-t border-zinc-800 transform rotate-45" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-10px); 
            opacity: 0.7; 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Path drawing animation */
        .draw-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1.5s ease-out forwards;
        }
        
        @keyframes draw {
          to { 
            stroke-dashoffset: 0; 
          }
        }
      `}</style>
    </div>
  );
}