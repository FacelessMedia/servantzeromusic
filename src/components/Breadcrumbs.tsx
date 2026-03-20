"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const LABEL_MAP: Record<string, string> = {
  music: "Music",
  videos: "Videos",
  "my-story": "My Story",
  about: "About",
  "sunday-scars": "Sunday Scars",
  "share-your-story": "Share Your Story",
  book: "The Book",
  "boombap-bible": "Boombap Bible",
  "truth-and-healing": "Truth & Healing",
  christianalogies: "ChristiAnalogies",
};

function slugToLabel(slug: string): string {
  if (LABEL_MAP[slug]) return LABEL_MAP[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: slugToLabel(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3"
    >
      <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Home className="w-3 h-3" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
            {crumb.isLast ? (
              <span className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-foreground transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
