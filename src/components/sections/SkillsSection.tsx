"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { motion } from "framer-motion";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiKotlin,
  SiGit,
  SiDart,
  SiPython,
  SiTsnode,
  SiDjango,
} from "react-icons/si";

const skillsData = [
  { subject: "React Native", A: 60, fullMark: 100, icon: <SiReact className="w-5 h-5" /> },
  { subject: "Flutter", A: 85, fullMark: 100, icon: <SiFlutter className="w-5 h-5" /> },
  //{ subject: "JavaScript", A: 40, fullMark: 100, icon: <SiJavascript className="w-5 h-5" /> },
  { subject: "Firebase", A: 80, fullMark: 100, icon: <SiFirebase className="w-5 h-5" /> },
  { subject: "Kotlin", A: 50, fullMark: 100, icon: <SiKotlin className="w-5 h-5" /> },
  { subject: "Git", A: 85, fullMark: 100, icon: <SiGit className="w-5 h-5" /> },
  { subject: "Dart", A: 85, fullMark: 100, icon: <SiDart className="w-5 h-5" /> },
  { subject: "Python", A: 85, fullMark: 100, icon: <SiPython className="w-5 h-5" /> },
  { subject: "Node", A: 85, fullMark: 100, icon: <SiTsnode className="w-5 h-5" /> },
  { subject: "Django", A: 85, fullMark: 100, icon: <SiDjango className="w-5 h-5" /> },
];

const CustomPolarAngleAxis = (props: any) => {
  const { x, y, payload } = props;
  const icon = skillsData.find((skill) => skill.subject === payload.value)?.icon;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="#94a3b8"
        className="text-xs"
      >
        {payload.value}
      </text>
      <foreignObject x="-10" y="15" width="20" height="20">
        <div className="flex items-center justify-center w-5 h-5 text-foreground/80">
          {icon}
        </div>
      </foreignObject>
    </g>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" data-observe="section" className="py-20 sm:py-32 opacity-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            My <span className="font-semibold">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A visual representation of my technical expertise across various technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card/30 backdrop-blur-xl p-8 rounded-2xl border border-border/50 hover:border-primary/60 shadow-md hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-6 text-center text-foreground/90">
              Technical Skills Radar
            </h3>
            <div className="relative h-[400px]">
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
      <PolarGrid gridType="circle" stroke="#475569" strokeDasharray="4 4" />
      <PolarAngleAxis dataKey="subject" tick={<CustomPolarAngleAxis />} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 10 }} />
      <Radar
        name="Proficiency"
        dataKey="A"
        stroke="#06b6d4"
        strokeWidth={2}
        fill="url(#radarGradient)"
        fillOpacity={0.7}
      />
      <defs>
        <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.7} />
          <stop offset="100%" stopColor="#a855f7" stopOpacity={0.7} />
        </linearGradient>
      </defs>
    </RadarChart>
  </ResponsiveContainer>

  {/* 🔥 Radar Sweep (sector scanning effect) */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
    style={{ transformOrigin: "center" }}
  >
    <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-50">
      <defs>
        <radialGradient id="sweepGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Arc sector from center */}
      <path
        d="M100,100 L200,100 A100,100 0 0,1 170,170 Z"
        fill="url(#sweepGradient)"
      />
    </svg>
  </motion.div>
</div>


          </motion.div>

          {/* Skill Bars */}
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.subject}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors duration-300">
                      {skill.subject}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.A}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.A}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.05 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                  />
                  {/* shimmer effect */}
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
