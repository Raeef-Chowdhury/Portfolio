import PortfolioImg from "@/Images/Portfolio.png";
import PortfolioPerformance from "@/Images/Portfolio-Performance.png";
import { ProjectData } from "@/Types/projectDetailed";

export const islamicFoundationsData: ProjectData = {
  id: "portfolio",
  title: "Portfolio",
  category: "Web Development",

  // Links
  links: {
    github: "https://github.com/raeef-chowdhury/Portfolio",
    live: "https://raeef-portfolio.vercel.app",
  },

  // Metadata
  metadata: {
    date: "January 2026",
    duration: "2 Months",
    users: "Typesafe, Scalable UI",
  },

  // Images
  images: {
    hero: PortfolioImg,
    performance: PortfolioPerformance,
    performanceAlt: "Raeef Chowdhury's performance image",
    heroAlt: "Raeef Chowdhury's demo Image",
  },

  // Description
  description: [
    "This is the very site you are looking at, and the 3rd and hopefully last attempt of making a portfolio where I  did my best attempt of balancing minamilism with unique and interactiveness. ",
    "I created this project as a bootcamp to learning NextJS and Typescript, which has helped me to make a portfolio that is both scalable with reuseable component,datasets, and dynamically loaded interfaces while also giving the data type safety through typescript to make debugging easier",
  ],

  // Tech Stack
  techStack: [
    {
      name: "React JS",
      description:
        "Core library used to build the structure and logic of the website",
    },
    {
      name: "Next JS",
      description:
        "React framework for in built routing, performance, and SEO optimization",
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first styling framework for fast and responsive UI design",
    },
    {
      name: "Motion One",
      description:
        "Lightweight animation library used for smooth transitions & interactions",
    },
    {
      name: "TypeScript",
      description: "Type safety into the project for easier debugging",
    },
  ],

  // Features
  features: [
    {
      name: "Error Handling",
      description:
        "Error handling for any fallback/delay on fetching data or a https error",
    },
    {
      name: "Transitions",
      description:
        "Motion one used throughout the project for smooth page transitions and interactivity to separate cards",
    },
    {
      name: "Reuseable Components",
      description:
        "Reuseable components for consistent structure and code readability, allows easy maintenance and scalability.",
    },
    {
      name: "Responsive & Adaptive",
      description:
        "Fully optimized layouts for mobile, tablet, and desktop, keeping animations and content consistent across all devices.",
    },

    {
      name: "Type-safe Components",
      description:
        "Built with React and TypeScript for clean, reusable, and robust code structure.",
    },
  ],

  // Challenges & Solutions
  challenges: [
    {
      challenge: "GitHub API Delay",
      solution:
        "Implemented the fallback UI for this reason, as github contributions chart takes time to render.",
    },
    {
      challenge: "Code Duplication Chores",
      solution:
        "Refactored codebase into many components for readbaility and scability utilizing dynamic routes and seperate data files.",
    },
    {
      challenge: "Animation Behaviour",
      solution:
        "Used aniamte presence for exit animations and in built stagger object for staggering children of components",
    },
    {
      challenge: "Type-Safe Component Architecture",
      solution:
        "Refactored components with TypeScript for reusable, robust, and maintainable code while managing multiple states and props.",
    },
  ],

  // Performance Metrics
  performance: [
    {
      metric: "Performance",
      score: 100,
      implementation:
        "Split code into multiple components, use lazy loading and react hooks.",
    },
    {
      metric: "Accessibility",
      score: 98,
      implementation:
        "Include semantic HTML elements properly and give aria labels to important elements",
    },
    {
      metric: "Best Practices",
      score: 96,
      implementation:
        "Use the correct HTML tags for each element, optimize images, and made website responsive",
    },
    {
      metric: "SEO",
      score: 100,
      implementation:
        "Use proper HTML elements and include alt labels for images",
    },
  ],

  // Lessons Learned
  lessonsLearned:
    " By making this, I was able to learn the fundamentals and basics of both NextJS and Typescript for a bug free, scalable and optimized portfolio by making the best use of these tools with dynamic routing, interface typing, and metadata. ",
};

// Export default for easy importing
export default islamicFoundationsData;
