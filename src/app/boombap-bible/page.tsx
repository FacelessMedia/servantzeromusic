import type { Metadata } from "next";
import { ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "Boombap Bible — Scripture You Can Feel",
  description:
    "The King James Version Bible sung word-for-word in hip hop style by Servant Zero. No paraphrasing. No shortcuts.",
};

const REASONS = [
  { title: "Scripture That Sticks", desc: "Music has a way of embedding itself in your memory. What if Scripture could live in your head the same way your favorite songs do?" },
  { title: "Word for Word", desc: "No liberties taken. No creative interpretation. The KJV text, exactly as written, set to rhythm and melody." },
  { title: "Boom Bap Soul", desc: "Classic hip hop production. Soulful samples. Hard-hitting drums. The sound that makes you nod your head while the Word renews your mind." },
  { title: "Servant Zero Style", desc: "The same voice behind the music for the spiritually wounded — now bringing Scripture to life in a way you've never heard." },
];

export default function BoombapBiblePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 mb-6">
            <ScrollText className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            BOOMBAP BIBLE
          </h1>
          <p className="text-xl text-muted-foreground font-heading italic mb-4">
            Scripture You Can Feel
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            The King James Version Bible sung word-for-word in hip hop style. No
            paraphrasing. No shortcuts. Every verse, every chapter — set to
            beats.
          </p>
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-8">
            Coming Spring 2026
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#notify"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            What is Boombap Bible?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Boombap Bible is an ambitious project to set the entire King James
              Version of the Bible to hip hop music — word for word.
            </p>
            <p>
              No paraphrasing. No &ldquo;inspired by.&rdquo; Every verse sung
              exactly as written, delivered in the Servant Zero style over
              classic boom bap production.
            </p>
            <p className="text-foreground font-semibold">
              Scripture that stays with you. Truth that hits different.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            Why This Exists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((r) => (
              <div key={r.title} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
            &ldquo;Thy word have I hid in mine heart, that I might not sin
            against thee.&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4">
            — Psalm 119:11 (KJV)
          </p>
        </div>
      </section>

      {/* Notify */}
      <section id="notify" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Be the First to Hear It
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when Boombap Bible launches in Spring 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors">
              Notify Me
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Just Scripture.
          </p>
        </div>
      </section>
    </>
  );
}
