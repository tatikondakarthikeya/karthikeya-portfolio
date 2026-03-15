"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    if (disabled) return "bg-white/5 text-white/30 border border-white/5 cursor-not-allowed";
    switch (variant) {
      case "primary":
        return "bg-accent text-white hover:bg-accent-neon hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] border border-transparent";
      case "secondary":
        return "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md";
      case "outline":
        return "bg-transparent text-accent hover:text-accent-neon border border-accent hover:border-accent-neon hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]";
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      disabled={disabled}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={clsx(
        "relative rounded-full px-8 py-3 font-medium transition-colors duration-300 z-10 overflow-hidden group",
        getVariantStyles(),
        className
      )}
      data-cursor-hover
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
