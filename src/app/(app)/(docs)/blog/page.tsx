import type { Metadata } from "next"
import { Suspense } from "react"

import { PostList } from "@/features/blog/components/post-list"
import { PostListWithSearch } from "@/features/blog/components/post-list-with-search"
import { PostSearchInput } from "@/features/blog/components/post-search-input"
import { getAllPosts } from "@/features/blog/data/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
}

export default function Page() {
  return null
}
