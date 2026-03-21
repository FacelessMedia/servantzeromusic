import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const catalogDir = join(import.meta.dirname, 'catalog');
const folders = readdirSync(catalogDir, { withFileTypes: true }).filter(d => d.isDirectory());

let updated = 0;
for (const folder of folders) {
  const dataPath = join(catalogDir, folder.name, 'data.json');
  try {
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
    
    // Add verification fields
    data.verified = false;
    data.publishToSite = false;
    // Auto-verify if YouTube video exists or streaming platform evidence
    // verified = true when: youtubeVideoId is set OR spotifyUrl is set OR has song file
    // publishToSite = true ONLY when: verified AND has a song file (mp3 or wav)
    
    // Add confidence field for file matching
    data.fileMatchConfidence = null; // null = not matched yet, number = confidence score
    
    writeFileSync(dataPath, JSON.stringify(data, null, 2));
    updated++;
  } catch (e) {
    console.error(`Failed to update ${folder.name}: ${e.message}`);
  }
}

console.log(`Updated ${updated} data.json files with verification fields`);
