"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0,
      ease: [0.25, 0.4, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  once = true,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};
