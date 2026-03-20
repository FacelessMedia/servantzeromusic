import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Music, Heart, Shield, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "How Servant Zero came to be — the journey from church hurt to AI music, and why anonymity lets God get the glory.",
};

export default function MyStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            My Story
          </h1>
          <p className="text-xl text-muted-foreground italic font-heading">
            How pain became music. How music became ministry.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section: The Wound */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  The Wound
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I didn&apos;t leave church because I stopped believing in God. I left
                    because staying was slowly turning me into someone I didn&apos;t
                    recognize.
                  </p>
                  <p>
                    The church I was part of had very cult-like behavior. Control
                    disguised as covering. Fear packaged as faith. Obedience that
                    looked less like love and more like survival. It took years to
                    untangle what had happened — and even longer to admit it wasn&apos;t
                    my fault.
                  </p>
                  <p>
                    I still believe in being under leadership. I still believe in
                    obedience. I still believe in having a pastor. I just couldn&apos;t
                    continue to be abused.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: The Discovery */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  The Discovery
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I discovered AI music during one of the hardest seasons of my
                    life. I wasn&apos;t looking for a hobby or a brand — I was looking
                    for relief.
                  </p>
                  <p>
                    What I found was something I never expected: I could hear my own
                    situation played back to me. I could take the weight I was
                    carrying and turn it into something I could listen to. I could
                    add verses that comforted me — words reminding me that God loves
                    me anyway. That I wasn&apos;t forgotten. That the pain had a purpose.
                  </p>
                  <p>
                    It became a coping mechanism. A prayer journal set to beats. A
                    way of processing what I couldn&apos;t say out loud.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: The Decision to Share */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  The Decision to Share
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At some point, I realized these songs weren&apos;t just for me.
                    Other people were living the same story — leaving churches that
                    hurt them, questioning everything they&apos;d been taught, wondering
                    if God was still there on the other side.
                  </p>
                  <p>
                    I thought: maybe if this music helped me process, it could help
                    someone else feel less alone. So I figured I needed a brand. But
                    I also knew I was talking about my past with a church that had
                    very cult-like behavior. I didn&apos;t want to name myself. I didn&apos;t
                    want this to be about me.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Why Anonymous */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Why &ldquo;Servant Zero&rdquo;?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The name says it all. Zero status. Zero platform. Zero self. If
                    the focus is on me, God doesn&apos;t get the glory. If people know
                    my face, the message gets lost in the messenger.
                  </p>
                  <p className="text-foreground font-semibold italic text-lg border-l-4 border-primary pl-4">
                    &ldquo;If I blow up, put a shovel in my hand.&rdquo;
                  </p>
                  <p>
                    That&apos;s a lyric from one of my songs — and it&apos;s the truth. The
                    moment this becomes about me, it stops being about the mission.
                    Servant Zero stays anonymous so the focus stays where it
                    belongs: on God, on healing, and on the people who need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="py-16 bg-gradient-to-r from-crimson-950/40 via-crimson-900/20 to-crimson-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl italic text-foreground leading-relaxed">
            &ldquo;The voice may be artificial, but the heart is not. Every
            lyric, every concept, every song — born from lived experience, real
            pain, and genuine faith.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* AI Transparency */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            A Note on AI
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Yes, the music of Servant Zero is created using AI tools. I&apos;m not
              the singer. But I am the soul behind every word.
            </p>
            <p>
              This is not random content from quick prompts. My heart goes into
              every song — the lyrics, the concepts, the stories behind them. I
              spend time crafting each track with intention, drawing from real
              experiences, real theology, and real pain.
            </p>
            <p>
              AI gave me a voice I never would have had otherwise. It let me take
              what was inside and make it something others could hear, feel, and
              be comforted by. The tool is new, but the message is ancient: God
              meets you in your brokenness. You are not alone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Ready to Listen?
          </h2>
          <p className="text-muted-foreground mb-8">
            Every song carries a story. Every track has a purpose. Dive in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors"
            >
              Explore the Music
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sunday-scars/share-your-story"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
