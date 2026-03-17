import { cn } from "@/lib/utils"

import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-end gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <ThemeToggle />
      </div>
    </header>
  )
}
