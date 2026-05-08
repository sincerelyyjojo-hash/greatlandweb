import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/JoJo/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotsDir = join(__dirname, 'temporary screenshots');
if (!existsSync(screenshotsDir)) mkdirSync(screenshotsDir, { recursive: true });

const existing = readdirSync(screenshotsDir).filter(f => f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n) && n > 0);
const nextNum = nums.length > 0 ? Math.max(...nums) + 1 : 1;
const filename = label ? `screenshot-${nextNum}-${label}.png` : `screenshot-${nextNum}.png`;
const filepath = join(screenshotsDir, filename);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
// Force all fade-up elements visible for full-page screenshot
await page.evaluate(() => {
  document.querySelectorAll('.fu').forEach(el => el.classList.add('iv'));
});
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();
console.log(`Saved: ${filepath}`);
