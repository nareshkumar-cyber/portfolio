"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal as TerminalIcon, Sparkles } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Terminal", href: "#terminal" },
  { name: "Contact", href: "#contact" },
];

export default function GlassNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "projects", "leadership", "terminal", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 md:py-6 transition-all duration-300 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "bg-[#080c11]/85 border-cyber-cyan/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-[#0b1017]/60 border-white/10 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-2.5 text-foreground font-bold tracking-tight"
            data-cursor="HOME"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-acid/20 to-cyber-cyan/20 border border-cyber-acid/40 flex items-center justify-center overflow-hidden group-hover:border-cyber-acid transition-all duration-300">
              <span className="font-mono text-sm font-extrabold text-cyber-acid group-hover:scale-110 transition-transform">NK</span>
              <div className="absolute inset-0 bg-cyber-acid/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-mono font-semibold text-white tracking-wider">NARESHKUMAR A</span>
              <span className="text-[10px] font-mono text-cyber-cyan/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-acid animate-pulse" />
                AI ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  data-cursor={item.name.toUpperCase()}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-lg ${
                    isActive
                      ? "text-cyber-acid font-bold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-lg bg-cyber-acid/10 border border-cyber-acid/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              data-cursor="TALK"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyber-acid text-black font-mono text-xs font-bold hover:bg-[#e2ff85] hover:shadow-[0_0_20px_rgba(209,255,86,0.4)] transition-all duration-300"
            >
              <span>Let&apos;s Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-cyber-acid transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyber-acid" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-cyber-cyan/30 bg-[#070b10]/95 backdrop-blur-2xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-cyber-cyan">SYSTEM NAVIGATION</span>
                <span className="text-[10px] font-mono text-cyber-acid flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-acid animate-pulse" /> ONLINE
                </span>
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-mono text-sm transition-all ${
                      isActive
                        ? "bg-cyber-acid/15 border border-cyber-acid/40 text-cyber-acid font-bold"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="text-xs text-cyber-acid">ACTIVE</span>}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full py-2.5 rounded-xl bg-cyber-acid text-black font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Contact Nareshkumar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
