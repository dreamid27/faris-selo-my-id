import { createFileRoute } from "@tanstack/react-router"

import { NavDock } from "@/components/portfolio/nav-dock"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Testimonials } from "@/components/portfolio/testimonials"
import { HireMe } from "@/components/portfolio/hire-me"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex min-h-svh w-full min-w-0 flex-col">
      <a
        href="#main"
        className="sr-only z-100 rounded-md bg-accent px-3 py-2 text-accent-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <NavDock />
      <main
        id="main"
        className="mx-auto flex w-full max-w-4xl min-w-0 flex-1 flex-col lg:border-x xl:max-w-245"
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
