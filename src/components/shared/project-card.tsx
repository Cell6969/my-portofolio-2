"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
}

export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  return (
    <motion.button
      layout
      onClick={() => onClick(project)}
      className={cn(
        "group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full overflow-hidden p-6 transition-colors duration-300 group-hover:border-foreground/20">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-1">
            <Badge variant="outline" className="mb-3">
              {project.category}
            </Badge>
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.year}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:rotate-45" />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="muted" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="muted" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-lg font-bold">{metric.value}</span>
              <span className="text-xs text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </motion.button>
  );
}
