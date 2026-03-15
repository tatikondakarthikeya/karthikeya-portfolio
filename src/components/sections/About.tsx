"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Coffee, Brain, Terminal, Cpu } from "lucide-react";

export default function About() {
  return (
    <SectionReveal id="about" className="bg-background relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-neon/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          About <span className="text-gradient">Me</span>.
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Main Bio */}
        <div className="md:col-span-7 lg:col-span-8">
          <GlassCard className="h-full p-8 md:p-10 border-t-accent/20">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Terminal className="text-accent" />
              The Journey
            </h3>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
              <p>
                I am a B.Tech Computer Science student at VIT Amaravati deeply focused on Artificial Intelligence, IoT systems, and automation. 
                My passion lies at the intersection of hardware and advanced machine learning modeling.
              </p>
              <p>
                From building space debris trajectory prediction models to developing real-time earthquake detection seismographs using microcontrollers, 
                I thrive in environments where software models directly impact and interact with the physical world.
              </p>
              <p>
                I am experienced in engineering high-throughput machine learning pipelines, embedded systems integration, and applied research solutions aimed at solving tangible real-world problems.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "AI Models", val: "10+" },
                { label: "IoT Systems", val: "5+" },
                { label: "Publications", val: "1" },
                { label: "Conferences", val: "2" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl font-bold text-accent mb-1">{stat.val}</div>
                  <div className="text-sm text-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Quick Facts */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <GlassCard delay={0.2} hoverGlow className="flex-1 flex flex-col justify-center">
             <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl text-accent hidden sm:block">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Research Focus</h4>
                <p className="text-foreground/60 text-sm">Computer Vision, Predictive Modeling, Space Tech</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.3} hoverGlow className="flex-1 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl text-accent-neon hidden sm:block">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Hardware Setup</h4>
                <p className="text-foreground/60 text-sm">Raspberry Pi, ESP8266, Arduino, Jetson Nano</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.4} hoverGlow className="flex-1 flex flex-col justify-center">
             <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl text-foreground hidden sm:block">
                <Coffee size={24} />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Driven By</h4>
                <p className="text-foreground/60 text-sm">Open source contribution, continuous learning</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionReveal>
  );
}
