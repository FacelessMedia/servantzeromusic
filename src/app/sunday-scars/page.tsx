import type { Metadata } from "next";
import Link from "next/link";
import { Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Sunday Scars Podcast",
  description:
    "Stories of church hurt and healing. Every guest shares their story and receives a custom song from Servant Zero.",
};

const STEPS = [
  { num: "01", title: "Your Story", desc: "You share what happened — at your own pace, in your own words." },
  { num: "02", title: "The Impact", desc: "We explore what it cost you — spiritually, relationally, personally." },
  { num: "03", title: "The Turning Point", desc: "When things began to shift. What helped you start to see clearly." },
  { num: "04", title: "Looking Forward", desc: "Where you are now. What you'd say to someone still in that place." },
  { num: "05", title: "Your Song", desc: "Every guest receives a custom Servant Zero song honoring their story." },
  { num: "06", title: "You Leave Lighter", desc: "Not raw. Not exposed. Heard, honored, and pointed toward hope." },
];

export default function SundayScarsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 mb-6">
            <Mic className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            SUNDAY SCARS
          </h1>
          <p className="text-xl text-muted-foreground font-heading italic mb-2">
            Stories of Church Hurt and Healing
          </p>
          <p className="text-muted-foreground mb-2">
            You&apos;re not crazy. You&apos;re not alone.
          </p>
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-8">
            Coming Spring 2026
          </span>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every guest shares their story. Every guest receives a custom song
            from Servant Zero as a thank-you for their courage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#launch"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Join Launch List
            </a>
            <Link
              href="/sunday-scars/share-your-story"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            What is Sunday Scars?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sunday Scars is an interview-based podcast where people who have
              experienced church hurt share their stories — not for exposure or
              accusation, but for healing, clarity, and hope.
            </p>
            <p>
              This is a safe space to tell the truth without exaggeration. To
              honor emotions without becoming defined by them. To seek healing,
              not revenge.
            </p>
            <p className="text-foreground font-semibold">
              Every story matters. Every wound is real. And there is a way
              forward.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            How Each Episode Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <span className="text-primary font-bold text-sm">{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl italic text-foreground leading-relaxed">
            &ldquo;Truth spoken in love is not cowardice. It is the sharpest
            blade — and the safest one to wield.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Launch List */}
      <section id="launch" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Join the Launch List
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when Sunday Scars launches in Spring 2026.
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
            No spam. Just launch updates.
          </p>
        </div>
      </section>
    </>
  );
}
