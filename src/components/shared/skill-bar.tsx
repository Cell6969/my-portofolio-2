"use client";

import { motion } from "framer-motion";
import type { SkillItem } from "@/types";

interface SkillBarProps {
  skill: SkillItem;
  delay?: number;
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
