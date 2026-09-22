"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Code2, Wrench, Shield, Check, Layers, Zap } from "lucide-react";
import { skillsCategories } from "@/data/skillsData";

export default function SkillsSection() {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const displayedCategories = selectedCat === "all"
    ? skillsCategories
    : skillsCategories.filter((c) => c.id === selectedCat);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
          03 / CAPABILITIES
        </span>
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
            SKILL <span className="text-cyber-cyan italic">MATRIX.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            An engineered stack spanning deep machine learning models, autonomous generative AI pipelines, and modern web architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#090e15] border border-white/10">
          <button
            type="button"
            onClick={() => setSelectedCat("all")}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
              selectedCat === "all"
                ? "bg-cyber-acid text-black font-bold shadow-[0_0_15px_rgba(209,255,86,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All Disciplines
          </button>
          {skillsCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                selectedCat === c.id
                  ? "bg-cyber-acid text-black font-bold shadow-[0_0_15px_rgba(209,255,86,0.3)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories and Skills */}
      <div className="space-y-10">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl p-6 sm:p-8 bg-[#070b10]/80 border border-white/10 relative overflow-hidden backdrop-blur-md"
          >
            {/* Category Header */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyber-acid px-2.5 py-1 rounded bg-cyber-acid/10 border border-cyber-acid/20">
                  {category.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-gray-400">
                    {category.tagline}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-cyber-cyan hidden sm:inline-block">
                {category.skills.length} VERIFIED MODULES
              </span>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyber-cyan/40 hover:bg-cyber-cyan/[0.03] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                  data-cursor="SKILL"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-acid/10 border border-cyber-acid/30 text-cyber-acid">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>STATUS: OPTIMIZED</span>
                    <Zap className="w-3 h-3 text-cyber-acid group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
