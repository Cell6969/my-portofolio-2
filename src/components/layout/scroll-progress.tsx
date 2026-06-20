"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-foreground"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    />
  );
}
