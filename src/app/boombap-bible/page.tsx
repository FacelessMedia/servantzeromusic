import type { Metadata } from "next";
import Image from "next/image";
import { YouTubeIcon } from "@/components/icons/BrandIcons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { EmailSignup } from "@/components/EmailSignup";

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
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Boombap Bible", url: `${SITE_URL}/boombap-bible` },
      ])} />
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson-950/20 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block w-28 h-28 rounded-full overflow-hidden border-2 border-primary/40 mb-6 shadow-lg shadow-primary/10">
            <Image
              src="/images/boombap-bible-logo.jpg"
              alt="Boombap Bible"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
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
              href="https://youtube.com/@boombapbible"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
            >
              <YouTubeIcon className="w-5 h-5" />
              Subscribe on YouTube
            </a>
            <a
              href="#notify"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Why I'm Creating This */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Why I&apos;m Creating This
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              There are people who will never open a Bible. They won&apos;t walk
              into a church. They won&apos;t sit through a sermon. But they will
              press play.
            </p>
            <p>
              Music reaches people where words on a page can&apos;t. It embeds
              itself in your mind. It follows you to work, rides with you in the
              car, and plays in your head long after the headphones come off.
              What if Scripture could do the same thing?
            </p>
            <p>
              That&apos;s the vision behind Boombap Bible — to take the
              King James Version of the Bible, word for word, and set it to
              classic boom bap hip hop production. Not paraphrased. Not
              &ldquo;inspired by.&rdquo; The actual text of Scripture, delivered
              over soulful samples and hard-hitting drums.
            </p>
            <p className="text-foreground font-semibold text-lg">
              The music becomes the backdrop to the Word. The beat becomes the
              vehicle. And the listener — who may never have picked up a Bible —
              walks away with Scripture embedded in their memory.
            </p>
            <p>
              I&apos;m not trying to replace reading the Bible. I&apos;m trying
              to reach the people who never will — and give them a way to hear
              it, feel it, and carry it with them.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">
            Watch on YouTube
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            The Boombap Bible YouTube channel is where every chapter comes to
            life. Subscribe to follow along as the project unfolds.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=boombapbible"
              title="Boombap Bible YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://youtube.com/@boombapbible"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              <YouTubeIcon className="w-5 h-5" />
              youtube.com/@boombapbible
            </a>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            What is Boombap Bible?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/boombap-bible-funny.jpg"
                alt="Servant Zero showing biblical elders a boombox — It's the Bible, with a hip hop backdrop"
                width={600}
                height={338}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-muted-foreground leading-relaxed">
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
          <EmailSignup
            source="boombap-bible-launch-list"
            buttonText="Notify Me"
            successMessage="You're on the list! We'll let you know when Boombap Bible drops."
            footnote="No spam. Just Scripture."
          />
        </div>
      </section>
    </>
  );
}
