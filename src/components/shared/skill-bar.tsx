"use client";

import * as si from "simple-icons";
import type { SkillItem } from "@/types";

interface SkillBadgeProps {
  skill: SkillItem;
}

function getIcon(slug: string): string | null {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof si;
  const icon = si[key] as { svg: string } | undefined;
  return icon?.svg ?? null;
}

export function SkillBar({ skill }: SkillBadgeProps) {
  const svgContent = skill.icon ? getIcon(skill.icon) : null;

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-muted">
      {svgContent ? (
        <span
          className="h-4 w-4 shrink-0 opacity-80"
          style={{ display: "inline-flex", alignItems: "center" }}
          dangerouslySetInnerHTML={{
            __html: svgContent
              .replace("<svg", `<svg width="16" height="16" fill="currentColor"`)
              .replace(/fill="[^"]*"/g, 'fill="currentColor"'),
          }}
        />
      ) : (
        <span className="h-4 w-4 shrink-0 rounded-sm bg-foreground/20" />
      )}
      <span>{skill.name}</span>
    </div>
  );
}
