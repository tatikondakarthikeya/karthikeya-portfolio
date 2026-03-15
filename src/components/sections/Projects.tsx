"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Github, Activity, Car, ActivitySquare, FileText } from "lucide-react";

const PROJECTS = [
  {
    title: "FusionX AI Analytics Studio",
    description: "A Streamlit-based machine learning analytics platform that integrates SQL ETL pipelines, real-time dashboards, machine learning models, and automated reporting to analyze datasets efficiently.",
    tags: ["Python", "Streamlit", "Machine Learning", "SQL", "ETL Pipelines"],
    icon: <Activity size={32} className="text-accent" />,
    github: "https://github.com/tatikondakarthikeya/fusionx-ai-analytics-studio",
    delay: 0.1,
  },
  {
    title: "Automated Real-Time Vehicle Parking System",
    description: "IoT-based smart parking system built using Raspberry Pi Pico, ESP8266, IR sensors, and RFID modules. The system monitors parking slot availability in real time and enables automated slot detection and management.",
    tags: ["IoT", "Raspberry Pi Pico", "ESP8266", "C++", "Sensors", "Arduino"],
    icon: <Car size={32} className="text-purple-400" />,
    report: "/work/vehicle-parking-system.pdf",
    delay: 0.2,
  },
  {
    title: "Arduino Earthquake Detector with Seismograph",
    description: "A real-time earthquake detection system using Arduino and accelerometer sensors that detects ground vibrations and visualizes seismic activity using a graphical seismograph.",
    tags: ["Arduino", "Hardware", "Sensors", "Data Visualization"],
    icon: <ActivitySquare size={32} className="text-teal-400" />,
    report: "/work/arduino-earthquake-detector.pdf",
    delay: 0.3,
  },
];

export default function Projects() {
  return (
    <SectionReveal id="projects" className="bg-background relative py-32 z-10">
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>
        <p className="text-foreground/60 max-w-md">
          A selection of my recent engineering and machine learning solutions solving practical problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <GlassCard key={idx} delay={project.delay} hoverGlow className="flex flex-col h-full border border-white/5 hover:border-accent/30 group p-2">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-6 flex-grow leading-relaxed font-light text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/5 text-foreground/50 rounded-lg group-hover:border-accent/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.github || project.report) && (
                <div className="pt-8 border-t border-white/5 mt-8 flex flex-col gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      <span>View GitHub</span>
                    </a>
                  )}
                  {project.report && (
                    <a 
                      href={project.report} 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={14} />
                      <span>View Project Report</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionReveal>
  );
}
