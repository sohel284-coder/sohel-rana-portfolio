# Sohel Rana’s portfolio

React 19, TypeScript, Vite, React Router, Lucide icons, and locally bundled CSS. The site uses the supplied Plex Sans font; it does not load a Tailwind runtime or require API keys.

## Development and checks

- `npm ci`
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm test` (build first; uses Google Chrome, or set `CHROME_PATH`)

Browser tests cover responsive layouts at 320, 390, 768, and 1440 pixels, keyboard navigation, reduced motion, current-CV downloads and fallback, and mocked Formspree success and failure. No real form submissions are sent by tests. Screenshots are written to `/tmp/portfolio-*.png`.

Content shared across projects, skills, and contact lives in `data.ts`. Styling lives in `styles.css`. Contact submissions go to the existing Formspree endpoint and only show success after an HTTP success response. Direct visits to `/thank-you` do not claim submission success. Vercel’s SPA rewrite is retained.

## Update your CV

1. Edit and save the root `cv.html` file.
2. With `npm run dev` running, open `http://localhost:3000/cv` (refresh after editing).
3. Click **Update version**. Google Chrome generates a PDF in `public/cv/` with the date and time in Asia/Dhaka in its filename. Install Chrome or set `CHROME_PATH` to your Chrome/Chromium executable if needed.
4. Portfolio Resume and Download CV buttons fetch `public/cv/latest.json` at click time and download the newest saved version. Older PDFs are retained; the original PDFs are also untouched. If the manifest request fails, buttons use the latest manifest bundled at build time, rather than an older legacy PDF.
5. Commit the generated PDF and `public/cv/latest.json`, then rebuild/redeploy to update the live portfolio.

`/cv` is an unlinked, local development route. The update endpoint is only available during `npm run dev`; static hosting cannot write back into your project. The CV HTML editor is not included in the production build. Generated PDFs are public files, accessible to anyone who knows their URL.

`fonts/PlexSans.woff2` is included in the project and used by `cv.html` for both the local preview and generated PDFs.
