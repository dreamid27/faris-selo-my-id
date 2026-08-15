import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/portfolio/eyebrow"

const PROJECTS = [
  {
    name: "pos-device-shell",
    description:
      "Local printer, scale, and RFID service for point-of-sale hardware, shipped as a Tauri desktop app.",
    stack: ["Rust", "Tauri", "Hardware"],
    href: "https://github.com/dreamid27/pos-device-shell",
  },
  {
    name: "oasis",
    description:
      "The AI agent framework Go deserves — composable, interface-driven, and built for where AI is going.",
    stack: ["Go", "AI agents"],
    href: "https://github.com/dreamid27/oasis",
  },
  {
    name: "frontend-slides",
    description:
      "A Claude Code skill for animation-rich HTML presentations — 88 layout presets and 34 bold templates.",
    stack: ["AI tooling", "HTML", "Design"],
    href: "https://github.com/dreamid27/frontend-slides",
  },
  {
    name: "awesome-claude-skills",
    description:
      "A curated list of Claude Skills, resources, and tools for customizing AI-assisted workflows.",
    stack: ["AI tooling", "Curation"],
    href: "https://github.com/dreamid27/awesome-claude-skills",
  },
]

export function Projects() {
  return (
    <section
      id="works"
      className="scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-2">
          <Eyebrow>Featured works</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Things I build when nobody&apos;s asking
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="h-full rounded-3xl bg-(--background-darker) shadow-none transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0px_13px_11px_rgba(0,0,0,0.045),0px_24px_19px_rgba(0,0,0,0.055)]">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-medium sm:text-xl">
                      {project.name}
                    </h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border bg-card text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="size-4.5" />
                    </span>
                  </div>
                  <p className="flex-1 text-base text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="h-5.5 rounded-full bg-card text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
