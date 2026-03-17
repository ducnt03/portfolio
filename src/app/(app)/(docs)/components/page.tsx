import type { Metadata } from "next"
import Link from "next/link"

import { ComponentIcon, Icons } from "@/components/icons"
import { MDX } from "@/components/mdx"
import { RegistryCommandAnimated } from "@/components/registry-command-animated"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tag } from "@/components/ui/tag"
import { registryConfig } from "@/config/registry"
import { UTM_PARAMS } from "@/config/site"
import { getPostsByCategory } from "@/features/blog/data/posts"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
}

const componentsJSON = `\`\`\`json title="components.json" showLineNumbers {3}
{
  "registries": {
    "${registryConfig.namespace}": "${registryConfig.namespaceUrl}"
  }
}
\`\`\``

export default function Page() {
  return null
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}
