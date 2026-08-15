import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/portfolio/eyebrow"

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

// Mock testimonials — replace with real quotes as they come in.
const TESTIMONIALS: Array<Testimonial> = [
  {
    quote:
      "Faris doesn't just close tickets. He questions the ticket, finds the simpler path, and ships it before the next standup.",
    name: "Andi Pratama",
    role: "Product Manager, fintech startup",
    initials: "AP",
  },
  {
    quote:
      "We handed him a vague problem and got back a working product — database, API, UI, the whole thing. Rare to find someone who owns it end to end.",
    name: "Sarah Wijaya",
    role: "Co-founder, SaaS company",
    initials: "SW",
  },
  {
    quote:
      "The codebase he left behind is the one every engineer after him says thank you for. Clean, documented, and boring in the best way.",
    name: "Kevin Hartono",
    role: "Engineering Lead, marketplace",
    initials: "KH",
  },
]

const TILE_CLASS =
  "bg-card size-25 rounded-md border border-border/70 shadow-xs"
const SIDE_COLUMN_TILES = 5

const slideVariants = {
  enter: (direction: number) => ({ y: direction > 0 ? 32 : -32, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? -32 : 32, opacity: 0 }),
}

function AvatarTile({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      aria-label={name}
      className="flex size-25 items-center justify-center rounded-md bg-accent text-3xl font-bold text-accent-foreground shadow-[0px_13px_11px_rgba(0,0,0,0.045),0px_24px_19px_rgba(0,0,0,0.055)]"
    >
      {initials}
    </div>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (nextDirection: number) => {
    setIndex(
      (current) =>
        (current + nextDirection + TESTIMONIALS.length) % TESTIMONIALS.length
    )
    setDirection(nextDirection)
  }

  const testimonial = TESTIMONIALS[index]

  return (
    <section
      id="testimonials"
      className="scroll-mt-16 border-b py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <div className="space-y-2">
          <Eyebrow>Good words</Eyebrow>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Some good words from people I&apos;ve worked with
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[323px_1fr] sm:gap-8">
          <div className="relative mx-auto h-78 w-full mask-[radial-gradient(ellipse_at_center,black_25%,transparent_80%)] max-sm:hidden sm:mx-0">
            <div className="absolute inset-0 grid [grid-template-columns:repeat(3,auto)] content-center justify-center gap-3">
              <div className="space-y-2 self-center">
                {Array.from({ length: SIDE_COLUMN_TILES }, (_, tileIndex) => (
                  <div key={tileIndex} className={TILE_CLASS} />
                ))}
              </div>

              <div className="space-y-2 self-center">
                <div className={TILE_CLASS} />
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={index}
                    initial={{ y: -24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <AvatarTile
                      initials={testimonial.initials}
                      name={testimonial.name}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className={TILE_CLASS} />
              </div>

              <div className="mt-12 space-y-2 self-center">
                {Array.from({ length: SIDE_COLUMN_TILES }, (_, tileIndex) => (
                  <div key={tileIndex} className={TILE_CLASS} />
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="mb-8">
              <QuoteIcon className="size-9 rotate-180 fill-accent text-transparent" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-5"
              >
                <p className="max-w-lg text-xl font-medium text-primary lg:text-[26px]">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-base font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex gap-3">
              <Button
                onClick={() => goTo(-1)}
                aria-label="Previous testimonial"
                variant="outline"
                size="icon"
                className="flex items-center justify-center rounded-full border text-accent transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent dark:hover:border-accent/30 dark:hover:bg-accent/10"
              >
                <ArrowLeftIcon className="size-4" />
              </Button>
              <Button
                onClick={() => goTo(1)}
                aria-label="Next testimonial"
                variant="outline"
                size="icon"
                className="flex items-center justify-center rounded-full border text-accent transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent dark:hover:border-accent/30 dark:hover:bg-accent/10"
              >
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
