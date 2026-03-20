import type { Metadata } from "next";
import { Suspense } from "react";
import { MusicCatalog } from "./MusicCatalog";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Browse the full Servant Zero catalog. Listen to every song, watch videos, read lyrics, and buy MP3s directly.",
};

export default function MusicPage() {
  return (
    <Suspense>
      <MusicCatalog />
    </Suspense>
  );
}
