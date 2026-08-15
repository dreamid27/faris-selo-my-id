import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import { NotFoundPage } from "@/components/portfolio/not-found"
import { SITE } from "@/lib/site"

import appCss from "../styles.css?url"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "Muhammad Al Faris",
      alternateName: "Faris",
      jobTitle: "Full Stack Engineer",
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/images/profile.png`,
      email: `mailto:${SITE.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bandung",
        addressRegion: "West Java",
        addressCountry: "ID",
      },
      sameAs: [SITE.github, SITE.linkedin],
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "NestJS",
        "Go",
        "Rust",
        "PostgreSQL",
        "AI tooling",
      ],
      worksFor: { "@type": "Organization", name: "Independent" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.title,
      description: SITE.description,
      url: SITE.url,
      inLanguage: "en-US",
      about: { "@id": `${SITE.url}/#person` },
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: SITE.themeColor },
      // Open Graph
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: `${SITE.url}/og.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Muhammad Al Faris — Full Stack Engineer, Bandung, Indonesia",
      },
      { property: "og:locale", content: SITE.locale },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: `${SITE.url}/og.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE.url },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.json" },
      ...["satoshi-400", "satoshi-500", "satoshi-700"].map((font) => ({
        rel: "preload",
        href: `/fonts/${font}.woff2`,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous" as const,
      })),
    ],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
