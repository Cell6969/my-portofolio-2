"use client";

import { motion } from "framer-motion";
import { navItems, siteConfig } from "@/constants/site";
import { sectionIds } from "@/constants/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const activeSection = useActiveSection([...sectionIds]);

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          aria-label="Go to home"
        >
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.name.split(" ")[0]}
            <span className="text-muted-foreground">.</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  className="absolute inset-x-3 -bottom-px h-px bg-foreground"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleNavClick("#contact")}
          >
            Get in Touch
          </Button>
          <MobileNav activeSection={activeSection} />
        </div>
      </div>
    </motion.header>
  );
}
