import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      // Static deployment (Cloudflare Pages/Workers): prerender every route
      // into dist/client so the site needs no server runtime.
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      // Cloudflare serves /404.html for unknown paths (see wrangler.toml);
      // the build script copies 404/index.html there. Kept out of the sitemap.
      pages: [
        {
          path: "/404",
          prerender: { enabled: true },
          sitemap: { exclude: true },
        },
      ],
      sitemap: {
        enabled: true,
        host: "https://faris.selo.my.id",
      },
    }),
    viteReact(),
  ],
})

export default config
