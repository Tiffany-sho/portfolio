// scripts/icon.html からサイトのアイコンを作る。
//   src/app/favicon.ico    … 16 / 32 / 48px（PNG を埋め込んだ ICO）
//   src/app/icon.png       … 512px（角丸・背景透過）
//   src/app/apple-icon.png … 180px（角丸なし。iPhone のホーム画面用）
// 実行: npm install --no-save playwright && node scripts/make-icons.mjs
//   （playwright は package.json に入れていない。npm install をやり直すと消えるので、その都度入れ直す）

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const dir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(dir, "..", "src", "app");
const url = (s, square = false) =>
  "file:///" + path.join(dir, "icon.html").replace(/\\/g, "/") + `?s=${s}${square ? "&square=1" : ""}`;

const browser = await chromium.launch();
const page = await browser.newPage();

// 縮小ではなく、それぞれの大きさで描き直す（ブラウザの文字のヒンティングが効いて、小さくてもにじみにくい）
async function render(s, square = false) {
  await page.setViewportSize({ width: s, height: s });
  await page.goto(url(s, square), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return page.locator("#icon").screenshot({ omitBackground: true });
}

// ICO = 6バイトのヘッダー + 16バイトの目次 x 枚数 + 各 PNG の中身
function toIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // カラープレーン
    e.writeUInt16LE(32, 6); // 1ピクセルあたりのビット数
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const ico = [];
for (const size of [16, 32, 48]) ico.push({ size, data: await render(size) });
fs.writeFileSync(path.join(appDir, "favicon.ico"), toIco(ico));
fs.writeFileSync(path.join(appDir, "icon.png"), await render(512));
fs.writeFileSync(path.join(appDir, "apple-icon.png"), await render(180, true));

await browser.close();
