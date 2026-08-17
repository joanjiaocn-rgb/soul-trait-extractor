# Soul Virtues Extractor

A Next.js prototype for a dark, dossier-style soul virtues reading tool.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Notes

- The current analyzer uses local scoring rules in the browser.
- The paid unlock flow is a prototype placeholder.
- Reports are framed as self-reflection, not diagnosis, therapy, or clinical evaluation.

## Cloudflare Pages

Use the `main` branch with `npm run build` as the build command and `out` as the build output directory.

To verify the deployed site in Google Search Console, add the HTML tag value as the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` production environment variable in Cloudflare Pages and redeploy.
