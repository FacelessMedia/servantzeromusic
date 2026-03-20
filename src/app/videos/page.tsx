import type { Metadata } from "next";
import { Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Servant Zero music videos. Christian rap born from real struggle — faith-based hip hop for the spiritually wounded.",
};

export default function VideosPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Videos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch Servant Zero music videos. New content every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "sR665fcOy4E", title: "Racism Is Racist" },
            { id: "yFsF5zbg2sc", title: "I'm Haunted" },
            { id: "s_JkH_4d4VA", title: "I Forgive You, Pastor" },
            { id: "hKgG5F60ljA", title: "Hard To Talk To You" },
            { id: "fCEleY2aVpU", title: "Can't Keep Up (Concert Style)" },
            { id: "hotAqi0cldQ", title: "Desperation Like Hers" },
            { id: "zq-_U4nGGWw", title: "Dear Mom and Dad" },
            { id: "_iIPILHykOY", title: "Babylon Burns" },
          ].map((video) => (
            <div
              key={video.id}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground">Servant Zero</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@servantzeromusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/10 text-red-500 font-semibold rounded-md hover:bg-red-600/20 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            See All 173+ Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
