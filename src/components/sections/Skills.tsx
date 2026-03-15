"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import clsx from "clsx";

const SKILLS_DATA = [
  {
    category: "Technical Skills",
    items: ["Java", "Python", "Linux", "SQL", "Git", "Frontend Development"],
    color: "from-accent to-accent-neon",
  },
  {
    category: "AI & Data Tools",
    items: ["CNN", "YOLO", "TensorFlow", "Image Segmentation", "Data Processing", "Automation"],
    color: "from-purple-500 to-accent",
  },
  {
    category: "Simulation & Tools",
    items: ["MATLAB", "Cisco Packet Tracer", "Overleaf", "Blender", "Canva"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Skills() {
  return (
    <SectionReveal id="skills" className="bg-background relative py-32">
      <div className="mb-16 md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          My <span className="text-gradient">Arsenal</span>.
        </h2>
        <div className="w-20 md:mx-auto h-1 bg-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((group, groupIdx) => (
          <div key={group.category} className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className={clsx("w-2 h-2 rounded-full mr-3 bg-gradient-to-r", group.color)}></span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.1 + groupIdx * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 210, 255, 0.3)" 
                  }}
                  className="px-4 py-2 rounded-full glass border border-white/5 hover:border-accent/30 text-sm font-medium text-foreground/80 cursor-default transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
