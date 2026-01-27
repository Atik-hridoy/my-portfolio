"use client";

import { useState, useEffect } from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { motion } from "framer-motion";
import {
  SiFlutter,
  SiFirebase,
  SiGit,
  SiDart,
  SiPython,
  SiTsnode,
  SiDjango,
} from "react-icons/si";

const skillsData = [
  { subject: "Flutter", A: 85, fullMark: 100, icon: <SiFlutter className="w-6 h-6" />, color: "from-blue-400 to-cyan-400" },
  { subject: "Firebase", A: 80, fullMark: 100, icon: <SiFirebase className="w-6 h-6" />, color: "from-yellow-400 to-orange-500" },
  { subject: "Git", A: 85, fullMark: 100, icon: <SiGit className="w-6 h-6" />, color: "from-red-400 to-pink-500" },
  { subject: "Dart", A: 85, fullMark: 100, icon: <SiDart className="w-6 h-6" />, color: "from-cyan-400 to-blue-500" },
  { subject: "Python", A: 65, fullMark: 100, icon: <SiPython className="w-6 h-6" />, color: "from-blue-500 to-yellow-400" },
  { subject: "Node", A: 45, fullMark: 100, icon: <SiTsnode className="w-6 h-6" />, color: "from-green-400 to-emerald-500" },
  { subject: "Django", A: 75, fullMark: 100, icon: <SiDjango className="w-6 h-6" />, color: "from-green-600 to-teal-500" },
];

const CustomPolarAngleAxis = (props: any) => {
  const { x, y, payload } = props;
  const skill = skillsData.find((s) => s.subject === payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Glowing background circle */}
      <circle
        cx={0}
        cy={25}
        r={20}
        fill="url(#iconGlow)"
        opacity={0.3}
      />
      
      {/* Icon container with gradient border */}
      <foreignObject x="-18" y="7" width="36" height="36">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${skill?.color} p-0.5`}>
          <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-white">
            {skill?.icon}
          </div>
        </div>
      </foreignObject>
      
      {/* Skill name */}
      <text
        x={0}
        y={-10}
        textAnchor="middle"
        fill="#fff"
        className="text-sm font-semibold"
        style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}
      >
        {payload.value}
      </text>
    </g>
  );
};

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" data-observe="section" data-gsap-section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            data-gsap-heading
            className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            My <span className="font-semibold">Skills</span>
          </h2>
          <p
            data-gsap-heading
            className="mt-4 text-zinc-400 max-w-2xl mx-auto"
          >
            Technical expertise visualized through advanced radar mapping
          </p>
        </div>

        {/* Next Level Radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.4 : 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Outer glow rings - Disabled on mobile */}
          {!isMobile && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full border border-cyan-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-[650px] h-[650px] rounded-full border border-purple-500/20"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          )}

          {/* Main radar container - Floating */}
          <div className="relative group">
            <div className="relative p-8">
              {/* Radar title with animated underline */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Technical Skills Radar
                </h3>
                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-3"
                  initial={{ width: 0 }}
                  whileInView={{ width: "200px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>

              <div className="relative h-[500px]">
                {/* Floating particles - Reduced on mobile for performance */}
                {!isMobile && [
                  { left: 15, top: 20 },
                  { left: 85, top: 15 },
                  { left: 25, top: 75 },
                  { left: 70, top: 80 },
                  { left: 45, top: 10 },
                  { left: 90, top: 50 },
                  { left: 10, top: 60 },
                  { left: 60, top: 30 },
                  { left: 35, top: 90 },
                  { left: 80, top: 40 },
                  { left: 20, top: 45 },
                  { left: 55, top: 70 },
                  { left: 75, top: 25 },
                  { left: 40, top: 55 },
                  { left: 65, top: 85 },
                  { left: 30, top: 35 },
                  { left: 50, top: 65 },
                  { left: 95, top: 70 },
                  { left: 5, top: 40 },
                  { left: 85, top: 90 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${pos.left}%`,
                      top: `${pos.top}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillsData}>
                    {/* Multiple grid layers for depth */}
                    <PolarGrid 
                      gridType="circle" 
                      stroke="#3f3f46" 
                      strokeWidth={2}
                      strokeDasharray="4 4"
                    />
                    <PolarGrid 
                      gridType="circle" 
                      stroke="#06b6d4" 
                      strokeWidth={1}
                      strokeOpacity={0.2}
                    />
                    
                    <PolarAngleAxis dataKey="subject" tick={<CustomPolarAngleAxis />} />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
                      stroke="#3f3f46"
                      strokeWidth={2}
                    />
                    
                    {/* Multiple radar layers for depth effect */}
                    <Radar
                      name="Shadow"
                      dataKey="A"
                      stroke="#a855f7"
                      strokeWidth={3}
                      fill="#a855f7"
                      fillOpacity={0.1}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke="url(#radarStroke)"
                      strokeWidth={3}
                      fill="url(#radarGradient)"
                      fillOpacity={0.6}
                      dot={{ r: 6, fill: "#06b6d4", stroke: "#fff", strokeWidth: 2 }}
                    />
                    
                    <defs>
                      <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity={0.8} />
                      </linearGradient>
                      <linearGradient id="radarStroke" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                      <radialGradient id="iconGlow">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
                      </radialGradient>
                    </defs>
                  </RadarChart>
                </ResponsiveContainer>

                {/* Animated radar sweep - Disabled on mobile for performance */}
                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      style={{ transformOrigin: "center" }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-40">
                        <defs>
                          <radialGradient id="sweepGradient1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(6,182,212,0.6)" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M100,100 L200,100 A100,100 0 0,1 170,170 Z"
                          fill="url(#sweepGradient1)"
                        />
                      </svg>
                    </motion.div>

                    {/* Counter-rotating sweep */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      style={{ transformOrigin: "center" }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-30">
                        <defs>
                          <radialGradient id="sweepGradient2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M100,100 L100,0 A100,100 0 0,1 170,30 Z"
                          fill="url(#sweepGradient2)"
                        />
                      </svg>
                    </motion.div>
                  </>
                )}

                {/* Center pulse effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-8 h-8 rounded-full border-2 border-cyan-400"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>

              {/* Stats bar at bottom */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {skillsData.length}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {Math.round(skillsData.reduce((acc, s) => acc + s.A, 0) / skillsData.length)}%
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">Avg Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {skillsData.filter(s => s.A >= 75).length}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">Expert Level</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
