"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, User } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";

const ParticleCanvas = dynamic(() => import("@/components/ui/ParticleCanvas"), {
  ssr: false,
});

const ROLES = [
  "AI Engineer",
  "Machine Learning Researcher",
  "IoT Systems Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const ticker = setInterval(() => {
      const fullText = ROLES[roleIndex];

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at the end before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(ticker);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid md:grid-cols-1 gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start justify-center max-w-4xl max-h-full">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent-neon animate-pulse"></span>
            <span className="text-sm font-medium text-foreground/80">Available for Opportunities</span>
          </motion.div>

          <motion.div className="overflow-hidden mb-2">
            <motion.h2 
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
               className="text-xl md:text-2xl font-medium text-foreground/70 tracking-wide"
            >
              Hello, I&apos;m
            </motion.h2>
          </motion.div>

          <motion.div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
              Tatikonda <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-neon neon-glow">Karthikeya</span>
            </motion.h1>
          </motion.div>

          <motion.div className="overflow-hidden mb-8 h-10 md:h-14 lg:h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground/80 flex items-center md:justify-start justify-center"
            >
              <span className="mr-2">&gt;</span>
              {text}
              <span className="animate-pulse w-[3px] h-[30px] md:h-[40px] bg-accent-neon ml-1"></span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-12 text-center md:text-left"
          >
            Building intelligent systems that solve real-world problems. Specialized in AI algorithms, IoT architecture, and high-performance ML pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
          >
            <MagneticButton variant="primary">
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </a>
            </MagneticButton>
            
            <MagneticButton variant="secondary">
              <a href="#contact" className="flex items-center gap-2">
                <User size={18} /> Contact Me
              </a>
            </MagneticButton>

            <MagneticButton variant="outline">
              <a href="https://drive.google.com/file/d/1XLk_fOfYUozZeNCDplE2Fw3ocKYCBGis/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
