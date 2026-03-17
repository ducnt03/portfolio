import type { Metadata } from "next"

import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/features/portfolio/data/testimonials"
import { cn } from "@/lib/utils"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/registry/components/testimonial"

export const metadata: Metadata = {
  title: "Loved by Devs Worldwide",
  description: "See what developers are saying about my work and projects.",
}

const TESTIMONIALS = [
  ...TESTIMONIALS_1.slice().sort((a, b) =>
    a.authorName.localeCompare(b.authorName)
  ),
  ...TESTIMONIALS_2.slice().sort((a, b) =>
    a.authorName.localeCompare(b.authorName)
  ),
]

export default function TestimonialsPage() {
  return null
}
