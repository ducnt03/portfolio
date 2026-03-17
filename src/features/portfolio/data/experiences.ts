import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "demetio",
    companyName: "DEMETIO",
    companyLogo: "/demetio-logo-light.png",
    companyLogoDark: "/demetio-logo-dark.png",
    companyWebsite: "https://demetio.com",
    positions: [
      {
        id: "1",
        title: "Full Stack Software Engineer",
        employmentPeriod: {
          start: "09.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Worked as a Software Engineer delivering full-stack web application features
- Contributed to both backend and frontend development, building APIs and interactive user interfaces
- Implemented business logic, data flows, and user-facing functionalities across multiple modules
- Integrated external services and APIs to support product requirements
- Collaborated within the team on development, testing, and feature delivery`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "Tailwind CSS",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "REST API",
          "Web Development",
          "Python",
          "Shopify",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "parttime",
    companyName: "Part-time",
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Mobile App Developer",
        employmentPeriod: {
          start: "",
          end: "",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Worked as a part-time Software Engineer contributing to web and mobile application development
- Developed and maintained user-facing features across frontend and mobile platforms
- Integrated backend APIs and handled data flows for application features
- Collaborated with team members to deliver features and improve application performance`,
        skills: [
          "React Native",
          "JavaScript",
          "Mobile Development",
          "UI/UX Implementation",
          "Firebase",
          "Git",
          "React Query",
          "TypeScript",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
]
