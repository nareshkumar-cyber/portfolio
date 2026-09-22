"use client";

import React from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { impactMetrics } from "@/data/leadershipData";

export default function ImpactSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((m, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-[#080d14]/80 border border-white/10 hover:border-cyber-acid/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-3">
                // 0{idx + 1} METRIC
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight group-hover:text-cyber-acid transition-colors">
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  decimals={m.isDecimal ? 2 : 0}
                />
              </div>
              <h3 className="font-mono text-sm font-bold text-cyber-cyan uppercase tracking-wider mt-3 mb-2">
                {m.label}
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pt-3 border-t border-white/5">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
