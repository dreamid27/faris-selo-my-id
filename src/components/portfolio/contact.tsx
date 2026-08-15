import { ArrowRightIcon, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/portfolio/eyebrow"
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/icons"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6 lg:space-y-12">
        <div className="space-y-4">
          <Eyebrow className="text-center">Contact</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Have a product that needs building?
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            I&apos;m happiest working with small teams on real problems. Drop me
            an email, reach out on LinkedIn, or dig through the code on GitHub
            first — it tells the same story.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            className="h-11 gap-2.5 rounded-full bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90"
            nativeButton={false}
            render={
              <a href="mailto:muh.alfaris@gmail.com">
                <Mail className="size-4.5" />
                muh.alfaris@gmail.com
                <ArrowRightIcon className="size-4.5" />
              </a>
            }
          />
          <Button
            variant="outline"
            className="h-11 gap-2.5 rounded-full bg-card px-5 text-base shadow-sm hover:bg-card hover:text-accent dark:bg-card"
            nativeButton={false}
            render={
              <a
                href="https://www.linkedin.com/in/muhammad-alfaris/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="size-4.5" />
                Message me on LinkedIn
              </a>
            }
          />
          <Button
            variant="outline"
            className="h-11 gap-2.5 rounded-full bg-card px-5 text-base shadow-sm hover:bg-card hover:text-accent dark:bg-card"
            nativeButton={false}
            render={
              <a
                href="https://github.com/dreamid27"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-4.5" />
                Explore my GitHub
              </a>
            }
          />
        </div>
      </div>
    </section>
  )
}
