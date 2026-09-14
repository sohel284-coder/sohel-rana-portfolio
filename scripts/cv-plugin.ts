import type { Plugin } from 'vite';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, mkdtemp, readFile, writeFile, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const exec = promisify(execFile);

export async function publishCV(root: string) {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'portfolio-cv-'));
  try {
    const output = path.join(temporary, 'cv.pdf');
    await exec(process.env.CHROME_PATH || 'google-chrome', [
      '--headless', '--disable-gpu', '--no-pdf-header-footer',
      `--user-data-dir=${path.join(temporary, 'profile')}`,
      `--print-to-pdf=${output}`,
      pathToFileURL(path.join(root, 'cv.html')).href,
    ], { timeout: 60000 });
    const pdf = await readFile(output);
    if (pdf.subarray(0, 5).toString() !== '%PDF-') throw new Error('Chrome did not generate a valid PDF.');
    const directory = path.join(root, 'public', 'cv');
    await mkdir(directory, { recursive: true });
    const now = new Date();
    const stamp = now.toLocaleString('sv-SE', { timeZone: 'Asia/Dhaka', hour12: false }).replace(/[ :]/g, '-');
    const filename = `Sohel_Rana_CV_${stamp}-${now.getMilliseconds()}.pdf`;
    await writeFile(path.join(directory, filename), pdf, { flag: 'wx' });
    const latest = { url: `/cv/${filename}`, filename, updatedAt: now.toISOString() };
    await writeFile(path.join(directory, 'latest.json.tmp'), JSON.stringify(latest, null, 2) + '\n');
    await rename(path.join(directory, 'latest.json.tmp'), path.join(directory, 'latest.json'));
    return latest;
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

export function cvPlugin(): Plugin {
  let busy = false;
  return {
    name: 'local-cv-publisher',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const route = req.url?.split('?')[0];
        if (route !== '/cv' && route !== '/cv/' && route !== '/__cv/update') return next();
        res.setHeader('Cache-Control', 'no-store');
        try {
          if (route !== '/__cv/update') {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            const html = await readFile(path.join(server.config.root, 'cv.html'), 'utf8');
            res.end(html.replace('<head>', '<head><base href="/">'));
            return;
          }
          res.setHeader('Content-Type', 'application/json');
          if (req.method !== 'POST') { res.statusCode = 405; res.end('{}'); return; }
          // Require a same-origin browser request before writing project files.
          if (!req.headers.origin || new URL(req.headers.origin).host !== req.headers.host || req.headers['x-cv-update'] !== '1') {
            res.statusCode = 403; res.end(JSON.stringify({ error: 'Open /cv on this server to update.' })); return;
          }
          if (busy) { res.statusCode = 409; res.end(JSON.stringify({ error: 'An update is already running.' })); return; }
          busy = true;
          try { res.end(JSON.stringify(await publishCV(server.config.root))); }
          finally { busy = false; }
        } catch (error) {
          server.config.logger.error(String(error));
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Could not save the CV. Check the terminal and ensure Google Chrome is installed (or set CHROME_PATH).' }));
        }
      });
    },
  };
}
