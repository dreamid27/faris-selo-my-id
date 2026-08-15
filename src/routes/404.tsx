import { createFileRoute } from "@tanstack/react-router"

import { NotFoundPage } from "@/components/portfolio/not-found"

// Real route so the prerenderer can emit 404.html for Cloudflare's
// not-found handling; the router's notFoundComponent covers client-side.
export const Route = createFileRoute("/404")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Page not found — Muhammad Al Faris" },
      { name: "robots", content: "noindex" },
    ],
  }),
})
