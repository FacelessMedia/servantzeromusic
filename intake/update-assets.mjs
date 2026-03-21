import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const catalogDir = join(import.meta.dirname, 'catalog');
const folders = readdirSync(catalogDir, { withFileTypes: true }).filter(d => d.isDirectory());

let updated = 0;
let hasWav = 0;
let missingWav = [];

for (const folder of folders) {
  const dataPath = join(catalogDir, folder.name, 'data.json');
  const wavPath = join(catalogDir, folder.name, 'song.wav');
  const mp3Path = join(catalogDir, folder.name, 'song.mp3');
  const thumbJpg = join(catalogDir, folder.name, 'thumbnail.jpg');
  const thumbPng = join(catalogDir, folder.name, 'thumbnail.png');
  const thumbWebp = join(catalogDir, folder.name, 'thumbnail.webp');

  const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

  // Check WAV
  if (existsSync(wavPath)) {
    const size = statSync(wavPath).size;
    data.assets.wav = true;
    data.fileSizes.wav = `${(size / (1024 * 1024)).toFixed(1)} MB`;
    hasWav++;
  } else {
    data.assets.wav = false;
    data.fileSizes.wav = null;
    missingWav.push(data.title);
  }

  // Check MP3
  if (existsSync(mp3Path)) {
    const size = statSync(mp3Path).size;
    data.assets.mp3 = true;
    data.fileSizes.mp3 = `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  // Check thumbnails
  data.assets.thumbnail = existsSync(thumbJpg) || existsSync(thumbPng) || existsSync(thumbWebp);

  // Auto-verify: if WAV exists AND song was on YouTube (videoStatus = published), mark verified + publishToSite
  if (data.assets.wav && data.videoStatus === 'published') {
    data.verified = true;
    data.publishToSite = true;
  }

  writeFileSync(dataPath, JSON.stringify(data, null, 2));
  updated++;
}

console.log(`Updated ${updated} data.json files`);
console.log(`Songs with WAV: ${hasWav}`);
console.log(`Songs missing WAV: ${missingWav.length}`);
missingWav.forEach(t => console.log(`  ⬜ ${t}`));
