import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Music, Play, Mic, BookOpen, ScrollText, ArrowRight } from "lucide-react";
import {
  SpotifyIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  AppleMusicIcon,
  AmazonMusicIcon,
} from "@/components/icons/BrandIcons";

function StreamingButton({
  label,
  href,
  color,
  icon,
}: {
  label: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all hover:scale-105 ${color}`}
    >
      {icon}
      {label}
    </a>
  );
}

function EcosystemCard({
  icon,
  title,
  description,
  href,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all"
    >
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-full">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/30 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Logo mark */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 mb-8 overflow-hidden">
            <Image
              src="/images/servant-zero-logo.png"
              alt="Servant Zero"
              width={96}
              height={96}
              className="rounded-full"
              priority
            />
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            SERVANT ZERO
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-heading italic">
            Music for the Spiritually Wounded
          </p>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground mb-10 leading-relaxed">
            Faith-based music born from real struggle. Songs for the broken, the
            healing, and the still-fighting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors text-lg"
            >
              <Play className="w-5 h-5" />
              Listen Now
            </Link>
            <Link
              href="/my-story"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors text-lg"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Who Is Servant Zero */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Who is Servant Zero?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Servant Zero is not just an artist name — it&apos;s a statement.{" "}
              <strong className="text-foreground">
                Zero status. Zero platform. Zero self.
              </strong>
            </p>
            <p>
              The music comes from lived experience — seasons of church hurt,
              spiritual confusion, and the slow, painful work of rebuilding
              faith on an honest foundation.
            </p>
            <p className="text-foreground font-semibold text-lg">
              This is music for people who are tired of pretending everything is
              fine.
            </p>
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section id="listen" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Listen
          </h2>
          <p className="text-muted-foreground mb-10">
            Available on all major streaming platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <StreamingButton
              label="Spotify"
              href={SOCIAL_LINKS.spotify}
              color="bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20"
              icon={<SpotifyIcon className="w-5 h-5" />}
            />
            <StreamingButton
              label="Apple Music"
              href={SOCIAL_LINKS.appleMusic}
              color="bg-white/10 text-white hover:bg-white/20"
              icon={<AppleMusicIcon className="w-5 h-5" />}
            />
            <StreamingButton
              label="YouTube Music"
              href={SOCIAL_LINKS.youtubeMusic}
              color="bg-red-500/10 text-red-400 hover:bg-red-500/20"
              icon={<YouTubeMusicIcon className="w-5 h-5" />}
            />
            <StreamingButton
              label="Amazon Music"
              href={SOCIAL_LINKS.amazonMusic}
              color="bg-[#25D1DA]/10 text-[#25D1DA] hover:bg-[#25D1DA]/20"
              icon={<AmazonMusicIcon className="w-5 h-5" />}
            />
            <StreamingButton
              label="YouTube"
              href={SOCIAL_LINKS.youtube}
              color="bg-red-600/10 text-red-500 hover:bg-red-600/20"
              icon={<YouTubeIcon className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl italic text-foreground leading-relaxed">
            &ldquo;The scars don&apos;t disappear. But they stop bleeding — and
            eventually, they become proof that you survived.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* The Ecosystem */}
      <section id="ecosystem" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Servant Zero is part of a larger mission to help the spiritually
              wounded find healing, clarity, and hope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EcosystemCard
              icon={<Music className="w-6 h-6" />}
              title="Music Catalog"
              description="Every song, every story. Listen in-browser, watch videos, buy MP3s, and read the inspiration behind each track."
              href="/music"
            />
            <EcosystemCard
              icon={<Mic className="w-6 h-6" />}
              title="Sunday Scars Podcast"
              description="Stories of church hurt and healing. Every guest receives a custom song honoring their story."
              href="/sunday-scars"
              badge="Coming Soon"
            />
            <EcosystemCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Church Hurt, Now What?"
              description="A book for the spiritually wounded. 18 chapters of truth, healing, and a way forward."
              href="/book"
              badge="Coming Soon"
            />
            <EcosystemCard
              icon={<ScrollText className="w-6 h-6" />}
              title="Boombap Bible"
              description="The KJV Bible sung word-for-word in hip hop style. Scripture you can feel."
              href="/boombap-bible"
              badge="Coming Soon"
            />
          </div>
        </div>
      </section>

      {/* Custom Songs */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Custom Songs
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every guest on the Sunday Scars podcast receives a custom song
            honoring their story. These songs are not for sale. They are gifts —
            musical reflections of real stories, created to honor real courage.
          </p>
          <Link
            href="/sunday-scars/share-your-story"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors mt-4"
          >
            Share Your Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified about new music, podcast episodes, and updates from
            Servant Zero. No spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors">
              Join
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Just updates from the mission.
          </p>
        </div>
      </section>
    </>
  );
}
