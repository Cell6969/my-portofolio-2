"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Trophy, TrendingUp } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [expandedId, setExpandedId] = useState<string | null>(
    portfolioItems[0]?.id ?? null
  );

  const toggleExpand = (id: string): void => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="portfolio"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies & achievements"
          description="Deep dives into selected projects, showcasing the challenges, solutions, and measurable outcomes delivered."
        />

        <div className="mt-16 space-y-4">
          <StaggerContainer className="space-y-4">
            {portfolioItems.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <StaggerItem key={item.id}>
                  <Card
                    className={cn(
                      "overflow-hidden transition-colors duration-300",
                      isExpanded && "border-foreground/20"
                    )}
                  >
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.summary}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-6 border-t border-border p-6">
                            <div className="grid gap-6 md:grid-cols-3">
                              <div className="space-y-2">
                                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                  <TrendingUp className="h-4 w-4" />
                                  Challenge
                                </h4>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {item.challenge}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                  <TrendingUp className="h-4 w-4" />
                                  Solution
                                </h4>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {item.solution}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                  <TrendingUp className="h-4 w-4" />
                                  Outcome
                                </h4>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {item.outcome}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                <Trophy className="h-4 w-4" />
                                Key Achievements
                              </h4>
                              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                {item.achievements.map((achievement) => (
                                  <div
                                    key={achievement}
                                    className="flex items-start gap-2 rounded-lg border border-border bg-background/50 px-3 py-2"
                                  >
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                      {achievement}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-16">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-center text-lg font-semibold">
              Track Record of Impact
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold">8M+</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Daily Transactions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$12M+</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Fraud Prevented
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Avg. Cost Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  System Uptime
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
