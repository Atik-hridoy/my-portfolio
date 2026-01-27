import { useEffect, useState } from "react";

export function Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 group">
      <div className="relative w-32 h-32 flex items-center justify-center">
        
        {/* Simple rotating ring - smaller */}
        <div className="absolute inset-6 rounded-full border border-cyan-500/20 animate-spin-slow" />
        
        {/* Main Logo */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            {/* Simple animated gradient */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4">
                <animate
                  attributeName="stop-color"
                  values="#06b6d4; #8b5cf6; #f97316; #06b6d4"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#8b5cf6">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6; #f97316; #06b6d4; #8b5cf6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#f97316">
                <animate
                  attributeName="stop-color"
                  values="#f97316; #06b6d4; #8b5cf6; #f97316"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Letter A - Larger and centered */}
          <g filter="url(#glow)">
            {/* Left leg of A */}
            <path
              d="M 50 130 L 80 30 L 110 130"
              stroke="url(#logoGradient)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Crossbar of A */}
            <path
              d="M 60 95 L 100 95"
              stroke="url(#logoGradient)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>

        {/* Simple floating particles */}
        {mounted && (
          <>
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
            <div className="absolute top-6 right-5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-5 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </>
        )}

        {/* Simple hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-orange-500/20 rounded-full blur-xl transition-all duration-500" />
      </div>
      
      {/* Simple Tooltip */}
      <div className="absolute top-full right-0 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-0 translate-y-2">
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