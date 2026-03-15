"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PhoneCall, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "karthikeyatatikonda@gmail.com",
    href: "mailto:karthikeyatatikonda@gmail.com",
    icon: Mail,
    color: "accent"
  },
  {
    label: "Phone",
    value: "+91 9908529278",
    href: "tel:+919908529278",
    icon: PhoneCall,
    color: "accent"
  },
  {
    label: "LinkedIn",
    value: "karthikeya-tatikonda",
    href: "https://www.linkedin.com/in/karthikeya-tatikonda-11567a205/",
    icon: Linkedin,
    color: "accent"
  },
  {
    label: "GitHub",
    value: "tatikondakarthikeya",
    href: "https://github.com/tatikondakarthikeya",
    icon: Github,
    color: "accent"
  }
];

export default function Contact() {
  return (
    <SectionReveal id="contact" className="bg-background relative py-32 mb-20 overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="mb-16 md:text-center relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Let&apos;s <span className="text-gradient">Connect</span>.
        </h2>
        <div className="w-20 md:mx-auto h-1 bg-accent rounded-full mb-6"></div>
        <p className="text-foreground/60 max-w-xl mx-auto text-lg">
          Whether you have a specific inquiry or just want to explore opportunities, I&apos;m always open to discussing tech and collaborations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <GlassCard className="border border-white/5 p-8 md:p-12 overflow-hidden group" hoverGlow>
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-colors duration-700"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {CONTACT_INFO.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                data-cursor-hover
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-accent/40 group-hover/item:bg-accent/10 transition-all duration-300">
                    <item.icon size={24} className="group-hover/item:scale-110 transition-transform duration-300 text-foreground/80 group-hover/item:text-accent" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent/60 group-hover/item:text-accent transition-colors">
                      {item.label}
                    </span>
                    {item.href.startsWith("http") && (
                      <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-accent" />
                    )}
                  </div>
                  <div className="text-lg md:text-xl font-medium text-foreground/90 group-hover/item:text-white transition-colors break-all">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left">
            <p className="text-foreground/40 text-sm max-w-lg">
              Based in India, working globally. Feel free to reach out via any of these channels. I typically respond within 24 hours.
            </p>
          </div>
        </GlassCard>
      </div>
    </SectionReveal>
  );
}
