# Varol Apps Website

Static marketing, product, support, and legal website for Varol Apps and Evlio.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- React Router
- npm

## Local Development

```bash
npm install
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Quality Checks

```bash
npm run lint
```

## Deploy

The site is designed for Cloudflare Pages as a static SPA.

Cloudflare Pages settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `varolapps-site`
- Node.js: use the Cloudflare default supported Node version or a current LTS version

SPA fallback is handled by `public/_redirects`.

## Languages

- Turkish is the default language and uses prefixless URLs.
- English uses the `/en` prefix.
- Canonical Evlio URLs use the short `/evlio/...` route family.
- Legacy `/apps/evlio/...` routes remain available as aliases.

## Store URL List

- Privacy: https://varolapps.com/evlio/privacy
- Support: https://varolapps.com/evlio/support
- Terms: https://varolapps.com/evlio/terms
- Delete Account: https://varolapps.com/evlio/delete-account
- FAQ: https://varolapps.com/evlio/faq
- Cookies: https://varolapps.com/evlio/cookies
