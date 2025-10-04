"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { SiReact, SiFlutter, SiFirebase, SiKotlin, SiSwift, SiTypescript, SiJavascript, SiGit, SiRedux, SiGraphql } from 'react-icons/si';

const skillsData = [
  { subject: 'React Native', A: 90, fullMark: 100, icon: <SiReact className="w-5 h-5" /> },
  { subject: 'Flutter', A: 85, fullMark: 100, icon: <SiFlutter className="w-5 h-5" /> },
  { subject: 'TypeScript', A: 88, fullMark: 100, icon: <SiTypescript className="w-5 h-5" /> },
  { subject: 'JavaScript', A: 85, fullMark: 100, icon: <SiJavascript className="w-5 h-5" /> },
  { subject: 'Firebase', A: 80, fullMark: 100, icon: <SiFirebase className="w-5 h-5" /> },
  { subject: 'Kotlin', A: 75, fullMark: 100, icon: <SiKotlin className="w-5 h-5" /> },
  { subject: 'Swift', A: 70, fullMark: 100, icon: <SiSwift className="w-5 h-5" /> },
  { subject: 'Git', A: 85, fullMark: 100, icon: <SiGit className="w-5 h-5" /> },
  { subject: 'Redux', A: 80, fullMark: 100, icon: <SiRedux className="w-5 h-5" /> },
  { subject: 'GraphQL', A: 75, fullMark: 100, icon: <SiGraphql className="w-5 h-5" /> },
];

const CustomPolarAngleAxis = (props: any) => {
  const { x, y, payload } = props;
  const icon = skillsData.find(skill => skill.subject === payload.value)?.icon;
  
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A visual representation of my technical expertise across various technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50"
          >
            <h3 className="text-xl font-medium mb-6 text-center">Technical Skills Radar</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid gridType="circle" stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={<CustomPolarAngleAxis />} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.6}
                    animationBegin={200}
                    animationDuration={2000}
                    animationEasing="ease-out"
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.subject}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-foreground/80">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.subject}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.A}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.A}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#06b6d4] to-[#a855f7] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
