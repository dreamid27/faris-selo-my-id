import { useEffect, useState } from "react"
import {
  BriefcaseBusiness,
  FolderGit2,
  Mail,
  Moon,
  Sun,
  Tag,
  UserRound,
  Wrench,
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { id: "about", label: "About", icon: UserRound },
  { id: "works", label: "Work", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Toolbox", icon: Wrench },
  { id: "pricing", label: "Pricing", icon: Tag },
  { id: "contact", label: "Contact", icon: Mail },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

const itemClasses =
  "flex h-8 items-center overflow-hidden rounded-md px-2 transition-colors max-lg:h-7 hover:text-accent hover:bg-accent/10"

const labelClasses =
  "hidden overflow-hidden text-sm whitespace-nowrap transition-all duration-300 ease-out lg:inline-block lg:max-w-0 lg:opacity-0 lg:group-hover:ml-2 lg:group-hover:max-w-24 lg:group-hover:opacity-100"

function ModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {
      // private browsing — theme just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(itemClasses, "text-muted-foreground")}
    >
      {isDark ? (
        <Sun className="size-4 shrink-0" />
      ) : (
        <Moon className="size-4 shrink-0" />
      )}
      <span className={labelClasses}>Mode</span>
    </button>
  )
}

export function NavDock() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav className="group fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:top-1/2 lg:bottom-auto lg:left-6 lg:translate-x-0 lg:-translate-y-1/2">
      <div className="flex w-fit flex-row items-stretch gap-1.5 rounded-lg border bg-card p-2 shadow-sm max-lg:p-1.5 lg:flex-col lg:rounded-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                itemClasses,
                isActive ? "bg-accent/10 text-accent" : "text-muted-foreground"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              <span className={labelClasses}>{item.label}</span>
            </a>
          )
        })}

        <Separator orientation="vertical" className="lg:hidden" />
        <Separator className="hidden lg:block" />

        <ModeToggle />
      </div>
    </nav>
  )
}
