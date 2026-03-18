"use client"

import Image, { type ImageProps } from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type NguyenDucMarkProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "fill"
> & {
  alt?: string
  width?: number
  height?: number
}

export function NguyenDucMark({
  alt = "ducnt",
  width = 256,
  height = 128,
  ...props
}: NguyenDucMarkProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const src =
    !mounted || resolvedTheme !== "light" ? "/nd.png" : "/nd-light.png"

  return <Image src={src} alt={alt} width={width} height={height} {...props} />
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`
}
