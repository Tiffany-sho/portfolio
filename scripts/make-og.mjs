// scripts/og.html から src/app/opengraph-image.png（1200x630）を作る。
// 実行: node scripts/make-og.mjs （playwright はこのリポジトリの node_modules のものを使う）

import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const dir = path.dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto("file:///" + path.join(dir, "og.html").replace(/\\/g, "/"), { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(dir, "..", "src", "app", "opengraph-image.png") });
await browser.close();
