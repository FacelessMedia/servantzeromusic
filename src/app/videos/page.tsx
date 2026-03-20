import type { Metadata } from "next";
import { VideoGrid } from "./VideoGrid";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Servant Zero music videos. Christian rap born from real struggle — faith-based hip hop for the spiritually wounded.",
};

export default function VideosPage() {
  return <VideoGrid />;
}
