import StarVaultImg from "@/Images/Star-Vault.png";
import StarVaultPerformance from "@/Images/Star-Performance.png";

export const starVaultData = {
  id: "star-vault",
  title: "Star Vault",
  category: "3D Web Development",

  // Links
  links: {
    github: "https://github.com/raeef-chowdhury/star-vault",
    live: "https://star-vault-journal.netlify.app/",
  },

  metadata: {
    date: "December 2025",
    duration: "3 Weeks",
    highlight: "3D Interactivity",
  },

  images: {
    hero: StarVaultImg,
    heroAlt:
      "Star Vault 3D galaxy journaling interface showing memories as stars in personalized galaxies",
    perforamnceImg: StarVaultPerformance,
    performanceAlt: "Star Vault performance image",
  },

  description: [
    "Star Vault is an immersive 3D interactive space built using React Three Fiber and an unhealthy amount of maths. It renders multiple galaxies, each of which you can upload a memory to using a form, after which you can view as a memory inside a galaxy.",
    "This is built with a CRUD design system, allowing users to edit, delete, create and view each of their memories. The codebase along with the final project is something that I am really proud of, especially considering it is something that expanded my toolkit apart from 2D web development.",
  ],

  techStack: [
    {
      name: "React Three Fiber",
      description: "Used to render the 3D system",
    },
    {
      name: "React Three Spring",
      description: "Handling animations in the 3D space",
    },
    {
      name: "Math (Way too much of it)",
      description: "To properly configure universe UI",
    },
    {
      name: "CRUD operations",
      description: "Overall design approach of the app",
    },
    {
      name: "React JS & Tailwind",
      description: "To build the simple 2D parts of the UI",
    },
  ],

  // Features
  features: [
    {
      name: "Movement",
      description: "Smooth camera and navigation movement within the 3D room",
    },
    {
      name: "Responsiveness",
      description: "Fully responsive in all screen sizes",
    },
    {
      name: "Routing",
      description: "React router for smooth app navigation and transitions",
    },
    {
      name: "Memory Storage",
      description:
        "Local Storage used to persist memories in user's browser permanently",
    },
    {
      name: "3D Objects",
      description: "Interactive 3D objects to interact memories with",
    },
  ],

  // Challenges & Solutions
  challenges: [
    {
      challenge: "3D Rendering Performance",
      solution:
        "Optimized Three.js scene with efficient geometry and texture management to maintain smooth 60fps",
    },
    {
      challenge: "Complex Mathematical Positioning",
      solution:
        "Implemented spherical coordinate systems and custom algorithms to position stars naturally within galaxy formations",
    },
    {
      challenge: "Camera Controls & Navigation",
      solution:
        "Developed smooth camera transitions using React Three Spring for intuitive 3D space exploration",
    },
    {
      challenge: "State Management in 3D Space",
      solution:
        "Integrated CRUD operations with Local Storage while synchronizing 2D UI forms with 3D object representations",
    },
    {
      challenge: "User Experience Clarity",
      solution:
        "Added tooltips and visual cues to guide users through the 3D interface, though this remains an area for improvement",
    },
  ],

  performance: [
    {
      metric: "Performance",
      score: 100,
      implementation:
        "Optimized 3D rendering pipeline, lazy loading components, and efficient React Three Fiber scene management",
    },
    {
      metric: "Accessibility",
      score: 96,
      implementation:
        "Semantic HTML elements, proper ARIA labels, and keyboard navigation support for 3D interactions",
    },
    {
      metric: "Best Practices",
      score: 100,
      implementation:
        "Clean component architecture, optimized assets, responsive design across all devices",
    },
    {
      metric: "SEO",
      score: 100,
      implementation:
        "Comprehensive metadata, Open Graph tags, Twitter cards, and descriptive alt text for images",
    },
  ],

  lessonsLearned:
    "Building Star Vault pushed me beyond traditional 2D web development into the realm of 3D interactive experiences. I gained deep knowledge of React Three Fiber, Three.js fundamentals, complex mathematical positioning systems, and the challenges of maintaining performance in browser-based 3D environments. Most importantly, I learned to balance technical complexity with user experience, recognizing that innovative technology must still be accessible and intuitive for users.",

  improvements: [
    "First Time User Experience: Add comprehensive onboarding flow and interactive tutorial to guide new users through the 3D interface",
    "Search/Filter Enhancement: Implement robust search functionality with filtering by date, tags, or keywords to quickly locate specific memories",
  ],
};

export default starVaultData;
