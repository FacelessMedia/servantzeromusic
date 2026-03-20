"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

const ROW_1 = NAV_LINKS.filter((l) =>
  ["Music", "Videos", "My Story", "About"].includes(l.label)
);
const ROW_2 = NAV_LINKS.filter(
  (l) => !["Music", "Videos", "My Story", "About"].includes(l.label)
);

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar: logo + row 1 + CTA */}
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/servant-zero-logo.png"
              alt="Servant Zero"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="font-heading text-base font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav Row 1 */}
          <nav className="hidden lg:flex items-center gap-1">
            {ROW_1.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/music"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Listen Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Nav Row 2 */}
        <nav className="hidden lg:flex items-center justify-center gap-1 pb-2 -mt-1">
          {ROW_2.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
              className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
            >
              <span className="flex items-center gap-1">
                {link.label}
                {"external" in link && link.external && <ExternalLink className="w-3 h-3" />}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg z-40">
          <nav className="flex flex-col px-6 py-8 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-all border-b border-border/50"
              >
                <span>{link.label}</span>
                {"external" in link && link.external && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
              </Link>
            ))}
            <Link
              href="/music"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-lg hover:bg-crimson-500 transition-colors"
            >
              Listen Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
