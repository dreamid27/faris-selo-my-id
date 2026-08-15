# faris.selo.my.id

Portfolio of **Muhammad Al Faris** — full stack engineer based in Bandung,
Indonesia. Built with TanStack Start, React 19, Tailwind CSS v4, and shadcn
components, following the [Zolt](https://github.com/shadcnstudio/shadcn-nextjs-zolt-landing-page-free)
design language.

Live at <https://faris.selo.my.id>.

## Stack

- [TanStack Start](https://tanstack.com/start) (Vite) with full static prerender — no server runtime needed
- Tailwind CSS v4 + shadcn/base-ui components
- [motion](https://motion.dev) for scroll timeline, greeting, and card animations
- Satoshi variable-weight webfonts (self-hosted)

## Development

```sh
bun install
bun run dev        # http://localhost:3000
bun run typecheck  # tsc --noEmit
bun run build      # prerender to dist/client (includes sitemap.xml)
bun run preview    # serve the production build locally
```

## Deployment (Cloudflare)

The build output in `dist/client` is fully static.

**Option A — Cloudflare Pages (recommended, auto-deploy from Git):**

1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect
   `dreamid27/faris-selo-my-id`.
2. Build settings:
   - Build command: `bun run build`
   - Build output directory: `dist/client`
3. Add the custom domain `faris.selo.my.id` under the project's
   **Custom domains** tab (CNAME is configured automatically).

**Option B — Wrangler (manual deploy as Workers static assets):**

```sh
bun run deploy   # bun run build && npx wrangler deploy
```

`wrangler.toml` points at `dist/client` with 404 handling; `public/_headers`
carries the security and cache headers Cloudflare applies at the edge.

## Production notes

- **SEO/social**: canonical URL, Open Graph + Twitter cards with a generated
  `og.png`, `sitemap.xml` (generated at build), `robots.txt`.
- **GEO**: `public/llms.txt` summarizes the profile for AI crawlers.
- **Structured data**: JSON-LD `Person` + `WebSite` in the document head.
- **Icons**: `public/favicon.svg` is the source of truth; regenerate the PNG
  set and `og.png` with the icon script if the mark changes.
- **Site constants** (URL, title, socials) live in `src/lib/site.ts`.
- **Content**: testimonials are placeholder quotes; experience copy is drafted
  from public LinkedIn/GitHub data — edit in `src/components/portfolio/`.
