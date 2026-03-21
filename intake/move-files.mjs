import { readFileSync, readdirSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const master = JSON.parse(readFileSync(join(import.meta.dirname, 'songs-master.json'), 'utf-8'));
const catalogDir = join(import.meta.dirname, 'catalog');
const pendingDir = join(import.meta.dirname, 'pending');

mkdirSync(pendingDir, { recursive: true });

// Build lookup
const catalogBySlug = {};
const catalog = master.map(s => {
  const entry = {
    title: s.title,
    slug: s.slug,
    titleLower: s.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim(),
  };
  catalogBySlug[s.slug] = entry;
  return entry;
});

function normalize(filename) {
  return basename(filename, extname(filename))
    .replace(/_/g, "'")
    .replace(/[^a-zA-Z0-9 ']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

function matchScore(normalized, catalogEntry) {
  const catNorm = catalogEntry.titleLower;
  if (normalized === catNorm) return 100;
  if (normalized.includes(catNorm) || catNorm.includes(normalized)) return 90;
  const fileWords = normalized.split(' ').filter(w => w.length > 1);
  const catWords = catNorm.split(' ').filter(w => w.length > 1);
  if (catWords.length === 0 || fileWords.length === 0) return 0;
  const matches = catWords.filter(w => fileWords.includes(w));
  return Math.round((matches.length / Math.max(catWords.length, fileWords.length)) * 100);
}

// Manual overrides for known matches
const MANUAL_MATCHES = {
  '6-7 The Truth.wav': '6-7-the-truth',
};

// Known different songs (not the same as catalog match)
const FORCE_PENDING = [
  'Wake Up!.wav', // Different from Wake Up Christian
  'Blood of the witnesses.wav',
  'end of the world.wav',
  'leanness of the soul.wav',
  'one step.wav',
  'Posted in the shadows.wav',
  'the game is over.wav',
  'unlearning the chains .wav',
];

// Find WAV source dir
let wavDir = join(import.meta.dirname, 'songs', 'wav');
if (!existsSync(wavDir)) {
  wavDir = join(import.meta.dirname, 'songs', 'wav copy');
}
const wavFiles = readdirSync(wavDir).filter(f => f.toLowerCase().endsWith('.wav'));

let movedToCatalog = 0;
let movedToPending = 0;

for (const file of wavFiles) {
  const filePath = join(wavDir, file);

  // Check manual overrides first
  if (MANUAL_MATCHES[file]) {
    const dest = join(catalogDir, MANUAL_MATCHES[file], 'song.wav');
    copyFileSync(filePath, dest);
    console.log(`  ✓ MANUAL: "${file}" → ${MANUAL_MATCHES[file]}/song.wav`);
    movedToCatalog++;
    continue;
  }

  // Force to pending
  if (FORCE_PENDING.includes(file)) {
    const dest = join(pendingDir, file);
    copyFileSync(filePath, dest);
    console.log(`  ⏳ PENDING: "${file}"`);
    movedToPending++;
    continue;
  }

  // Auto-match
  const norm = normalize(file);
  let bestMatch = null;
  let bestScore = 0;
  for (const entry of catalog) {
    const score = matchScore(norm, entry);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestScore >= 80) {
    const dest = join(catalogDir, bestMatch.slug, 'song.wav');
    copyFileSync(filePath, dest);
    console.log(`  ✓ "${file}" → ${bestMatch.slug}/song.wav (${bestScore}%)`);
    movedToCatalog++;
  } else {
    // Not in catalog = pending
    const dest = join(pendingDir, file);
    copyFileSync(filePath, dest);
    console.log(`  ⏳ PENDING: "${file}" (best: ${bestMatch?.title} at ${bestScore}%)`);
    movedToPending++;
  }
}

console.log(`\n--- DONE ---`);
console.log(`Moved to catalog folders: ${movedToCatalog}`);
console.log(`Moved to pending: ${movedToPending}`);
