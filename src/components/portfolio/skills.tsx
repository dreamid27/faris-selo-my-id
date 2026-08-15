import { Code2, Server, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/portfolio/eyebrow"

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Interfaces that feel fast and stay maintainable — component systems, performance budgets, and the details users notice.",
    items: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "APIs and services that hold up in production, from quick Node.js services to typed Go and Rust when it matters.",
    items: ["Node.js", "NestJS", "Go", "Rust", "PostgreSQL"],
  },
  {
    icon: Sparkles,
    title: "AI & tooling",
    description:
      "Agent frameworks, Claude Code skills, and desktop tooling — building the workflows that make teams faster.",
    items: ["Claude Code", "Agent frameworks", "Tauri", "Developer tooling"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-2">
          <Eyebrow>Toolbox</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            What I reach for, and why
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <Card
              key={group.title}
              className="rounded-3xl bg-(--background-darker) shadow-none"
            >
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-card text-accent">
                  <group.icon className="size-5" />
                </div>
                <h3 className="text-lg font-medium sm:text-xl">
                  {group.title}
                </h3>
                <p className="flex-1 text-base text-muted-foreground">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="h-5.5 rounded-full bg-card text-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
