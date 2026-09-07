import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const RAW_DESKTOP_DIR = path.join(projectRoot, 'public', 'eye-animation', 'raw-desktop');
const RAW_MOBILE_DIR = path.join(projectRoot, 'public', 'eye-animation', 'raw-mobile');
const DESKTOP_DIR = path.join(projectRoot, 'public', 'eye-animation', 'desktop');
const MOBILE_DIR = path.join(projectRoot, 'public', 'eye-animation', 'mobile');

const CONCURRENCY = 12;

let mobileDimensions = { width: 1080, height: 1920 };

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function convertFrame(index) {
  const paddedIndex = String(index).padStart(3, '0');
  const inputFileName = `ezgif-frame-${paddedIndex}.jpg`;
  const outputFileName = `ezgif-frame-${paddedIndex}.webp`;

  const desktopInputPath = path.join(RAW_DESKTOP_DIR, inputFileName);
  const mobileInputPath = path.join(RAW_MOBILE_DIR, inputFileName);
  const desktopOutputPath = path.join(DESKTOP_DIR, outputFileName);
  const mobileOutputPath = path.join(MOBILE_DIR, outputFileName);

  // 1. Desktop: read from raw-desktop, resize to 1280x720, WebP q75
  const desktopBuffer = await fs.readFile(desktopInputPath);
  await sharp(desktopBuffer)
    .resize(1280, 720, { fit: 'contain' })
    .webp({ quality: 75, effort: 4 })
    .toFile(desktopOutputPath);

  // 2. Mobile: read from raw-mobile, output at native portrait resolution, WebP q75
  const mobileBuffer = await fs.readFile(mobileInputPath);
  await sharp(mobileBuffer)
    .resize(mobileDimensions.width, mobileDimensions.height, { fit: 'contain' })
    .webp({ quality: 75, effort: 4 })
    .toFile(mobileOutputPath);
}

async function runPool(items, limit, workerFn) {
  let index = 0;
  let completed = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      const item = items[currentIndex];
      await workerFn(item);
      completed++;
      if (completed % 25 === 0 || completed === items.length) {
        process.stdout.write(`\rProgress: ${completed}/${items.length} frames converted...`);
      }
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  console.log('\n');
}

async function main() {
  await ensureDir(DESKTOP_DIR);
  await ensureDir(MOBILE_DIR);

  // Detect native mobile resolution dynamically from raw-mobile/ezgif-frame-001.jpg
  const sampleMobilePath = path.join(RAW_MOBILE_DIR, 'ezgif-frame-001.jpg');
  const mobileMeta = await sharp(sampleMobilePath).metadata();
  mobileDimensions = { width: mobileMeta.width, height: mobileMeta.height };

  // Detect total frames count from raw-desktop folder
  const rawDesktopFiles = (await fs.readdir(RAW_DESKTOP_DIR)).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg'));
  const totalFrames = rawDesktopFiles.length;

  console.log(`Starting frame conversion for ${totalFrames} frames...`);
  console.log(`Desktop input directory: ${RAW_DESKTOP_DIR}`);
  console.log(`Desktop output directory: ${DESKTOP_DIR} (1280x720, WebP q75)`);
  console.log(`Mobile input directory: ${RAW_MOBILE_DIR}`);
  console.log(`Mobile output directory: ${MOBILE_DIR} (Native ${mobileDimensions.width}x${mobileDimensions.height}, WebP q75)`);

  const frameIndices = Array.from({ length: totalFrames }, (_, i) => i + 1);

  const startTime = Date.now();
  await runPool(frameIndices, CONCURRENCY, convertFrame);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`Conversion completed in ${duration}s.`);

  const desktopFiles = (await fs.readdir(DESKTOP_DIR)).filter(f => f.endsWith('.webp'));
  const mobileFiles = (await fs.readdir(MOBILE_DIR)).filter(f => f.endsWith('.webp'));

  console.log(`Desktop WebP frames: ${desktopFiles.length}/${totalFrames}`);
  console.log(`Mobile WebP frames: ${mobileFiles.length}/${totalFrames}`);

  if (desktopFiles.length !== totalFrames || mobileFiles.length !== totalFrames) {
    throw new Error(`Frame count mismatch! Expected: ${totalFrames}`);
  }

  console.log('✅ Conversion completed successfully.');
}

main().catch(err => {
  console.error('Fatal error during conversion:', err);
  process.exit(1);
});
