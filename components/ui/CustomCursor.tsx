"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "text">("default");
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor], a, button, input, [role='button']");
      if (interactive) {
        const customText = interactive.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
          setCursorVariant("project");
        } else if (interactive.tagName === "A" || interactive.tagName === "BUTTON") {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-cyber-acid/80"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "project" ? 72 : cursorVariant === "hover" ? 44 : 28,
          height: cursorVariant === "project" ? 72 : cursorVariant === "hover" ? 44 : 28,
          backgroundColor: cursorVariant === "project" ? "rgba(209, 255, 86, 0.15)" : cursorVariant === "hover" ? "rgba(0, 242, 254, 0.12)" : "rgba(209, 255, 86, 0.03)",
          borderColor: cursorVariant === "hover" ? "#00f2fe" : "#d1ff56",
          backdropFilter: cursorVariant === "project" ? "blur(3px)" : "none",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono font-bold tracking-wider text-cyber-acid uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#d1ff56]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "project" ? 0 : cursorVariant === "hover" ? 1.5 : 1,
          opacity: cursorVariant === "project" ? 0 : 1,
        }}
      />
    </>
  );
}
