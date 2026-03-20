import sharp from 'sharp';
import path from 'path';

const INPUT = path.resolve('servant zero standing.jpeg');
const OUTPUT = path.resolve('public/images/servant-zero-hero.webp');

await sharp(INPUT)
  .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(OUTPUT);

const stats = await sharp(OUTPUT).metadata();
console.log(`Done → ${OUTPUT}`);
console.log(`Size: ${stats.width}x${stats.height}, format: ${stats.format}`);
