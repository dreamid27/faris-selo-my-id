import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/icons"

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/dreamid27",
    icon: GitHubIcon,
  },
  {
    label: "Email",
    href: "mailto:muh.alfaris@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-alfaris/",
    icon: LinkedInIcon,
  },
]

export function Footer() {
  return (
    <footer className="lg:px-10">
      <div className="mx-auto w-full max-w-4xl space-y-12 pb-12 lg:border-x xl:max-w-245">
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                aria-label={social.label}
                className="min-w-10 rounded-md hover:text-accent"
                nativeButton={false}
                render={
                  <a
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <social.icon className="size-4" />
                  </a>
                }
              />
            ))}
          </div>
          <Separator className="flex-1" />
        </div>

        <div className="space-y-2 pb-14 text-center lg:pb-0">
          <p className="text-muted-foreground">
            Thank you for visiting — let&apos;s build something that lasts.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Muhammad Al Faris
          </p>
        </div>
      </div>
    </footer>
  )
}
