import { navItems, siteConfig, socialLinks } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <h3 className="text-lg font-bold tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Navigation</h4>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Connect</h4>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
