"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, ShieldAlert, Cpu, ArrowRight, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-cyber-cyan/30 bg-[#080d14]/95 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.9)] p-6 sm:p-8 md:p-10 font-sans"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-acid hover:text-cyber-acid transition-all duration-200 text-gray-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Eyebrow & Header */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest px-2.5 py-1 rounded-md bg-cyber-acid/10 border border-cyber-acid/20">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-cyber-cyan tracking-wider">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            {project.subtitle}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-start justify-center"
              >
                <span className="text-xl sm:text-2xl font-mono font-bold text-cyber-acid">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-[#0e1620]/60 border border-red-500/20">
              <div className="flex items-center gap-2 mb-2.5 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0e1620]/60 border border-cyber-acid/20">
              <div className="flex items-center gap-2 mb-2.5 text-cyber-acid font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                Engineered Solution
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-cyber-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              System Architecture Flow
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 overflow-x-auto">
              {project.architectureSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 min-w-[140px] p-3 rounded-lg bg-cyber-dark/80 border border-cyber-cyan/20 flex flex-col justify-center">
                    <span className="font-mono text-[10px] text-cyber-acid mb-1">0{idx + 1}. STEP</span>
                    <span className="font-mono text-xs font-semibold text-gray-200">{step}</span>
                  </div>
                  {idx < project.architectureSteps.length - 1 && (
                    <ArrowRight className="hidden sm:block w-4 h-4 text-gray-500 shrink-0 mx-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-cyber-cyan uppercase tracking-widest mb-3">
              Key Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-acid mt-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-cyber-cyan uppercase tracking-widest mb-3">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pt-4 border-t border-white/10">
            <div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-1">Key Challenge</span>
              <p className="text-xs sm:text-sm text-gray-300">{project.challenges}</p>
            </div>
            <div>
              <span className="font-mono text-xs text-cyber-acid uppercase tracking-wider block mb-1">Impact & Results</span>
              <p className="text-xs sm:text-sm text-gray-300">{project.results}</p>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono font-semibold text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-acid text-black text-xs font-mono font-bold hover:bg-[#e2ff85] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Case Preview
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
