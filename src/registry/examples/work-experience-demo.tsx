import type { ExperienceItemType } from "@/registry/components/work-experience"
import { WorkExperience } from "@/registry/components/work-experience"

const experiences: ExperienceItemType[] = [
  {
    id: "ncdai",
    companyName: "ncd.ai",
    isCurrentEmployer: true,
    positions: [
      {
        id: "frontend-engineer",
        title: "Frontend Engineer",
        employmentType: "Full-time",
        employmentPeriod: "2024 - Present",
        icon: "code",
        isExpanded: true,
        description:
          "Built reusable UI components and improved page performance for customer-facing products.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "ui-engineer",
        title: "UI Engineer",
        employmentType: "Contract",
        employmentPeriod: "2023 - 2024",
        icon: "design",
        description:
          "Collaborated with design to translate Figma into accessible, production-ready interfaces.",
        skills: ["React", "Framer Motion", "Storybook"],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "fullstack-dev",
        title: "Fullstack Developer",
        employmentType: "Project-based",
        employmentPeriod: "2021 - 2023",
        icon: "business",
        description:
          "Delivered end-to-end web apps with modern frontend architecture and scalable APIs.",
        skills: ["React", "Node.js", "PostgreSQL"],
      },
    ],
  },
]

export default function WorkExperienceDemo() {
  return (
    <div className="w-full max-w-xl">
      <WorkExperience experiences={experiences} />
    </div>
  )
}
