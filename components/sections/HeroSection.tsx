"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Download, Cpu, User, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";
import dynamic from "next/dynamic";
import SceneContainer from "@/components/3d/SceneContainer";

// Dynamically import 3D Neural Core with SSR disabled
const NeuralCoreScene = dynamic(() => import("@/components/3d/NeuralCoreScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[380px] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-cyber-acid border-t-transparent animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  const [viewMode, setViewMode] = useState<"3d" | "portrait">("3d");
  const [downloadingResume, setDownloadingResume] = useState(false);

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    setTimeout(() => {
      const resumeContent = `NARESHKUMAR A
B.Tech – Artificial Intelligence & Data Science | AI Engineering & AI-Driven Security
Phone: +91 9363728989 | Email: nk6404250@gmail.com | Coimbatore, TN
LinkedIn: https://linkedin.com/in/nareshkuar | GitHub: https://github.com/nareshkuar

========================================================================
PROFESSIONAL SUMMARY
========================================================================
AI & Data Science student passionate about modern AI and Innovation.
Exploring Generative AI, ML, RAG, AI Agents, and Cybersecurity to build
intelligent solutions for real-world challenges.

========================================================================
EDUCATION
========================================================================
B.Tech – Artificial Intelligence and Data Science | 2024–2028 (Ongoing)
Kathir College of Engineering, Coimbatore, Tamil Nadu
• CGPA: 8.09 — 4 semesters completed
• Active in hackathons, technical events, and project-based learning

========================================================================
TECHNICAL SKILLS
========================================================================
Python, Machine Learning, Deep Learning, NLP, LLMs, RAG, MCP, AI Agents,
TensorFlow, Git/GitHub, Supabase, Cybersecurity, SQL/DBMS, Flask, HTML/CSS/JS

========================================================================
PROJECTS
========================================================================
1. Consistency Tracker (2026)
   Academic Project | Python, Flask, HTML, CSS, JavaScript, Database
   • Developed a productivity and habit-tracking web application to help users maintain daily consistency and monitor activity streaks.
   • Implemented task scheduling, progress tracking, streak management, and reminder features to encourage regular habits and improve productivity.

2. Phishing Website Identification Using Machine Learning (2025)
   Mini Project | Python, Machine Learning, URL Feature Extraction
   • Classified phishing websites using URL feature analysis and ML-based detection achieving high precision in identifying malicious pages.

3. Crime Details Store – DBMS Project (2026)
   Academic Project | SQL, DBMS, Database Design, Python
   • Designed a normalized relational database with SQL-based queries to store, retrieve, and report crime case details including suspects, victims, and case status.

4. Department Knowledge Assistant – RAG-Based Chatbot (2026)
   Solo Academic Project | Python, RAG, LLM, Vector Database, NLP
   • Built a Retrieval-Augmented Generation (RAG) chatbot to answer student queries on department syllabus, faculty, and academic resources.
   • Designed the document embedding and retrieval pipeline independently, integrating an LLM with a vector database for accurate, context-aware responses.

========================================================================
INTERNSHIP
========================================================================
Python & Cyber Security Intern (20 May 2026 – 20 June 2026)
One-Month Internship | Python, Cyber Security
• Completed a one-month internship focused on Python programming and cyber security fundamentals, including threat analysis and secure coding practices.

========================================================================
CERTIFICATIONS
========================================================================
• AI Fluency: Framework & Foundations (Anthropic)
• Cyber Security Fundamentals – Course 1 (Completed)
• Cyber Security Fundamentals – Course 2 (Completed)
• AI Agent (IBM) — Batch 1
• AI Fundamental (IBM) – Batch 2
• Network security analysis – Course 1 (Completed)

========================================================================
HACKATHONS & COMPETITIONS
========================================================================
AI-Based Voice-Controlled Food Ordering System (2025)
Hackathon Project | Google Gemini API, Python, Speech-to-Text, TTS, NLP
• Developed a bilingual (Tamil & English) voice AI agent using Gemini for intent recognition and food item extraction from spoken commands.
• Designed conversational ordering flow with menu suggestions, confirmation, and accessibility-focused smart processing.
• Participated in multiple inter-college hackathons, building working prototypes under time pressure and presenting to technical panels.
• Demonstrated skills in rapid prototyping, collaborative development, and AI integration in competitive environments.

========================================================================
AREAS OF INTEREST
========================================================================
AI Engineering • AI-Driven Security • Machine Learning • Ethical Hacking • AI Application Development • AI Automation
`;
      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nareshkumar_A_Resume.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadingResume(false);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyber-cyan/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyber-acid/10 blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        {/* Left Column: Cinematic Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
          {/* Eyebrow Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyber-cyan/30 text-cyber-cyan font-mono text-[11px] tracking-widest uppercase mb-5 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-acid animate-ping" />
            <span>AI ENGINEERING &amp; AI-DRIVEN SECURITY</span>
            <span className="text-gray-500">•</span>
            <span className="text-cyber-acid font-semibold">COIMBATORE, TN</span>
          </motion.div>

          {/* Primary Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] text-white uppercase mb-4"
          >
            NARESHKUMAR <span className="text-cyber-acid italic font-normal">A</span>
          </motion.h1>

          {/* Subheading / Degree & Focus Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-sm sm:text-lg font-mono font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-acid mb-5"
          >
            <span className="text-white">B.Tech – Artificial Intelligence &amp; Data Science</span>
            <span className="text-cyber-acid">•</span>
            <span className="text-cyber-cyan">AI Engineering</span>
            <span className="text-cyber-acid">•</span>
            <span className="text-xs sm:text-sm text-purple-300 font-normal px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
              AI-Driven Security
            </span>
          </motion.div>

          {/* Supporting Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8"
          >
            AI &amp; Data Science student passionate about <strong className="text-white font-semibold">modern AI and Innovation</strong>. Exploring <span className="text-cyber-acid font-medium">Generative AI, ML, RAG, AI Agents</span>, and <span className="text-cyber-cyan font-medium">Cybersecurity</span> to build intelligent solutions for real-world challenges.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8"
          >
            <a
              href="#projects"
              data-cursor="PROJECTS"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyber-acid text-black font-mono text-sm font-extrabold hover:bg-[#e2ff85] hover:shadow-[0_0_30px_rgba(209,255,86,0.45)] transition-all duration-300 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              data-cursor="CONTACT"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-cyber-cyan/30 hover:border-cyber-cyan text-white font-mono text-sm font-semibold transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-cyber-cyan" />
            </a>

            <button
              type="button"
              onClick={handleResumeDownload}
              data-cursor="RESUME"
              suppressHydrationWarning
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-mono text-xs transition-colors"
            >
              <Download className="w-4 h-4 text-cyber-acid" />
              <span>{downloadingResume ? "Generating..." : "Download Resume"}</span>
            </button>
          </motion.div>

          {/* Micro Credentials Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-white/10 text-xs font-mono text-gray-400"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyber-acid" />
              <span>Kathir College of Engg • CGPA 8.09</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
              <span>Python &amp; Cyber Security Intern</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>IBM AI Agent &amp; RAG Systems</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Neural Core Orb & Visualizer */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          {/* Mode Switcher Pills */}
          <div className="absolute top-0 right-0 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-[#0b1118]/80 border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode("3d")}
              className={`px-3 py-1 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all ${
                viewMode === "3d"
                  ? "bg-cyber-acid text-black font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>3D Neural Core</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("portrait")}
              className={`px-3 py-1 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all ${
                viewMode === "portrait"
                  ? "bg-cyber-acid text-black font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Identity</span>
            </button>
          </div>

          {/* Display Container */}
          <div className="relative w-full aspect-square max-w-[460px] flex items-center justify-center">
            {viewMode === "3d" ? (
              <SceneContainer minHeight="min-h-[420px]" fallbackText="GENERATING NEURAL NETWORK...">
                <NeuralCoreScene />
              </SceneContainer>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 border-2 border-cyber-cyan/40 bg-gradient-to-br from-cyber-cyan/20 to-cyber-acid/20 shadow-[0_0_50px_rgba(0,242,254,0.3)] flex items-center justify-center overflow-hidden group">
                  <img
                    src="/nareshkumar-portrait.png"
                    alt="Nareshkumar A - AI Engineer"
                    className="w-full h-full object-cover rounded-full filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full border border-cyber-acid/40 pointer-events-none" />
                </div>
              </motion.div>
            )}

            {/* Floating Futuristic HUD Tags */}
            <div className="absolute top-12 left-0 sm:-left-4 px-3 py-1.5 rounded-lg bg-[#080d14]/90 border border-cyber-cyan/40 backdrop-blur-md font-mono text-[10px] tracking-wider text-cyber-cyan shadow-[0_0_15px_rgba(0,242,254,0.2)] pointer-events-none">
              <span className="text-cyber-acid font-bold">AI &amp; DATA SCIENCE</span> // KCE
            </div>

            <div className="absolute bottom-10 right-0 sm:-right-4 px-3 py-1.5 rounded-lg bg-[#080d14]/90 border border-cyber-acid/40 backdrop-blur-md font-mono text-[10px] tracking-wider text-cyber-acid shadow-[0_0_15px_rgba(209,255,86,0.2)] pointer-events-none">
              RAG • AGENTS • SECURITY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
