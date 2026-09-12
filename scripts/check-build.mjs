import { readFile, readdir, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { join } from 'node:path';
const root = 'dist';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir,e.name)) : join(dir,e.name)))).flat();
}
const files = await walk(root);
const home = await readFile('dist/index.html', 'utf8');
const canonical = home.match(/rel="canonical" href="([^"]+)"/)[1];
const base = new URL(canonical).pathname.replace(/\/$/, '');
for (const file of files.filter(f => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="description"/);
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    let url = match[1].split('#')[0].split('?')[0];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    assert.ok(url.startsWith(base + '/'), `${file}: URL outside base ${url}`);
    url = decodeURIComponent(url.slice(base.length));
    await access(join(root, url.endsWith('/') ? `${url}index.html` : url));
  }
}
for (const name of ['rss.xml','sitemap-index.xml','robots.txt','images/social-default-2026.png','images/alphagenome-social.png']) await access(join(root,name));
assert.match(await readFile('dist/rss.xml','utf8'), /<item>/);
console.log(`Verified metadata and local links in ${files.filter(f=>f.endsWith('.html')).length} pages, RSS, sitemap, and social image.`);
