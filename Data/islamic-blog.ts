import IslamicImg from "@/Images/Islamic-Foundations.png";
import IslamicPerformance from "@/Images/Islamic-Performance.png";
import { ProjectData } from "@/Types/projectDetailed";
export const islamicFoundationsData: ProjectData = {
  // Basic Info
  id: "islamic-foundations",
  title: "Islamic Foundations",
  category: "Web Development",

  // Links
  links: {
    github: "https://github.com/raeef-chowdhury/Al-Quran",
    live: "https://islamic-foundations.netlify.app/",
  },

  // Metadata
  metadata: {
    date: "October 2025",
    duration: "2 Months",
    users: "50+ Users",
  },

  // Images
  images: {
    hero: IslamicImg,
    performance: IslamicPerformance,
    performanceAlt: "Islamic Foundations performance image",
    heroAlt: "Islamic Foundations demo Image",
  },

  // Description
  description: [
    "Islamic Foundations is a real world website made for Muslims to deepen their faith. It is a platform that allows muslims to complete prayer streaks, read the Quran (Holy Book), among other daily essentials for all muslims.",
    "This is my most impressive project yet because it caters to an actual target market of people who will benefit from what I have made.",
  ],

  // Tech Stack
  techStack: [
    {
      name: "React JS",
      description:
        "Core library used to build the structure and logic of the website",
    },
    {
      name: "React Router",
      description: "Handles navigation and page routing without refreshing",
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
      name: "External APIs",
      description:
        "Used to fetch and display dynamic content throughout the site",
    },
  ],

  // Features
  features: [
    {
      name: "Filtering",
      description:
        "Create filtering by name or category for both surahs (chapters) and duas (prayers).",
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
      name: "APIs",
      description:
        "Many external apis were used to fetch all the necesscary data for the site.",
    },
    {
      name: "Dark Mode",
      description: "Because why not? Definitely not worth it though.",
    },
  ],

  // Challenges & Solutions
  challenges: [
    {
      challenge: "Render thousands of lines of Arabic",
      solution:
        "Used APIs to fetch all the data needed for the Quran,Prayers, and Duas dynamically",
    },
    {
      challenge: "Geolocation-Based Prayer Times",
      solution:
        "Calculating accurate Salah times across different time zones and locations using geolocation API and a function to determine time difference",
    },
    {
      challenge: "Responsive Design",
      solution:
        "Optimize the UI and UX expirience across multiple screen sizes.",
    },
    {
      challenge: "Audio Player for each verse",
      solution:
        "Synchronizing Quran recitation audio with highlighted Arabic text and using audio methods",
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
      score: 100,
      implementation:
        "Use the correct HTML tags for each element, optimize images, and made website responsive",
    },
    {
      metric: "SEO",
      score: 91,
      implementation:
        "Use proper HTML elements and include alt labels for images",
    },
  ],

  // Lessons Learned
  lessonsLearned:
    "By creating this site, I learned the proper workflow of developing a useable app, and in the process learnt about React Hooks, API handling in ReactJS, performance and accesbility optimizations, and core problem solving to debug issues.",
};

// Export default for easy importing
export default islamicFoundationsData;
