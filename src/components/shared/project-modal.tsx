"use client";

import type { Project } from "@/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <Badge variant="outline" className="w-fit mb-2">
            {project.category}
          </Badge>
          <ModalTitle className="text-2xl">{project.title}</ModalTitle>
          <ModalDescription>
            {project.role} · {project.year}
          </ModalDescription>
        </ModalHeader>

        <div className="mt-2 space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Impact & Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border bg-background/50 p-4"
                >
                  <div className="text-xl font-bold">{metric.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
