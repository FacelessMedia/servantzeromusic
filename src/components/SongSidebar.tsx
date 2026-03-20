"use client";

import { useState, useEffect } from "react";
import { Share2 } from "lucide-react";

type SidebarSection = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export function SongSidebar({
  sections,
  songTitle,
  songUrl,
}: {
  sections: SidebarSection[];
  songTitle: string;
  songUrl: string;
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const shareLinks = [
    {
      label: "X / Twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listen to "${songTitle}" by Servant Zero`)}&url=${encodeURIComponent(songUrl)}`,
    },
    {
      label: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(songUrl)}`,
    },
    {
      label: "Copy Link",
      url: "",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(songUrl);
      alert("Link copied!");
    } catch {
      // fallback
    }
  };

  return (
    <>
      {/* Desktop floating sidebar */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 shadow-lg">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            title={section.label}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === section.id
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {section.icon}
            <span className="hidden 2xl:inline">{section.label}</span>
          </a>
        ))}

        <div className="border-t border-border my-1" />

        {/* Share button */}
        <div className="relative">
          <button
            onClick={() => setShowShare(!showShare)}
            title="Share"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all w-full"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden 2xl:inline">Share</span>
          </button>
          {showShare && (
            <div className="absolute left-full ml-2 top-0 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[140px] z-40">
              {shareLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.label === "Copy Link") {
                      handleCopyLink();
                    } else {
                      window.open(link.url, "_blank", "width=600,height=400");
                    }
                    setShowShare(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom bar for share */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-30 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-2 flex items-center justify-between gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md text-[10px] font-medium transition-all flex-1 ${
              activeSection === section.id
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {section.icon}
            {section.label}
          </a>
        ))}
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: songTitle, url: songUrl });
            } else {
              handleCopyLink();
            }
          }}
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-md text-[10px] font-medium text-muted-foreground flex-1"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </>
  );
}
