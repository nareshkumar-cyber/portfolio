"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Code2, ShieldCheck, Trophy, Sparkles, Terminal, GraduationCap, CheckCircle2, Award, BookOpen } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { resumeEducation, resumeAreasOfInterest, resumeCertifications } from "@/data/skillsData";

const identityPillars = [
  {
    title: "AI & ML Engineer",
    icon: Brain,
    desc: "Architecting statistical ML classifiers, deep neural models, and independent RAG knowledge retrieval systems.",
    tag: "INTELLIGENCE"
  },
  {
    title: "AI-Driven Security",
    icon: ShieldCheck,
    desc: "Detecting phishing threat vectors, conducting URL feature extraction, and applying defensive coding practices.",
    tag: "SECURITY"
  },
  {
    title: "Systems & Database",
    icon: Code2,
    desc: "Engineering full-stack habit tracking web apps (Flask/Python) and normalized relational database schemas (SQL/DBMS).",
    tag: "SYSTEMS"
  },
  {
    title: "Hackathon Prototyper",
    icon: Trophy,
    desc: "Translating ambiguous challenges into working voice AI prototypes (Gemini API) and presenting to technical panels.",
    tag: "INNOVATION"
  }
];

const stats = [
  { value: 8.09, suffix: "", isDecimal: true, label: "Current CGPA", sub: "4 semesters completed at KCE" },
  { value: 5, suffix: "+", isDecimal: false, label: "Flagship Projects", sub: "RAG, ML, Gemini Voice & DBMS" },
  { value: 5, suffix: "", isDecimal: false, label: "Certifications", sub: "IBM AI Agent & Cyber Security" },
  { value: 1, suffix: " mo", isDecimal: false, label: "Cybersec Intern", sub: "Python & Cyber Security" }
];

export default function AboutSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
          02 / ABOUT IDENTITY &amp; BACKGROUND
        </span>
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Narrative, Education & Areas of Interest */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.95] mb-8">
            WHO AM <span className="text-cyber-acid italic">I?</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">Nareshkumar A</strong>, an AI &amp; Data Science student at Kathir College of Engineering, passionate about modern AI, innovation, and practical real-world problem solving.
            </p>
            <p>
              My work centers on <span className="text-cyber-acid font-medium">Generative AI, Machine Learning, RAG architectures, AI Agents</span>, and <span className="text-cyber-cyan font-medium">Cybersecurity</span>. I bridge machine intelligence with robust engineering—from building high-precision phishing URL detectors to developing bilingual voice assistants with Google Gemini and solo RAG academic assistants.
            </p>
          </div>

          {/* Education Spotlight Card */}
          <div className="w-full mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#09111b] to-[#070b10] border border-cyber-cyan/30 shadow-lg relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-cyber-acid font-bold">
                    EDUCATION // 2024–2028 (ONGOING)
                  </span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyber-acid/15 border border-cyber-acid/40 text-cyber-acid font-bold">
                    CGPA: 8.09
                  </span>
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg mt-1">
                  Kathir College of Engineering
                </h4>
                <p className="font-mono text-xs text-cyber-cyan">
                  B.Tech – Artificial Intelligence and Data Science
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Coimbatore, Tamil Nadu • 4 semesters completed • Active in hackathons, technical events, and project-based learning.
                </p>
              </div>
            </div>
          </div>

          {/* Areas of Interest Badges */}
          <div className="w-full mt-6">
            <span className="font-mono text-[11px] text-gray-400 tracking-wider uppercase block mb-3">
              // AREAS OF INTEREST
            </span>
            <div className="flex flex-wrap gap-2">
              {resumeAreasOfInterest.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyber-cyan/40 font-mono text-xs text-gray-300 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-8">
            {identityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090e15] border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan group-hover:text-cyber-acid group-hover:border-cyber-acid transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Holographic Identity Card & Counters */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* 3D Tilt Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="w-full rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0c131c] via-[#090d14] to-[#06080c] border border-cyber-cyan/30 shadow-[0_15px_45px_rgba(0,0,0,0.8)] relative overflow-hidden group"
          >
            {/* Background Hologram Mesh Glow */}
            <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-cyber-acid/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-cyber-cyan/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-cyber-acid animate-pulse" />
                <span className="font-mono text-xs font-bold text-cyber-acid tracking-widest">
                  IDENTITY VERIFIED // 2026
                </span>
              </div>
              <span className="font-mono text-[10px] text-gray-500">LOC: COIMBATORE, TN</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/nareshkumar-portrait.png"
                  alt="Nareshkumar A"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">NARESHKUMAR A</h4>
                <p className="font-mono text-xs text-cyber-cyan">B.Tech AI &amp; Data Science (CGPA: 8.09)</p>
                <p className="text-[11px] text-gray-400">Kathir College of Engineering • AI &amp; Cyber Defense</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-gray-500 text-[10px] block">PRIMARY DISCIPLINE</span>
                <span className="text-cyber-acid font-semibold">AI &amp; Data Science</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-gray-500 text-[10px] block">SECURITY SPECIALTY</span>
                <span className="text-cyber-cyan font-semibold">AI-Driven Security</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-gray-500 text-[10px] block">GENAI FOCUS</span>
                <span className="text-purple-400 font-semibold">RAG, LLMs &amp; Agents</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-gray-500 text-[10px] block">ACADEMIC RECORD</span>
                <span className="text-white font-semibold">CGPA 8.09 (4 Sems)</span>
              </div>
            </div>
          </div>

          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#080d14] border border-white/10 flex flex-col items-start justify-center hover:border-cyber-acid/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white flex items-baseline gap-0.5 mb-1">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.isDecimal ? 2 : 0}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-cyber-acid tracking-wider uppercase">
                  {s.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-1">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Certifications Preview Banner */}
          <div className="p-5 rounded-2xl bg-[#080c12] border border-white/10 font-mono">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-cyber-cyan font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyber-acid" />
                VERIFIED CERTIFICATIONS
              </span>
              <span className="text-[10px] text-gray-500">5 CREDENTIALS</span>
            </div>
            <div className="space-y-2">
              {resumeCertifications.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-gray-300">{c.name}</span>
                  <span className="text-[10px] text-cyber-acid px-2 py-0.5 rounded bg-cyber-acid/10 border border-cyber-acid/30">
                    {c.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
