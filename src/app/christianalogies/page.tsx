import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ChristiAnalogies — Quick Reads. Deep Truth.",
  description:
    "Concentrated analogies of the Christian walk. 30-60 minute reads packed with massive nuggets of truth by Servant Zero.",
};

const BOOKS = [
  {
    title: "The Domino Effect",
    tagline: "How one decision changes everything.",
    desc: "Life is a chain reaction. One domino falls and the rest follow. This book explores how small, seemingly insignificant choices — good and bad — create ripple effects that shape your entire spiritual journey.",
    readTime: "45 min",
    status: "coming-soon" as const,
  },
  {
    title: "Life Is a Rubik's Cube",
    tagline: "You can't solve one side without moving the others.",
    desc: "Faith, family, finances, purpose — they're all connected. This book uses the Rubik's Cube as a framework for understanding why fixing one area of your life often feels like it breaks another — and how God works all the sides at once.",
    readTime: "35 min",
    status: "coming-soon" as const,
  },
  {
    title: "Life Is a Game of Chess",
    tagline: "Every move matters. And your opponent is real.",
    desc: "The Christian walk isn't checkers. It's chess. This book breaks down spiritual warfare, patience, sacrifice, and strategy through the lens of the most strategic game ever created.",
    readTime: "50 min",
    status: "coming-soon" as const,
  },
  {
    title: "The Pressure Makes Diamonds",
    tagline: "What if the crushing is the process?",
    desc: "Diamonds don't form on the surface. They're forged under extreme heat and pressure, deep underground. This book explores why the hardest seasons of your life might be producing something you can't see yet.",
    readTime: "30 min",
    status: "coming-soon" as const,
  },
];

export default function ChristiAnalogiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full overflow-hidden mb-6">
            <Image
              src="/images/servant-zero-logo.png"
              alt="ChristiAnalogies"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            CHRISTIANALOGIES
          </h1>
          <p className="text-xl text-muted-foreground font-heading italic mb-4">
            Quick Reads. Deep Truth.
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            Concentrated analogies of the Christian walk. 30-60 minute reads
            packed with massive nuggets of truth. Each book takes one everyday
            concept and reveals the spiritual lesson hiding inside it.
          </p>
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-8">
            Book Series — Coming Soon
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            What Are ChristiAnalogies?
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              ChristiAnalogies are short, powerful books that take everyday
              concepts — a game of chess, a Rubik&apos;s Cube, the domino effect
              — and reveal the spiritual truths hidden inside them.
            </p>
            <p>
              Each book is designed to be read in a single sitting. 30-60
              minutes. No filler. No fluff. Just concentrated truth that sticks
              with you long after you close the last page.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Think of them as espresso shots of wisdom. Small cup. Strong
              impact.
            </p>
            <p>
              These aren&apos;t devotionals. They&apos;re thought experiments
              wrapped in analogies — designed to shift how you see your faith,
              your struggles, and your purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            The Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BOOKS.map((book) => (
              <div
                key={book.title}
                className="group relative flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-full">
                  Coming Soon
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-primary font-medium italic mb-3">
                  {book.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {book.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{book.readTime} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
            &ldquo;Sometimes the deepest truths are hiding inside the simplest
            things — you just have to know where to look.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Notify */}
      <section id="notify" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Be the First to Read Them
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when the first ChristiAnalogies book drops. Available
            on Amazon KDP.
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
            No spam. Just truth, concentrated.
          </p>
        </div>
      </section>
    </>
  );
}
