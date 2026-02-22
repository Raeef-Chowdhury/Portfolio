import FluxisImg from "@/Images/Fluxis.png";
import FluxisPerformance from "@/Images/Fluxis-Performance.png";
import { ProjectData } from "@/Types/projectDetailed";

export const islamicFoundationsData: ProjectData = {
  id: "fluxis",
  title: "Fluxis",
  category: "Web Development",

  links: {
    github: "https://github.com/raeef-chowdhury/Fluxis",
    live: "https://fluxis-lifeos.vercel.app/",
  },

  metadata: {
    date: "Febuary 2026",
    duration: "1 Month",
    users: "React Context, Archietecture",
  },

  // Images
  images: {
    hero: FluxisImg,
    performance: FluxisPerformance,
    performanceAlt: "Fluxis performance image",
    heroAlt: "Fluxis demo Image",
  },
  description: [
    "FLUXIS is a LifeOS-style productivity dashboard built to centralize tasks,  and stats in one clean interface.",
    "I created this project to deepen my understanding of React state management and TypeScript by including custom hooks.",
  ],

  // Tech Stack
  techStack: [
    {
      name: "React JS",
      description:
        "Core library used to build all interactive UI components and manage application state",
    },
    {
      name: "TypeScript",
      description:
        "Provides type safety across components, hooks, and data models for easier debugging and maintainability",
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first styling framework for fast, responsive, and consistent UI design",
    },
    {
      name: "Custom Hooks",
      description:
        "Encapsulate shared logic for task management, filtering, and state across multiple components",
    },
  ],

  // Features
  features: [
    {
      name: "Real-Time Task Management",
      description:
        "Create, complete, and delete tasks with instant UI updates — no page refreshes required",
    },
    {
      name: "Filtering & Search",
      description:
        "Filter tasks by status, priority, or category to quickly find what matters most",
    },
    {
      name: "Toast Notifications",
      description:
        "Custom toast system provides instant feedback for user actions across the dashboard",
    },
    {
      name: "Analytics Overview",
      description:
        "Live productivity stats give users a snapshot of completed tasks, streaks, and workflow trends",
    },
    {
      name: "Reuseable Components",
      description:
        "Modular forms, list items, and stat cards ensure consistent structure and easy scalability",
    },
    {
      name: "Responsive & Adaptive",
      description:
        "Fully optimized layouts for mobile, tablet, and desktop, keeping content and interactions consistent across all devices",
    },
  ],

  // Challenges & Solutions
  challenges: [
    {
      challenge: "Cross-Component State Sync",
      solution:
        "Lifted shared state into custom hooks to keep task data, filters, and analytics consistent without prop drilling or unnecessary re-renders.",
    },
    {
      challenge: "Component Modularity",
      solution:
        "Refactored the codebase into small, focused components with clearly typed props, making each piece independently reusable and easy to maintain.",
    },
    {
      challenge: "Real-Time UI Updates",
      solution:
        "Used controlled state updates and memoization to ensure the dashboard reflects changes instantly while keeping performance overhead minimal.",
    },
    {
      challenge: "Type-Safe Architecture",
      solution:
        "Defined TypeScript interfaces for all task, filter, and component data models to catch errors early and keep the codebase predictable as it scaled.",
    },
  ],

  performance: [
    {
      metric: "Performance",
      score: 100,
      implementation:
        "Split UI into small components, used React.memo and custom hooks to minimize unnecessary re-renders.",
    },
    {
      metric: "SEO",
      score: 100,
      implementation:
        "Use NextJS metadata for search engines and use next images.",
    },
    {
      metric: "Best Practices",
      score: 96,
      implementation:
        "Consistent component patterns, typed props, and clean separation of UI logic from state management.",
    },
    {
      metric: "Responsiveness",
      score: 100,
      implementation:
        "Tailwind breakpoints applied to all layouts, tested across mobile, tablet, and desktop viewports.",
    },
  ],

  lessonsLearned:
    "Building FLUXIS gave me hands-on experience managing complex, interconnected state across a multi-section React app. I learned how to design custom hooks that cleanly separate logic from UI, how to structure a scalable component system with TypeScript interfaces, and how to balance feature richness with performance — all within a real-world dashboard context.",
};

export default islamicFoundationsData;
