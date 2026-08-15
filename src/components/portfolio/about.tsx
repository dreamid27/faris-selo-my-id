import { MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/portfolio/eyebrow"

const AVATAR_URL = "/images/profile.png"

const STATS = [
  { value: "9+", label: "years shipping software" },
  { value: "5", label: "product companies, from seed to unicorn" },
  { value: "70+", label: "public repositories on GitHub" },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-2">
          <Eyebrow>About me</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            The person behind the commits
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
          <Card className="overflow-hidden rounded-3xl bg-(--background-darker) shadow-none">
            <CardContent className="space-y-4 p-4">
              <img
                src={AVATAR_URL}
                alt="Muhammad Al Faris"
                width={420}
                height={420}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="space-y-1 px-1">
                <p className="text-lg font-medium">Muhammad Al Faris</p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  Bandung, Indonesia
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                I started writing code professionally in 2015 and never really
                stopped. Since then I&apos;ve built for Indonesia&apos;s biggest
                marketplace, its largest aquaculture-tech company, and a
                YC-backed fintech — always as the engineer who&apos;s happiest
                owning a feature from first sketch to production.
              </p>
              <p>
                These days I care most about product engineering with small
                teams, web performance, and building tools for the AI-assisted
                workflows that are changing how software gets made.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <Card
                  key={stat.label}
                  className="rounded-3xl bg-(--background-darker) shadow-none"
                >
                  <CardContent className="space-y-1 p-5">
                    <p className="text-3xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
