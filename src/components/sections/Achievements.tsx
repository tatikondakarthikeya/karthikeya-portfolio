"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Award, Mic, TrendingUp } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "International Conference Speaker",
    event: "ICSIMA 2025 (Malaysia)",
    description: "Speaker on AI Driven Space Debris Detection in front of global researchers and industry leaders.",
    icon: <Mic className="text-accent" size={32} />,
    delay: 0.1,
  },
  {
    title: "National Geospatial Summit Speaker",
    event: "GeoSmart India 2024",
    description: "Presented research on integrating Mesh Networks with LEO Satellites for robust communication.",
    icon: <TrendingUp className="text-purple-400" size={32} />,
    delay: 0.2,
  },
  {
    title: "Certificate of Excellence",
    event: "V Launch Pad 2024 (VIT AP)",
    description: "Awarded for an innovative business plan focusing on technological integration in Healthcare and Agriculture.",
    icon: <Award className="text-emerald-400" size={32} />,
    delay: 0.3,
  },
];

export default function Achievements() {
  return (
    <SectionReveal id="achievements" className="bg-background relative py-32 z-10">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-16 md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Milestones & <span className="text-gradient">Impact</span>.
        </h2>
        <div className="w-20 md:mx-auto h-1 bg-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ACHIEVEMENTS.map((achievement, idx) => (
          <GlassCard key={idx} delay={achievement.delay} hoverGlow className="text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner [box-shadow:inset_0_2px_10px_rgba(255,255,255,0.05)] border border-white/10">
              {achievement.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
              {achievement.title}
            </h3>
            
            <div className="text-accent-neon text-sm font-semibold mb-4 bg-accent-neon/10 px-3 py-1 rounded-full">
              {achievement.event}
            </div>
            
            <p className="text-foreground/70 font-light leading-relaxed">
              {achievement.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionReveal>
  );
}
