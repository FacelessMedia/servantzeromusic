import type { Metadata } from "next";
import { Music, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Browse the full Servant Zero catalog. Listen to every song, watch videos, read lyrics, and buy MP3s directly.",
};

export default function MusicPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Music Catalog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every song. Every story. Listen in-browser, watch videos, read
              lyrics, and buy MP3s directly.
            </p>
          </div>

          {/* Placeholder for catalog - will be populated with real data in Phase 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Racism Is Racist",
              "I'm Haunted",
              "I Forgive You, Pastor",
              "Hard To Talk To You",
              "Can't Keep Up",
              "Desperation Like Hers",
              "Dear Mom and Dad",
              "Babylon Burns",
              "Start Over",
              "Behold the Man",
              "Mark of the Beast",
              "More songs coming...",
            ].map((title, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Music className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Servant Zero
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Full catalog with ~100 songs coming soon. Drop your MP3 files and
              metadata to populate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
