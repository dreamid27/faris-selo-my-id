import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GreetingWord } from "@/components/portfolio/greeting-word"
import { GitHubIcon } from "@/components/portfolio/icons"

const AVATAR_URL = "/images/profile.png"

export function Hero() {
  return (
    <section className="lg:relative">
      <div className="border-b pb-8 max-sm:pt-20 sm:py-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="space-y-6 lg:max-w-lg">
            <Badge
              variant="outline"
              className="h-6.5 gap-1 rounded-full bg-card text-green-600 shadow-sm dark:text-green-400"
            >
              <span className="relative inline-flex size-1.5">
                <span className="absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40" />
                <span className="relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400" />
              </span>
              Open to opportunities
            </Badge>
            <h1 className="mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:font-bold">
              <GreetingWord />I am Faris 👋🏻
            </h1>
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
              Full stack engineer
            </p>
            <p className="mb-8 max-w-2xl text-base">
              Full stack engineer based in Bandung, Indonesia. Nine years of
              shipping products at companies like Tokopedia, eFishery, and
              Delegasi (YC S22) — I own features end to end, from the database
              schema to the last pixel.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <Button
                variant="outline"
                className="h-11 rounded-full px-4 text-base hover:bg-background hover:text-accent dark:bg-background"
                nativeButton={false}
                render={
                  <a
                    href="https://github.com/dreamid27"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="size-4.5" />
                    View GitHub
                  </a>
                }
              />
              <Button
                variant="outline"
                className="h-11 gap-2.5 rounded-full bg-card pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:bg-card hover:pl-2 hover:text-accent dark:bg-card"
                nativeButton={false}
                render={
                  <a href="#contact">
                    <span className="relative flex size-2.5 items-center justify-center overflow-hidden rounded-full bg-accent transition-all duration-300 group-hover/button:size-6.5">
                      <ArrowRightIcon className="absolute size-4.5 -translate-x-3 text-accent-foreground opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100" />
                    </span>
                    Let&apos;s connect
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden lg:absolute lg:top-1/2 lg:right-8 lg:-translate-y-1/2 xl:right-14">
        <div className="w-60 rotate-3 rounded-3xl border bg-card p-4 shadow-[0px_2px_2px_rgba(0,0,0,0.02),0px_13px_11px_rgba(0,0,0,0.045),0px_60px_35px_-10px_rgba(0,0,0,0.09)] transition-transform duration-500 hover:rotate-0 xl:w-72">
          <img
            src={AVATAR_URL}
            alt="Portrait of Muhammad Al Faris"
            width={420}
            height={420}
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <div className="space-y-0.5 px-1 pt-3 pb-1">
            <p className="font-medium">Muhammad Al Faris</p>
            <p className="text-sm text-muted-foreground">
              Bandung, Indonesia · GMT+7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
