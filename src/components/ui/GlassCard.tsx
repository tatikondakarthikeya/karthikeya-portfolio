"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: boolean;
}

export default function GlassCard({ children, className, delay = 0, hoverGlow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "glass rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group",
        hoverGlow && "hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]",
        className
      )}
    >
      {/* Optional Glow Effect Background on Hover */}
      {hoverGlow && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent blur-xl" />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
