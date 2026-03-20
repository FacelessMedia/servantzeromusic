import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { getArticle, getRelatedArticles, ARTICLES, AUTHOR } from "@/lib/articles";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      modifiedTime: article.dateModified || article.date,
      authors: [AUTHOR.name],
      tags: article.tags,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = article.relatedArticles
    ? getRelatedArticles(article.relatedArticles)
    : [];

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Heading
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className="font-heading text-2xl font-bold text-foreground mt-10 mb-4"
          >
            {line.slice(3)}
          </h2>
        );
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === "---") {
        elements.push(
          <hr key={i} className="border-border my-8" />
        );
        i++;
        continue;
      }

      // List item
      if (line.startsWith("- **")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={`list-${i}`} className="space-y-2 my-4 ml-4">
            {listItems.map((item, j) => (
              <li key={j} className="text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Numbered list
      if (/^\d+\.\s\*\*/.test(line)) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="space-y-3 my-4 ml-4 list-decimal list-inside">
            {listItems.map((item, j) => (
              <li key={j} className="text-muted-foreground leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Italic paragraph (starts with *)
      if (line.startsWith("*") && line.endsWith("*")) {
        elements.push(
          <p
            key={i}
            className="text-sm text-muted-foreground italic leading-relaxed my-4"
          >
            <span dangerouslySetInnerHTML={{ __html: formatInline(line.slice(1, -1)) }} />
          </p>
        );
        i++;
        continue;
      }

      // Regular paragraph
      elements.push(
        <p
          key={i}
          className="text-muted-foreground leading-relaxed my-4"
        >
          <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        </p>
      );
      i++;
    }

    return elements;
  };

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Truth & Healing", url: `${SITE_URL}/truth-and-healing` },
        { name: article.title, url: `${SITE_URL}/truth-and-healing/${article.slug}` },
      ])} />

      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/truth-and-healing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Truth &amp; Healing
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author + Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Image
                src="/images/servant-zero-logo.png"
                alt={AUTHOR.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium text-foreground">{AUTHOR.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} read</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose-sz max-w-none">
            {renderContent(article.content)}
          </div>

          {/* Related Songs */}
          {article.relatedSongs && article.relatedSongs.length > 0 && (
            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                Songs Related to This Article
              </h3>
              <div className="flex flex-wrap gap-3">
                {article.relatedSongs.map((song: { title: string; slug: string }) => (
                  <Link
                    key={song.slug}
                    href={`/music/${song.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-md hover:bg-primary/20 hover:text-primary transition-colors text-sm font-medium"
                  >
                    ♫ {song.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/truth-and-healing/${rel.slug}`}
                    className="group p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                  >
                    <p className="text-xs text-muted-foreground mb-1">
                      {rel.readTime} read
                    </p>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center py-10 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Every article is written from lived experience. If this helped, share it with someone who needs it.
            </p>
            <Link
              href="/truth-and-healing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

// Format inline markdown: **bold**, [links](/path), *italic*
function formatInline(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    // Links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary underline underline-offset-2 hover:text-crimson-400 transition-colors">$1</a>'
    )
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
