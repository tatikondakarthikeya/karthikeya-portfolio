"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { BookOpen, ExternalLink } from "lucide-react";
import { RESEARCH_PROJECTS } from "@/constants/research";

export default function ResearchLab() {
  return (
    <SectionReveal id="research" className="bg-background relative py-20 pb-32">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          AI Research <span className="text-gradient">Lab</span>.
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
        <p className="text-foreground/60 max-w-2xl text-lg mb-8">
          An interactive showcase of AI, Deep Learning, and Networking research projects. Click on any project to view detailed architectures, evaluation metrics, and the full research papers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {RESEARCH_PROJECTS.map((project, idx) => (
          <Link key={project.id} href={`/research/${project.id}`}>
            <GlassCard
              delay={idx * 0.1}
              hoverGlow
              className={`p-6 md:p-8 border-l-4 ${project.colorClass} border-y-white/5 border-r-white/5 cursor-pointer group flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="flex-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-4 rounded-xl bg-white/5`}>
                    {project.icon}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/40 bg-white/5 px-2 py-1 rounded">
                    {project.timeline.split('–')[0]}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 text-base mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.skills.slice(0, 4).map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs bg-white/5 border border-white/10 px-2 py-1.5 rounded text-white/60">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 4 && (
                    <span className="text-xs bg-white/5 border border-white/10 px-2 py-1.5 rounded text-white/50">
                      +{project.skills.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-sm font-medium text-foreground/50 group-hover:text-foreground transition-colors">
                  <span className="flex items-center gap-2">
                    <BookOpen size={18} /> Read Full Research
                  </span>
                  <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </SectionReveal>
  );
}
