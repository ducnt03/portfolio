import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "chat-bot-prototype",
    title: "Chat Bot Prototype",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Nextjs",
      "ShadcnUI",
      "TypeScript",
      "React Sandbox",
      "Nestjs",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "Langchain",
      "Python",
      "FastAPI",
      "Weaviate",
    ],
    description: `
- Company project

- Role: Frontend Developer (Fullstack support)

- Developed a dynamic chatbot management platform, including:
  + Built real-time chat UI with conversation history and streaming responses.
   + Implemented AI-driven UI generation flow (v0-like experience): bot responses generate structured UI components that can be edited via input and updated in real time.
  + Designed bot creation flow: configure API tokens, select LLM models, set system prompts, language, and conversation memory.
  + Implemented bot embedding feature (generate embeddable script/web widget).
  + Developed role & permission management for multi-user access.
  + Built feedback and analytics dashboard to track user interactions and bot performance.

- Backend contributions:
  + Implemented basic CRUD APIs for bot management, conversations, roles, and feedback.
  + Integrated LLM workflows using LangChain (custom tools, memory handling, prompt orchestration).
  + Supported bot training pipeline (knowledge ingestion, vector storage with Weaviate).
  + Worked with FastAPI & NestJS services, Redis caching, and MySQL database.

- Focused on scalable architecture, reusable UI components, and clean system design.
`,
    isExpanded: true,
  },
  {
    id: "kdoto",
    title: "Kdoto",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Shopify",
      "Liquid",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Swiper.js",
      "Metaobjects",
      "Metafields",
      "Git",
    ],
    description: `
- Company project

- Role: Frontend / Theme Developer

- Customized and developed a Shopify theme (Impact base) for the official website of Kashima Antlers (J-League, Japan), combining e-commerce and dynamic sports content.

- Built reusable Liquid sections and snippets for:
  + Match schedule & results
  + J1 League standings table
  + Match articles and blogs (academy, futsal, stadium)
  + Gift card page and customer account/order flows

- Developed interactive UI logic using JavaScript:
  + Season/year and league filters
  + Match list sorting and navigation
  + Match detail tabs and dynamic content switching

- Integrated Shopify features (metaobjects, metafields, blogs) to manage structured season and match data.
- Implemented bilingual support (Japanese / English).
- Improved UI/UX with responsive layouts, reusable components, and section-scoped CSS for maintainability.
`,
    isExpanded: false,
  },
  {
    id: "riz2m-mobile-app",
    title: "Riz.2M Mobile App (iOS & Android Creative Community Platform)",
    period: {
      start: "06.2025",
      end: "Present",
    },
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "React Navigation",
      "Gluestack UI",
      "Firebase Auth",
      "Firestore",
      "Google Cloud Storage",
      "Cloud Functions",
      "Axios",
      "Server-Sent Events (SSE)",
      "Zod",
      "Zustand",
      "React Query",
      "Jest",
      "ESLint",
      "Prettier",
      "Git",
    ],
    description: `
- Company project

- Role: Mobile Frontend Developer (UI-focused)

- Contributed to a cross-functional mobile product for a curated home design community, delivering core user flows on both iOS and Android.

- Built and maintained key screens for discovery feed, professional portfolios, saved lists, profile management, and AI-based budget estimation.

- Implemented reusable, consistent UI components and interaction patterns with React Native + TypeScript to improve maintainability and design coherence.

- Developed responsive mobile layouts, form flows, loading/error/empty states, and smooth list experiences for image-heavy content.

- Integrated app screens with backend services (Firebase/Cloud Functions and AI estimator APIs), including streaming response handling via SSE.

- Worked closely with product/design and backend teams to translate requirements into production-ready features while maintaining performance, usability, and code quality.
`,
    isExpanded: false,
  },
  {
    id: "yokohama-fc",
    title: "Yokohama FC Official Site Remake",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Swiper.js",
      "GSAP",
      "MicroCMS",
      "Responsive Web Design",
      "Git",
    ],
    description: `
  - Company project

  - Role: Frontend / UI Developer

  - Developed the user interface for the Yokohama FC official website remake, delivering responsive and content-driven pages for a professional football club platform.

  - Built and maintained reusable UI components and page templates using Next.js, React, TypeScript, and Tailwind CSS.

  - Implemented interactive frontend experiences such as sliders, carousels, modal interactions, animated sections, and responsive navigation for both desktop and mobile.

  - Created UI for multiple content areas including club information, news, match-related pages, academy content, fan engagement pages, and special campaign pages.

  - Integrated CMS-managed content from MicroCMS into the frontend layer to ensure flexible content rendering and easier page updates.

  - Improved visual consistency and maintainability by using reusable component structures, responsive layouts, and scalable styling patterns.
`,
    isExpanded: false,
  },
  {
    id: "aignite-platform",
    title: "AIgnite Platform (Fullstack Web App)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Axios",
      "JWT Authentication",
      "Docker",
      "AWS S3",
      "Stripe",
      "OpenAI API",
      "Google Gemini API",
      "LangChain",
      "Weaviate",
      "Git",
    ],
    description: `
- Company project

- Role: Fullstack Developer (Frontend + Backend)

- Developed and maintained an AI-powered web platform end-to-end, including both user-facing frontend features and scalable backend APIs.

- Built RESTful backend services with FastAPI and Python, covering authentication, user management, conversations/chat flows, forum/community features, notifications, subscriptions, payments, and admin operations.

- Designed and integrated a multi-database architecture using PostgreSQL, Redis, and MongoDB to support transactional data, caching/session use cases, and flexible document-style storage.

- Integrated external services including AI model providers (OpenAI/Gemini), vector search/retrieval workflows (LangChain + Weaviate), cloud file storage (AWS S3), and payment processing (Stripe).

- Implemented and optimized the frontend using React + TypeScript + Vite + Tailwind CSS, delivering responsive screens for chat, forums, authentication, subscriptions, notifications, settings, and admin dashboards.

- Built reusable UI patterns, state management flows, and API service layers to improve maintainability, consistency, and development speed.

- Used Docker-based local/dev workflows and collaborated via Git to support reliable deployment and team development.
`,
    isExpanded: false,
  },
  {
    id: "ai-japan-prd-webapp",
    title: "AI Japan PRD Webapp (Face Analysis & Glasses Recommendation)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "MediaPipe Tasks Vision",
      "Axios",
      "Zod",
      "Responsive Web Design",
      "Git",
    ],
    description: `
- Company project    

- Role: Frontend Developer

- Developed a touchless, camera-based web application that analyzes face shape and displays glasses frame recommendations in real time.

- Built and maintained modular UI screens and reusable components for the full user flow: login, instruction, detection, results, and thank-you screens.

- Implemented gesture-driven interactions (right/left hand controls), countdown capture flow, audio feedback, and screen transitions for a kiosk-style UX.

- Integrated frontend with backend APIs for authentication, image analysis requests, and result rendering, ensuring stable data flow and error handling.

- Applied state management and data-fetching patterns using Zustand and TanStack Query to keep UI state predictable and maintainable.

- Optimized user experience across desktop and tablet/kiosk contexts with responsive layouts, clear interaction guidance, and performance-aware rendering.
`,
    isExpanded: false,
  },
  {
    id: "manual-agent-ar-webapp",
    title:
      "ManualAgentAR Webapp (Remote Assistance with WebRTC & Live Annotation)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "WebRTC",
      "Socket.IO",
      "HTML5 Canvas",
      "MediaDevices API",
      "Browser Permissions API",
      "Radix UI",
      "Responsive Web Design",
      "Git",
    ],
    description:
      "- Company project \n\n- Role: Frontend Developer\n\n- Built a real-time remote assistance web application using WebRTC and Socket.IO for live video/audio communication between clients.\n\n- Developed core user flows including authentication, session join, live call screen, and call-end handling for a smooth support experience.\n\n- Implemented camera, microphone, and screen-sharing controls with dynamic device switching and permission-aware behavior (blocked device detection and user guidance).\n\n- Created a live virtual pen annotation feature on top of video streams using HTML5 Canvas, including color selection, undo, clear-all, and synchronized drawing data.\n\n- Structured application state with Zustand to manage call lifecycle, media streams, device settings, and drawing paths in a predictable and maintainable way.\n\n- Improved UX with draggable local preview, responsive layout, and stable reconnect/disconnect handling for browser-based real-time communication scenarios.",
    isExpanded: false,
  },
  {
    id: "mypage-web-platform",
    title:
      "MyPage Web Platform (Member Portal, Admin Portal & Application Site)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Vuetify 3",
      "Vite",
      "Axios",
      "Zod",
      "Zodios",
      "Sass",
      "Vitest",
      "ESLint",
      "Prettier",
      "pnpm",
      "Turborepo",
      "Responsive Web Design",
      "Git",
    ],
    description: `
- Company project

- Role: Frontend Developer (UI-focused)

- Contributed to the frontend UI of a multi-app web platform consisting of a member portal, admin portal, and application site.

- Built and maintained user-facing screens, layouts, forms, tables, and error states using Nuxt 3, Vue 3, TypeScript, and Vuetify.

- Developed reusable UI components and shared frontend patterns to keep the interface consistent across multiple web applications in a monorepo setup.

- Translated business requirements and existing designs into responsive, production-ready interfaces for customer-facing and internal admin workflows.

- Connected frontend screens to existing APIs for data display and form submission, while focusing primarily on presentation, interaction, and usability.

- Worked on improving UI consistency, maintainability, and development workflow within a pnpm + Turborepo codebase.
`,
    isExpanded: false,
  },
  {
    id: "editing-tool",
    title: "Editing Tool Web App (Design Editor Platform)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SCSS/Sass",
      "Quill Editor",
      "REST API Integration",
      "Jest",
      "ESLint",
      "Prettier",
      "Docker",
      "i18n",
      "Responsive Web Design",
      "Git",
      "NestJS",
      "Node.js",
      "CRUD API Development",
    ],
    description: `
- Company project

- Project: A web-based design editing (like canvas) platform that allows users to create, customize, and export document/template-based visuals for practical business use.

- Role: Fullstack Developer (Frontend-focused)

- Developed and maintained a web-based editing platform with a strong focus on frontend architecture, UI/UX, and interactive editing experience.

- Built user-facing screens, reusable components, and editor-related workflows using Next.js, React, TypeScript, Tailwind CSS, and SCSS.

- Implemented and refined features for template selection, editable layouts, text/effect configuration, image/frame/shape handling, and document export-related flows.

- Integrated frontend modules with backend APIs for data retrieval, submission, and processing in a production-oriented environment.

- Contributed to code quality and maintainability through component-based design, linting/formatting standards, and test setup with Jest.

- Supported multilingual capability (i18n), responsive behavior across devices, and deployment-oriented setup with Docker.

- Also implemented basic backend services with NestJS, including simple CRUD endpoints to support core application flows.
`,
    isExpanded: false,
  },
  {
    id: "proj-fw-webapp",
    title: "FW Web App Platform (Admin & Internal Operations)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "Zustand",
      "React Hook Form",
      "Yup",
      "NextAuth",
      "Axios",
      "SWR",
      "react-moveable",
      "Quill",
      "Chart.js",
      "Framer Motion",
      "REST API Integration",
      "NestJS",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "BullMQ",
      "AWS S3",
      "Puppeteer",
      "Sharp",
      "Swagger",
      "ESLint",
      "Prettier",
      "Jest",
      "Docker",
      "Git",
      "Responsive Web Design",
      "i18n (next-intl)",
    ],
    description: `
- Company project


- Role: Frontend Developer (Primary) + Backend Support (Basic)

- Contributed to a web platform for admin and internal business workflows, focusing mainly on frontend UI development with Next.js, React, and TypeScript.

- Built and maintained user-facing screens, forms, data tables, filtering/search features, and system states (loading, empty, error, 403/503 pages).

- Developed reusable UI components and shared patterns to improve consistency and maintainability across multiple modules (companies, users, staffs, suppliers, orders, item groups).

- Implemented state management and form validation using Redux Toolkit, React Hook Form, and Yup to support reliable data entry and interaction flows.

- Integrated frontend with existing REST APIs using Axios/SWR for data fetching and submission, with attention to UX, responsiveness, and usability.

- Worked with authentication/session handling (NextAuth) and route-level access control for internal/admin features.

- Also supported backend tasks by implementing basic CRUD APIs with NestJS for simple data management needs.

- Improved code quality and team workflow through TypeScript strictness, linting/formatting standards, and reusable architecture practices.
`,
    isExpanded: false,
  },
  {
    id: "shopify-app-dashboard-data-sync",
    title:
      "Shopify App Dashboard Data Sync (Partner API Crawler & Google Sheets Updater)",
    period: {
      start: "",
      end: "",
    },
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Shopify Partner API (GraphQL)",
      "GraphQL",
      "graphql-request",
      "gql-query-builder",
      "Google Sheets API",
      "Axios",
      "NestJS Schedule (Cron)",
      "nest-commander",
      "dayjs",
      "Jest",
      "ESLint",
      "Prettier",
      "npm",
      "Git",
      "Docker",
    ],
    description: `
- Company project

- Role: Backend Developer (Data Integration & Automation)

- Built and maintained a NestJS-based backend service to collect Shopify app lifecycle events and transaction data from Shopify Partner GraphQL APIs.

- Implemented data crawling flows for app install/uninstall history and revenue transactions, including cursor-based pagination to support incremental synchronization.

- Designed automated daily jobs using cron scheduling (Asia/Tokyo timezone) to run data collection pipelines reliably without manual intervention.

- Developed CLI commands for on-demand crawling and operational runs, enabling easier maintenance and troubleshooting for data updates.

- Integrated Google Sheets API as a lightweight reporting destination, including reading tracked app IDs and appending normalized event/transaction records.

- Standardized data transformation for shop metadata, event/transaction types, and timestamp conversion to Unix format for downstream analysis.

- Improved service maintainability with modular architecture (Shopify repositories, updater services, spreadsheet repository) and environment-based configuration management.

- Contributed to code quality and delivery workflow through TypeScript, Jest testing setup, ESLint, and Prettier.
`,
    isExpanded: false,
  },
]
