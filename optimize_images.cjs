const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Sharp module not found. Please install sharp before running this script.');
  process.exit(1);
}

const publicDir = path.join(__dirname, 'public');

async function processImage(filePath) {
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  // Only process images > 300 KB
  if (stat.size < 300 * 1024) {
    return { skipped: true, size: stat.size };
  }

  const fileBuffer = fs.readFileSync(filePath);
  let pipeline = sharp(fileBuffer);
  const metadata = await pipeline.metadata();

  // Resize if dimensions exceed 1600px
  if (metadata.width > 1600 || metadata.height > 1600) {
    pipeline = pipeline.resize({
      width: metadata.width > metadata.height ? 1600 : undefined,
      height: metadata.height >= metadata.width ? 1600 : undefined,
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  let outputBuffer;
  if (ext === '.png') {
    outputBuffer = await pipeline.png({ quality: 80, compressionLevel: 8 }).toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
    outputBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  } else if (ext === '.webp') {
    outputBuffer = await pipeline.webp({ quality: 80 }).toBuffer();
  } else {
    return { skipped: true, size: stat.size };
  }

  if (outputBuffer.length < stat.size) {
    fs.writeFileSync(filePath, outputBuffer);
    console.log(`Optimized ${path.basename(filePath)}: ${(stat.size / 1024 / 1024).toFixed(2)}MB -> ${(outputBuffer.length / 1024 / 1024).toFixed(2)}MB`);
    return { original: stat.size, newSize: outputBuffer.length };
  }

  return { skipped: true, size: stat.size };
}

async function main() {
  console.log('Starting public directory image optimization...');
  const files = fs.readdirSync(publicDir);
  let totalOrig = 0;
  let totalNew = 0;
  let count = 0;

  for (const file of files) {
    const fullPath = path.join(publicDir, file);
    if (fs.statSync(fullPath).isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        try {
          const res = await processImage(fullPath);
          if (res.original) {
            totalOrig += res.original;
            totalNew += res.newSize;
            count++;
          }
        } catch (err) {
          console.error(`Error processing ${file}:`, err.message);
        }
      }
    }
  }

  console.log(`\nOptimization Complete!`);
  console.log(`Optimized ${count} images.`);
  console.log(`Original size of optimized files: ${(totalOrig / 1024 / 1024).toFixed(2)} MB`);
  console.log(`New size of optimized files: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((totalOrig - totalNew) / 1024 / 1024).toFixed(2)} MB!`);
}

main();
