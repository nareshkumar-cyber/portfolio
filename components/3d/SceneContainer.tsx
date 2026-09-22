"use client";

import React, { useState, useEffect } from "react";

interface SceneContainerProps {
  children: React.ReactNode;
  fallbackText?: string;
  minHeight?: string;
}

export default function SceneContainer({
  children,
  fallbackText = "INITIALIZING 3D ENGINE...",
  minHeight = "min-h-[360px]"
}: SceneContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full ${minHeight} flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-cyber-dark/40 backdrop-blur-md`}>
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-cyber-cyan/30 animate-ping" />
          <div className="w-8 h-8 rounded-full border-2 border-cyber-acid border-t-transparent animate-spin" />
        </div>
        <p className="font-mono text-xs text-cyber-cyan tracking-widest uppercase">{fallbackText}</p>
      </div>
    );
  }

  return <>{children}</>;
}
