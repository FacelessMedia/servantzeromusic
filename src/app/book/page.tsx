import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Church Hurt, Now What? — The Book",
  description:
    "A book for the spiritually wounded by Servant Zero. 18 chapters of truth, healing, and a way forward.",
};

const CHAPTERS = [
  { title: "Naming What Happened", desc: "When fear learned to sound like God. When obedience became control. Why you thought it was your fault." },
  { title: "Understanding the Cost", desc: "What it did to your body, your family, your sense of self. Why silence didn't heal you." },
  { title: "Beginning to Heal", desc: "Separating God from the system. Rereading Scripture safely. Learning to pray without performing." },
  { title: "Moving Forward", desc: "Boundaries that aren't rebellion. Forgiveness that isn't forced. Faith that is finally yours." },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block w-40 h-56 rounded-lg overflow-hidden border border-border mb-6 shadow-lg shadow-primary/10">
            <Image
              src="/images/book-cover.jpeg"
              alt="Church Hurt, Now What? Book Cover"
              width={160}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="text-sm text-primary font-semibold mb-2">A book by Servant Zero</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            CHURCH HURT,<br />NOW WHAT?
          </h1>
          <p className="text-xl text-muted-foreground font-heading italic mb-4">
            A Book for the Spiritually Wounded
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            I didn&apos;t leave church because I stopped believing in God. I
            left because staying was slowly turning me into someone I
            didn&apos;t recognize.
          </p>
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-8">
            Coming 2026
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-book"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Join Launch List
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            I Didn&apos;t Leave Church
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I left an abusive one. And I found a healthy one.</p>
            <p>
              I still believe in being under leadership. I still believe in
              obedience. I still believe in having a pastor. I just couldn&apos;t
              continue to be abused.
            </p>
            <p className="text-foreground font-semibold">
              This book won&apos;t tell you to abandon church. It will help you
              untangle what happened — and find your way to healthy community.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            What&apos;s Inside
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CHAPTERS.map((ch) => (
              <div key={ch.title} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ch.title}</h3>
                <p className="text-sm text-muted-foreground">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
            &ldquo;I don&apos;t believe my pastor intended to harm me. But
            intention does not erase impact — and silence does not heal
            it.&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4">— From the book</p>
        </div>
      </section>

      {/* Launch List */}
      <section id="get-book" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Join the Launch List
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when the book is ready.
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
            Be the first to know when it&apos;s available. No spam, ever.
          </p>
        </div>
      </section>
    </>
  );
}
