"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Users, Globe, Lightbulb, Megaphone } from "lucide-react";

const LEADERSHIP_ROLES = [
  {
    title: "Research Department Member",
    organization: "Microsoft Student Chapter — VIT-AP University",
    period: "Aug 2025 - Present",
    description: "Contributing to AI-driven learning initiatives, technical discussions, and emerging technology exploration. Actively involved in research-oriented collaboration, knowledge sharing, and innovation-focused activities aligned with modern software engineering, cloud computing, and artificial intelligence practices. Participated in technical sessions, project ideation, and community-driven technology initiatives to promote applied AI.",
    icon: <Lightbulb size={32} className="text-blue-400" />,
    colorClass: "border-l-blue-400",
    bgClass: "bg-blue-400/10",
  },
  {
    title: "Outreach & PR Co-Lead",
    organization: "The Machine Learning Club VIT-AP",
    period: "Sep 2023 - Present",
    description: "Established and maintained relationships with journalists, bloggers, and media outlets. Cultivated partnerships with influencers and industry-relevant figures for collaborative campaigns and endorsements. Negotiated terms and managed ongoing relationships resulting in an increase of sponsors for events.",
    icon: <Globe size={32} className="text-purple-400" />,
    colorClass: "border-l-purple-500",
    bgClass: "bg-purple-500/10",
  },
  {
    title: "Vice President",
    organization: "KNIT VIT-AP",
    period: "Mar 2024 - Apr 2025",
    description: "Spearheaded the planning and successful execution of multiple tech-driven events, workshops, and outreach initiatives across campus. Coordinated between technical, design, and logistics teams to ensure smooth event flow. Mentored junior members and contributed to strategic decision-making and collaborative efforts with external partners.",
    icon: <Users size={32} className="text-accent" />,
    colorClass: "border-l-accent",
    bgClass: "bg-accent/10",
  },
  {
    title: "Member of Marketing Team",
    organization: "VIT-AP Bioscope",
    period: "Aug 2023 - Sep 2023",
    description: "Planned and executed marketing campaigns across digital and social media channels. Monitored campaign performance and adjusted strategies for improved engagement. Organized promotional events to increase club awareness and attract potential members.",
    icon: <Megaphone size={32} className="text-pink-400" />,
    colorClass: "border-l-pink-400",
    bgClass: "bg-pink-400/10",
  },
];

export default function Leadership() {
  return (
    <SectionReveal id="leadership" className="bg-background relative py-20 pb-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-right">
          <span className="text-gradient">Leadership</span> Roles.
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full ml-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {LEADERSHIP_ROLES.map((role, idx) => (
          <GlassCard key={idx} delay={idx * 0.1} hoverGlow className={`border flex flex-col items-start gap-4 border-l-4 ${role.colorClass} border-y-white/5 border-r-white/5 p-6`}>
            <div className="flex items-center gap-4 w-full">
              <div className={`p-4 rounded-xl shrink-0 ${role.bgClass}`}>
                {role.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                <div className="text-accent-neon text-xs font-semibold uppercase tracking-wider mb-1">{role.organization}</div>
                <div className="text-foreground/50 text-xs">{role.period}</div>
              </div>
            </div>
            <p className="text-foreground/70 font-light leading-relaxed text-sm mt-2">
              {role.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionReveal>
  );
}
