import { SITE_URL, SITE_NAME, SOCIAL_LINKS } from "./constants";

// Base Organization schema — used site-wide
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Faith-based Christian rap born from real struggle. Songs for the broken, the healing, and the still-fighting.",
    genre: ["Christian Rap", "Christian Hip Hop", "Gospel Rap"],
    sameAs: [
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.spotify,
      SOCIAL_LINKS.appleMusic,
      SOCIAL_LINKS.amazonMusic,
      SOCIAL_LINKS.youtubeMusic,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook,
    ],
    image: `${SITE_URL}/images/servant-zero-logo.png`,
  };
}

// WebSite schema — for search box and site info
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Faith-based Christian rap born from real struggle. Music, podcast, book, and more from Servant Zero.",
    publisher: {
      "@type": "MusicGroup",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/music?tag={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// MusicRecording schema for individual songs
export function songSchema(song: {
  title: string;
  artist: string;
  slug: string;
  duration?: string;
  releaseDate?: string;
  coverImage: string;
  youtubeVideoId?: string;
  tags?: string[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: song.title,
    byArtist: {
      "@type": "MusicGroup",
      name: song.artist,
      url: SITE_URL,
    },
    url: `${SITE_URL}/music/${song.slug}`,
    image: `${SITE_URL}${song.coverImage}`,
    genre: ["Christian Rap", "Christian Hip Hop"],
  };

  if (song.duration) {
    // Convert "3:42" to ISO 8601 PT3M42S
    const parts = song.duration.split(":");
    if (parts.length === 2) {
      schema.duration = `PT${parts[0]}M${parts[1]}S`;
    }
  }

  if (song.releaseDate) {
    schema.datePublished = song.releaseDate;
  }

  if (song.youtubeVideoId) {
    schema.subjectOf = {
      "@type": "VideoObject",
      name: `${song.title} — ${song.artist}`,
      url: `https://www.youtube.com/watch?v=${song.youtubeVideoId}`,
      thumbnailUrl: `https://img.youtube.com/vi/${song.youtubeVideoId}/hqdefault.jpg`,
    };
  }

  if (song.tags && song.tags.length > 0) {
    schema.keywords = song.tags.join(", ");
  }

  return schema;
}

// Article schema for blog posts
export function articleSchema(article: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  readTime: string;
  tags: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `${SITE_URL}/truth-and-healing/${article.slug}`,
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    author: {
      "@type": "Person",
      name: "Servant Zero",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/servant-zero-logo.png`,
      },
    },
    image: article.image
      ? `${SITE_URL}${article.image}`
      : `${SITE_URL}/images/servant-zero-logo.png`,
    keywords: article.tags.join(", "),
    wordCount: parseInt(article.readTime) * 250,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/truth-and-healing/${article.slug}`,
    },
  };
}

// Book schema
export function bookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Church Hurt, Now What?",
    author: {
      "@type": "Person",
      name: "Servant Zero",
      url: SITE_URL,
    },
    url: `${SITE_URL}/book`,
    description:
      "A guide for the spiritually wounded. For anyone who has experienced church hurt, spiritual abuse, or toxic religion — and is trying to find their way back to healthy faith.",
    genre: "Christian Living",
    image: `${SITE_URL}/images/servant-zero-logo.png`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

// Podcast schema
export function podcastSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Sunday Scars",
    author: {
      "@type": "Person",
      name: "Servant Zero",
      url: SITE_URL,
    },
    url: `${SITE_URL}/sunday-scars`,
    description:
      "A podcast for the spiritually wounded. Real conversations about church hurt, healing, and rebuilding faith.",
    image: `${SITE_URL}/images/servant-zero-logo.png`,
    genre: "Religion & Spirituality",
  };
}

// BreadcrumbList schema
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper to render JSON-LD in a page
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
