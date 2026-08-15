import { Card, CardContent } from "@/components/ui/card"
import { STACK_LOGOS, type StackLogo } from "@/components/portfolio/stack-logos"
import { cn } from "@/lib/utils"

const CONTRIBUTION_LEVEL_STYLES = [
  "bg-background",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
]

const CONTRIBUTION_ROWS = 6
const CONTRIBUTION_COLUMNS = 39

// Seeded PRNG so the server and client render the identical grid (no
// hydration mismatch, unlike Math.random at module scope).
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const random = mulberry32(27)
const LEVEL_WEIGHTS = [40, 25, 20, 10, 5]

function randomLevel() {
  const roll = random() * 100
  let cumulative = 0

  for (let level = 0; level < LEVEL_WEIGHTS.length; level++) {
    cumulative += LEVEL_WEIGHTS[level]
    if (roll < cumulative) return level
  }

  return LEVEL_WEIGHTS.length - 1
}

const CONTRIBUTION_GRID = Array.from({ length: CONTRIBUTION_ROWS }, () =>
  Array.from({ length: CONTRIBUTION_COLUMNS }, () => randomLevel())
)

const STACK_ROWS = [STACK_LOGOS.slice(0, 8), STACK_LOGOS.slice(8)]

function StackLogoTile({ logo }: { logo: StackLogo }) {
  return (
    <div
      title={logo.name}
      className="flex size-14 shrink-0 items-center justify-center rounded-xl border bg-(--background-darker) text-foreground"
    >
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={logo.name}
        className="size-7"
        fill={logo.color}
      >
        <path d={logo.path} />
      </svg>
    </div>
  )
}

export function ActivityCard() {
  return (
    <Card className="gap-6 rounded-3xl p-6 shadow-lg">
      <CardContent className="space-y-4 p-0">
        <div>
          <p className="text-sm font-semibold">@dreamid27</p>
          <p className="text-xs text-muted-foreground opacity-75">
            A decade of green squares and counting
          </p>
        </div>

        <div className="overflow-x-auto max-md:pr-6">
          <div className="space-y-1">
            {CONTRIBUTION_GRID.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1">
                {row.map((level, columnIndex) => (
                  <span
                    key={columnIndex}
                    className={cn(
                      "size-3.5 rounded-xs transition-transform duration-150 hover:scale-125 max-lg:shrink-0 sm:size-5",
                      CONTRIBUTION_LEVEL_STYLES[level]
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <div className="-mx-6 border-t border-border" />

      <div className="min-w-0 space-y-6">
        {STACK_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          >
            <div
              className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 motion-reduce:animate-none"
              style={
                rowIndex % 2 === 1
                  ? { animationDirection: "reverse" }
                  : undefined
              }
            >
              {[...row, ...row].map((logo, logoIndex) => (
                <StackLogoTile key={logoIndex} logo={logo} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
