import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4">
      <div className="space-y-6 text-center">
        <p className="text-[22px] font-medium text-accent italic">{"// 404"}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          This page wandered off
        </h1>
        <p className="mx-auto max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to the portfolio.
        </p>
        <Button
          className="h-11 rounded-full bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90"
          nativeButton={false}
          render={<a href="/">Back to home</a>}
        />
      </div>
    </main>
  )
}
