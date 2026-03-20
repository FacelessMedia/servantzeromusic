import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, AI_DISCLAIMER, SITE_NAME } from "@/lib/constants";
import { ShoppingBag } from "lucide-react";
import {
  SpotifyIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  AppleMusicIcon,
  AmazonMusicIcon,
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons/BrandIcons";

function SocialIcon({ platform, href }: { platform: string; href: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    youtube: <YouTubeIcon className="w-5 h-5" />,
    spotify: <SpotifyIcon className="w-5 h-5" />,
    appleMusic: <AppleMusicIcon className="w-5 h-5" />,
    amazonMusic: <AmazonMusicIcon className="w-5 h-5" />,
    youtubeMusic: <YouTubeMusicIcon className="w-5 h-5" />,
    tiktok: <TikTokIcon className="w-5 h-5" />,
    instagram: <InstagramIcon className="w-5 h-5" />,
    facebook: <FacebookIcon className="w-5 h-5" />,
  };

  const labelMap: Record<string, string> = {
    youtube: "YouTube",
    spotify: "Spotify",
    appleMusic: "Apple Music",
    amazonMusic: "Amazon Music",
    youtubeMusic: "YouTube Music",
    tiktok: "TikTok",
    instagram: "Instagram",
    facebook: "Facebook",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/20 hover:text-primary text-muted-foreground transition-all"
      aria-label={labelMap[platform] || platform}
      title={labelMap[platform] || platform}
    >
      {iconMap[platform] || <SpotifyIcon className="w-5 h-5" />}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      {/* AI Disclaimer */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0 animate-pulse-glow" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                A Note on AI & Authenticity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {AI_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/servant-zero-logo.png"
                alt="Servant Zero"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-heading text-lg font-bold tracking-wide text-foreground">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Music for the spiritually wounded. Faith-based music born from real struggle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Music", href: "/music" },
                { label: "Videos", href: "/videos" },
                { label: "My Story", href: "/my-story" },
                { label: "Sunday Scars", href: "/sunday-scars" },
                { label: "The Book", href: "/book" },
                { label: "Boombap Bible", href: "/boombap-bible" },
                { label: "Shop", href: "https://servantzero.shop" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + Shop */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(SOCIAL_LINKS).map(([platform, href]) => (
                <SocialIcon key={platform} platform={platform} href={href} />
              ))}
            </div>
            <a
              href="https://servantzero.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary/20 text-sm text-muted-foreground hover:text-primary rounded-md transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Visit the Shop
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/newsletter" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
