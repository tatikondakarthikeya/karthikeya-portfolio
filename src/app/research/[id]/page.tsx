"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { RESEARCH_PROJECTS } from "@/constants/research";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ResearchPage({ params }: { params: { id: string } }) {
  const project = RESEARCH_PROJECTS.find((p) => p.id === params.id);

  if (!project) notFound();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/#research" 
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Lab</span>
          </Link>
          <div className="hidden md:flex flex-col items-end">
            <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">Research Report</span>
            <span className="text-white/40 text-xs font-medium">{project.timeline}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-accent-neon"
            >
              {project.type}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
            >
              {project.title}
            </motion.h1>
            {project.event && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-purple-400 font-medium mb-12 flex items-center justify-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                {project.event}
              </motion.div>
            )}
          </div>
        </section>

        {/* Content Flow */}
        <div className="max-w-5xl mx-auto px-6 space-y-24 py-20 pb-40">
          
          {/* 01. OVERVIEW */}
          <SectionReveal className="space-y-8">
            <h2 className="flex items-center gap-4 text-3xl font-bold text-white">
              <span className="text-accent text-lg font-mono">01.</span> Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="col-span-2 space-y-6 text-xl leading-relaxed text-white/70">
                <p>{project.description}</p>
                <p className="text-white/50 text-base">{project.fullDescription}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-white mb-8">Key Contributions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.contributions.map((contribution, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-accent text-sm font-bold">0{i+1}</span>
                    </div>
                    <p className="text-white/70">{contribution}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* 02. ARCHITECTURE */}
          <SectionReveal className="space-y-10">
            <h2 className="flex items-center gap-4 text-3xl font-bold text-white">
              <span className="text-purple-400 text-lg font-mono">02.</span> Architecture
            </h2>
            
            {'layers' in project.architecture && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {project.architecture.layers.map((layer, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                      <h4 className="font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{layer.title}</h4>
                      <p className="text-sm text-white/50 leading-relaxed">{layer.content}</p>
                    </div>
                  ))}
                </div>
                {project.architecture.deployment && (
                  <div className="bg-purple-500/5 rounded-3xl p-8 md:p-12 border border-purple-500/10">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Deployment Strategy</h4>
                    <div className="space-y-4">
                      {project.architecture.deployment.map((dep, i) => (
                        <div key={i} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0">
                          <span className="text-purple-400 font-bold shrink-0">· {dep.title}</span>
                          <span className="text-white/50 text-sm">{dep.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {'stages' in project.architecture && (
              <div className="space-y-4">
                {project.architecture.stages.map((stage, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                    <div className="md:w-1/3">
                      <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">{stage.title}</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-white/50 leading-relaxed">{stage.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {'components' in project.architecture && (
              <div className="space-y-8">
                <p className="text-xl text-white/70 max-w-2xl">{project.architecture.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.architecture.components.map((comp) => (
                    <div key={comp} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-medium">
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </SectionReveal>

          {/* 03. METHODOLOGY */}
          {project.methodology && (
            <SectionReveal className="space-y-8">
              <h2 className="flex items-center gap-4 text-3xl font-bold text-white">
                <span className="text-orange-400 text-lg font-mono">03.</span> Methodology
              </h2>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-xl leading-relaxed text-white/70">
                  {project.methodology}
                </p>
              </div>
            </SectionReveal>
          )}

          {/* 04. RESULTS */}
          {project.results && (
            <SectionReveal className="space-y-12">
              <h2 className="flex items-center gap-4 text-3xl font-bold text-white">
                <span className="text-emerald-400 text-lg font-mono">{project.methodology ? '04.' : '03.'}</span> Performance & Results
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {project.results.detection && (
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">{project.results.detection.model} Detection</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {project.results.detection.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-2xl font-bold text-emerald-400">{m.value}</div>
                          <div className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.results.classification && (
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">{project.results.classification.model} Classification</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {project.results.classification.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-2xl font-bold text-cyan-400">{m.value}</div>
                          <div className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.results.prediction && (
                  <div className="col-span-full overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-white/5 rounded-2xl overflow-hidden">
                      <thead>
                        <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-white/40">
                          <th className="p-4 pl-8">Model</th>
                          <th className="p-4">MAE</th>
                          <th className="p-4">RMSE</th>
                          <th className="p-4 pr-8">Accuracy (&lt;0.5 error)</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {project.results.prediction.models.map((m, i) => (
                          <tr key={i} className="border-t border-white/5 text-white/70 hover:bg-white/[0.02] transition-colors">
                            <td className="p-4 pl-8 font-bold">{m.name}</td>
                            <td className="p-4">{m.mae}</td>
                            <td className="p-4">{m.rmse}</td>
                            <td className="p-4 pr-8 text-emerald-400 font-bold">{m.accuracy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {project.results.comparison && (
                  <div className="col-span-full bg-white/[0.02] rounded-3xl p-8 border border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8">Model Benchmark Comparison</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                       {project.results.comparison.map(m => (
                         <div key={m.model}>
                            <div className="text-2xl font-bold text-white/80">{m.accuracy}</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40">{m.model}</div>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            </SectionReveal>
          )}

          {/* 05. RESEARCH DOCUMENT VIEWER */}
          <SectionReveal className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4 gap-4">
               <h2 className="flex items-center gap-4 text-3xl font-bold text-white">
                  <span className="text-amber-400 text-lg font-mono">{project.results ? (project.methodology ? '05.' : '04.') : (project.methodology ? '04.' : '03.')}</span> {project.paperTitle}
               </h2>
               <div className="flex gap-4">
                 {project.pdfPaths.map((path, i) => (
                   <a
                    key={i}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-xs text-accent hover:bg-accent hover:text-white transition-all font-bold uppercase tracking-widest"
                   >
                     <ExternalLink size={14} /> View {project.pdfPaths.length > 1 ? `Full Paper ${i+1}` : project.paperTitle}
                   </a>
                 ))}
               </div>
            </div>
            
            <div className="space-y-12">
              {project.pdfPaths.map((path, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-[900px] flex items-center justify-center relative group">
                  <iframe
                    src={`${path}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-none"
                    title={`${project.title} ${project.paperTitle} ${i+1}`}
                  />
                  {/* Subtle Loading/Fallback overlay */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                    <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/10 text-xs text-white/50">
                      <FileText size={14} /> Interactive Viewer Mode
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>
      </main>

      {/* Footer Info */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em]">AI Research Lab Terminal</span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-[0.3em]">© 2026 Tatikonda Karthikeya</p>
        </div>
      </footer>
    </div>
  );
}
