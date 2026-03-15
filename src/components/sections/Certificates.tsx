"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ExternalLink, Files } from "lucide-react";

export default function Certificates() {
  return (
    <SectionReveal id="certificates" className="bg-background relative py-20 border-y border-white/5">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
           <Files size={32} className="text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Certifications & <span className="text-gradient">Credentials</span>
        </h2>
        
        <p className="text-foreground/60 mb-10 text-lg max-w-2xl mx-auto">
          A collection of verified certificates demonstrating continuous learning in Data Science, AI/ML, and specialized software development.
        </p>
        
        <MagneticButton variant="primary" className="mx-auto">
          <a href="https://drive.google.com/drive/folders/1itQOSlMVupvgy-n2ADkO2BP-tzwKg_ex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Certificate Gallery <ExternalLink size={18} />
          </a>
        </MagneticButton>
      </div>
    </SectionReveal>
  );
}
