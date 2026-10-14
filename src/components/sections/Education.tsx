"use client";

import { GraduationCap, CalendarDays, Award } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";

export default function Education() {
  return (
    <SectionReveal id="education" className="bg-background relative">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Education<span className="text-gradient">.</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </div>

      <GlassCard hoverGlow className="p-8 md:p-10 border-t-accent/20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Vellore Institute of Technology, Amaravati</h3>
              <p className="text-foreground/70 text-lg">B.Tech in Computer Science and Engineering</p>
              <p className="text-foreground/50 text-sm mt-2">VIT-AP University</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:items-end md:text-right">
            <div className="flex items-center gap-2 text-foreground/60 text-sm">
              <CalendarDays size={16} className="text-accent" />
              <span>2022–2026</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Award size={18} className="text-accent" />
              <span className="font-semibold">CGPA: 8.66/10</span>
            </div>
          </div>
        </div>
      </GlassCard>
    </SectionReveal>
  );
}
