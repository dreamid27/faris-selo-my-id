import { Award, CalendarDays, Megaphone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { ActivityCard } from "@/components/portfolio/activity-card"
import { Eyebrow } from "@/components/portfolio/eyebrow"
import { Timeline } from "@/components/portfolio/timeline"
import { cn } from "@/lib/utils"

type ExperienceItem = {
  index: string
  company: string
  initials: string
  role: string
  period: string
  status?: { text: string; tone: "positive" | "accent" }
  stack: Array<string>
  highlight: string
  description: string
}

const EXPERIENCES: Array<ExperienceItem> = [
  {
    index: "01",
    company: "Delegasi (YC S22)",
    initials: "De",
    role: "Product Engineer",
    period: "Oct 2022 – May 2025",
    status: { text: "· 2 yrs 8 mos", tone: "accent" },
    stack: ["TypeScript", "React", "Node.js", "Product"],
    highlight: "Owned features end to end at a YC-backed fintech startup",
    description:
      "Delegasi builds an AI-powered finance and accounting assistant for Indonesian businesses. Worked across the whole product — frontend, backend, and product decisions — shipping features from first idea to production.",
  },
  {
    index: "02",
    company: "eFishery",
    initials: "eF",
    role: "Product Engineer",
    period: "Mar 2021 – Dec 2023",
    status: { text: "· 2 yrs 10 mos", tone: "accent" },
    stack: ["React", "TypeScript", "Go", "Microservices"],
    highlight:
      "Built products for Indonesia's largest aquaculture-tech company",
    description:
      "Built and maintained farmer-facing products and internal tools in fast-moving squads, working closely with product and design to serve fish and shrimp farmers across Indonesia.",
  },
  {
    index: "03",
    company: "Tokopedia",
    initials: "To",
    role: "Software Engineer",
    period: "Jun 2020 – Mar 2021",
    status: { text: "· 10 mos", tone: "accent" },
    stack: ["React", "TypeScript", "Web performance"],
    highlight: "Engineered at the scale of Indonesia's biggest marketplace",
    description:
      "Worked on web platform features for one of Southeast Asia's largest e-commerce companies, where performance and reliability at massive traffic are the baseline, not the goal.",
  },
  {
    index: "04",
    company: "Bridestory & Parentstory",
    initials: "Br",
    role: "Frontend Engineer",
    period: "Aug 2019 – Jun 2020",
    status: { text: "· 11 mos", tone: "accent" },
    stack: ["React", "JavaScript", "UI engineering"],
    highlight: "Shipped consumer-facing features for two marketplace brands",
    description:
      "Built frontend features for Bridestory, Indonesia's leading wedding marketplace, and its sister product Parentstory — polishing flows used by couples and parents every day.",
  },
  {
    index: "05",
    company: "Nextvibes",
    initials: "Ne",
    role: "Web Programmer",
    period: "Feb 2017 – May 2019",
    status: { text: "· 2 yrs 4 mos", tone: "accent" },
    stack: ["JavaScript", "PHP", "Web fundamentals"],
    highlight: "Where the fundamentals were built",
    description:
      "Full-stack web development across client projects — the years of learning how the web really works, one shipped site at a time.",
  },
]

function ExperienceTimelineItem({
  company,
  initials,
  role,
  period,
  status,
  stack,
  highlight,
  description,
}: Omit<ExperienceItem, "index">) {
  return (
    <div className="space-y-4">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-13.5 shrink-0 items-center justify-center rounded-md border bg-card text-lg font-bold text-accent sm:size-14">
          {initials}
        </div>
        <div>
          <p className="text-muted-foreground">{company}</p>
          <h3 className="text-lg font-medium sm:text-[26px] sm:leading-8">
            {role}
          </h3>
        </div>
      </div>

      <div className="mb-1.5 space-y-3 text-sm sm:text-base">
        <p className="flex items-center gap-2">
          <CalendarDays className="size-5 text-muted-foreground" />
          <span className="text-base">
            {period}
            {status && (
              <span
                className={cn(
                  "ml-1 font-medium",
                  status.tone === "positive"
                    ? "text-green-600 dark:text-green-400"
                    : "text-accent"
                )}
              >
                {status.text}
              </span>
            )}
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Award className="size-5 text-muted-foreground" />
          {stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="h-5.5 rounded-full bg-(--background-darker) text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <p className="flex items-start gap-2 font-medium">
          <Megaphone className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
          <span className="text-base font-medium">{highlight}</span>
        </p>
      </div>

      <p className="ml-7 max-w-145 text-muted-foreground">{description}</p>
    </div>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      className="min-w-0 scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-2">
          <Eyebrow>Stacks & Experience</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Where I&apos;m good and where I learned it
          </h2>
        </div>

        <ActivityCard />

        <Timeline
          data={EXPERIENCES.map(({ index, ...experience }) => ({
            index,
            content: <ExperienceTimelineItem {...experience} />,
          }))}
        />
      </div>
    </section>
  )
}
