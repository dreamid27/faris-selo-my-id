import { cn } from "@/lib/utils"

type EyebrowProps = {
  children: string
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn("text-[22px] font-medium text-accent italic", className)}
    >{`// ${children}`}</p>
  )
}
