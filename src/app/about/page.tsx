import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Servant Zero — zero status, zero platform, zero self. Faith-based Christian rap born from real struggle.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Servant Zero
          </h1>
          <p className="text-xl text-muted-foreground italic font-heading">
            Zero status. Zero platform. Zero self.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Servant Zero is not just an artist name — it&apos;s a statement. A
              deliberate choice to stay anonymous so the message stays louder
              than the messenger.
            </p>
            <p>
              The music comes from lived experience — seasons of church hurt,
              spiritual confusion, and the slow, painful work of rebuilding
              faith on an honest foundation. Every song carries real weight,
              real story, real purpose.
            </p>
            <p>
              Servant Zero exists as part of a larger ecosystem designed to help
              the spiritually wounded find healing, clarity, and hope. The
              music, the podcast, the book, the Boombap Bible — they&apos;re all
              pieces of the same mission.
            </p>
            <p className="text-foreground font-semibold text-lg">
              If the focus is on a person, God doesn&apos;t get the glory. Servant
              Zero stays nameless so the mission stays clear.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/my-story"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Read My Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
            >
              Explore the Music
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
