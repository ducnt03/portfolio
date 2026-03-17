"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  const logoSrc = !mounted
    ? (experience.companyLogo ?? "")
    : resolvedTheme === "dark"
      ? (experience.companyLogoDark ?? experience.companyLogo ?? "")
      : (experience.companyLogo ?? "")

  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={logoSrc}
              alt={`${experience.companyName} logo`}
              width={20}
              height={20}
              quality={100}
              className="object-cover"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {experience.companyWebsite ? (
            <a
              className="underline-offset-4 hover:underline"
              href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <React.Fragment key={position.id}>
            <ExperiencePositionItem position={position} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
