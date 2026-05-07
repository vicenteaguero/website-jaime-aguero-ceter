#!/usr/bin/env bash
# Optimize source images from apps/legacy_static/images into apps/site/public/images
# Generates WebP at multiple widths (640, 1280, 1920) plus a JPEG fallback at 1280.
# Requires: node + sharp installed locally (auto-installed via npx).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC_DIR="$ROOT_DIR/apps/legacy_static/images"
OUT_DIR="$ROOT_DIR/apps/site/public/images"

mkdir -p "$OUT_DIR"

cd "$ROOT_DIR/apps/site"

node --input-type=module -e "
import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = '$SRC_DIR';
const OUT = '$OUT_DIR';
const WIDTHS = [640, 1280, 1920];

await mkdir(OUT, { recursive: true });
const entries = await readdir(SRC);

for (const entry of entries) {
  const { name, ext } = parse(entry);
  const cleanName = name.replace(/\.+$/, '').replace(/[^a-z0-9-_]/gi, '-');
  const inPath = join(SRC, entry);

  if (ext.toLowerCase() === '.svg') {
    await copyFile(inPath, join(OUT, \`\${cleanName}.svg\`));
    console.log(\`copied svg \${cleanName}.svg\`);
    continue;
  }

  if (!['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
    continue;
  }

  for (const width of WIDTHS) {
    const out = join(OUT, \`\${cleanName}-\${width}.webp\`);
    await sharp(inPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    console.log(\`built \${out}\`);
  }

  const jpgFallback = join(OUT, \`\${cleanName}-1280.jpg\`);
  await sharp(inPath)
    .resize({ width: 1280, withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(jpgFallback);
  console.log(\`built \${jpgFallback}\`);
}

console.log('done');
" 2>&1
