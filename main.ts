// news-image-20261125 — "THE WORLD TODAY", a one-page newspaper front page
// summing up the world news of Wednesday, November 25, 2026.
//
// The artwork ships in this repository as entry.png, drawn ahead of time.
// This program's whole job is to place that file where the judges look for
// it: /output/entry.png. It uses only the Node standard library and needs
// no network, so it behaves the same on every run.

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`[world-today] missing source image: ${source}`);
  process.exit(1);
}

// A whole image or nothing: the first bytes must say PNG or JPEG.
const head = readFileSync(source).subarray(0, 8);
const isPng =
  head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47;
const isJpeg = head[0] === 0xff && head[1] === 0xd8;
if (!isPng && !isJpeg) {
  console.error("[world-today] entry.png is neither a PNG nor a JPEG");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const bytes = statSync(target).size;
console.log(
  `[world-today] wrote ${target} (${isPng ? "PNG" : "JPEG"}, ${bytes} bytes)`,
);
