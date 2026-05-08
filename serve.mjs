import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const server = createServer(async (req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  if (url === '/about') url = '/about.html';
  if (url === '/services') url = '/services/index.html';
  if (url === '/contact') url = '/contact.html';
  if (url === '/projects') url = '/projects/index.html';
  if (url.startsWith('/projects/') && !url.includes('.')) url = url + '.html';
  if (url.startsWith('/services/') && !url.includes('.')) url = url + '.html';
  const filePath = join(__dirname, url);
  const ext = extname(filePath).toLowerCase();
  const contentType = mime[ext] || 'application/octet-stream';
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
