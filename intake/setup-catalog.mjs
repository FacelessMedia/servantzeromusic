import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const master = JSON.parse(readFileSync(join(import.meta.dirname, 'songs-master.json'), 'utf-8'));
const catalogDir = join(import.meta.dirname, 'catalog');

mkdirSync(catalogDir, { recursive: true });

let created = 0;
for (const song of master) {
  const dir = join(catalogDir, song.slug);
  mkdirSync(dir, { recursive: true });

  const data = {
    title: song.title,
    displayTitle: song.displayTitle || song.title,
    slug: song.slug,
    duration: song.duration,
    videoReleaseDate: song.videoReleaseDate,
    videoStatus: song.videoStatus,
    youtubeVideoId: song.youtubeVideoId || "",
    spotifyUrl: song.spotifyUrl || "",
    appleMusicUrl: song.appleMusicUrl || "",
    amazonMusicUrl: song.amazonMusicUrl || "",
    tidalUrl: song.tidalUrl || "",
    youtubeMusicUrl: song.youtubeMusicUrl || "",
    story: song.story || "",
    lyrics: song.lyrics || "",
    tags: [],
    assets: {
      mp3: false,
      wav: false,
      thumbnail: false,
      lyricsFile: false
    },
    pricing: {
      mp3: 0.99,
      wav: 1.29
    },
    fileSizes: {
      mp3: null,
      wav: null
    }
  };

  writeFileSync(join(dir, 'data.json'), JSON.stringify(data, null, 2));
  created++;
}

console.log(`Created ${created} song folders with data.json in ${catalogDir}`);
