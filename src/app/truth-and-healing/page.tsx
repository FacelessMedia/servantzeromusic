import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Truth & Healing — Articles on Spiritual Abuse, Recovery & Faith",
  description:
    "Honest conversations about church hurt, spiritual abuse, healing, and rebuilding faith. Written by Servant Zero.",
};

// Articles — written by Servant Zero, targeting real search gaps
const ARTICLES = [
  {
    slug: "what-is-spiritual-abuse",
    title: "What Is Spiritual Abuse? The Signs Nobody Warned You About",
    excerpt:
      "Nobody sat me down and said, 'Hey — what's happening to you has a name.' I had to figure it out on my own, years after the damage was done. Spiritual abuse doesn't leave bruises. It leaves you questioning your own sanity, your own faith, and whether God was ever real in the first place. Let me show you what I wish someone had shown me.",
    date: "2026-03-15",
    readTime: "8 min",
    tags: ["spiritual abuse", "awareness"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "leaving-church-vs-leaving-god",
    title: "I Left My Church — I Didn't Leave God",
    excerpt:
      "They told me that walking out those doors was the same as walking away from God. That the covering was gone. That I was in rebellion. I believed it for a while. Then I found God on the outside — and He was closer than He'd ever been inside that building. Leaving a toxic church isn't backsliding. It might be the most obedient thing you ever do.",
    date: "2026-03-10",
    readTime: "7 min",
    tags: ["church hurt", "healing"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "forgiving-your-pastor",
    title: "How I Forgave My Pastor (And Why It Wasn't For Him)",
    excerpt:
      "I carried that weight for years. The anger. The betrayal. The way I'd flinch every time someone mentioned church. Forgiving my pastor wasn't about excusing what he did — it was about refusing to let him live rent-free in my head for the rest of my life. This is what that process actually looked like, not the churchy version — the real one.",
    date: "2026-03-05",
    readTime: "9 min",
    tags: ["forgiveness", "healing"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "when-obedience-becomes-control",
    title: "When 'Obey Your Pastor' Becomes a Weapon",
    excerpt:
      "There's a verse for everything when you're being controlled. 'Touch not mine anointed.' 'Obey them that have the rule over you.' 'Do not forsake the assembling.' I heard them all, weaponized and twisted until I couldn't tell the difference between submission to God and submission to a man who was using God's name as a leash.",
    date: "2026-02-28",
    readTime: "10 min",
    tags: ["spiritual abuse", "control"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "rebuilding-faith-after-church-hurt",
    title: "How to Rebuild Your Faith After Church Hurt",
    excerpt:
      "You didn't lose your faith. Someone put it in a blender. The God you believed in before the hurt is still the same God. But the lens you were looking through got shattered, and now you have to figure out what was real and what was manufactured. I'm still rebuilding. Here's what I've learned so far.",
    date: "2026-02-20",
    readTime: "8 min",
    tags: ["healing", "faith"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "music-as-medicine",
    title: "Why I Make Music About Church Hurt (And Why It Heals)",
    excerpt:
      "I didn't start making music because I wanted to be an artist. I started because I was drowning and needed a lifeboat. Every lyric is a page out of my journal. Every beat is a prayer I couldn't pray out loud. If you've ever put on headphones and felt like a song understood you better than any sermon — that's why I do this.",
    date: "2026-02-15",
    readTime: "6 min",
    tags: ["music", "healing"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "signs-you-were-in-a-controlling-church",
    title: "7 Signs You Were in a Controlling Church",
    excerpt:
      "You couldn't question leadership. Leaving was treated like a death sentence. Loyalty to the pastor was confused with loyalty to God. Financial pressure disguised as faith. Isolation from friends and family outside the church. If any of this sounds familiar, it's not because you're being dramatic. Here's how to tell if what you experienced was control.",
    date: "2026-02-10",
    readTime: "7 min",
    tags: ["spiritual abuse", "awareness", "control"],
    image: "/images/servant-zero-logo.png",
  },
  {
    slug: "ptsd-from-church",
    title: "Can You Get PTSD From Church? (Yes — Here's What It Looks Like)",
    excerpt:
      "I didn't know what was wrong with me. Panic attacks on Sunday mornings. Heart racing when I heard worship music. Nightmares about sermons. I thought I was losing it. Then a counselor told me what I was experiencing had a name — and that I wasn't alone. If church left you with more scars than peace, this one's for you.",
    date: "2026-02-05",
    readTime: "9 min",
    tags: ["church hurt", "healing", "awareness"],
    image: "/images/servant-zero-logo.png",
  },
];

const ALL_TAGS = Array.from(new Set(ARTICLES.flatMap((a) => a.tags)));

export default function TruthAndHealingPage() {
  return (
    <>
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
