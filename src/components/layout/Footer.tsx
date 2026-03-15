"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-background relative overflow-hidden">
      {/* Subtle glow effect in the footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-neon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <a href="#" className="text-2xl font-bold tracking-tighter mb-2" data-cursor-hover>
            <span className="text-foreground">Tatikonda</span>
            <span className="text-accent-neon">.</span>
          </a>
          <p className="text-foreground/60 text-sm text-center md:text-left">
            AI Engineer | ML Researcher | IoT Innovator
          </p>
        </div>

        <div className="flex items-center space-x-6 mb-8 md:mb-0">
          <motion.a
            whileHover={{ y: -3, color: "#00d2ff" }}
            href="https://github.com/tatikondakarthikeya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors"
            data-cursor-hover
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: "#00d2ff" }}
            href="https://www.linkedin.com/in/karthikeya-tatikonda-11567a205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors"
            data-cursor-hover
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: "#00d2ff" }}
            href="mailto:karthikeyatatikonda@gmail.com"
            className="text-foreground/70 transition-colors"
            data-cursor-hover
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </motion.a>
        </div>
      </div>
      
      <div className="w-full border-t border-white/5 mt-8 pt-8 text-center">
        <p className="text-foreground/40 text-xs text-center md:text-left max-w-7xl mx-auto">
          &copy; {currentYear} Tatikonda Karthikeya. All rights reserved. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
