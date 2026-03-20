"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpDown } from "lucide-react";
import {
  SpotifyIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  AppleMusicIcon,
  AmazonMusicIcon,
} from "@/components/icons/BrandIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

// Song data — will be replaced by JSON/CMS source
const SONGS = [
  { title: "I Forgive You, Pastor", slug: "i-forgive-you-pastor", date: "2025-03-05", duration: "3:42", tags: ["church hurt", "forgiveness", "healing"], cover: "/images/servant-zero-logo.png" },
  { title: "Racism Is Racist", slug: "racism-is-racist", date: "2025-03-15", duration: "3:18", tags: ["social justice", "truth"], cover: "/images/servant-zero-logo.png" },
  { title: "I'm Haunted", slug: "im-haunted", date: "2025-03-10", duration: "4:05", tags: ["spiritual warfare", "struggle"], cover: "/images/servant-zero-logo.png" },
  { title: "Hard To Talk To You", slug: "hard-to-talk-to-you", date: "2025-02-28", duration: "3:30", tags: ["prayer", "faith"], cover: "/images/servant-zero-logo.png" },
  { title: "Can't Keep Up", slug: "cant-keep-up", date: "2025-02-20", duration: "3:07", tags: ["spiritual warfare", "perseverance"], cover: "/images/servant-zero-logo.png" },
  { title: "Desperation Like Hers", slug: "desperation-like-hers", date: "2025-02-15", duration: "4:00", tags: ["faith", "healing"], cover: "/images/servant-zero-logo.png" },
  { title: "Dear Mom and Dad", slug: "dear-mom-and-dad", date: "2025-02-10", duration: "4:25", tags: ["family", "healing", "forgiveness"], cover: "/images/servant-zero-logo.png" },
  { title: "Babylon Burns", slug: "babylon-burns", date: "2025-02-05", duration: "3:15", tags: ["spiritual warfare", "prophecy"], cover: "/images/servant-zero-logo.png" },
  { title: "Start Over", slug: "start-over", date: "2025-01-30", duration: "3:50", tags: ["healing", "hope"], cover: "/images/servant-zero-logo.png" },
  { title: "Behold the Man", slug: "behold-the-man", date: "2025-01-25", duration: "4:12", tags: ["Jesus", "faith"], cover: "/images/servant-zero-logo.png" },
  { title: "Mark of the Beast", slug: "mark-of-the-beast", date: "2025-01-20", duration: "3:55", tags: ["prophecy", "spiritual warfare"], cover: "/images/servant-zero-logo.png" },
  { title: "Chains Don't Define Me", slug: "chains-dont-define-me", date: "2025-01-15", duration: "3:33", tags: ["freedom", "healing"], cover: "/images/servant-zero-logo.png" },
];

const ALL_TAGS = Array.from(new Set(SONGS.flatMap((s) => s.tags))).sort();

type SortMode = "newest" | "oldest" | "az" | "za";

// Platform links — values will update once APIs are connected
const PLATFORM_STATS = [
  { label: "YouTube", value: "7.67K subs", icon: <YouTubeIcon className="w-4 h-4" />, color: "text-red-500", href: SOCIAL_LINKS.youtube },
  { label: "Spotify", value: null, icon: <SpotifyIcon className="w-4 h-4" />, color: "text-[#1DB954]", href: SOCIAL_LINKS.spotify },
  { label: "Apple Music", value: null, icon: <AppleMusicIcon className="w-4 h-4" />, color: "text-white", href: SOCIAL_LINKS.appleMusic },
  { label: "YouTube Music", value: null, icon: <YouTubeMusicIcon className="w-4 h-4" />, color: "text-red-400", href: SOCIAL_LINKS.youtubeMusic },
  { label: "Amazon Music", value: null, icon: <AmazonMusicIcon className="w-4 h-4" />, color: "text-[#25D1DA]", href: SOCIAL_LINKS.amazonMusic },
];

export function MusicCatalog() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sortMode, setSortMode] = useState<SortMode>("newest");
  const [nowPlaying, setNowPlaying] = useState<typeof SONGS[number] | null>(null);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearTags = () => setActiveTags(new Set());

  const filteredSongs = useMemo(() => {
    let songs = [...SONGS];

    // Filter by tags
    if (activeTags.size > 0) {
      songs = songs.filter((s) => s.tags.some((t) => activeTags.has(t)));
    }

    // Sort
    switch (sortMode) {
      case "newest":
        songs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        songs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "az":
        songs.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        songs.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return songs;
  }, [activeTags, sortMode]);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {PLATFORM_STATS.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group"
            >
              <span className={stat.color}>{stat.icon}</span>
              {stat.value ? (
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              ) : (
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Music Catalog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every song. Every story. Listen in-browser, watch videos, read
            lyrics, and buy MP3s directly.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 bg-card border border-border rounded-xl">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
              Filter:
            </span>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  activeTags.has(tag)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTags.size > 0 && (
              <button
                onClick={clearTags}
                className="px-3 py-1 text-xs font-medium text-primary underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="bg-muted text-foreground text-xs font-medium rounded-md px-3 py-1.5 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredSongs.length} of {SONGS.length} songs
          {activeTags.size > 0 && (
            <> &middot; Filtered by: {Array.from(activeTags).join(", ")}</>
          )}
        </p>

        {/* Song Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSongs.map((song) => (
            <div
              key={song.slug}
              className="group relative flex flex-col bg-card border border-border rounded-xl hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className="flex items-center gap-4 p-5">
                {/* Cover art — clicking plays the song inline */}
                <button
                  onClick={() => setNowPlaying(nowPlaying?.slug === song.slug ? null : song)}
                  className="w-14 h-14 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0 relative cursor-pointer"
                  aria-label={`Play ${song.title}`}
                >
                  <Image
                    src={song.cover}
                    alt={song.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${
                    nowPlaying?.slug === song.slug ? "opacity-100 bg-primary/60" : "opacity-0 group-hover:opacity-100"
                  }`}>
                    {nowPlaying?.slug === song.slug ? (
                      <div className="flex gap-0.5">
                        <span className="w-1 h-4 bg-white rounded-full animate-pulse" />
                        <span className="w-1 h-3 bg-white rounded-full animate-pulse delay-75" />
                        <span className="w-1 h-5 bg-white rounded-full animate-pulse delay-150" />
                      </div>
                    ) : (
                      <Play className="w-5 h-5 text-white fill-white" />
                    )}
                  </div>
                </button>
                {/* Title — clicking goes to full song page */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/music/${song.slug}`}
                    className="font-semibold text-foreground truncate block hover:text-primary transition-colors"
                  >
                    {song.title}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Servant Zero</span>
                    <span>&middot;</span>
                    <span>{song.duration}</span>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                {song.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSongs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No songs match the selected tags.{" "}
              <button onClick={clearTags} className="text-primary underline">
                Clear filters
              </button>
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Full catalog with ~100 songs loading soon. Album art and direct
            platform links for each song coming next.
          </p>
        </div>
      </div>

      {/* Bottom Audio Player Bar */}
      {nowPlaying && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 h-16">
            {/* Cover */}
            <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={nowPlaying.cover}
                alt={nowPlaying.title}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link
                href={`/music/${nowPlaying.slug}`}
                className="text-sm font-semibold text-foreground truncate block hover:text-primary transition-colors"
              >
                {nowPlaying.title}
              </Link>
              <p className="text-xs text-muted-foreground">Servant Zero &middot; {nowPlaying.duration}</p>
            </div>
            {/* Placeholder progress bar */}
            <div className="hidden sm:block flex-1 max-w-xs">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
            {/* Controls */}
            <button
              onClick={() => setNowPlaying(null)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Stop"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
