import type { User } from "../types/user"

export const USER = {
  firstName: "Nguyễn Đức",
  lastName: "Nguyễn",
  displayName: "Nguyễn Đức",
  username: "ncdai",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: ["Developer", "Software Engineer", "Full Stack Developer"],
  address: "Hà Nội, Việt Nam",
  phoneNumber: "MDM4ODQ0NDUwNg==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bmd1eWVudHJ1bmdkdWMwMjkzQGdtYWlsLmNvbQ==", // base64 encoded
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Shadcraft",
      website: "https://shadcraft.com",
    },
  ],
  about: `
- 2+ years of experience as a Software Engineer contributing to modern web application development.
- Built responsive and scalable frontend applications primarily using React and Next.js with TypeScript.
- Gained working knowledge of Nuxt.js and Svelte through feature implementation and small-scale projects.
- Developed backend services using FastAPI (Python) and NestJS, implementing RESTful APIs, authentication, and core business logic.
- Participated in chatbot/AI agent development, integrating conversational workflows into web systems.
- Worked with database operations, request validation, and structured error handling.
- Utilized Docker to containerize applications and support development-to-deployment workflows.
- Developed and customized Shopify themes and applications for e-commerce solutions.
- Collaborated across teams to deliver features from requirement analysis to deployment.
`,
  avatar: "/profile-image.jpeg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=7",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: ["theshyn", "nguyentrungduc", "nguyễn trung đức", "trung đức"],
  dateCreated: "2026-02-25", // YYYY-MM-DD
} as User
