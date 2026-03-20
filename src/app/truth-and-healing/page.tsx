import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ARTICLES, ALL_TAGS } from "@/lib/articles";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Truth & Healing — Articles on Spiritual Abuse, Recovery & Faith",
  description:
    "Honest conversations about church hurt, spiritual abuse, healing, and rebuilding faith. Written by Servant Zero.",
};

export default function TruthAndHealingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Truth & Healing", url: `${SITE_URL}/truth-and-healing` },
      ])} />

      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full overflow-hidden mb-6">
            <Image
              src="/images/servant-zero-logo.png"
              alt="Servant Zero"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            TRUTH &amp; HEALING
          </h1>
          <p className="text-xl text-muted-foreground font-heading italic mb-4">
            Honest Words for the Spiritually Wounded
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Articles on spiritual abuse, church hurt, recovery, rebuilding
            faith, and the messy middle of healing. Written by Servant Zero.
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="py-6 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-foreground mr-2">Topics:</span>
            {ALL_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/truth-and-healing/${article.slug}`}
                className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <time>{article.date}</time>
                    <span>&middot;</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-border flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Get New Articles Delivered
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the mailing list for new articles on healing, faith, and
            finding your way forward after church hurt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Just truth.
          </p>
        </div>
      </section>
    </>
  );
}
