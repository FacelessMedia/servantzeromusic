/**
 * Sanitize lyrics bracket content.
 * Only allow standard section labels inside [brackets]:
 * Verse, Chorus, Bridge, Intro, Outro, Pre-Chorus, Post-Chorus, Hook, Interlude, Break, Ad-lib, Tag
 * Everything else gets truncated to just the recognized label.
 * e.g. "[Intro - hyper fast epic multisyllabic rap scene]" → "[Intro]"
 * e.g. "[Verse 1 - Emotional delivery]" → "[Verse 1]"
 */

const ALLOWED_LABELS = [
  "Verse",
  "Chorus",
  "Bridge",
  "Intro",
  "Outro",
  "Pre-Chorus",
  "Post-Chorus",
  "Hook",
  "Interlude",
  "Break",
  "Ad-lib",
  "Ad Lib",
  "Tag",
];

// Build regex: match [Label] or [Label 1] or [Label 1 - anything]
// Captures just the label + optional number
const labelPattern = ALLOWED_LABELS.map((l) => l.replace("-", "\\-")).join("|");
const bracketRegex = new RegExp(
  `\\[(${labelPattern})(\\s*\\d+)?[^\\]]*\\]`,
  "gi"
);

export function sanitizeLyrics(raw: string): string {
  return raw.replace(bracketRegex, (_match: string, label: string, num?: string) => {
    const properLabel = label.trim().replace(/\b\w/g, (c: string) => c.toUpperCase());
    const suffix = num ? ` ${num.trim()}` : "";
    return `[${properLabel}${suffix}]`;
  });
}
