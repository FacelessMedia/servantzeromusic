import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, ExternalLink, Play } from "lucide-react";
import {
  SpotifyIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  AppleMusicIcon,
  AmazonMusicIcon,
  TidalIcon,
} from "@/components/icons/BrandIcons";
import { sanitizeLyrics } from "@/lib/lyrics";

// Song data keyed by slug — each song only contains what's actually available.
// Missing fields (lyrics, inspiration, youtubeVideoId, etc.) will cause those
// sections to be hidden on the page rather than showing placeholder content.
type SongData = {
  title: string;
  slug: string;
  artist: string;
  album: string;
  releaseDate: string;
  duration: string;
  coverImage: string;
  youtubeVideoId?: string;
  mp3Price?: number;
  tags: string[];
  streaming: {
    spotify: { url: string; available: boolean };
    appleMusic: { url: string; available: boolean };
    youtubeMusic: { url: string; available: boolean };
    amazonMusic: { url: string; available: boolean };
    tidal: { url: string; available: boolean };
  };
  lyrics?: string;
  inspiration?: string;
};

const SONGS: Record<string, SongData> = {
  "i-forgive-you-pastor": {
    title: "I Forgive You, Pastor",
    slug: "i-forgive-you-pastor",
    artist: "Servant Zero",
    album: "Singles",
    releaseDate: "2025-01-15",
    duration: "3:42",
    coverImage: "/images/servant-zero-logo.png",
    youtubeVideoId: "s_JkH_4d4VA",
    mp3Price: 1.29,
    tags: ["church hurt", "forgiveness", "healing"],
    streaming: {
      spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true },
      appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true },
      youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true },
      amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true },
      tidal: { url: "#", available: false },
    },
    lyrics: `[Verse 1]
I remember sitting in the pew, heart pounding in my chest
Wondering if my silence was obedience or just fear dressed
In Sunday clothes, playing the role, smiling through the pain
While the shepherd used the flock to build his personal fame

You told me God required my total blind surrender
That questioning your word was questioning the sender
But somewhere deep inside I knew that love don't look like chains
And freedom doesn't feel like walking through an endless rain

[Chorus]
I forgive you, Pastor — not because you earned it
I forgive you, Pastor — though the bridge was burned and
Every word you spoke still echoes in my head
I forgive you, Pastor — I'm choosing life instead

[Verse 2]
The sleepless nights, the panic attacks, the shame I couldn't name
The way I second-guessed my every thought like I was going insane
You made me think that leaving was the same as leaving God
But I found Him on the outside — and He was never far

It took me years to untangle what you tied around my soul
To separate the sacred from the systems of control
I'm not writing this for sympathy or trying to expose
I'm writing this because forgiveness is the only door that goes

[Chorus]
I forgive you, Pastor — not because you earned it
I forgive you, Pastor — though the bridge was burned and
Every word you spoke still echoes in my head
I forgive you, Pastor — I'm choosing life instead

[Bridge]
I still believe in church
I still believe in God
I still believe in pastors
I just couldn't keep pretending it wasn't flawed

[Outro]
I forgive you... I forgive you...
Not for your sake — for mine
I forgive you... I forgive you...
I'm leaving the weight behind`,
    inspiration: `This song came from a very specific moment — the moment I realized I needed to forgive my former pastor. Not for his benefit, but for my own healing.

For years I carried anger, confusion, and a deep sense of betrayal. The church I was part of operated with cult-like control. Questioning leadership was treated as rebellion. Leaving was treated as spiritual death. And the emotional manipulation was wrapped in enough Scripture to make it feel holy.

When I finally left, the anger didn't leave with me. It followed me everywhere. It colored every conversation about faith. It made me flinch every time someone mentioned church.

This song was my way of processing the decision to forgive — not to excuse what happened, but to stop letting it define me. The lyrics aren't naive. They acknowledge the real damage. But they also make a choice: to move forward, to choose life, to believe that God exists outside of broken systems.

If you've been hurt by a church leader, I hope this song gives you permission to feel what you feel — and eventually, to let it go. Not because they deserve it. Because you do.`,
  },
  // Other songs — data will be filled in as it becomes available
  "racism-is-racist": { title: "Racism Is Racist", slug: "racism-is-racist", artist: "Servant Zero", album: "Singles", releaseDate: "2025-03-15", duration: "3:18", coverImage: "/images/servant-zero-logo.png", tags: ["social justice", "truth"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "sR665fcOy4E" },
  "im-haunted": { title: "I'm Haunted", slug: "im-haunted", artist: "Servant Zero", album: "Singles", releaseDate: "2025-03-10", duration: "4:05", coverImage: "/images/servant-zero-logo.png", tags: ["spiritual warfare", "struggle"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "yFsF5zbg2sc" },
  "hard-to-talk-to-you": { title: "Hard To Talk To You", slug: "hard-to-talk-to-you", artist: "Servant Zero", album: "Singles", releaseDate: "2025-02-28", duration: "3:30", coverImage: "/images/servant-zero-logo.png", tags: ["prayer", "faith"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "hKgG5F60ljA" },
  "cant-keep-up": { title: "Can't Keep Up", slug: "cant-keep-up", artist: "Servant Zero", album: "Singles", releaseDate: "2025-02-20", duration: "3:07", coverImage: "/images/servant-zero-logo.png", tags: ["spiritual warfare", "perseverance"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "fCEleY2aVpU" },
  "desperation-like-hers": { title: "Desperation Like Hers", slug: "desperation-like-hers", artist: "Servant Zero", album: "Singles", releaseDate: "2025-02-15", duration: "4:00", coverImage: "/images/servant-zero-logo.png", tags: ["faith", "healing"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "hotAqi0cldQ" },
  "dear-mom-and-dad": { title: "Dear Mom and Dad", slug: "dear-mom-and-dad", artist: "Servant Zero", album: "Singles", releaseDate: "2025-02-10", duration: "4:25", coverImage: "/images/servant-zero-logo.png", tags: ["family", "healing", "forgiveness"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "zq-_U4nGGWw" },
  "babylon-burns": { title: "Babylon Burns", slug: "babylon-burns", artist: "Servant Zero", album: "Singles", releaseDate: "2025-02-05", duration: "3:15", coverImage: "/images/servant-zero-logo.png", tags: ["spiritual warfare", "prophecy"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } }, youtubeVideoId: "_iIPILHykOY" },
  "start-over": { title: "Start Over", slug: "start-over", artist: "Servant Zero", album: "Singles", releaseDate: "2025-01-30", duration: "3:50", coverImage: "/images/servant-zero-logo.png", tags: ["healing", "hope"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } } },
  "behold-the-man": { title: "Behold the Man", slug: "behold-the-man", artist: "Servant Zero", album: "Singles", releaseDate: "2025-01-25", duration: "4:12", coverImage: "/images/servant-zero-logo.png", tags: ["Jesus", "faith"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } } },
  "mark-of-the-beast": { title: "Mark of the Beast", slug: "mark-of-the-beast", artist: "Servant Zero", album: "Singles", releaseDate: "2025-01-20", duration: "3:55", coverImage: "/images/servant-zero-logo.png", tags: ["prophecy", "spiritual warfare"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } } },
  "chains-dont-define-me": { title: "Chains Don't Define Me", slug: "chains-dont-define-me", artist: "Servant Zero", album: "Singles", releaseDate: "2025-01-15", duration: "3:33", coverImage: "/images/servant-zero-logo.png", tags: ["freedom", "healing"], streaming: { spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true }, appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true }, youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true }, amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true }, tidal: { url: "#", available: false } } },
};

// Fallback for any slug not in the map — creates a minimal page with just the title
function getSong(slug: string): SongData {
  if (SONGS[slug]) return SONGS[slug];
  // Generate title from slug
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title,
    slug,
    artist: "Servant Zero",
    album: "Singles",
    releaseDate: "",
    duration: "",
    coverImage: "/images/servant-zero-logo.png",
    tags: [],
    streaming: {
      spotify: { url: "https://open.spotify.com/artist/4Ue2l7C5E72QFCkegCjMwY", available: true },
      appleMusic: { url: "https://music.apple.com/us/artist/servant-zero/1826211389", available: true },
      youtubeMusic: { url: "https://music.youtube.com/channel/UC7VW5e60RGJyG_KsroL5oQA", available: true },
      amazonMusic: { url: "https://music.amazon.com/artists/B0FHD5NTHJ/servant-zero", available: true },
      tidal: { url: "#", available: false },
    },
  };
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const song = getSong(params.slug);
  return {
    title: `${song.title} — ${song.artist}`,
    description: `Listen to "${song.title}" by ${song.artist}. Stream, watch the video, read the lyrics and the story behind the song.`,
  };
}

function StreamingLink({
  platform,
  icon,
  url,
  available,
}: {
  platform: string;
  icon: React.ReactNode;
  url: string;
  available: boolean;
}) {
  if (!available) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/50 rounded-lg opacity-40 cursor-not-allowed">
        {icon}
        <div>
          <p className="text-sm font-medium text-muted-foreground">{platform}</p>
          <p className="text-xs text-muted-foreground/60">Coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all group"
    >
      <div className="text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{platform}</p>
        <p className="text-xs text-muted-foreground">Stream now</p>
      </div>
      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default function SongPage({ params }: { params: { slug: string } }) {
  const song = getSong(params.slug);

  return (
    <>
      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Music
        </Link>
      </div>

      {/* Song Hero */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Cover Art */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-border bg-card">
                <Image
                  src={song.coverImage}
                  alt={song.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Song Info */}
            <div className="flex-1">
              <p className="text-sm text-primary font-semibold mb-1">{song.album}</p>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {song.title}
              </h1>
              <p className="text-muted-foreground mb-1">
                by <span className="text-foreground font-medium">{song.artist}</span>
              </p>
              {(song.releaseDate || song.duration) && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  {song.releaseDate && <span>{song.releaseDate}</span>}
                  {song.releaseDate && song.duration && <span>&middot;</span>}
                  {song.duration && <span>{song.duration}</span>}
                </div>
              )}

              {/* Play + Buy Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-md hover:bg-foreground/90 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  Play in Browser
                </button>
                {song.mp3Price && (
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    Buy MP3 — ${song.mp3Price.toFixed(2)}
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                Your purchase directly supports Servant Zero&apos;s mission to keep creating music for the spiritually wounded.
              </p>

              {/* Tags */}
              {song.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {song.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/music?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Streaming Links */}
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Stream This Song
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <StreamingLink
                  platform="Spotify"
                  icon={<SpotifyIcon className="w-5 h-5" />}
                  url={song.streaming.spotify.url}
                  available={song.streaming.spotify.available}
                />
                <StreamingLink
                  platform="Apple Music"
                  icon={<AppleMusicIcon className="w-5 h-5" />}
                  url={song.streaming.appleMusic.url}
                  available={song.streaming.appleMusic.available}
                />
                <StreamingLink
                  platform="YouTube Music"
                  icon={<YouTubeMusicIcon className="w-5 h-5" />}
                  url={song.streaming.youtubeMusic.url}
                  available={song.streaming.youtubeMusic.available}
                />
                <StreamingLink
                  platform="Amazon Music"
                  icon={<AmazonMusicIcon className="w-5 h-5" />}
                  url={song.streaming.amazonMusic.url}
                  available={song.streaming.amazonMusic.available}
                />
                <StreamingLink
                  platform="Tidal"
                  icon={<TidalIcon className="w-5 h-5" />}
                  url={song.streaming.tidal.url}
                  available={song.streaming.tidal.available}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section — only if video ID exists */}
      {song.youtubeVideoId && (
        <section className="py-10 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <YouTubeIcon className="w-6 h-6 text-red-500" />
              Watch the Video
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${song.youtubeVideoId}`}
                title={`${song.title} — ${song.artist}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Lyrics — only if lyrics exist */}
      {song.lyrics && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              Lyrics
            </h2>
            <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
              <pre className="whitespace-pre-wrap font-sans text-muted-foreground leading-relaxed text-sm sm:text-base">
                {sanitizeLyrics(song.lyrics)}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Song Inspiration / Story — only if inspiration exists */}
      {song.inspiration && (
        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              The Story Behind This Song
            </h2>
            <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
              <div className="prose prose-invert max-w-none">
                {song.inspiration.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            More Music
          </h2>
          <p className="text-muted-foreground mb-6">
            Every song carries a story. Every track has a purpose.
          </p>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors"
          >
            Explore Full Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
