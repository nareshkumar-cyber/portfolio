"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Sparkles,
} from "lucide-react";

export interface CoverflowItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  category?: string;
  tag?: string;
  file?: string;
  type?: "image" | "pdf";
  badgeColor?: string;
  description?: string;
}

interface CoverflowCarouselProps {
  items: CoverflowItem[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  onItemSelect?: (item: CoverflowItem, index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number; // in ms, default 3500
  compact?: boolean;
  showControls?: boolean;
  showReflection?: boolean;
  className?: string;
}

export default function CoverflowCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveIndexChange,
  onItemSelect,
  autoPlay = true,
  autoPlayInterval = 3500,
  compact = false,
  showControls = true,
  showReflection = true,
  className = "",
}: CoverflowCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;
  const count = items.length;

  const setIndex = useCallback(
    (newIndex: number) => {
      const wrapped = ((newIndex % count) + count) % count;
      if (onActiveIndexChange) {
        onActiveIndexChange(wrapped);
      } else {
        setInternalIndex(wrapped);
      }
    },
    [count, onActiveIndexChange]
  );

  const handleNext = useCallback(() => {
    setIndex(currentIndex + 1);
  }, [currentIndex, setIndex]);

  const handlePrev = useCallback(() => {
    setIndex(currentIndex - 1);
  }, [currentIndex, setIndex]);

  // Auto-rotation timer
  useEffect(() => {
    if (!isPlaying || isHovered || count <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, count, autoPlayInterval, handleNext]);

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  // Drag / Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    setDragStartX(null);
  };

  // Dimensions based on compact vs full mode
  const cardWidth = compact ? 220 : 340;
  const cardHeight = compact ? 140 : 215;
  const perspective = compact ? 900 : 1250;
  const spacing = compact ? 88 : 160;
  const depthZ = compact ? 90 : 140;
  const rotateDeg = compact ? 38 : 46;
  const visibleRange = 3; // Number of visible side cards

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative flex flex-col items-center select-none outline-none ${className}`}
      style={{ perspective: `${perspective}px` }}
    >
      {/* 3D Coverflow Stage */}
      <div
        className="relative w-full flex items-center justify-center overflow-visible"
        style={{
          height: `${cardHeight + (showReflection ? (compact ? 45 : 70) : 10)}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, index) => {
          // Calculate circular offset distance
          let diff = (index - currentIndex) % count;
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;

          const isVisible = Math.abs(diff) <= visibleRange;
          const isActive = diff === 0;

          // Spatial 3D coordinates
          const xOffset = diff * spacing;
          const zOffset = -Math.abs(diff) * depthZ;
          const rotationY = diff === 0 ? 0 : diff > 0 ? -rotateDeg : rotateDeg;
          const scale = Math.max(0.65, 1 - Math.abs(diff) * (compact ? 0.12 : 0.14));
          const opacity = isVisible ? Math.max(0.2, 1 - Math.abs(diff) * 0.28) : 0;
          const zIndex = 30 - Math.abs(diff);

          return (
            <motion.div
              key={item.id}
              onClick={() => {
                if (isActive) {
                  onItemSelect?.(item, index);
                } else {
                  setIndex(index);
                }
              }}
              animate={{
                x: xOffset,
                z: zOffset,
                rotateY: rotationY,
                scale,
                opacity,
                filter: isActive
                  ? "brightness(105%) contrast(105%)"
                  : `brightness(${Math.max(0.35, 1 - Math.abs(diff) * 0.25)})`,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.8,
              }}
              style={{
                position: "absolute",
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                zIndex,
                cursor: "pointer",
                transformStyle: "preserve-3d",
                pointerEvents: isVisible ? "auto" : "none",
              }}
              className="group"
            >
              {/* Main 3D Card Surface */}
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isActive
                    ? "border-cyber-acid shadow-[0_0_35px_rgba(209,255,86,0.35)] ring-1 ring-cyber-acid/50"
                    : "border-white/10 hover:border-cyber-cyan/50 shadow-lg"
                } bg-[#0a0f16]`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

                {/* Card Tags & Category */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
                  {item.category && (
                    <span
                      className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md uppercase tracking-wider"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.75)",
                        color: item.badgeColor || "#00f2fe",
                        border: `1px solid ${item.badgeColor ? item.badgeColor + "50" : "rgba(0,242,254,0.4)"}`,
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                  {isActive && (
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyber-acid text-black flex items-center gap-1 shadow">
                      <Sparkles className="w-2.5 h-2.5" />
                      ACTIVE
                    </span>
                  )}
                </div>

                {/* Card Info Overlay */}
                <div className="absolute bottom-2 left-2.5 right-2.5 pointer-events-none">
                  <h4 className="text-white font-bold text-xs sm:text-sm truncate drop-shadow-md">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-[10px] font-mono text-gray-300 truncate drop-shadow">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Click to inspect prompt on hover for active card */}
                {isActive && (
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="font-mono text-xs font-bold text-black bg-cyber-acid px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg transform group-hover:scale-105 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                      OPEN FULL
                    </span>
                  </div>
                )}
              </div>

              {/* 3D Floor Reflection */}
              {showReflection && (
                <div
                  className="absolute left-0 right-0 pointer-events-none overflow-hidden rounded-2xl opacity-25"
                  style={{
                    top: `${cardHeight + 4}px`,
                    height: `${compact ? 35 : 55}px`,
                    transform: "scaleY(-1)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                    filter: "blur(0.5px)",
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Controls & Autoplay Progress */}
      {showControls && (
        <div className="w-full max-w-sm mt-3 px-2 flex flex-col items-center gap-2 relative z-30">
          {/* Neon Autoplay Progress Line */}
          {isPlaying && (
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "0%" : "100%" }}
                transition={{
                  duration: autoPlayInterval / 1000,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-acid to-cyber-acid"
              />
            </div>
          )}

          {/* Navigation Bar */}
          <div className="w-full flex items-center justify-between gap-3 font-mono text-xs text-gray-400">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              data-cursor="PREV"
              aria-label="Previous photo"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/50 text-gray-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Middle Status & Play/Pause */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                className={`p-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                  isPlaying
                    ? "bg-cyber-acid/10 border-cyber-acid/40 text-cyber-acid"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 fill-current" />
                    <span className="text-[10px] hidden sm:inline">AUTOPLAY</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span className="text-[10px] hidden sm:inline">PLAY</span>
                  </>
                )}
              </button>

              <span className="text-[11px] text-gray-300 font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10">
                {String(currentIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              data-cursor="NEXT"
              aria-label="Next photo"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/50 text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
