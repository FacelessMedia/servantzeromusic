"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { YouTubeIcon } from "@/components/icons/BrandIcons";

// Video data — newest first, no shorts (all >60s).
// Duration in seconds. Videos under 61s are filtered out.
const ALL_VIDEOS = [
  { id: "sR665fcOy4E", title: "Racism Is Racist", duration: 198, date: "2025-03-15" },
  { id: "yFsF5zbg2sc", title: "I'm Haunted", duration: 245, date: "2025-03-10" },
  { id: "s_JkH_4d4VA", title: "I Forgive You, Pastor", duration: 222, date: "2025-03-05" },
  { id: "hKgG5F60ljA", title: "Hard To Talk To You", duration: 210, date: "2025-02-28" },
  { id: "fCEleY2aVpU", title: "Can't Keep Up (Concert Style)", duration: 187, date: "2025-02-20" },
  { id: "hotAqi0cldQ", title: "Desperation Like Hers", duration: 240, date: "2025-02-15" },
  { id: "zq-_U4nGGWw", title: "Dear Mom and Dad", duration: 265, date: "2025-02-10" },
  { id: "_iIPILHykOY", title: "Babylon Burns", duration: 195, date: "2025-02-05" },
  { id: "dQw4w9WgXcQ", title: "Chains Don't Define Me", duration: 213, date: "2025-01-30" },
  { id: "9bZkp7q19f0", title: "Wrestling With God", duration: 178, date: "2025-01-25" },
  { id: "kJQP7kiw5Fk", title: "The Weight I Carry", duration: 232, date: "2025-01-20" },
  { id: "JGwWNGJdvx8", title: "Broken Altars", duration: 200, date: "2025-01-15" },
  { id: "RgKAFK5djSk", title: "Still Standing", duration: 256, date: "2025-01-10" },
  { id: "OPf0YbXqDm0", title: "Let Me Go", duration: 190, date: "2025-01-05" },
  { id: "hT_nvWreIhg", title: "Not Your Puppet", duration: 220, date: "2024-12-30" },
  { id: "CevxZvSJLk8", title: "Grace Over Guilt", duration: 245, date: "2024-12-25" },
]
  // Filter out shorts (<=60 seconds)
  .filter((v) => v.duration > 60)
  // Sort newest first
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const VIDEOS_PER_PAGE = 6;

// Placeholder sub count — will be replaced by YouTube Data API when key is provided
const YT_SUB_COUNT = "7.67K";

export function VideoGrid() {
  const [visibleCount, setVisibleCount] = useState(VIDEOS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < ALL_VIDEOS.length;

  const loadMore = useCallback(() => {
    if (!hasMore || loading) return;
    setLoading(true);
    // Simulate network delay for loading indicator
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + VIDEOS_PER_PAGE, ALL_VIDEOS.length));
      setLoading(false);
    }, 800);
  }, [hasMore, loading]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  const visibleVideos = ALL_VIDEOS.slice(0, visibleCount);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with sub count */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-500 rounded-full mb-6">
            <YouTubeIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">{YT_SUB_COUNT} subscribers</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Videos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch Servant Zero music videos. Newest first. No shorts — only
            full-length music videos.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              className="bg-card border border-border rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">Servant Zero</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scroll sentinel + SZ logo spinner */}
        {hasMore && (
          <div ref={sentinelRef} className="flex items-center justify-center py-12">
            <Image
              src="/images/servant-zero-logo.png"
              alt="Loading more videos..."
              width={48}
              height={48}
              className="rounded-full animate-spin"
            />
          </div>
        )}

        {/* Loading indicator when actively fetching */}
        {loading && !hasMore ? null : loading && (
          <div className="flex items-center justify-center py-8">
            <Image
              src="/images/servant-zero-logo.png"
              alt="Loading..."
              width={48}
              height={48}
              className="rounded-full animate-spin"
            />
          </div>
        )}

        {/* End of list */}
        {!hasMore && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">
              You&apos;ve seen all the full-length videos. More coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
