"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05080c] py-12 px-4 sm:px-6 lg:px-8 z-10 font-mono text-xs text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyber-acid/10 border border-cyber-acid/30 flex items-center justify-center font-bold text-cyber-acid font-mono">
            NK
          </div>
          <div>
            <span className="font-bold text-white tracking-wider block">NARESHKUMAR A</span>
            <span className="text-[11px] text-gray-500">B.Tech AI &amp; Data Science • AI Engineering &amp; Security • Kathir College of Engg</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-gray-400">
          <a href="#home" className="hover:text-cyber-acid transition-colors">Home</a>
          <a href="#about" className="hover:text-cyber-acid transition-colors">About</a>
          <a href="#skills" className="hover:text-cyber-acid transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyber-acid transition-colors">Projects</a>
          <a href="#leadership" className="hover:text-cyber-acid transition-colors">Leadership</a>
          <a href="#contact" className="hover:text-cyber-acid transition-colors">Contact</a>
        </div>

        {/* Right: Scroll to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500">© 2026 Nareshkumar A.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-acid hover:text-cyber-acid transition-colors text-gray-300"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
