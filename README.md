# Soul Color Test

A Next.js soul color quiz with quick and deep modes, color result pages, and reflective reports.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Notes

- The analyzer uses local scoring rules in the browser.
- Quiz answers stay in the browser and are not sent to a report API.
- Reports are framed as self-reflection, not diagnosis, therapy, or clinical evaluation.

## Cloudflare Pages

Use the `main` branch with `npm run build` as the build command and `out` as the build output directory.

To verify the deployed site in Google Search Console, add the HTML tag value as the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` production environment variable in Cloudflare Pages and redeploy.
