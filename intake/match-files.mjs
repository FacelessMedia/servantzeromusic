import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const master = JSON.parse(readFileSync(join(import.meta.dirname, 'songs-master.json'), 'utf-8'));

// Build lookup from slugs and titles
const catalog = master.map(s => ({
  title: s.title,
  slug: s.slug,
  titleLower: s.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim(),
  slugWords: s.slug.split('-')
}));

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
  
  // Exact match
  if (normalized === catNorm) return 100;
  
  // One contains the other
  if (normalized.includes(catNorm) || catNorm.includes(normalized)) return 90;
  
  // Word overlap
  const fileWords = normalized.split(' ').filter(w => w.length > 1);
  const catWords = catNorm.split(' ').filter(w => w.length > 1);
  
  if (catWords.length === 0 || fileWords.length === 0) return 0;
  
  const matches = catWords.filter(w => fileWords.includes(w));
  const score = (matches.length / Math.max(catWords.length, fileWords.length)) * 100;
  
  return Math.round(score);
}

// Scan WAV files (use just one folder, not the copy)
const wavDir = join(import.meta.dirname, 'songs', 'wav');
let wavFiles;
try {
  wavFiles = readdirSync(wavDir).filter(f => f.toLowerCase().endsWith('.wav'));
} catch {
  // Try wav copy if wav doesn't exist
  const wavCopyDir = join(import.meta.dirname, 'songs', 'wav copy');
  wavFiles = readdirSync(wavCopyDir).filter(f => f.toLowerCase().endsWith('.wav'));
}

const matched = [];
const unmatched = [];
const catalogMatched = new Set();

for (const file of wavFiles) {
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
    matched.push({ file, matchedTo: bestMatch.title, slug: bestMatch.slug, confidence: bestScore });
    catalogMatched.add(bestMatch.slug);
  } else if (bestScore >= 50) {
    matched.push({ file, matchedTo: bestMatch.title, slug: bestMatch.slug, confidence: bestScore, needsConfirmation: true });
  } else {
    unmatched.push({ file, bestGuess: bestMatch?.title || 'NONE', bestScore });
  }
}

// Songs in catalog with no WAV match
const missing = catalog.filter(c => !catalogMatched.has(c.slug));

console.log('=== HIGH CONFIDENCE MATCHES (>=80%) ===');
console.log(`Count: ${matched.filter(m => !m.needsConfirmation).length}`);
matched.filter(m => !m.needsConfirmation).forEach(m => {
  console.log(`  ✓ "${m.file}" → ${m.slug} (${m.confidence}%)`);
});

console.log('\n=== NEEDS CONFIRMATION (50-79%) ===');
console.log(`Count: ${matched.filter(m => m.needsConfirmation).length}`);
matched.filter(m => m.needsConfirmation).forEach(m => {
  console.log(`  ? "${m.file}" → ${m.matchedTo} (${m.confidence}%)`);
});

console.log('\n=== NO MATCH FOUND (new songs not in YouTube catalog) ===');
console.log(`Count: ${unmatched.length}`);
unmatched.forEach(u => {
  console.log(`  ✗ "${u.file}" (best guess: ${u.bestGuess} at ${u.bestScore}%)`);
});

console.log('\n=== CATALOG SONGS WITH NO WAV FILE ===');
console.log(`Count: ${missing.length}`);
missing.forEach(m => {
  console.log(`  ⬜ ${m.title} (${m.slug})`);
});

console.log(`\n--- SUMMARY ---`);
console.log(`Total WAV files: ${wavFiles.length}`);
console.log(`High confidence matches: ${matched.filter(m => !m.needsConfirmation).length}`);
console.log(`Needs confirmation: ${matched.filter(m => m.needsConfirmation).length}`);
console.log(`New songs (no catalog entry): ${unmatched.length}`);
console.log(`Catalog songs missing WAV: ${missing.length}`);
