import { useRef, useState } from "react"
import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Eyebrow } from "@/components/portfolio/eyebrow"
import { cn } from "@/lib/utils"

const AVATAR_URL = "/images/profile.png"

const STATS = [
  { label: "Years", value: "9+" },
  { label: "Companies", value: "5" },
  { label: "Repos", value: "70+" },
]

const FEATURES = [
  "One product at a time",
  "Full stack, schema to pixel",
  "Weekly shipped increments",
  "Async-first communication",
  "Direct access, no middleman",
]

function ProfileCard({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  })
  const rotate = useTransform(progress, [0, 0.5, 1], [-4, 0, 4])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col justify-between rounded-2xl border bg-background p-6",
        className
      )}
    >
      <motion.div
        style={{ rotate }}
        className="origin-bottom perspective-[1500px]"
      >
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          onClick={() => setIsFlipped((prev) => !prev)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              setIsFlipped((prev) => !prev)
            }
          }}
          className={cn(
            "relative cursor-pointer transition-transform duration-700 transform-3d",
            isFlipped && "transform-[rotateY(180deg)]"
          )}
        >
          <Card className="rounded-3xl shadow-lg backface-hidden">
            <CardContent className="space-y-4 p-6">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={AVATAR_URL}
                  alt="Muhammad Al Faris"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="size-28 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">Muhammad Al Faris</h3>
                  <p className="flex items-center justify-center gap-1 text-base font-medium text-muted-foreground">
                    <MapPinIcon className="size-4" />
                    Bandung, Indonesia
                  </p>
                </div>
                <div className="flex w-full justify-center divide-x divide-border text-center">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex-1 px-3">
                      <p className="text-xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="absolute inset-0 transform-[rotateY(180deg)] overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-lg backface-hidden">
            <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
              <div>
                <p className="text-xs text-primary-foreground/60">
                  Muhammad Al Faris
                </p>
                <h3 className="text-base font-medium">Building since 2015</h3>
              </div>
              <p className="text-base">
                I care about craft, simple solutions, and shipping things people
                actually use.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <div className="mt-6 space-y-3">
        <Badge
          variant="outline"
          className="h-6.5 gap-1 rounded-full bg-card text-green-600 shadow-sm dark:text-green-400"
        >
          <span className="relative inline-flex size-1.5">
            <span className="absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40" />
            <span className="relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400" />
          </span>
          Available
        </Badge>

        <p className="mb-2 text-xl font-medium sm:text-2xl lg:text-3xl">
          Hire me today
        </p>

        <p className="text-base text-muted-foreground">
          I take on one product at a time, so your work always gets my full
          focus.
        </p>
      </div>
    </div>
  )
}

function PricingCard({ className }: { className?: string }) {
  return (
    <Card className={cn("rounded-2xl border bg-background py-6", className)}>
      <CardContent className="space-y-6 px-6">
        <div className="space-y-2.5">
          <p className="text-2xl font-medium text-foreground lg:text-3xl">
            Monthly Retainer
          </p>
          <p className="mb-0 text-base text-muted-foreground">
            One full stack engineer dedicated to your product.
          </p>
          <p className="text-base text-muted-foreground">
            I design the schema, build the feature, and ship it — start to
            finish, no middleman.
          </p>
        </div>

        <Separator />

        <Badge
          variant="secondary"
          className="h-6.5 rounded-full bg-(--background-darker) font-normal text-foreground"
        >
          Pause or cancel anytime
        </Badge>

        <div className="mb-5.5 space-y-1">
          <p className="text-4xl font-semibold text-foreground sm:text-5xl">
            $1,000{" "}
            <span className="text-xl font-medium text-muted-foreground lg:text-3xl">
              /month
            </span>
          </p>
          <p className="text-base text-muted-foreground">
            ≈ Rp 10 juta per bulan for teams billing in rupiah
          </p>
        </div>

        <ul className="mb-5.5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-base font-medium text-foreground"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          className="h-11 gap-2.5 rounded-full bg-card pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:bg-card hover:pl-2 hover:text-accent dark:bg-card"
          nativeButton={false}
          render={
            <a href="mailto:muh.alfaris@gmail.com">
              <span className="relative flex size-2.5 items-center justify-center overflow-hidden rounded-full bg-accent transition-all duration-300 group-hover/button:size-6.5">
                <ArrowRightIcon className="absolute size-4.5 -translate-x-3 text-accent-foreground opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100" />
              </span>
              Let&apos;s connect
            </a>
          }
        />
      </CardContent>
    </Card>
  )
}

export function HireMe() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-4">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            No agencies — just me, fully in on your product
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr] lg:grid-cols-[334px_1fr]">
          <ProfileCard />
          <PricingCard />
        </div>
      </div>
    </section>
  )
}
